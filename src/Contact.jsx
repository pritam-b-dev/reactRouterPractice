import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${name} your form has submitted!`);
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name: </label>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="">Email: </label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>

      <div>{(name || email) && <p>you are typing...</p>}</div>
    </div>
  );
};

export default Contact;
