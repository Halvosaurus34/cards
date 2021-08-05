import React from "react";
import "./Deck.css";
const Deck = () => {
  return (
    <div className="deckRoot">
      <div className="deck"></div>
      <div className="playPile">
        <div className="topLeftNum">3</div>
        <div className="symbol">4</div>
        <div className="bottomRightNum">5</div>
      </div>
    </div>
  );
};

export default Deck;
