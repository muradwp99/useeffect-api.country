import { useEffect, useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <ExternelUsers></ExternelUsers>
      </div>
    </>
  )
}


function ExternelUsers(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]);


  return (
    <div>
      <h1>Externel Users</h1>

      {
        users.map(user => <User key={user.id} name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return (
    <div style={{backgroundColor: '#5357FE', borderRadius: '10px', padding: '10px 0px', marginTop: '10px' }}>
      <h3>Name: <span>{props.name}</span></h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default App
