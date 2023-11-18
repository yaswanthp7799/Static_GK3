import React, { useState, useEffect } from 'react';
import questionsData from './questions.json'; // Import your JSON file

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(Array(questions.length).fill(false));
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [showResults, setShowResults] = useState(false);
  const [marks, setMarks] = useState(0);
  const maxMarks = questions.length;

  const shuffleOptions = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setQuestions(questionsData.map((question) => ({ ...question, options: shuffleOptions(question.options) })));
  }, []);

  const handleAnswerClick = (selectedAnswer) => {
    const newAnswered = [...answered];
    newAnswered[currentQuestionIndex] = true;
    setAnswered(newAnswered);

    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        newScore += 1;
      } else {
        newScore -= 0.25;
      }
    });
    setScore(newScore);
    setMarks(newScore);
    setShowResults(true);
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (showResults) {
    return (
      <div className="quiz-container">
        <h1>Quiz App</h1>
        <div className="results">
          <p>Marks Scored: {marks}</p>
          <p>Total Marks: {maxMarks}</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="main-content">
        <h1>Quiz App</h1>
        <div className="question">
          <h2>{currentQuestion.question}</h2>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={answered[currentQuestionIndex] ? (option === currentQuestion.correctAnswer ? 'correct' : 'incorrect') : ''}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
        <div className="pagination">
          {questions.map((_, index) => (
            <button key={index} onClick={() => handleQuestionClick(index)} className={currentQuestionIndex === index ? 'active' : ''}>
              {index + 1}
            </button>
          ))}
        </div>
        <button disabled={!answered[currentQuestionIndex]} onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
          Next Question
        </button>
        {currentQuestionIndex === questions.length - 1 && (
          <button onClick={handleSubmit} disabled={!answered.every((ans) => ans)}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
