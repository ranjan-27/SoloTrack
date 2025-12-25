import React, { useState } from "react";
import "./Tips.css";

const Tips = () => {
  const localTips = [
    "Revise aptitude daily 🧮",
    "Research company before interview 🔍", 
    "Keep resume updated 📄",
    "Practice coding problems 💻",
    "Prepare answers using STAR method ⭐",
    "Mock interviews boost confidence 🎤",
    "Stay aware of deadlines ⏰",
    "Network on LinkedIn 🤝",
    "Highlight projects with measurable impact 📊"
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const nextTip = () => {
    if (index < localTips.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0); // loop back to start
    }
  };

  return (
    <div className="tips-container">
      <div className="tips-icon" onClick={() => setOpen(!open)}>
        💡
      </div>

      {open && (
        <div className="tips-dropdown">
          <div className="tips-header">
            <h4>Placement Tips</h4>
            <button className="close-btn" onClick={() => setOpen(false)}>×</button>
          </div>
          <p>{localTips[index]}</p>
          <button className="next-btn" onClick={nextTip}>
            Next ➡️
          </button>
        </div>
      )}
    </div>
  );
};

export default Tips;
