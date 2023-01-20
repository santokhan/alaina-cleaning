import React, { useState, useEffect } from "react";

export default function Title({ children }) {
  const text = children;
  const [content, setcontent] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setcontent(text.slice(0, content.length + 1));
    }, 80);
    return () => clearTimeout(timeout);
  }, [content]);

  return (
    <div className="text-4xl lg:text-[68px] leading-normal font-[800] uppercase text-white relative transition-all duration-400 ease-out mt-8 playfair">
      {content}{" "}
      {text.length === content.length ? (
        ""
      ) : (
        <span className="vertical-bar relative"></span>
      )}
    </div>
  );
}
