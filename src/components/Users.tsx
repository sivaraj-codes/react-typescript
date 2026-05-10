import { USERS_LIST } from "../utilities/constants";

export const Users = () => {
  return (
    <div className="list-wrapper">
      <h4>Users</h4>
      {USERS_LIST.map((user) => {
        return <User key={user.name} user={user} />;
      })}
    </div>
  );
};

type User = { name: string; age: number };

type userProps = {
  user: User;
};

export const User = ({ user }: userProps) => {
  return (
    <>
      <div className="card-wrapper">
        <h6>user</h6>
        <p>Name : {user.name}</p>
        <pre>{JSON.stringify(user)}</pre>
        {/* {JSON.stringify(user)} */}
      </div>
    </>
  );
};
