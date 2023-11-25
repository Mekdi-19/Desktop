import React from "react";
import { BellFilled, MailOutlined ,UserOutlined} from "@ant-design/icons";
import { useEffect, useState } from "react";
import {Badge, Space, Typography} from "antd"
function AppHeader() {
    return (
      <div className="AppHeader">
         
         <Typography.Title >club members management </Typography.Title>
         <Space>
            <Badge count={10} dot>
            <MailOutlined
            style={{ fontSize: 24 }}  
          />
            </Badge>
        <Badge count={20}>
        <BellFilled
            style={{ fontSize: 24 }} 
          />
        </Badge>
        <Badge>
            <UserOutlined
            style={{ fontSize: 24 }}  
          />
            </Badge>
         
      </Space>
      </div>
    );
  }
  export default AppHeader;
  