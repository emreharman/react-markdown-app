import React from "react";

const Text = ({ text, setText }) => {
  return (
    <div className="text-section">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Text;
