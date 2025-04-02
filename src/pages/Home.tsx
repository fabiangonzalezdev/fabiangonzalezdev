import React, { useEffect, useState } from "react";
import { loadWorksFromJson } from "../utils/loadWorksFromJson";

import { WorkData } from "../types/Work";
import WorkCard from "../components/WorkCard/WorkCard";

const Home: React.FC = () => {
  const [works, setWorks] = useState<WorkData[]>([]);
  useEffect(() => {
    loadWorksFromJson().then(setWorks);
  }, []);

  return (
    <div>
      <section id="works">
        <h2>My Works</h2>
        <div className="works-grid">
  {works.map((work) => (
    <WorkCard key={work.slug} work={work} />
  ))}
</div>
      </section>
    </div>
  );
};

export default Home;
