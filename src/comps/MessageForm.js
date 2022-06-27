import { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

export default function BookForm() {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, 'messages'), {
      title: newMessage,
    });

    setNewMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Send Message</span>
        <input
          required
          type="text"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
      </label>
      <button>Send</button>
    </form>
  );
}
