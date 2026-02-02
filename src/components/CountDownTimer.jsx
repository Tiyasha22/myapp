import { useEffect, useRef, useState } from "react";

const CountDownTimer = () => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  useEffect(() => {
    if (!isRunning || totalSeconds <= 0) return;

    intervalRef.current = setInterval(() => {
      setTotalSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleInputChange = (e, field) => {
    const value = parseInt(e.target.value, 10) || 0;

    let h = hours;
    let m = minutes;
    let s = seconds;

    if (field === "hour") h = value;
    if (field === "minute") m = value;
    if (field === "second") s = value;

    setTotalSeconds(h * 3600 + m * 60 + s);
  };

  const handleStartPause = () => {
    if (totalSeconds > 0) {
      setIsRunning((prev) => !prev);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTotalSeconds(0);
  };

  return (
    <div>
      <input
        value={hours}
        onChange={(e) => handleInputChange(e, "hour")}
        className="timer-input"
      />
      :
      <input
        value={minutes}
        onChange={(e) => handleInputChange(e, "minute")}
        className="timer-input"
      />
      :
      <input
        value={seconds}
        onChange={(e) => handleInputChange(e, "second")}
        className="timer-input"
      />
      <div className="countdown-btn-container">
        <button onClick={handleStartPause}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default CountDownTimer;
