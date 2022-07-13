import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';

//styles & icons
import './SignIn.css';
import karate from '../images/karate.png';

//animation
import { motion } from 'framer-motion';

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
    <div className="signin-pg">
      <div className="signin-img">
        <motion.img
          src={karate}
          alt="karate image"
          whileHover={{ scale: 1.05 }}
        />
      </div>
      <h1>Welcome to the Dojo!</h1>
      <h3>Ready to Enter?</h3>
      <GoogleButton className="signin-btn" onClick={handleGoogleSignIn} />
    </div>
  );
}
