import React, { useState } from "react";

const EmailForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(email);
      }}
      className="card shadow p-4 m-auto rounded-4 border-0 profile-form-card"
    >
      <h4 className="mb-3 fw-bold text-center profile-form-title">
        Enter your email address
      </h4>
      <input
        type="email"
        className="form-control mb-3 border-primary profile-form-input"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        className="btn btn-primary w-100 profile-form-btn-primary"
      >
        Continue
      </button>
    </form>
  );
};

export default EmailForm;
