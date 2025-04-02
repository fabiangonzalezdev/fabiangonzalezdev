import React from "react";
import "./Card.scss";
import { WorkData } from "../../types/Work";
import { Link } from "react-router-dom";

interface Props {
  work: WorkData;
}

const Card: React.FC<Props> = ({ work }) => {
  return (
    <Link to={`/works/${work.slug}`} className="card">
      <img src={work.thumbnail} alt={work.title} />
      <h3>{work.title}</h3>
      <div className="tags">
        {work.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default Card;
