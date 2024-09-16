// src/App.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserForm from './UserForm';
import UserTable from './UserTable';


const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch users from the JSON server
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  // Add or update user
  const handleSubmit = (user) => {
    if (user.id) {
      // Edit user
      axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user).then((response) => {
        setUsers(users.map((u) => (u.id === user.id ? response.data : u)));
        setSelectedUser(null);
      });
    } else {
      // Add new user
     const id = users.length + 1;
      axios.post('https://jsonplaceholder.typicode.com/users', user,{id:id}).then((response) => {
        setUsers([...users, response.data]);
  

      });
    }
  };

  // Delete user
  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    
    });
  };

  // Edit user
  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
     
      <UserForm selectedUser={selectedUser} handleSubmit={handleSubmit} />
      <UserTable users={users} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
