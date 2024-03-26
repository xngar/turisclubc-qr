import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/506000/506675-pont-neuf.jpg" />
      <div className="card-top">
        <h2>Playa del Carmén</h2>
        <h3>8 días / 7 noches</h3>
      </div>
      <div className="card-bottom">
        <div></div>
        <p>Precio por persona en base doble desde</p>
        <p>USDT: 1699</p>
        <button>Ir a Descripción</button>
      </div>
    </div>
  );
};

export default Card;
