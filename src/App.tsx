import './App.css';
import { Routes, Route } from 'react-router';

// Routes
import Home from './routes/Home';
import User from './routes/User';
import Edit from './routes/Edit';
import Add from './routes/Add';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  )
}

export default App