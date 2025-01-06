import { useState, useEffect } from "react";
import Interval from "./Interval";
import StartStop from "./StartStop";
import Timer from "./Timer";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Initial time (25 minutes)
  const [isRunning, setIsRunning] = useState(false); // Timer running state
  const [interval, setIntervalState] = useState(25); // Interval type (Pomodoro = 25 min, etc.)
  const [timerId, setTimerId] = useState(null); // Store the timer id for clearing the interval

  // Start or pause the timer
  const toggleStartStop = () => {
    if (isRunning) {
      clearInterval(timerId); // Stop the timer
    } else {
      const id = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(id);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000); // Decrease time every second
      setTimerId(id);
    }
    setIsRunning(!isRunning); // Toggle running state
  };

  // Reset the timer
  const resetTimer = () => {
    clearInterval(timerId); // Stop the timer
    setTimeLeft(interval * 60); // Reset time to the selected interval
    setIsRunning(false); // Stop the timer
  };

  // Change the interval (Pomodoro, Short Break, Long Break)
  const handleIntervalChange = (timeInMinutes) => {
    setIntervalState(timeInMinutes);
    setTimeLeft(timeInMinutes * 60); // Reset time to the new interval
  };

  // Update the document title with the time left
  useEffect(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.title = `${minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    } - Pomodoro Timer`;
  }, [timeLeft]);

  // Cleanup when the component is unmounted
  useEffect(() => {
    return () => {
      clearInterval(timerId); // Clear interval on unmount
    };
  }, [timerId]);

  return (
    <div className="pomodoro-container">
      <Interval onIntervalChange={handleIntervalChange} />
      <Timer timeLeft={timeLeft} />
      <StartStop
        isRunning={isRunning}
        toggleStartStop={toggleStartStop}
        resetTimer={resetTimer}
      />
    </div>
  );
}

export default App;
