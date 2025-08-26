import React, { useState } from "react";

const UsernameForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(username);
      }}
      className="card shadow p-4 m-auto rounded-4 border-0 profile-form-card"
    >
      <h4 className="mb-3 fw-bold text-center profile-form-title text">
        Enter your X username
      </h4>
      <input
        type="text"
        className="form-control mb-3 profile-form-input text"
        placeholder="Enter your username"
        value={username}
        style={{
          width: "100%",
          border: "none",
          outline: "none",
          borderRadius: "12px",
        }}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <button
        type="submit"
        className="btn btn-primary w-100 profile-form-btn-primary text"
        style={{
          border: "none",
          outline: "none",
        }}
      >
        Continue
      </button>
    </form>
  );
};

export default UsernameForm;
