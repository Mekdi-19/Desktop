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
//new
import { useState } from 'react'
import { Table } from "./componet/Table";
import { Modal } from "./componet/Modal";

import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Eventes from './componet/Eventes';
  // Import the Reports component

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  let Component;
  switch (window.location.pathname) {
    case '/componet/Eventes':
      Component = Eventes;
      break;
    case '/members':
      Component = Members;
      break;
    case '/reports':
      Component = Reports;
      break;
    default:
      Component = null; // Set a default component if the URL doesn't match any cases
      break;
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      page: "Home",
      description: "This is the main page of the website",
      status: "live",
    },
    {
      page: "About Us",
      description: "This page has details about the company",
      status: "draft",
    },
    {
      page: "Pricing",
      description: "Prices for different subscriptions",
      status: "error",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
            return newRow;
          })
        );
    setModalOpen(false);
    setRowToEdit(null);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
      {Component && <Component />}
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null ? rows[rowToEdit] : null}
        />
      )}
    </div>
  )
}

export default App;
*/
import {} from "antd";
