//styles
import './MessageList.css';

export default function MessageList({ messages }) {
  const handleClick = async (id) => {
    console.log(id);
  };

  return (
    <div>
      <ul className="chat-list">
        {messages.map((message) => (
          <li
            key={message.id}
            className="indv-chat"
            onClick={() => handleClick(message.id)}
          >
            {message.displayName}
            {'...'}
            {message.text}
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
}
