import React from "react";

const AIThought = ({ aiThought, onContinue }) => (
  <div className="card shadow p-4 m-auto rounded-4 border-0 text-center mb-4 profile-form-card ai-thought-card text">
    <h4 className="fw-bold mb-3 profile-form-title">System Response</h4>
    <blockquote className="fst-italic mb-3 ai-thought-quote">
      &ldquo;{aiThought}&rdquo;
    </blockquote>
    <button className="btn w-100 ai-thought-btn text" onClick={onContinue}>
      Continue
    </button>
  </div>
);

export default AIThought;
