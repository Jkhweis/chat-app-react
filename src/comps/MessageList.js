export default function BookList({ messages }) {
  const handleClick = async (id) => {
    console.log(id);
  };

  return (
    <div className="book-list">
      <ul>
        {messages.map((message) => (
          <li key={message.id} onClick={() => handleClick(message.id)}>
            {message.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
