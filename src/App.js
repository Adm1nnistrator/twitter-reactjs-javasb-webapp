import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Auth from './Components/Authentication/Auth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={true ? <Home /> : <Auth />} />
      </Routes>
    </div>
  );
}

export default App;
