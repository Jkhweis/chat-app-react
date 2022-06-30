import { useState } from 'react';
import { db, timestamp } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { UserAuth } from '../context/AuthContext';

//styles & icons
import { GiPunchBlast } from 'react-icons/gi';

export default function MessageForm() {
  const [newMessage, setNewMessage] = useState('');
  const { user } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, 'messages'), {
      text: newMessage,
      displayName: user.displayName,
      createdAt: timestamp,
      uid: user.uid,
      photoURL: user.photoURL,
    });
    setNewMessage('');
  };

  return (
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
      <button className="send-btn">
        Send <GiPunchBlast />
      </button>
    </form>
  );
}
