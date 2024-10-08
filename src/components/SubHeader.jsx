import React from "react";

const SubHeader = ({ title, image, childeren }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-bg">
          <img src={image} alt="Header Background Image" />
        </div>
        <div className="header__content">
          <h2>{title}</h2>
          <p>{childeren}</p>
        </div>
      </div>
    </header>
  );
};

export default SubHeader;
