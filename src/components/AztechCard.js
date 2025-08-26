import React, { useState, useEffect } from "react";
import aztecLogo from "../aztec_logo.jpg";
import PrivacyBadge from "./PrivacyBadge";

const AztecProfileCard = ({
  displayName,
  quote,
  pfp,
  username,
  aiThought,
  onShare,
}) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setFlipped((f) => !f), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="aztec-card-outer">
      <div className={`aztec-card-inner${flipped ? " flipped" : ""}`}>
        {/* Front */}
        <div className="aztec-card-face aztec-card-front">
          <div className="aztec-card-border">
            <div className="aztec-card-title">
              AZTEC PRIVACY
              <PrivacyBadge
                size={30}
                style={{ marginLeft: 10, verticalAlign: "middle" }}
              />
            </div>
            <div className="aztec-card-logo-wrap">
              <img
                src={aztecLogo}
                alt="Aztec Logo"
                className="aztec-card-logo"
              />
            </div>
            <div className="aztec-card-quote">
              Privacy should never
              <br />
              be a luxury
            </div>
            <div className="aztec-card-corner-duck"></div>
            <button
              className="aztec-card-flip-btn"
              onClick={() => setFlipped(true)}
            >
              View Back
            </button>
          </div>
        </div>
        {/* Back */}
        <div className="aztec-card-face aztec-card-back">
          <div className="aztec-card-border">
            <div
              className="aztec-card-pfp-wrap"
              style={{ position: "relative" }}
            >
              <img src={pfp} alt="Profile" className="aztec-card-pfp" />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(30%, 30%)",
                }}
              >
                <PrivacyBadge size={35} />
              </div>
            </div>
            <div className="aztec-card-user">{displayName}</div>
            <div className="aztec-card-email">
              {displayName ? `${displayName}@aztec.com` : ""}
            </div>
            <blockquote className="aztec-card-user-quote">
              &ldquo;{quote}&rdquo;
            </blockquote>
            {aiThought && (
              <blockquote className="aztec-card-ai-quote">
                {aiThought}
              </blockquote>
            )}
            <button className="aztec-card-share-btn" onClick={onShare}>
              Share Card
            </button>
            {/* <button
              className="aztec-card-flip-btn"
              onClick={() => setFlipped(false)}
            >
              View Front
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AztecProfileCard;
