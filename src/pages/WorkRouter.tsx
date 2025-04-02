import { useParams } from "react-router-dom";
import React from "react";

// Importamos todos los posibles componentes manualmente
import Juego from "../content/works/juego";
import PortfolioSite from "../content/works/portfolio-site";
import TiendaEcommerce from "../content/works/tienda-ecommerce"; // <- Faltaba este import

// Mapa de slugs a componentes
const COMPONENTS: Record<string, React.FC> = {
  "juego": Juego,
  "portfolio-site": PortfolioSite,
  "tienda-ecommerce": TiendaEcommerce, // <- Faltaba este entry
};

const WorkRouter: React.FC = () => {
  const { slug } = useParams();
  const Component = slug ? COMPONENTS[slug] : null;

  if (!Component) return <p style={{ padding: "2rem" }}>⚠️ Work not found</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <Component />
    </div>
  );
};

export default WorkRouter;
