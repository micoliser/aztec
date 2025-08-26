import React, { useState, useEffect } from "react";
import PrivacyBadge from "./PrivacyBadge";

const ProfileCard = ({
  displayName,
  quote,
  pfp,
  onShare,
  username,
  aiThought,
}) => {
  const [flipped, setFlipped] = useState(false);

  // Automatically flip the card every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((f) => !f);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center profile-perspective">
      <div
        className={`profile-flip-card position-relative profile-flip-card-size`}
      >
        <div
          className={`profile-flip-inner profile-flip-card-inner${
            flipped ? " flipped" : ""
          }`}
        >
          {/* Front Side */}
          <div className="profile-flip-front card shadow-lg border-0 text-center p-3">
            <div className="profile-avatar-wrap">
              <img
                src={pfp}
                alt="Profile"
                className="border border-3 border-light shadow profile-avatar-img"
              />
              <div className="profile-avatar-badge">
                <PrivacyBadge size={32} />
              </div>
            </div>
            <h4 className="fw-bold mb-1 profile-displayname">{displayName}</h4>
            <div className="mb-2 small profile-email">
              {displayName ? `${displayName}@aztec.com` : ""}
            </div>
            <blockquote className="fst-italic mb-2 px-2 profile-quote">
              &ldquo;{quote}&rdquo;
            </blockquote>
            {aiThought && (
              <blockquote className="fst-italic mb-3 px-2 profile-ai-thought">
                {aiThought}
              </blockquote>
            )}
            <div className="mt-auto w-100">
              <div className="mb-3 text-center px-2 profile-aztec-member">
                <span className="profile-aztec-name">{displayName}</span>
                <span style={{ color: "#fff", fontWeight: 500, fontSize: 14 }}>
                  {" "}
                  is a proud, real{" "}
                  <span className="profile-aztec-highlight">
                    Aztec Community Member
                  </span>
                  !
                </span>
              </div>
              <button
                type="button"
                className="btn btn-dark btn-sm px-3 fw-bold profile-btn-dark"
                onClick={(e) => {
                  e.stopPropagation();
                  setFlipped(true);
                }}
              >
                View Back
              </button>
            </div>
          </div>
          {/* Back Side */}
          <div className="profile-flip-back card shadow-lg border-0 text-center p-3">
            <div className="mb-3">
              <PrivacyBadge size={48} />
            </div>
            <div
              className="mb-2 fw-bold"
              style={{ fontSize: 18, color: "#b39ddb" }}
            >
              Privacy Tribe Member
            </div>
            <div className="mb-3" style={{ fontSize: 14, color: "#b39ddb" }}>
              Your privacy is your superpower.
              <br />
              Share your card and inspire others!
            </div>
            <button
              type="button"
              className="btn btn-dark btn-sm px-3 fw-bold profile-btn-dark"
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(false);
              }}
            >
              View Front
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm px-3 fw-bold mt-3 profile-btn-primary"
              onClick={(e) => {
                e.stopPropagation();
                onShare();
              }}
            >
              Share Card
            </button>
          </div>
        </div>
      </div>
      {/* Card flip animation styles */}
      <style>{`
        .profile-flip-card {
          perspective: 1200px;
        }
        .profile-flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(.4,2,.6,1);
          transform-style: preserve-3d;
        }
        .profile-flip-inner.flipped {
          transform: rotateY(180deg);
        }
        .profile-flip-front, .profile-flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        .profile-flip-front {
          z-index: 2;
        }
        .profile-flip-back {
          z-index: 3;
        }
        .profile-flip-card:hover .profile-flip-inner {
          box-shadow: 0 12px 32px 0 #6a82fb55;
        }
      `}</style>
    </div>
  );
};

export default ProfileCard;
