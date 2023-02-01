const TIMER_INCREASE = "TIMER_INCREASE";

const timerState = {
  timerStarter: false,
  timerMinutes: 0,
  timerSeconds: 0,
  timerInterval: "",
  timerDisplay: "00:00",
};

const timerReducer = (state = timerState, action) => {
  switch (action.type) {
    case TIMER_INCREASE: {
      alert("timer increase");
    }
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};

export default timerReducer;
