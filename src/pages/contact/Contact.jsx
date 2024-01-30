import React from "react";
import "./contact.css";
import ContactForm from "../../components/forms/CallbackForm";

const Contact = () => {
  return (
    <section className="container-max">
      <div className="container contact">
        {/* column 1 contact form */}
        <div className="contact__form">
          <ContactForm />
        </div>

        {/* column 2 contact map */}
        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1772.4375490853647!2d152.9750723367005!3d-27.31709731022315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b93fcfb9d04b6bf%3A0x897d6362e229e2db!2s71%20Kremzow%20Rd%2C%20Brendale%20QLD%204500%2C%20Australia!5e0!3m2!1sen!2sus!4v1706442291128!5m2!1sen!2sus"
            allowfullscreen=""
            aria-hidden="false"
            title="workshop location map"
            tabindex="0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Contact;
