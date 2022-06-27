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
    <Navbar>
      <Container>
        {user?.displayName ? (
          <Button variant="outline-danger" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <></>
        )}
      </Container>
    </Navbar>
  );
};

export default Navibar;
