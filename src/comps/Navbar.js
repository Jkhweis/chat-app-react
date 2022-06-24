import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
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
      <h3>Navbar</h3>
      {user?.displayName ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <p>Welcome! Please sign in below</p>
      )}
    </div>
  );
};

export default Navbar;
