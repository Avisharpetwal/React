import React, { useState } from "react";

function MiniSignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    setFormData({ ...formData, confirmPassword: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("All fields are required");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    alert("Signup Successful!");
  };

  return (
    <div>
      <h2>Signup Form</h2>
      <p style={{ color: "red" }}>{error}</p>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="name">Name:</label><br />
          <input id="name" type="text" placeholder="Enter Name" value={formData.name} onChange={handleNameChange}/>
        </div>
        <br />

        <div>
          <label htmlFor="email">Email:</label><br />
          <input id="email"  type="email" placeholder="Enter Email" value={formData.email} onChange={handleEmailChange} />
        </div>
        <br />

        <div>
          <label htmlFor="password">Password:</label><br />
          <input id="password" type="password" placeholder="Enter Password" value={formData.password} onChange={handlePasswordChange}  />
        </div>
        <br />

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label><br />
          <input id="confirmPassword"  type="password"  placeholder="Confirm Password"  value={formData.confirmPassword}  onChange={handleConfirmPasswordChange} />
        </div>
        <br />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default MiniSignupForm;