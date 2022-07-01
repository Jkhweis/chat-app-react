import { useState } from 'react';
import { db, timestamp } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { UserAuth } from '../context/AuthContext';
import { useRef } from 'react';

//styles, icons & sounds
import { GiPunchBlast } from 'react-icons/gi';
import { Howl } from 'howler';
import boxingpunch from '../audio/boxingpunch.wav';

export default function MessageForm() {
  const [newMessage, setNewMessage] = useState('');
  const { user } = UserAuth();
  const scroll = useRef();
  const soundSrc = boxingpunch;

  const sendPunch = (src) => {
    const sound = new Howl({
      src,
      html5: true,
      volume: 0.5,
    });
    sound.play();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createdBy = {
      photoURL: user.photoURL,
      id: user.uid,
    };

    await addDoc(collection(db, 'messages'), {
      text: newMessage,
      displayName: user.displayName,
      createdAt: timestamp,
      uid: user.uid,
      createdBy,
    });
    setNewMessage('');
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <form className="send-form" onSubmit={handleSubmit}>
        <label>
          <span></span>
          <textarea
            required
            type="text"
            placeholder="Type your message here..."
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          />
        </label>
        <button className="send-btn" onClick={() => sendPunch(soundSrc)}>
          Send <GiPunchBlast />
        </button>
      </form>
    </>
  );
}
