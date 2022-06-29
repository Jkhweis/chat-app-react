import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';

//styles & icons
import './SignIn.css';
import { GiPunchBlast } from 'react-icons/gi';

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
    <div className="sign-in">
      <h1>
        Welcome to the Dojo Chat! <GiPunchBlast />
      </h1>
      <GoogleButton className="signin-btn" onClick={handleGoogleSignIn} />
    </div>
  );
}
