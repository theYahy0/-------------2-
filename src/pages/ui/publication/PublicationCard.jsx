import React from "react";
import "./publicationcard.css";
import { Link } from "react-router-dom";
const PublicationCard = ({ title, description, }) => {
  return (
    <div className="publication-card">
      <div className="publication-card__logo">
        <span>ИССЛАМСКАЯ</span>
        <span>АКАДЕМИЯ</span>
      </div>
      <div className="publication-card__content">
        <h2 className="publication-card__title">{title}</h2>
        <p className="publication-card__description">{description}</p>
        {/* <a  href={link} className="">
          
        </a> */}
        <Link className="publication-card__Link" to={'./articlePage'}>Прочитать еще...</Link>
      </div>
    </div>
  );
};

export default PublicationCard;
