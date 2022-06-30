import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

//styles
import './MessageList.css';

export default function MessageList({ messages }) {
  const { user } = UserAuth();
  //const messageClass = user.displayName === 'Joy Khweis' ? 'sent' : 'received';

  const handleClick = async (id) => {
    const docRef = doc(db, 'messages', id);
    await deleteDoc(docRef);
  };

  return (
    <>
      <ul className="chat-list">
        {messages.map((message) => (
          <li key={message.id} className="sent">
            {message.text}
            <button className="unsend" onClick={() => handleClick(message.id)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
