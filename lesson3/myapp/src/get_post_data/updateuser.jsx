import { useState } from 'react';
import axios from 'axios';

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

const UpdateUserComp = () => {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState({ name: '', email: '' });

  const getData = async () => {
    const { data } = await axios.get(`${usersUrl}/${userId}`);
    setUser({ name: data.name, email: data.email });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.patch(`${usersUrl}/${userId}`, user);
    console.log(data);
  };

  return (
    <>
      User ID:{' '}
      <input type='number' onInput={(e) => setUserId(e.target.value)} />
      <button onClick={getData}>Get Data</button>
      <br /> <br />
      <form onSubmit={handleSubmit}>
        Name:{' '}
        <input
          type='text'
          value={user.name}
          onInput={(e) => setUser({ ...user, name: e.target.value })}
        />
        <br />
        Email:{' '}
        <input
          type='email'
          value={user.email}
          onInput={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <button type='submit'>Update</button>
      </form>
    </>
  );
};


export default UpdateUserComp;
