import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";

function StartStop({ isRunning, toggleStartStop, resetTimer }) {
  return (
    <div className="controls">
      <button className="pomodoro-button" onClick={toggleStartStop}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button className="pomodoro-button" onClick={resetTimer}>
        <FontAwesomeIcon icon={faRedoAlt} size="1x" />
      </button>
    </div>
  );
}

// PropTypes validation
StartStop.propTypes = {
  isRunning: PropTypes.bool.isRequired, // Whether the timer is running
  toggleStartStop: PropTypes.func.isRequired, // Function to start or pause the timer
  resetTimer: PropTypes.func.isRequired, // Function to reset the timer
};

export default StartStop;
