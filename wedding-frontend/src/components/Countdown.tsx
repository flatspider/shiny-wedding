import { useEffect, useState } from "react";

const weddingDate = new Date("2026-09-12T17:00:00");

const Countdown = () => {
  const calculateTimeLeft = () => {
    // Use plus sign to convert to number for arithmetic
    const timeToGo = +weddingDate - +new Date();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (timeToGo > 0) {
      timeLeft = {
        days: Math.floor(timeToGo / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeToGo / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeToGo / 1000 / 60) % 60),
        seconds: Math.floor((timeToGo / 1000) % 60),
      };
    }
    return timeLeft;
  };

  // Now use math above to render clock

  // Set initial state using function
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Countdown!</h2>
      <p>
        {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes}{" "}
        minutes, {timeLeft.seconds} seconds
      </p>
    </div>
  );
};

export default Countdown;
