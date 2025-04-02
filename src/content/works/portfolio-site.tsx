import React from "react";

const PortfolioSite: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Portfolio para diseñador UX</h1>
      <p>
        Este sitio lo diseñé para un cliente que necesitaba presentar sus trabajos de diseño de forma clara y estética.
        Usé React con SCSS para mantener modularidad en los componentes y asegurar una experiencia mobile-first.
      </p>
      <p>
        Se implementaron animaciones suaves con CSS y una navegación tipo SPA para mantener fluidez. El diseño fue
        trabajado en Figma y trasladado cuidadosamente al código final.
      </p>
    </div>
  );
};

export default PortfolioSite;