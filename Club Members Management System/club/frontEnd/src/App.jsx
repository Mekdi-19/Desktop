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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Eventes from './componet/Eventes';
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
let Componet
  switch (window.location.pathname) {
    case '/componet/Eventes':
      Componet=Eventes
      break;
  
    case '/members':
      Componet=Members
      break;
    case '/reports':
      Componet=Reports
      break;
  
  
    default:
      break;
  }
  
  return (
    
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
       
          <Home />
          <Componet/>
        

          
    </div>
  )
}

export default App
