import { UserAuth } from '../context/AuthContext';
import MessageList from '../comps/MessageList';
import MessageForm from '../comps/MessageForm';
import { useCollection } from '../hooks/useCollection';

export default function Chat(props) {
  const { user } = UserAuth();
  const { documents: messages } = useCollection('messages');

  return (
    <>
      <p>Welcome, {user.displayName}</p>
      <div className="chat">
        {messages && <MessageList messages={messages} />}
        <MessageForm />
      </div>
      <footer className="footer">
        <p>
          This website was coded by Joy Khweis and is open-sourced on Github
        </p>
      </footer>
    </>
  );
}
