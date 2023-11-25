import { Menu } from "antd";
import React from "react";
import {
  AppstoreOutlined,
 
   
} from "@ant-design/icons";
import { FaAppStore, FaCalendarCheck, FaEvernote, FaInbox, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Item from "antd/es/list/Item";
function SideMenu() {
  const navigate = useNavigate()
    return (
      <div className="SideMenu">
       <Menu 
       onClick={(item)=>{
        navigate(item.key)
       }}
       items={[
        {
          label:"Dashbaord",
          icon: <AppstoreOutlined />,
          key:'/'
        },{
          label:"Events",
          icon:< FaCalendarCheck/>,
          key:'/events'
        },
        {
          label:"Members",
          icon:<FaUser/>,
          key:'/members'
        },
        {
          label:"Others",
          key:'/others',
          icon:<FaInbox/>
        }
         
       ]}
       >
       </Menu>
      </div>
    );
  }
  export default SideMenu;
  