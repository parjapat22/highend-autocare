import { useState } from "react";
import Button from "../Button";
import styles from "./Form.module.css";

const Form = () => {
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
    <form onSubmit={handleSubmit} className={styles.containerForm}>
      <label>
        Name *
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
        Mobile *
        <input
          type="text"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email *
        <input
          type="text"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Subject *
        <input
          type="text"
          name="subject"
          value={inputs.subject || ""}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Message *
        <textarea
          type="text"
          name="message"
          value={inputs.message || ""}
          onChange={handleChange}
          rows="15"
          cols="60"
          placeholder="Write your query here"
          required
        />
      </label>

      <Button>Send</Button>
    </form>
  );
};

export default Form;
