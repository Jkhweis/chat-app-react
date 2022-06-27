import { UserAuth } from '../context/AuthContext';

export default function Chat() {
  const { user } = UserAuth();

  return (
    <div>
      <p>Welcome, {user?.displayName}</p>
    </div>
  );
}
