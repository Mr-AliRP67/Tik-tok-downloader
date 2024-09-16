
import React, { useEffect, useState } from 'react';
 
const UserForm = ({ selectedUser, handleSubmit }) => {
  const [user, setUser] = useState({ name: '', email: '' ,address:'rajan pur'});

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value ,address} = e.target;
    setUser({ ...user, [name]: value ,[address]:value});
  };

  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit(user);
    
    setUser({ name: '', email: '' ,address:''});
  };

  return (
    <center id='center'>
    <form onSubmit={submitForm}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        type="address"
        name="address"
        placeholder="address"
        value={user.address}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
    </center>
  );
};

export default UserForm;
