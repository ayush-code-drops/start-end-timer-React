import { useState } from "react";
import StopWatch from "./components/Stopwatch";
import "./styles.css";

export default function App() {
  const [showTimer, setShowTimer] = useState(true);
  const handleClick = () => {
    setShowTimer(!showTimer);
  };
  return (
    <div className="App">
      <h1>StopWatch</h1>
      {showTimer && <StopWatch intial={5} end={14} />}
      <button onClick={handleClick}>Show</button>
    </div>
  );
}
