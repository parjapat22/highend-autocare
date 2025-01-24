import { useState } from "react";
import Button from "../Button";
import styles from "./Form.module.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const isValidMobile = (mobile) => {
    const mobilePattern = /^[0][4]\d{8,8}$/;
    return mobilePattern.test(mobile);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // reset field error upon entering the text
    if (value.trim()) {
      setErrors((errorsData) => ({ ...errorsData, [name]: "" }));
    }

    // name is in array because it's a property name
    setFormData((values) => ({ ...values, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here
      // console.log("Form submitted successfully!");
    } else {
      // console.log("Form submission failed due to validation errors.");
    }

    // reset input fields
  }

  function validateForm(data) {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = "Please enter your name";
    }

    if (!data.email.trim()) {
      errors.email = "Please enter your email";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.mobile.trim()) {
      errors.mobile = "Please enter your mobile";
    } else if (!isValidMobile(data.mobile)) {
      errors.mobile = "Mobile number is invalid";
    }

    if (!data.subject.trim()) {
      errors.subject = "Please enter the subject";
    }

    if (!data.message.trim()) {
      errors.message = "Please write your inquiry message";
    }

    return errors;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.containerForm}>
      <div className={styles.groupFields}>
        <div className={styles.containerField}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && (
            <span className={styles.errorField}>{errors.name}</span>
          )}
        </div>

        <div className={styles.containerField}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <span className={styles.errorField}>{errors.email}</span>
          )}
        </div>
      </div>

      <div className={styles.groupFields}>
        <div className={styles.containerField}>
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="04xx000xxx"
          />

          {errors.mobile && (
            <span className={styles.errorField}>{errors.mobile}</span>
          )}
        </div>

        <div className={styles.containerField}>
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject || ""}
            onChange={handleChange}
          />

          {errors.subject && (
            <span className={styles.errorField}>{errors.subject}</span>
          )}
        </div>
      </div>

      <div className={styles.containerField}>
        <label>Message</label>
        <textarea
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="15"
          cols="50"
          placeholder="Write your message here"
        />

        {errors.message && (
          <span className={styles.errorField}>{errors.message}</span>
        )}
      </div>

      <Button>Send</Button>
    </form>
  );
}

export default Form;
