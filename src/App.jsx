import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Notification from './components/Notification/Notification'
import { useState, useEffect } from "react";

import './App.css'

export default function App() {
  const [count, setCount] = useState(() => {

   const savedCount = localStorage.getItem("feedback-state");

  if (savedCount !== null) {
    return JSON.parse(savedCount);
  }

 return {
    good: 0,
    neutral: 0,
    bad: 0
  };

});

  const totalFeedback = count.good + count.neutral + count.bad;
  const positiveFeedback = Math.round((count.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("feedback-state", JSON.stringify(count));
  }, [count]);

  const updateFeedback = (feedbackType) => {
    setCount((prevCount) => ({
      ...prevCount,
      [feedbackType]: prevCount[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setCount({ good: 0, neutral: 0, bad: 0 });
    localStorage.removeItem("feedback-state");
  };

  return (
    <>
      <Description />
      <Options reset={resetFeedback} totalFeedback={totalFeedback} onClick={updateFeedback} />
      {totalFeedback === 0 ? <Notification /> : <Feedback totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} good={count.good} neutral={count.neutral} bad={count.bad} />}
    </>
  );
}
