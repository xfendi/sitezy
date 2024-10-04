import React from "react";
import Dashboard from "../../Assets/dashboard.png";
import Profile from "../../Assets/profile.jpg";

import {
  LuMousePointerClick,
  LuMonitorSmartphone,
  LuPaintbrush,
  LuPlug,
  LuText,
  LuShoppingCart,
  LuCheck,
} from "react-icons/lu";
import { FaStar } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section
        className="section landing"
        data-aos="fade-up"
        data-aos-easing="ease-out-back"
        data-aos-delay="200"
      >
        <div className="landing__text">
          <div className="landing__tag">Build Websites Fast!</div>
          <div className="section__title">Build Websites Fast with Sitezy!</div>
          <div className="section__description">
            Effortlessly create professional websites and online stores with our
            user-friendly platform. No coding required, just drag, drop, and
            launch!
          </div>
        </div>
        <div className="section__buttons">
          <a href="/auth/signup" className="btn-primary">
            Get Started
          </a>
          <a href="/about" className="btn-light">
            How it Works
          </a>
        </div>
      </section>
      <section className="section features" id="features">
        <div
          className="section__top"
          data-aos="fade-up"
          data-aos-easing="ease-out-back"
          data-aos-delay="100"
        >
          <div className="section__tag">Features</div>
          <div className="section__title">
            Powerful Features to Build <br />
            Your Dream Website
          </div>
          <div className="section__description">
            Explore a wide range of tools designed to make website building
            easy, fast, and fun.
          </div>
        </div>
        <div className="section__main features__container">
          <div
            className="features__feature"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="200"
          >
            <div className="feature__icon">
              <LuMousePointerClick size={33} />
            </div>
            <div className="feature__title">Example Themplate Name</div>
            <div className="feature__description">
              Effortlessly design your website with our intuitive drag-and-drop
              editor. No coding required!
            </div>
          </div>

          <div
            className="features__feature"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="300"
          >
            <div className="feature__icon">
              <LuMonitorSmartphone size={33} />
            </div>
            <div className="feature__title">Responsive Templates</div>
            <div className="feature__description">
              Choose from a variety of professionally designed, mobile-friendly
              templates that look great on any device.
            </div>
          </div>

          <div
            className="features__feature"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="400"
          >
            <div className="feature__icon">
              <LuPaintbrush size={33} />
            </div>
            <div className="feature__title">Customizable Widgets</div>
            <div className="feature__description">
              Add and personalize widgets such as contact forms, galleries, and
              social media feeds to enhance your site’s functionality.
            </div>
          </div>

          <div
            className="features__feature"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="500"
          >
            <div className="feature__icon">
              <LuPlug size={33} />
            </div>
            <div className="feature__title">Seamless Integration</div>
            <div className="feature__description">
              EConnect your site with popular tools and services, including
              payment gateways, email marketing platforms, and analytics tools.
            </div>
          </div>

          <div
            className="features__feature"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="600"
          >
            <div className="feature__icon">
              <LuText size={33} />
            </div>
            <div className="feature__title">SEO Optimization Tools</div>
            <div className="feature__description">
              Ensure your website ranks higher on search engines with built-in
              SEO features, from meta tags to keyword optimization.
            </div>
          </div>

          <div
            className="features__feature"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="700"
          >
            <div className="feature__icon">
              <LuShoppingCart size={33} />
            </div>
            <div className="feature__title">E-commerce Ready</div>
            <div className="feature__description">
              Easily set up and manage an online store with integrated payment
              gateways, product pages, and inventory management tools.
            </div>
          </div>
        </div>
      </section>
      <section className="section templates" id="templates">
        <div
          className="section__top"
          data-aos="fade-up"
          data-aos-easing="ease-out-back"
          data-aos-delay="100"
        >
          <div className="section__tag">Templates</div>
          <div className="section__title">Choose Your Perfect Template</div>
        </div>
        <div className="section__main templates__container">
          <div
            className="features__feature"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="200"
          >
            <div className="template__image">
              <img src={Dashboard} alt="" />
            </div>
            <div className="feature__title">Example Themplate Name</div>
            <div className="feature__description">
              Effortlessly design your website with our intuitive drag-and-drop
              editor. No coding required!
            </div>
          </div>

          <div
            className="features__feature"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="300"
          >
            <div className="template__image">
              <img src={Dashboard} alt="" />
            </div>
            <div className="feature__title">Example Themplate Name</div>
            <div className="feature__description">
              Effortlessly design your website with our intuitive drag-and-drop
              editor. No coding required!
            </div>
          </div>

          <div
            className="features__feature"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="400"
          >
            <div className="template__image">
              <img src={Dashboard} alt="" />
            </div>
            <div className="feature__title">Example Themplate Name</div>
            <div className="feature__description">
              Effortlessly design your website with our intuitive drag-and-drop
              editor. No coding required!
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
      </section>
      <section className="section pricing" id="pricing">
        <div
          className="section__top"
          data-aos="fade-up"
          data-aos-easing="ease-out-back"
          data-aos-delay="100"
        >
          <div className="landing__tag">Choose the Perfect Plan</div>
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
              <h1>FREE</h1>
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
              <span>per month</span>
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
              <span>per month</span>
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
          <div className="section__tag">Customers</div>
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
            <div className="customer__stars">
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
            </div>
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
            <div className="customer__stars">
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
            </div>
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
            <div className="customer__stars">
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
            </div>
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
            <div className="customer__stars">
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
            </div>
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
            <div className="customer__stars">
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
            </div>
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
            <div className="customer__stars">
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
            </div>
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
          Join thousands of creators building stunning websites with ease. Get
          started today and watch your business grow!
        </div>
        <div className="section__buttons">
          <a href="/auth/signup" className="btn-primary">
            Get Started
          </a>
          <a href="/about" className="btn-light">
            How it Works
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
