import React from "react";

import Dashboard from "../../Assets/dashboard.png"

const Templates = () => {
  return (
    <section className="section contact" id="contact">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      <div
        className="section__top"
        data-aos="fade-up"
        data-aos-easing="ease-out-back"
        data-aos-delay="200"
      >
        <div className="section__title">Choose Your Perfect Template</div>
        <div className="section__description">
          Professionally designed templates tailored to your needs—whether
          you're building a store, blog, or portfolio.
        </div>
      </div>
      <div className="section__main templates__container">
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

        <div
          className="features__feature"
          data-aos="fade-up"
          data-aos-easing="ease-out-back"
          data-aos-delay="500"
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
          data-aos-delay="600"
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
          data-aos-delay="700"
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
          data-aos-delay="800"
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
    </section>
  );
};

export default Templates;
