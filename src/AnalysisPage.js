// AnalysisPage.js
import React from 'react';
import './AnalysisPage.css';

const AnalysisPage = ({ questions, userAnswers }) => {
  const getAnswerStatus = (index) => {
    const question = questions[index];
    const userAnswer = userAnswers[index];
    return {
      isCorrect: userAnswer === question.correctAnswer,
      userAnswer,
      correctAnswer: question.correctAnswer,
    };
  };

  return (
    <div className="analysis-container">
      <h2>Analysis</h2>
      {questions.map((question, index) => {
        const { isCorrect, userAnswer, correctAnswer } = getAnswerStatus(index);
        return (
          <div
            key={index}
            className={`question-analysis ${isCorrect ? 'correct' : 'incorrect'}`}
          >
            <p>{question.question}</p>
            <p className={`user-answer ${isCorrect ? 'correct' : 'incorrect'}`}>
              Your answer: {userAnswer}
            </p>
            {!isCorrect && (
              <p className="correct-answer">Correct answer: {correctAnswer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AnalysisPage;
