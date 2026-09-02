import type { UserType } from "../utils/types.ts";

function List({ users }: { users: UserType[] }) {
  return (
    <div className="list">
      {users.map((user: UserType) => (
        <div className="users" key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default List;
