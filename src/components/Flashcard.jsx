// Flashcard.jsx
import React, { useState, useEffect } from 'react';
import '../App.css';

const Flashcard = ({ question, answer, cardIndex }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [cardIndex]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard" onClick={handleFlip}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-content front">
          <div className="question">{question.text}</div>
          {question.image && (
            <div className="image-container">
              <img src={question.image} alt={question.text} />
            </div>
          )}
        </div>
        <div className="card-content back">
          <div className="answer">{answer.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
