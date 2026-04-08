import React, { useState } from "react";

const Home = ({ user, setUser }) => {
  const [score, setScore] = useState(0);
  return (
    <>
      <h2>This score board</h2>
      <p>current score: {score}</p>
      <button onClick={() => setScore(score + 1)}>click to add 1 run</button>
      <button onClick={() => setScore(score - 1)}>click to deduct 1 run</button>
      <br />
      <br />
      <p>Name is: {user}</p>
      <input
        type="text"
        placeholder="type your name"
        onChange={(e) => setUser(e.target.value)}
        style={{ padding: "5px", border: "1px solid black" }}
      />
    </>
  );
};

export default Home;
