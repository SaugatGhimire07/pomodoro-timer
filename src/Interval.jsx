import PropTypes from "prop-types"; // Import PropTypes

function Interval({ onIntervalChange }) {
  return (
    <div className="interval-container">
      <button
        className="pomodoro-button"
        onClick={() => onIntervalChange(25)} // Pomodoro: 25 minutes
      >
        Pomodoro
      </button>
      <button
        className="pomodoro-button"
        onClick={() => onIntervalChange(5)} // Short Break: 5 minutes
      >
        Short Break
      </button>
      <button
        className="pomodoro-button"
        onClick={() => onIntervalChange(10)} // Long Break: 10 minutes
      >
        Long Break
      </button>
    </div>
  );
}

// PropTypes validation
Interval.propTypes = {
  onIntervalChange: PropTypes.func.isRequired, // Validate that onIntervalChange is a function and required
};

export default Interval;
