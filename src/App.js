import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';

import { fetchGreeting } from './redux/greetings/reducers/greetingsReducer';

function App() {
  const dispatch = useDispatch();
  const greeting = useSelector(({ greetingReducer }) => greetingReducer.messages);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div className="App">
      <h1>{greeting.length > 0 && greeting[0].result.message}</h1>
    </div>
  );
}

export default App;
