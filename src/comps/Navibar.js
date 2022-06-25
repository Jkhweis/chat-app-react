import { UserAuth } from '../context/AuthContext';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';

const Navibar = () => {
  const { user, logOut } = UserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {user?.displayName ? (
          <Button variant="outline-danger" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <p>Hello There!</p>
        )}
      </Container>
    </Navbar>
  );
};

export default Navibar;
