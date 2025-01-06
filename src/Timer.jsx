import PropTypes from "prop-types"; // Import PropTypes

function Timer({ timeLeft }) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="time-left">
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </div>
  );
}

Timer.propTypes = {
  timeLeft: PropTypes.number.isRequired,
};

export default Timer;
