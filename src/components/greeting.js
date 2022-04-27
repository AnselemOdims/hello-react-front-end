import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchGreeting } from '../redux/greetings/reducers/greetingsReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(({ greetingReducer }) => greetingReducer.messages);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <h1>{greeting.length > 0 && greeting[0].result.message}</h1>
  );
};

export default Greeting;
