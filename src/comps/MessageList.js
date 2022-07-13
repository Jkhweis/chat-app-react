import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

//styles & icons
import './MessageList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FaUserNinja } from 'react-icons/fa';

//animation
import { motion } from 'framer-motion';

export default function MessageList({ messages }) {
  const { user } = UserAuth();

  const handleClick = async (id) => {
    const docRef = doc(db, 'messages', id);
    await deleteDoc(docRef);
  };

  return (
    <>
      <ul className="chat-list">
        {messages.map((message) => (
          <div>
            <motion.li
              key={message.id}
              className={`${
                user.uid === message.createdBy.id ? 'sent' : 'received'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <h6 className="name">
                {message.displayName}
                {'     '}
                <FaUserNinja />
                {'    '}
              </h6>
              {message.text}
              {user.uid === message.createdBy.id && (
                <button
                  className="unsend"
                  onClick={() => handleClick(message.id)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              )}
              <p className="date">
                {formatDistanceToNow(message.createdAt.toDate(), {
                  addSuffix: true,
                })}
              </p>
            </motion.li>
          </div>
        ))}
      </ul>
    </>
  );
}
