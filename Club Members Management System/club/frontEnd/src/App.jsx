import React, { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [data,setData]=useState([])
  useEffect(()=> {
    fetch('http://localhost:8081/login')
    .then(res =>res.json())
    .then(data =>setData(data))
    .catch(err =>console.log(err));

  },[])
  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, p) => (
          <tr key={p}>
            <td>{d.name}</td>
            <td>{d.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default App
