require("dotenv").config();
const admin = require("firebase-admin");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const moment = require("moment");

const port = 5000;

var serviceAccount = require("./serviceAccountKey.json");

app.use(express.json());
app.use(bodyParser.json());

const [proMonth, businessMonth, proYear, businessYear] = [
  "price_1Q1E3ZLfGhLqHCXO8utJDP5Y",
  "price_1Q1RzLLfGhLqHCXO20D1or0T",
  "price_1Q1RrULfGhLqHCXOrrnYfBDZ",
  "price_1Q1RzhLfGhLqHCXO6p6Fq6w5",
];

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://yolo-sitezy-default-rtdb.europe-west1.firebasedatabase.app",
});

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_APIKEY);

const stripeSession = async (plan) => {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: plan,
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/company/setup/plan/success",
      cancel_url: "http://localhost:3000/company/setup/plan/success",
    });
    return session;
  } catch (e) {
    return e;
  }
};

app.post("/api/v1/create-subscription-checkout-session", async (req, res) => {
  const { plan, customer } = req.body;
  let planId = null;
  if (plan == 15) planId = proMonth;
  else if (plan == 35) planId = businessMonth;
  else if (plan == 150) planId = proYear;
  else if (plan == 350) planId = businessYear;

  try {
    const session = await stripeSession(planId);
    const user = await admin.auth().getUser(customer);

    await admin
      .database()
      .ref("companies")
      .child(user.uid)
      .update({
        subscription: {
          sessionId: session.id,
        },
      });
    return res.json({ session });
  } catch (e) {
    res.send(e);
    console.error(e);
  }
});

app.post("/api/v1/payment-success", async (req, res) => {
  console.log(req.body);
  const { sessionId, firebaseId } = req.body;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      const subscriptionId = session.subscription;
      try {
        const subscription = await stripe.subscriptions.retrieve(
          subscriptionId
        );
        const user = await admin.auth().getUser(firebaseId);
        const planId = subscription.plan.id;
        let planType = "";
        let planName = "";
        if (subscription.plan.amount == 1500) {
          planName = "Pro";
          planType = "month";
        } else if (subscription.plan.amount == 3500) {
          planName = "Business";
          planType = "month";
        } else if (subscription.plan.amount == 15000) {
          planName = "Pro";
          planType = "Year";
        } else if (subscription.plan.amount == 35000) {
          planName = "Business"
          planType = "Year";
        }
        const startDate = moment
          .unix(subscription.current_period_start)
          .format("DD-MM-YYYY");
        const endDate = moment
          .unix(subscription.current_period_end)
          .format("DD-MM-YYYY");
        const durationInSeconds =
          subscription.current_period_end - subscription.current_period_start;
        const durationInDays = moment
          .duration(durationInSeconds, "seconds")
          .asDays();
        await admin
          .database()
          .ref("companies")
          .child(user.uid)
          .update({
            subscription: {
              sessionId: null,
              planId: planId,
              planType: planType,
              planName: planName,
              planStartDate: startDate,
              planEndDate: endDate,
              planDuration: durationInDays,
            },
          });
        console.log("Subscription updated");
      } catch (error) {
        console.log("Error retrieving subscription:", error);
      }
      console.log("Payment successful");
      return res.json({ message: "Payment successful" });
    } else {
      return res.json({ message: "Payment failed" });
    }
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
