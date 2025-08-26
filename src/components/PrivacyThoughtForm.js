import React, { useState } from "react";

const PrivacyThoughtForm = ({ onSubmit }) => {
  const [thought, setThought] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(thought);
      }}
      className="card shadow p-4 m-auto rounded-4 border-0 profile-form-card"
    >
      <h4 className="mb-3 fw-bold text-center profile-form-title text">
        What do you like most about privacy?
      </h4>
      <textarea
        className="form-control mb-3 border-primary profile-form-input text"
        placeholder="Share your thoughts..."
        value={thought}
        onChange={(e) => setThought(e.target.value)}
        required
        rows={4}
        style={{
          width: "100%",
          border: "none",
          outline: "none",
          borderRadius: "12px",
        }}
      />
      <button
        type="submit"
        className="btn btn-primary w-100 profile-form-btn-primary text"
        style={{
          border: "none",
          outline: "none",
          borderRadius: "12px",
        }}
      >
        Generate Quote
      </button>
    </form>
  );
};

export default PrivacyThoughtForm;
