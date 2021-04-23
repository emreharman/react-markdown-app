import React from "react";
import marked from "marked";

const MarkDown = ({ text }) => {
  return (
    <div
      className="markdown"
      dangerouslySetInnerHTML={{
        __html: marked(text),
      }}
    ></div>
  );
};

export default MarkDown;
