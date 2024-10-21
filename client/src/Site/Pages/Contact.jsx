import React from "react";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
      <div
        className="section__top"
        data-aos="fade-up"
        data-aos-easing="ease-out-back"
        data-aos-delay="200"
      >
        <div className="section__title">Contact our team</div>
        <div className="section__description">
          We'd love to hear from you! Fill out the form below and we'll get back
          to you soon.
        </div>
      </div>
      <div className="section__main m-0 contact__container">
        <form
          className="form contact__form"
          action=""
          data-aos="fade-up"
          data-aos-easing="ease-out-back"
          data-aos-delay="300"
        >
          <div className="contact__form-name">
            <div className="contact__form__input-box">
              <label htmlFor="fname">First Name</label>
              <input
                type="fname"
                name="fname"
                id="fname"
                placeholder="First Name"
                required
              />
            </div>
            <div className="contact__form__input-box">
              <label htmlFor="lname">Last Name</label>
              <input
                type="lname"
                name="lname"
                id="lname"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="contact__form__input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="contact__form__input-box">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              placeholder="Leave us a message ..."
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-dark">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
