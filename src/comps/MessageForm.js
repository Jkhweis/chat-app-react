import { useState } from 'react';
import { db, timestamp } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { UserAuth } from '../context/AuthContext';

export default function MessageForm() {
  const [newMessage, setNewMessage] = useState('');
  const { user } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, 'messages'), {
      text: newMessage,
      displayName: user?.displayName,
      createdAt: timestamp,
    });
    setNewMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Send Message</span>
        <textarea
          required
          type="text"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
      </label>
      <button className="send-btn">Send</button>
    </form>
  );
}
