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
    origin: "http://localhost:5173",
  })
);

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_APIKEY)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
