import { useState } from "react";
import Button from "../Button";
import styles from "./Form.module.css";

const initialFormData = {
  name: "",
  email: "",
  mobile: "",
  subject: "",
  message: "",
};

function Form() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState(false);

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
      // success message on form submission
      setSuccessMsg(true);
      setTimeout(() => {
        setSuccessMsg(false);
      }, 2000);

      setFormData(initialFormData);
    } else {
      console.log(newErrors);
      console.log("Form submission failed due to validation errors.");
    }
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
    <form
      className={styles.containerForm}
      // action="https://formsubmit.co/2c11cf966689d1ed3226ef0580a00918"
      // method="POST"
      onSubmit={handleSubmit}
    >
      {/* fields group 1 */}
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

      {/* fields group 2 */}
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
            <span className={styles.errorField}>
              {errors.mobile.includes("invalid") ? (
                <p>
                  {errors.mobile}
                  <br />
                  Number should begin <br />
                  with 04 and have 10 digits.
                </p>
              ) : (
                errors.mobile
              )}
            </span>
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
      <Button type="submit">Send</Button>

      {successMsg && (
        <p className={styles.successMsg}>
          Your message has been sent successfully.
        </p>
      )}
    </form>
  );
}

export default Form;
