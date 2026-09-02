import type { UserType } from "../../utils/types.ts";
import "./List.css";

function List({
  users,
  selectedId,
  onSelect,
}: {
  users: UserType[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}) {
  return (
    <ul className="list">
      {users.map((user: UserType) => (
        <li
          className={`user ${user.id === selectedId ? "selected" : null}`}
          key={user.id}
          onClick={() => onSelect(user.id)}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default List;
