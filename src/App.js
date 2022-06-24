import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

//comps
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Chat from './pages/Chat';

//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
