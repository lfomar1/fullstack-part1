import { useState } from "react";
const AverageNumber = ({ average, all }) => {
  const averageNumber = average !== 0 ? average / all : 0;
  return <p>Average: {averageNumber}</p>;
};
const PositiveComments = ({ positive, all }) => {
  const positiveComments = positive !== 0 ? (positive / all) * 100 : 0;
  return <p>Positive: {positiveComments}%</p>;
};
const StatisticsLine = ({ statisticName, statisticType }) => {
  return (
    <p>
      {statisticName}: {statisticType}{" "}
    </p>
  );
};
const Statistics = (props) => {
  return (
    <>
      <h1>Statistics</h1>
      <StatisticsLine statisticName="Good" statisticType={props.good} />
      <StatisticsLine statisticName="Neutral" statisticType={props.neutral} />
      <StatisticsLine statisticName="Bad" statisticType={props.bad} />
      <StatisticsLine statisticName="All" statisticType={props.all} />
      <AverageNumber average={props.average} all={props.all} />
      <PositiveComments positive={props.positive} all={props.all} />
    </>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);

  return (
    <>
      <h1>Give Feedback</h1>
      <button
        onClick={() => {
          setGood(good + 1);
          setAverage(average + 1);
          setAll(all + 1);
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          setNeutral(neutral + 1);
          setAll(all + 1);
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          setBad(bad + 1);
          setAverage(average - 1);
          setAll(all + 1);
        }}
      >
        Bad
      </button>
      {good !== 0 || neutral !== 0 || bad !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positive={good}
        />
      ) : (
        <h2>No Feedback given</h2>
      )}
    </>
  );
};

export default App;
