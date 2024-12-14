import React from "react";
import ReactCardFlip from "react-card-flip";

function FlashCardItem({ isFlipped, handleClick, flashcard}) {
  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" flipSpeedBackToFront={0.3}>
        <div
          className="p-4 bg-primary text-white flex 
        items-center justify-center rounded-lg cursor-pointer shadow-lg
        h-[250px] w-[250px]
        md:h-[350px] md:w-[350px]"
          onClick={handleClick}
        >
          <h2>{flashcard.front}</h2>
        </div>

        <div
          className="p-4 bg-white shadow-lg text-primary flex 
        items-center justify-center rounded-lg cursor-pointer 
        h-[250px] w-[250px]
        md:h-[350px] md:w-[350px]"
          onClick={handleClick}
        >
          <h2>{flashcard.back}</h2>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default FlashCardItem;
