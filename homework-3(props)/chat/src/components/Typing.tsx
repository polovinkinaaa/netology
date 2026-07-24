import type { MessageProps } from "../../assets/data.tsx";

function Typing({ from, message }: MessageProps) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <i className="fa fa-circle online"></i>
      <i className="fa fa-circle online light-green"></i>
      <i className="fa fa-circle online white"></i>
    </li>
  );
}

export default Typing;
