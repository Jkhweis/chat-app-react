import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logOut } = UserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Navbar</h1>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/signin">Sign in</Link>
      )}
    </div>
  );
}
