
import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw, BookOpen, Lightbulb } from 'lucide-react';

const Grammar = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "Which sentence is grammatically correct?",
      options: [
        "She don't like apples.",
        "She doesn't like apples.",
        "She not like apples.",
        "She no like apples."
      ],
      correct: 1,
      explanation: "Use 'doesn't' (does not) with third person singular subjects like 'she', 'he', or 'it'."
    },
    {
      question: "Choose the correct form:",
      options: [
        "I have went to the store.",
        "I have go to the store.",
        "I have gone to the store.",
        "I have been go to the store."
      ],
      correct: 2,
      explanation: "The past participle of 'go' is 'gone', used with 'have' in present perfect tense."
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex.toString());
    setShowResult(true);
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setShowResult(false);
    } else {
      // Quiz completed
      alert(`Quiz completed! Your score: ${score + (selectedAnswer === questions[currentQuestion].correct.toString() ? 1 : 0)}/${questions.length}`);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6 shadow-lg">
            <BookOpen className="w-5 h-5 text-blue-500" />
            <span className="text-elegant-secondary">Grammar Practice</span>
          </div>
          <h1 className="text-4xl font-bold text-elegant-primary mb-4">
            Master Your Grammar Skills
          </h1>
          <p className="text-xl text-gray-600">
            Practice with interactive exercises and get instant feedback
          </p>
        </div>

        {/* Progress Bar */}
        <div className="elegant-card p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-elegant-secondary font-medium">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-elegant-secondary font-medium">
              Score: {score}/{questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
            <div 
              className="progress-elegant h-3 transition-all duration-500 ease-out"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="elegant-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-elegant-primary mb-8">
            {questions[currentQuestion].question}
          </h2>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showResult && handleAnswer(index)}
                disabled={showResult}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                  showResult
                    ? index === questions[currentQuestion].correct
                      ? 'border-green-400 bg-green-50 text-green-800 shadow-lg shadow-green-200/50'
                      : selectedAnswer === index.toString()
                      ? 'border-red-400 bg-red-50 text-red-800 shadow-lg shadow-red-200/50'
                      : 'border-gray-200 bg-gray-50 text-gray-600'
                    : 'border-blue-200 bg-white hover:border-blue-400 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-200/30 hover:-translate-y-1'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {showResult && (
                    <div>
                      {index === questions[currentQuestion].correct ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : selectedAnswer === index.toString() ? (
                        <XCircle className="w-6 h-6 text-red-600" />
                      ) : null}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Explanation */}
          {showResult && (
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Explanation:</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {questions[currentQuestion].explanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={resetQuiz}
              className="elegant-button-secondary inline-flex items-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset Quiz</span>
            </button>
            
            {showResult && (
              <button
                onClick={nextQuestion}
                className="elegant-button inline-flex items-center space-x-2"
              >
                <span>
                  {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </span>
                <CheckCircle className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grammar;
