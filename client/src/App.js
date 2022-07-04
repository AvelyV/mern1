import './App.css';
import { useState, useEffect } from 'react';
import Axios from "axios"

function App() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/getUsers")
      .then((response) => {
        setAllUsers(response.data)
      })
  }, [])

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
    </div>
  );
}

export default App;
