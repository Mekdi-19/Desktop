/*import React, { useState } from 'react'
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

*/
import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
}

export default App
