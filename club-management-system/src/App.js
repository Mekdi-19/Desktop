import { Space } from "antd";
import React from "react";
import "./App.css";
import AppFooter from "./Components/AppFooters";
import AppHeader from "./Components/AppHeader";
import SideMenu from "./Components/SideMenu";
import PageContent from "./Components/PageContent";
 

function App() {
  return (
     <div className="App">
      <AppHeader/>
      <Space>
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
      <AppFooter/>

     </div>
  );
}
export default App;
