
import React, { useState, useEffect } from 'react';
import ModuleSelection from './ModuleSelection';
import AnalysisPage from './AnalysisPage'; // Import the AnalysisPage component
import questionsData from './questions.json';
import './Quiz.css'; // Import CSS file with styles

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [marks, setMarks] = useState(0);
  const [selectedModule, setSelectedModule] = useState(null);
  const [showModuleSelection, setShowModuleSelection] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedModuleName, setSelectedModuleName] = useState('');
  const [showAnalysis, setShowAnalysis] = useState(false);

  const shuffleOptions = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  const shuffleQuestions = (questions) => {
    return questions.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    if (selectedModule) {
      const moduleQuestions = questionsData[selectedModule];
      if (moduleQuestions) {
        const shuffledQuestions = shuffleQuestions(moduleQuestions);
        setQuestions(
          shuffledQuestions.map((question) => ({
            ...question,
            options: shuffleOptions(question.options),
          }))
        );
        setShowModuleSelection(false);
        setAnswered(Array(shuffledQuestions.length).fill(false));
        setUserAnswers(Array(shuffledQuestions.length).fill(''));
        setCurrentQuestionIndex(0);
        setShowResults(false);
        setMarks(0);
        setSelectedModuleName(selectedModule); // Store the selected module name
      }
    }
  }, [selectedModule]);

  const handleModuleSelect = (module) => {
    setSelectedModule(module);
  };

  const handleAnswerClick = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (!answered[currentQuestionIndex]) {
      const newAnswered = [...answered];
      newAnswered[currentQuestionIndex] = true;
      setAnswered(newAnswered);

      setUserAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[currentQuestionIndex] = selectedAnswer;
        return updatedAnswers;
      });

      setSelectedOption(selectedAnswer); // Store the selected option
    } else {
      setUserAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[currentQuestionIndex] = selectedAnswer;
        return updatedAnswers;
      });

      setSelectedOption(selectedAnswer); // Update the last selected option
    }
  };

  const handleSubmit = () => {
    let totalMarks = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].correctAnswer === userAnswers[i]) {
        totalMarks += 1;
      } else if (userAnswers[i] !== '' && questions[i].correctAnswer !== userAnswers[i]) {
        totalMarks -= 0.25; // Deduct 0.25 for each wrong answer
      }
    }
    setMarks(totalMarks > 0 ? totalMarks : 0);
    setShowResults(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(''); // Reset selected option when moving to the next question
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setSelectedOption(''); // Reset selected option when moving to the previous question
  };

  const handleGoHome = () => {
    setSelectedModule(null); // Reset selected module
    setShowModuleSelection(true);
    setCurrentQuestionIndex(0);
    setAnswered([]);
    setUserAnswers([]);
    setShowResults(false);
    setMarks(0);
    setSelectedModuleName(''); // Clear the selected module name
  };

  const handleAnalysis = () => {
    setShowAnalysis(true); // Show analysis page on button click
  };

  return (
    <div className="quiz-container">
      {!showModuleSelection && !showAnalysis && (
        <div>
          <div>
            <button onClick={handleGoHome} className="home-btn">
              Go Back to Home
            </button>
            {selectedModuleName && (
              <span className="selected-module">{selectedModuleName}</span>
            )}
          </div>
          <div className="main-content">
            <div className="question">
              <h2>{questions[currentQuestionIndex].question}</h2>
              <ul className="options">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleAnswerClick(option)}
                    className={option === selectedOption ? 'selected' : ''}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pagination">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="nav-btn"
            >
              Previous
            </button>
            <span className="question-info">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            {!showResults && currentQuestionIndex !== questions.length - 1 && (
              <button
                onClick={handleNextQuestion}
                className="nav-btn"
              >
                Next
              </button>
            )}
            {currentQuestionIndex === questions.length - 1 && !showResults && (
              <button onClick={handleSubmit} className="submit-btn">
                Submit
              </button>
            )}
          </div>
          {showResults && (
            <div>
              <div className="result-card">
                <h2>Results</h2>
                <p>Your score: {marks} out of {questions.length}</p>
                <button onClick={handleAnalysis} className="analysis-btn">
                  Analysis
                </button>
              </div>
            </div>
          )}
          </div>
        </div>
      )}
      {/* Render the AnalysisPage component if showAnalysis is true */}
      {showAnalysis && (
        <AnalysisPage questions={questions} userAnswers={userAnswers} />
      )}
      {showModuleSelection && (
        <ModuleSelection onSelectModule={handleModuleSelect} />
      )}
    </div>
  );
};

export default Quiz;
