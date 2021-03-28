import React, { useState } from "react";

import QuestoinCart from "./components/QuestionCard";

const App = () => {
  const TOTAL_QUESTIONS = 10;
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const startTrivia = async () => {};
  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>REACT QUIZZ</h1>
      <button onClick={startTrivia}>Start</button>
      <p className="score">Score: </p>
      <p>Loading Questions...</p>
      <QuestoinCart
        questionNr={questionNumber + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[questionNumber].question}
        answers={questions[questionNumber].answers}
        userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
        callback={checkAnswer}
      />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
