const initialState = {
  message: {},
};

const DISPLAY_GREETING = 'greeting/DISPLAY_GREETING';

const displayGreeting = (payload) => ({
  type: DISPLAY_GREETING,
  payload,
});

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_GREETING:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export const fetchGreeting = () => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:3000/v1/greetings');
    const data = await res.json();
    dispatch(displayGreeting(data.result));
  } catch (err) {
    throw new Error(err);
  }
};

export default greetingReducer;
