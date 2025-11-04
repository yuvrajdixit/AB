import React, { useState, useEffect } from "react";


function App() {
  // 🎂 Set Ashley's birthday date (year updates automatically)
  const nextBirthday = new Date(`2025-11-19T00:00:00`); // change month/day as needed

  const [timeLeft, setTimeLeft] = useState({});
  const [isBirthday, setIsBirthday] = useState(false);

  // 🕒 Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = nextBirthday - now;

      if (difference <= 0) {
        setIsBirthday(true);
        clearInterval(timer);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [nextBirthday]);

  return (
    <div className="App">
      {!isBirthday ? (
        <div className="countdown-container">
          <h1>🎉 Countdown to Ashley’s Birthday 🎂</h1>
          <div className="clock">
            <div className="time-box">
              <h2>{timeLeft.days}</h2>
              <p>Days</p>
            </div>
            <div className="time-box">
              <h2>{timeLeft.hours}</h2>
              <p>Hours</p>
            </div>
            <div className="time-box">
              <h2>{timeLeft.minutes}</h2>
              <p>Minutes</p>
            </div>
            <div className="time-box">
              <h2>{timeLeft.seconds}</h2>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="birthday-message">
          <h1>🎂 Happy Birthday, Ashley! 🎉</h1>
          <p>Wishing you endless happiness, love, and laughter 💖</p>
        </div>
      )}
    </div>
  );
}

export default App;
