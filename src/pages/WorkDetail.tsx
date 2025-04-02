import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadWorks } from "../utils/loadWorks";
import { WorkData } from "../types/Work";

const WorkDetail = () => {
  const { slug } = useParams();
  const [work, setWork] = useState<WorkData | null>(null);

  useEffect(() => {
    loadWorks().then((works) => {
      const found = works.find((w) => w.slug === slug);
      setWork(found || null);
    });
  }, [slug]);

  if (!work) return <p>Loading...</p>;

  return (
    <div className="work-detail">
      <img src={work.thumbnail} alt={work.title} />
      <h1>{work.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: work.content }} />
    </div>
  );
};

export default WorkDetail;
