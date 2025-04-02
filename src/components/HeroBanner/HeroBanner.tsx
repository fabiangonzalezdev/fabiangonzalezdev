// src/components/HeroBanner/HeroBanner.tsx
import React from "react";
import "./HeroBanner.scss";
import Buttons from "../Buttons/Buttons";

const HeroBanner: React.FC = () => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1>👋 Hello I’m Fabian Gonzalez</h1>
        <p>
          Software Engineer expert in AEM, HTML, CSS, JS, PHP, MySQL, ReactJS.
          Passionate about technology and web development 🤓.
        </p>
        <Buttons />
      </div>
    </section>
  );
};

export default HeroBanner;
