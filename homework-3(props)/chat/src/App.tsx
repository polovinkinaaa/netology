import { messages } from "../assets/data.tsx";
import MessageHistory from "./components/MessageHistory.tsx";

function App() {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={messages} />
        </div>
      </div>
    </div>
  );
}

export default App;
