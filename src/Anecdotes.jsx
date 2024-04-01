import { useState } from "react";

export const Anecdotes = () => {
  const [newAnecdote, setNewAnecdote] = useState(0);
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [newArr, setNewArr] = useState(new Array(anecdotes.length).fill(0));

  const getRandomElement = () => {
    const randomElement = Math.floor(Math.random() * anecdotes.length);
    return randomElement;
  };
  const voteUp = () => {
    const copyArr = [...newArr];
    copyArr[newAnecdote] += 1;
    setNewArr(copyArr);
  };
  const largestNumber = (arr) => {
    let largest = arr[0];
    let position = 0;

    arr.forEach((current, index) => {
      if (current > largest) {
        largest = current;
        position = index;
      }
    });

    return position;
  };
  return (
    <>
      <h1>{anecdotes[newAnecdote]}</h1>
      <p>has {newArr[newAnecdote]} votes</p>
      <button
        onClick={() => {
          setNewAnecdote(getRandomElement());
        }}
      >
        Next Anecdote
      </button>
      <button
        onClick={() => {
          voteUp();
        }}
      >
        Vote
      </button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[largestNumber(newArr)]}</p>
    </>
  );
};
