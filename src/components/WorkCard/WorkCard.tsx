import React from "react";
import { WorkData } from "../../types/Work";
import { Link } from "react-router-dom";
import "./WorkCard.scss";

interface Props {
  work: WorkData;
}

const WorkCard: React.FC<Props> = ({ work }) => {
  return (
    <Link to={`/works/${work.slug}`} className="work-card">
      <img src={work.thumbnail} alt={work.title} />
      <div className="card-content">
        <h3>{work.title}</h3>
        <p className="description">{work.description}</p>
        <div className="tags">
          {work.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
