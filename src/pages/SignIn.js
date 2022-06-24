import { auth } from '../firebase/config.js';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';

export default function SignIn() {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign in</h1>
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
}
