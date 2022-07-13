import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';

//comps
import Navibar from './comps/Navibar';
import SignIn from './pages/SignIn';
import Chat from './pages/Chat';

//styles
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { user } = UserAuth();

  return (
    <div className="App">
      <BrowserRouter>
        <Navibar />
        <Routes>
          <Route
            path="/"
            element={!user ? <SignIn /> : <Navigate to="/chat" />}
          />
          <Route path="/chat" element={user ? <Chat /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
