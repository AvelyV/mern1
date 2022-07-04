import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [name, setName] = useState('')
  const [age, setAge] = useState()
  const [email, setEmail] = useState('')

  useEffect(() => {
    Axios.get('http://localhost:4000/getUsers').then((response) => {
      setAllUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post('http://localhost:4000/createUser', {
      name,
      age,
      email,
    }).then((response) => {
      // thanks to this new users in displayed w/out refreshing
      setAllUsers([...allUsers, {name, age, email }])
    });
  };

  return (
    <div className="App">
      <div className="usersDisplay">
        {allUsers.map((user) => {
          return (
            <div>
              <h4>Name: {user.name}</h4>
              <h4>Age: {user.age}</h4>
              <h4>Email: {user.email}</h4>
            </div>
          );
        })}
      </div>

      <div>
        <input type="text" placeholder="name" onChange={(event) => {setName(event.target.value)}} />
        <input type="number" placeholder="age" onChange={(event) => {setAge(event.target.value)}}/>
        <input type="text" placeholder="email" onChange={(event) => {setEmail(event.target.value)}} />
        <button onClick={createUser}>Create user</button>
      </div>
    </div>
  );
}

export default App;
