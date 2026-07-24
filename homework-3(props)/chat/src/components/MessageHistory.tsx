import type { TypeMessage } from "../../assets/data.tsx";
import Response from "./Response";
import Message from "./Message";
import Typing from "./Typing.tsx";
function MessageHistory({ list = [] }: { list: TypeMessage[] }) {
  return (
    <ul>
      {list.map((msg: TypeMessage) =>
        msg.type === "message" ? (
          <Message
            key={msg.id}
            from={msg.from}
            message={{ time: msg.time, text: msg.text }}
          />
        ) : msg.type === "response" ? (
          <Response
            key={msg.id}
            from={msg.from}
            message={{ time: msg.time, text: msg.text }}
          />
        ) : (
          <Typing key={msg.id} from={msg.from} message={{ time: msg.time }} />
        ),
      )}
    </ul>
  );
}
export default MessageHistory;
