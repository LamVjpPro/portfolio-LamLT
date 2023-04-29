import React from "react";
import TypeWriter from "typewriter-effect";

function Type() {
  return (
    <TypeWriter
      className="text-[2.2em] text-[#be6adf] font-semibold"
      options={{
        strings: [
          "Developer",
          "Deep Learning Engineer",
          "MERN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
