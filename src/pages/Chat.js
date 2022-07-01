import { UserAuth } from '../context/AuthContext';
import MessageList from '../comps/MessageList';
import MessageForm from '../comps/MessageForm';
import { useCollection } from '../hooks/useCollection';
import CustomScroll from 'react-custom-scroll';

export default function Chat(props) {
  const { user } = UserAuth();
  const { documents: messages } = useCollection('messages');

  return (
    <CustomScroll>
      <div>
        <p>Welcome, {user.displayName}</p>
        {messages && <MessageList messages={messages} />}
        <MessageForm />
      </div>
    </CustomScroll>
  );
}
