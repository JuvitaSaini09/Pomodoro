import './App.css';

import {Route,Routes} from "react-router-dom"
import { Home, Timer } from './pages/allPages';

function App() {

  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/timer/:id" element={<Timer />} />
      </Routes>
    </div>
  );
}

export default App;
