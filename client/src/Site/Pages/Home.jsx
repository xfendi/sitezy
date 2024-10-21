import React from "react";
import Profile from "../../Assets/male1.png";

import {
  LuMousePointerClick,
  LuMonitorSmartphone,
  LuText,
  LuShoppingCart,
  LuCheck,
} from "react-icons/lu";

import PanelTest from "../../Assets/panel-test.png";

const Home = () => {
  return (
    <>
      <section
        className="section landing rounded-3xl"
        data-aos="fade-up"
        data-aos-easing="ease-out-back"
        data-aos-delay="200"
      >
        <div className="landing__top">
          {/*<div className="landing__tag">Build your Dream Website</div>*/}
          <div className="section__title landing__title">
            <span className="text-yellow-400">Create</span> Your{" "}
            <span className="text-pink-400">Perfect</span> Website with a
            Personalized <span className="text-blue-400">Builder</span> Tailored
            Just <span className="text-green-400">for You</span>
          </div>
          <div className="section__description">
            Effortlessly create professional websites and online stores with our{" "}
            <br />
            user-friendly platform. No coding required, just drag, drop, and{" "}
            <br />
            launch!
          </div>
          <div className="section__buttons">
            <a href="/auth/signup" className="btn-dark">
              Get Started For Free Now
            </a>
          </div>
        </div>
        <div className="landing__image">
          <img src={PanelTest} alt="panel" className="rounded-3xl" />
        </div>
      </section>
      <section className="section features" id="features">
        <div
          className="section__top"
          data-aos="fade-up"
          data-aos-easing="ease-out-back"
          data-aos-delay="100"
        >
          <div className="section__title">
            Powerful Features to Build <br />
            Your Dream Website
          </div>
          <div className="section__description">
            All the Tools and Flexibility You Need to Design, Customize, and{" "}
            <br />
            Launch Your Perfect Website Without Any Hassle
          </div>
        </div>
        <div className="section__main features__container">
          <div
            className="features__feature-container"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="200"
          >
            <div className="features__feature">
              <div className="feature__icon bg-yellow-200">
                <LuMousePointerClick size={33} />
              </div>
              <div className="feature__title">Drag And Drop</div>
              <div className="feature__description">
                Easily design your website by dragging and dropping elements, no
                coding skills needed.
              </div>
            </div>
          </div>

          <div
            className="features__feature-containe"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="300"
          >
            <div className="features__feature">
              <div className="feature__icon bg-pink-200">
                <LuMonitorSmartphone size={33} />
              </div>
              <div className="feature__title">Responsive Templates</div>
              <div className="feature__description">
                Choose from templates that automatically adjust to any screen
                size, ensuring a seamless mobile experience.
              </div>
            </div>
          </div>

          <div
            className="features__feature-container"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="400"
          >
            <div className="features__feature">
              <div className="feature__icon bg-blue-200">
                <LuShoppingCart size={33} />
              </div>
              <div className="feature__title">E-commerce Ready</div>
              <div className="feature__description">
                Launch your online store with ease, complete with product
                management, secure payments, and order tracking.
              </div>
            </div>
          </div>

          <div
            className="features__feature-container"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="500"
          >
            <div className="features__feature">
              <div className="feature__icon bg-green-200">
                <LuText size={33} />
              </div>
              <div className="feature__title">SEO Optimization Tools</div>
              <div className="feature__description">
                Improve your site's visibility on search engines with built-in
                tools designed for SEO best practices.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<section className="section templates" id="templates">
        <div
          className="section__top"
          data-aos="fade-up"
          data-aos-easing="ease-out-back"
          data-aos-delay="100"
        >
          <div className="section__title">Choose Your Perfect Template</div>
        </div>
        <div className="section__main templates__container">
          <div
            className="features__feature-container"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="200"
          >
            <div className="features__feature template">
              <div className="template__image">
                <img src={Dashboard} alt="" />
              </div>
              <div className="feature__title">Example Themplate Name</div>
            </div>
          </div>

          <div
            className="features__feature-container"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="300"
          >
            <div className="features__feature template">
              <div className="template__image">
                <img src={Dashboard} alt="" />
              </div>
              <div className="feature__title">Example Themplate Name</div>
            </div>
          </div>

          <div
            className="features__feature-container"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="400"
          >
            <div className="features__feature template">
              <div className="template__image">
                <img src={Dashboard} alt="" />
              </div>
              <div className="feature__title">Example Themplate Name</div>
            </div>
          </div>
        </div>
        <div
          className="section__bottom"
          data-aos="fade-up"
          data-aos-easing="ease-out-back"
          data-aos-delay="300"
        >
          <div className="section__description">
            Professionally designed templates tailored to your needs—whether
            you're building a store, blog, or portfolio.
          </div>
          <div className="section__buttons">
            <a href="/templates" className="btn-dark">
              See All Templates
            </a>
          </div>
        </div>
      </section>*/}
      <section className="section pricing" id="pricing">
        <div
          className="section__top"
          data-aos="fade-up"
          data-aos-easing="ease-out-back"
          data-aos-delay="100"
        >
          <div className="section__title">
            Choose the Perfect Plan for Your Needs
          </div>
          <div className="section__description">
            Flexible pricing tailored to help you grow with the tools you need.
            No hidden fees, no surprises.
          </div>
        </div>
        <div className="section__main pricing__container">
          <div
            className="pricing__plan"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="200"
          >
            <div className="pricing__plan-name">Free</div>
            <div className="pricing__plan-price">
              <h1>Free</h1>
            </div>
            <div className="pricing__plan-description">
              Perfect for getting started!
            </div>
            <ul className="pricing__plan-features">
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                1 Website
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Access to 5 Templates
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Basic Email Support
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Monthly Feature Updates
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Basic SEO Tools
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Standard Analytics Dashboard
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Basic Customization Options
              </li>
            </ul>
            <div className="pricing__plan-button">
              <button href="/auth/signup" className="btn-light">
                Get Started
              </button>
            </div>
          </div>

          <div
            className="pricing__plan pricing__plan__middle"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="300"
          >
            <div className="pricing__plan-name">Pro</div>
            <div className="pricing__plan-price">
              <h1>$15</h1>
              <span>/month</span>
            </div>
            <div className="pricing__plan-description">
              Ideal for Growing businesses that need more features and support.
            </div>
            <ul className="pricing__plan-features">
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Access to 25+ templates
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Priority email support
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Weekly feature updates
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Advanced SEO tools
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Advanced analytics dashboard
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Custom domain support
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Full customization options
              </li>
            </ul>
            <div className="pricing__plan-button">
              <button href="/auth/signup" className="btn-dark">
                Get Started
              </button>
            </div>
          </div>

          <div
            className="pricing__plan"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="400"
          >
            <div className="pricing__plan-name">Business</div>
            <div className="pricing__plan-price">
              <h1>$35</h1>
              <span>/month</span>
            </div>
            <div className="pricing__plan-description">
              Ideal for Established businesses requiring extensive resources and
              premium support.
            </div>
            <ul className="pricing__plan-features">
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Access to 50+ premium templates
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                VIP priority support
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Real-time feature updates
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Full SEO suite
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Comprehensive analytics
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                E-commerce integration
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Team collaboration
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Full design customization
              </li>
              <li>
                <div className="icon-circle">
                  <LuCheck size={15} />
                </div>{" "}
                Custom performance optimization
              </li>
            </ul>
            <div className="pricing__plan-button">
              <button href="/auth/signup" className="btn-light">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="section customers" id="customers">
        <div
          className="section__top"
          data-aos="fade-up"
          data-aos-easing="ease-out-back"
          data-aos-delay="100"
        >
          <div className="section__title">
            See What Our Customers <br />
            Are Saying
          </div>
          <div className="section__description">
            Here's what some of our customers say about our platform.
          </div>
        </div>
        <div className="section__main customers__container">
          <div
            className="customers__customer"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="200"
          >
            <div className="customer__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <div className="customer__profile">
              <div className="customer__profile-image">
                <img src={Profile} alt="" />
              </div>
              <div className="customer__profile-text">
                <div className="customer__profile-text-name">
                  Filip Zieliński
                </div>
                <div className="customer__profile-text-name-description">
                  Mieszkaniec rowu
                </div>
              </div>
            </div>
          </div>
          <div
            className="customers__customer"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="300"
          >
            <div className="customer__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <div className="customer__profile">
              <div className="customer__profile-image">
                <img src={Profile} alt="" />
              </div>
              <div className="customer__profile-text">
                <div className="customer__profile-text-name">
                  Filip Zieliński
                </div>
                <div className="customer__profile-text-name-description">
                  Mieszkaniec rowu
                </div>
              </div>
            </div>
          </div>
          <div
            className="customers__customer"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="400"
          >
            <div className="customer__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <div className="customer__profile">
              <div className="customer__profile-image">
                <img src={Profile} alt="" />
              </div>
              <div className="customer__profile-text">
                <div className="customer__profile-text-name">
                  Filip Zieliński
                </div>
                <div className="customer__profile-text-name-description">
                  Mieszkaniec rowu
                </div>
              </div>
            </div>
          </div>
          <div
            className="customers__customer"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="500"
          >
            <div className="customer__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <div className="customer__profile">
              <div className="customer__profile-image">
                <img src={Profile} alt="" />
              </div>
              <div className="customer__profile-text">
                <div className="customer__profile-text-name">
                  Filip Zieliński
                </div>
                <div className="customer__profile-text-name-description">
                  Mieszkaniec rowu
                </div>
              </div>
            </div>
          </div>
          <div
            className="customers__customer"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="600"
          >
            <div className="customer__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <div className="customer__profile">
              <div className="customer__profile-image">
                <img src={Profile} alt="" />
              </div>
              <div className="customer__profile-text">
                <div className="customer__profile-text-name">
                  Filip Zieliński
                </div>
                <div className="customer__profile-text-name-description">
                  Mieszkaniec rowu
                </div>
              </div>
            </div>
          </div>
          <div
            className="customers__customer"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="700"
          >
            <div className="customer__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <div className="customer__profile">
              <div className="customer__profile-image">
                <img src={Profile} alt="" />
              </div>
              <div className="customer__profile-text">
                <div className="customer__profile-text-name">
                  Filip Zieliński
                </div>
                <div className="customer__profile-text-name-description">
                  Mieszkaniec rowu
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section hero"
        data-aos="fade-up"
        data-aos-easing="ease-out-back"
        data-aos-delay="100"
      >
        <div className="section__title">
          Ready to Take Your Business to the <br />
          Next Level?
        </div>
        <div className="section__description">
          Join thousands of creators building stunning websites with ease.{" "}
          <br />
          Get started today and watch your business grow!
        </div>
        <div className="section__buttons">
          <a href="/auth/signup" className="btn-dark">
            Get Started For Free Now
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
