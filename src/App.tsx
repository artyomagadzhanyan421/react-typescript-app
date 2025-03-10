import './App.css';
import { Routes, Route } from 'react-router';

// Routes
import Home from './routes/Home';
import User from './routes/User';
import Edit from './routes/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App