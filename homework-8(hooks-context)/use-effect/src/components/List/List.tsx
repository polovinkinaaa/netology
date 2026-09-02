import type { UserType } from "../../utils/types.ts";
import "./List.css";

function List({
  users,
  selectedId,
  onSelect,
}: {
  users: UserType[];
  selectedId: number | null;
  onSelect: (info: UserType) => void;
}) {
  return (
    <ul className="list">
      {users.map((user: UserType) => (
        <li
          className={`user ${user.id === selectedId ? "selected" : ""}`}
          key={user.id}
          onClick={() => onSelect(user)}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default List;
