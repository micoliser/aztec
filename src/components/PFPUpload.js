import React, { useRef, useState } from "react";

const PFPUpload = ({ onUpload }) => {
  const [preview, setPreview] = useState(null);
  const fileInput = useRef();

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        if (onUpload) onUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="card shadow p-4 m-auto rounded-4 border-0 profile-form-card">
      <h2 className="mb-3 fw-bold text-center profile-form-title">
        Upload Your Profile Picture
      </h2>
      <input
        type="file"
        accept="image/*"
        ref={fileInput}
        onChange={handleFile}
        className="form-control mb-3 border-primary profile-form-input"
      />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="d-block mx-auto mt-3 border border-3 border-primary profile-avatar-preview"
        />
      )}
    </div>
  );
};

export default PFPUpload;
