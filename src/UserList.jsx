import React, { createContext } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from './context/UserContext';

const UserList = () => {
  const { users, loading, error} = useUserContext();
  return (
    <table className="table table-hover container bg-dark">
      <tbody>
        {users.map(user => (
          <tr key={user.id} className="table-dark">
            <Link to={`/users/${user.id}`}>
              <td>{user.name}</td>
            </Link>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;