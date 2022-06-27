import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

// firebase imports
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

export default function SendMessage() {
  const [newMessage, setNewMessage] = useState('');
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(
      collection(db, 'messages'),

      {
        text: newMessage,
        uid: user.uid,
      }
    );

    setNewMessage('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Send Message:</span>
          <textarea
            required
            type="text"
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          ></textarea>
        </label>
        <button>Send</button>
      </form>
    </div>
  );
}
