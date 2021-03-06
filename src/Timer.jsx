import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

const Timer = (props) => {
  Timer.propTypes = {
    timerOn: PropTypes.bool.isRequired,
  };
  const [seconds, setSeconds] = useState(0);
  const [isActive] = useState(true);
  const { timerOn } = props;

  useEffect(() => {
    Timer.propTypes = {
      timerOn: PropTypes.bool.isRequired,
    };
    let interval = null;
    // eslint-disable-next-line prefer-destructuring
    // eslint-disable-next-line no-constant-condition
    if ({ timerOn }) {
      interval = setInterval(() => {
        // eslint-disable-next-line no-shadow
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds, { timerOn }]);

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="app">
      <div className="time">{seconds}</div>
      <div className="row" />
    </div>
  );
};
Timer.propTypes = {
  timerOn: PropTypes.bool.isRequired,
};

export default Timer;
