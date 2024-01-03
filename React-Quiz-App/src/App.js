import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  // Array of questions with their options and correct answers

  const questions = [
        // Question 1

    {
      text: "What year did Christopher Columbus first reach the Americas?",
      options: [
        { id: 0, text: "1456", isCorrect: false },
        { id: 1, text: "1605", isCorrect: false },
        { id: 2, text: "1520", isCorrect: false },
        { id: 3, text: "1492", isCorrect: true },
      ],
    },
        // Question 2

    {
      text: "In which year did World War I begin?",
      options: [
        { id: 0, text: "1914", isCorrect: true },
        { id: 1, text: "1920", isCorrect: false },
        { id: 2, text: "1905", isCorrect: false },
        { id: 3, text: "1888 ", isCorrect: false },
      ],
    },
        // Question 3

    {
      text: "	Who was the first President of the United States?   ",
      options: [
        { id: 0, text: "George Washington ", isCorrect: true },
        { id: 1, text: "John Adams", isCorrect: false },
        { id: 2, text: " Abraham Lincoln", isCorrect: false },
        { id: 3, text: "James Madison", isCorrect: false },
      ],
    },
        // Question 4

    {
      text: "What ancient civilization built the pyramids in Egypt?    ",
      options: [
        { id: 0, text: "Roman", isCorrect: false },
        { id: 1, text: "Egyptian", isCorrect: true },
        { id: 2, text: " Greek", isCorrect: false },
        { id: 3, text: "Mesopotamian", isCorrect: false },
      ],
    },
        // Question 5

    {
      text: "When did the Industrial Revolution begin?      ",
      options: [
        { id: 0, text: " 18th century", isCorrect: false },
        { id: 1, text: "19th century", isCorrect: true },
        { id: 2, text: "17th century", isCorrect: true },
        { id: 3, text: "20th century", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score if the answer is correct
    if (isCorrect) {
      setScore(score + 1);
    }
    // Move to the next question or show results if it's the last question

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  // Resets the game back to default
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  // JSX

  return (

    <div className="App">
    <div className="app-container">
   {/* ... rest of your component */}
      
   </div>

      {/* 1. Header  */}
      <h1>HistoriQuiz Adventure</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) *100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart Quiz</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
