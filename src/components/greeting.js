import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchGreeting } from '../redux/greetings/reducers/greetingsReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(({ greetingReducer }) => greetingReducer.message);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div>
      <h1>{greeting && greeting.message}</h1>
    </div>
  );
};

export default Greeting;
