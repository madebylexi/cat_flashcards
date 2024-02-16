/*CardSet.jsx*/
import React, { useState } from 'react';
import Flashcard from './Flashcard'; // Corrected path
import '../App.css'; // Import the CSS file


const CardSet = () => {
    const cards = [
      { question: { text: 'Cat breed Flashcards' }, answer: { text: '' } },
      { question: { text: 'What cat breed is this?', image: '/cat images/americanshorthair.png' }, answer: { text: 'American Shorthair' } },
      { question: { text: 'What cat breed is this?', image: '/cat images/bengal.png' }, answer: { text: 'Bengal' } },
      { question: { text: 'What cat breed is this?', image: '/cat images/bombay.png' }, answer: { text: 'Bombay' } },
      { question: { text: 'What cat breed is this?', image: '/cat images/chartreux.png' }, answer: { text: 'Chartreux' } },
      { question: { text: 'What cat breed is this?', image: '/cat images/korat.png' }, answer: { text: 'Korat' } },
      { question: { text: 'What cat breed is this?', image: '/cat images/mainecoon.png' }, answer: { text: 'Maine Coon' } },
      { question: { text: 'What cat breed is this?', image: '/cat images/egyptianmau.png' }, answer: { text: 'Egyptian Mau' } },
      { question: { text: 'What cat breed is this?', image: '/cat images/manx.png' }, answer: { text: 'Manx' } },
      { question: { text: 'What cat breed is this?', image: '/cat images/persian.png' }, answer: { text: 'Persian' } },
      { question: { text: 'What cat breed is this?', image: '/cat images/ragdoll.png' }, answer: { text: 'Ragdoll' } },
      { question: { text: 'What cat breed is this?', image: '/cat images/savannahcat.png' }, answer: { text: 'Savannah Cat' } },
      { question: { text: 'What cat breed is this?', image: '/cat images/scottishfold.png' }, answer: { text: 'Scottish Fold' } },
      { question: { text: 'What cat breed is this?', image: '/cat images/siberiancat.png' }, answer: { text: 'Siberian Cat' } },
      { question: { text: 'What cat breed is this?', image: '/cat images/sphynx.png' }, answer: { text: 'Sphynx' } },
      { question: { text: 'What cat breed is this?', image: '/cat images/ragdoll.png' }, answer: { text: 'Ragdoll' } },
      { question: { text: 'What cat breed is this?', image: '/cat images/thaisiamese.png' }, answer: { text: 'Thai Siamese' } }
    ];
  
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [guess, setGuess] = useState('');
    const [isCorrect, setIsCorrect] = useState(null); // New state for whether the guess is correct
    const [currentStreak, setCurrentStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);

    const handleNext = () => {
      if (currentCardIndex < cards.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
      }
    };
  
    const handlePrevious = () => {
      if (currentCardIndex > 0) {
        setCurrentCardIndex(currentCardIndex - 1);
      }
    };
  
    const handleSubmit = () => {
        const correct = guess.toLowerCase() === cards[currentCardIndex].answer.text.toLowerCase();
        setIsCorrect(correct);
      
        if (correct) {
          setCurrentStreak(currentStreak + 1);
          if (currentStreak + 1 > longestStreak) {
            setLongestStreak(currentStreak + 1);
          }
        } else {
          setCurrentStreak(0);
        }
      
        setGuess(''); // Clear the guess
      };
   
  
//shffleCards function
    const shuffleCards = () => {
      const shuffledCards = cards.slice(); // Create a copy of the cards array
      for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
        [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]]; // Swap the elements at the two indices
      }
      setCurrentCardIndex(Math.floor(Math.random() * cards.length));
    };
    
      
      
    return (
        <div className="card-set">
          <Flashcard
            question={cards[currentCardIndex].question}
            answer={cards[currentCardIndex].answer}
            cardIndex={currentCardIndex}
        
          />
           <div className="streaks-container">
            <p>Number of cards: {cards.length}</p>
            <p>Current streak: {currentStreak}</p>
            <p>Longest streak: {longestStreak}</p>
         

          </div>



          <div className="input-wrapper">
            <div className="input-container"> {/* New container for the input field and the submit button */}
              <input
                value={guess}
                onChange={e => setGuess(e.target.value)}
                className={`guess-input ${isCorrect === true ? 'correct' : isCorrect === false ? 'incorrect' : ''}`} // Apply different styles based on whether the guess is correct
              />
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={shuffleCards} className="shuffle">🔀</button> {/* New shuffle button */}
            </div>
          </div>
          <div className="buttons-container">
            <button onClick={handlePrevious} disabled={currentCardIndex === 0}>
              Previous
            </button>
            <button onClick={handleNext} disabled={currentCardIndex === cards.length - 1}>
              Next
            </button>
          </div>
        </div>
      );
    };
    
    export default CardSet;