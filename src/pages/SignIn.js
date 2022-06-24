import { auth } from '../firebase/config.js';

export default function SignUp() {
  function signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return;
  <div>
    <button onClick={signInWithGoogle}>Sign In With Google</button>
  </div>;
}
