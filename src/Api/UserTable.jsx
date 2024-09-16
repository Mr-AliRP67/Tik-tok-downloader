// src/components/UserTable.js
import React from 'react';
import './api.css';
const UserTable = ({ users, handleEdit, handleDelete }) => {
  return (
    <center>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>ADDRESS</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          const {street,city,zip} = user.address;
      return (   <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{street},{city},{zip}</td>
            <td>
              <button onClick={() => handleEdit(user)}><i class="fa-regular fa-pen-to-square"></i></button>
              <button onClick={() => handleDelete(user.id)}><i class="fa-solid fa-trash"></i></button>
            </td>
          </tr>
        )})}
      </tbody>
    </table>
    </center>
  );
};

export default UserTable;
