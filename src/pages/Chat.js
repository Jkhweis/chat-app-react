import { UserAuth } from '../context/AuthContext';
import MessageList from '../comps/MessageList';
import MessageForm from '../comps/MessageForm';
import { useCollection } from '../hooks/useCollection';

export default function Chat() {
  const { user } = UserAuth();
  const { documents: messages } = useCollection('messages');

  return (
    <div>
      <p>Welcome, {user?.displayName}</p>
      {messages && <MessageList messages={messages} />}
      <MessageForm />
    </div>
  );
}
