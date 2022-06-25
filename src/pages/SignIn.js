import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';

//styles
import './SignIn.css';

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
      <h1>Welcome to the Chat!</h1>
      <GoogleButton className="signin-btn" onClick={handleGoogleSignIn} />
    </div>
  );
}
