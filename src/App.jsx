import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Notification from './components/Notification/Notification'
import { useState, useEffect } from "react";

import './App.css'


export default function App() {

  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

useEffect(() => {

if (totalFeedback === 0) {
  return
}
    localStorage.setItem("feedback-state", JSON.stringify(count))
}
, [count]);




  const updateFeedback = feedbackType => {

    if (feedbackType === 'good') {
      setCount({
        ...count,
        good: count.good + 1
      });

    } else if (feedbackType === 'neutral') {
      setCount({
        ...count,
        neutral: count.neutral + 1
      });

    } else {
      setCount({
        ...count,
        bad: count.bad + 1
      });
    }
  };

  const resetFeedback = () => {
    setCount({
      good: 0,
      neutral: 0,
      bad: 0
    });

localStorage.removeItem("feedback-state");

  };

  const totalFeedback = count.good + count.neutral + count.bad;
  const positiveFeedback = Math.round((count.good / totalFeedback) * 100);


  return (
    <>
      <Description />
      <Options reset={resetFeedback} totalFeedback={totalFeedback} onClick={updateFeedback} />
      {totalFeedback === 0 ? <Notification /> : <Feedback totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} good={count.good} neutral={count.neutral} bad={count.bad} />}
    </>
  )
}