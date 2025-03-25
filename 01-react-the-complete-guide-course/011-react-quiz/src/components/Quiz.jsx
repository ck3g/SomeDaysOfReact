import { useState, useCallback } from 'react';

import QUESTIONS from '../questions.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';


export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  // because we want to use as little state as possible
  // and derive as much state as possible
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswers((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });
    },
    []
  )

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />
  }

  return <div id="quiz">
    <div id="question">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  </div>
}
