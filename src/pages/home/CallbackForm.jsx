import React from "react";
import { useState } from "react";
import "./callback-form.css";

const CallbackForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit} className="form__callback">
      <label>
        Your name
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
          autoFocus
          required
        />
      </label>

      <label>
        Your email
        <input
          type="text"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Subject
        <input
          type="text"
          name="subject"
          value={inputs.subject || ""}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Your message
        <textarea
          type="text"
          name="message"
          value={inputs.message || ""}
          onChange={handleChange}
          rows="15"
          cols="50"
          placeholder="Write your query here"
          required
        />
      </label>

      <button type="submit" className="btn">
        Send
      </button>
    </form>
  );
};

export default CallbackForm;
