
import { Typography } from "antd";
import "./member.css"
import { Table } from "./Table";
import { Modal } from "./Modal";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
 
function Members() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      page: "name",
      description: "Abebe Kebede",
      status: "/",
       
    },
     {
      page: "ID number",
      description: "ugr/6766776767",
      status: "/",
      
    },
    {
      page: "phone number",
      description: "091234567",
      status: " /",
       
    },
    {
      page: "projects i am working",
      description: " website developemnt",
      status: "active",
     
    },
    {
      page: "project",
      description: "i will start doing this project",
      status: "inprogerss",
       
    },
    {
      page: "Project ",
      description: "the project i am not pareticpating",
      status: "unactive",
       
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
  };
    return (
      <div className="Memebers">
        <Typography.Title level={8} ><FaUser/><> </> Personal data  <h4>you can make change into your data</h4></Typography.Title>
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
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}

      </div>
    );
  }
  export default Members;


 
 
 
  