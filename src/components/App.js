import React, { useState } from "react";
import UsernameForm from "./EmailForm";
import PrivacyThoughtForm from "./PrivacyThoughtForm";
import PFPUpload from "./PFPUpload";
import AIThought from "./AIThought";
import AztecProfileCard from "./AztechCard";

const quoteTemplates = [
  "Where privacy thrives, freedom follows.",
  "Privacy is the soul of liberty.",
  "In a private world, ideas bloom.",
  "Freedom thrives where privacy lives.",
  "Privacy: the silent guardian of individuality.",
  "Your thoughts, your world, your privacy.",
  "Privacy is the new wealth.",
  "A private mind is a powerful mind.",
  "Privacy is not a luxury, it’s a right.",
  "Where there is privacy, there is peace.",
];

const aiThoughtTemplates = [
  "Privacy is the canvas where your freedom paints its masterpiece.",
  "A world with privacy is a world with possibility.",
  "Your thoughts are safe havens—privacy keeps them sacred.",
  "In the age of data, privacy is your superpower.",
  "Privacy is the quiet strength behind every bold idea.",
  "When you guard your privacy, you guard your future.",
  "Privacy is the friend of creativity and the enemy of fear.",
  "To value privacy is to value yourself.",
  "Privacy is the digital armor of the wise.",
  "A private mind is a limitless mind.",
  "Privacy is the foundation of trust in a digital world.",
  "With privacy, your story is yours to tell.",
  "Privacy is the right to be yourself, unobserved.",
  "A private space is a safe space for ideas to grow.",
  "Privacy is the oxygen of free expression.",
  "Your privacy is your power—protect it fiercely.",
  "Privacy is the silent architect of innovation.",
  "In privacy, we find the courage to dream.",
  "Privacy is the unsung hero of every revolution.",
  "A world that values privacy values its people.",
  "Privacy is the shield that guards your uniqueness.",
  "The roots of freedom are watered by privacy.",
  "Privacy is the spark that ignites creativity.",
  "Your privacy is your sanctuary in a noisy world.",
  "Privacy is the promise that your voice matters.",
  "A private mind is a fearless mind.",
  "Privacy is the birthplace of new ideas.",
  "With privacy, you are the author of your own story.",
  "Privacy is the light that guides you through the digital age.",
  "To cherish privacy is to cherish possibility.",
  "Privacy is the compass for your digital journey.",
  "Your privacy is your digital fingerprint—unique and irreplaceable.",
  "Privacy is the fortress of your imagination.",
  "A private thought is a seed for tomorrow's change.",
  "Privacy is the melody in the song of freedom.",
  "In privacy, we find the courage to be authentic.",
  "Privacy is the guardian of your digital soul.",
  "A private world is a world of hope.",
  "Privacy is the heartbeat of individuality.",
  "Your privacy is your legacy in the digital age.",
  "Privacy is the wind beneath the wings of innovation.",
  "A private mind is a peaceful mind.",
  "Privacy is the foundation of digital dignity.",
  "With privacy, you are free to explore, create, and become.",
  "Privacy is the gentle whisper that says, 'You matter.'",
  "A private space is a gift to yourself.",
  "Privacy is the guardian of your dreams.",
  "Your privacy is your right—never a privilege.",
  "Privacy is the silent partner in every act of courage.",
  "A private mind is a resilient mind.",
  "Privacy is the key to unlocking your true potential.",
];

function randomizeQuote(userThought) {
  // Optionally, blend userThought into a template
  const idx = Math.floor(Math.random() * quoteTemplates.length);
  if (userThought && Math.random() > 0.5) {
    // Simple remix
    return (
      userThought.split(" ").slice(0, 5).join(" ") + "... Privacy matters!"
    );
  }
  return quoteTemplates[idx];
}

function generateAIThought(userThought) {
  // Optionally, blend userThought into a template
  if (userThought && userThought.length > 10 && Math.random() > 0.3) {
    return `AI: "${
      userThought.charAt(0).toUpperCase() + userThought.slice(1)
    }" is a powerful perspective. Privacy empowers voices like yours.`;
  }
  const idx = Math.floor(Math.random() * aiThoughtTemplates.length);
  return aiThoughtTemplates[idx];
}

function App() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  //eslint-disable-next-line
  const [thought, setThought] = useState("");
  const [quote, setQuote] = useState("");
  const [aiThought, setAIThought] = useState("");
  const [pfp, setPfp] = useState(null);

  // Share logic (Web Share API fallback)
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Privacy Card",
        text: `I'm privacy inclined! "${quote}"`,
        url: window.location.href,
      });
    } else {
      alert(
        "Sharing is not supported in this browser. You can screenshot your card!"
      );
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <h3 className="mb-4 fw-bold text-center p-3 app-header-title text">
        Privacy Tribe Card for the AZTEC Community
      </h3>
      {step === 1 && (
        <UsernameForm
          onSubmit={(username) => {
            setUsername(username);
            setStep(2);
          }}
        />
      )}
      {step === 2 && (
        <PrivacyThoughtForm
          onSubmit={(thought) => {
            setThought(thought);
            setQuote(randomizeQuote(thought));
            setAIThought(generateAIThought(thought));
            setStep(2.5);
          }}
        />
      )}
      {step === 2.5 && (
        <AIThought aiThought={aiThought} onContinue={() => setStep(3)} />
      )}
      {step === 3 && (
        <PFPUpload
          onUpload={(img) => {
            setPfp(img);
            setStep(4);
          }}
        />
      )}
      {step === 4 && (
        <AztecProfileCard
          displayName={username}
          quote={quote}
          pfp={pfp}
          onShare={handleShare}
          email={username ? `${username}@aztec.com` : ""}
          aiThought={aiThought}
        />
      )}
      <footer className="mt-5 text-center app-footer text">
        No data leaves your browser <br />
        100% frontend privacy.
      </footer>
    </div>
  );
}

export default App;
