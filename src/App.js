import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Greeting from './components/greeting';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Router>
  );
}

export default App;
