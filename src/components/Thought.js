import { React, useState } from "react";

const Thought = () => {
  const [quotes, setQuotes] = useState("");
  const myArray = [
    "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”",

    "“First, solve the problem. Then, write the code.” ",

    "“Experience is the name everyone gives to their mistakes.” ",

    "“Java is to JavaScript what car is to Carpet.”",

    "“ Code is like humor. When you have to explain it, it's bad.”",
  ];
  setTimeout(() => {
    setQuotes(myArray[Math.floor(Math.random() * myArray.length)]);
  }, 3000);
  const load = "Loading...";
  return <div>{quotes || load}</div>;
};

export default Thought;
