import React from "react";
import { Typography } from "antd";
import "./event.css";
import { FaCalendarCheck } from "react-icons/fa";
import img from './image/seminar.jpg';
import img1 from './image/seminar1.jpg';
import img2 from './image/seminar2.jpg';
import img3 from './image/semianr3.jpg';
 
function EventPage() {
 return (
    <div className="EventPage">
      <Typography.Title level={9}>
        <FaCalendarCheck /> Event Page
      </Typography.Title>
      <div className="event-page-container">
        <div className="event-page-card">
          <div className="event-page-card-image">
          <img src={img} alt="woman" />
            
          </div>
          <div className="event-page-card-content">
            <Typography.Title level={4}>projects</Typography.Title>
            <Typography.Text>about the projects and how we will successed</Typography.Text>
            <br />
            <Typography.Text>Date: 30/01/2024</Typography.Text>
            <br />
            <Typography.Text>Time: 4:20pm LT</Typography.Text>
            <br />
            <Typography.Text>Location: Adama, Ethiopia</Typography.Text>
            <br />
          </div>
          
        </div>
        <div className="event-page-card">
          <div className="event-page-card-image">
          <img src={img1} alt="woman" />
          </div>
          <div className="event-page-card-content">
            <Typography.Title level={4}>skill share</Typography.Title>
            <Typography.Text>skill share with the team</Typography.Text>
            <br />
            <Typography.Text>Date: 20/09/2024</Typography.Text>
            <br />
            <Typography.Text>Time: 2:00pm LT</Typography.Text>
            <br />
            <Typography.Text>Location: Adama, Ethiopia</Typography.Text>
            <br />
          </div>
          
        </div>
        <div className="event-page-card">
          <div className="event-page-card-image">
          <img src={img2} alt="woman" />
          </div>
          <div className="event-page-card-content">
            <Typography.Title level={4}>seminar</Typography.Title>
            <Typography.Text>to share expriance</Typography.Text>
            <br />
            <Typography.Text>Date: 12/03/2023</Typography.Text>
            <br />
            <Typography.Text>Time: 12:30pm LT</Typography.Text>
            <br />
            <Typography.Text>Location: Adama, Ethiopia</Typography.Text>
            <br />
          </div>
          
        </div><div className="event-page-card">
          <div className="event-page-card-image">
          <img src={img3} alt="woman" />
          </div>
          <div className="event-page-card-content">
            <Typography.Title level={4}>seminar</Typography.Title>
            <Typography.Text>to share expriance</Typography.Text>
            <br />
            <Typography.Text>Date: 12/09/2023</Typography.Text>
            <br />
            <Typography.Text>Time: 2:00pm LT</Typography.Text>
            <br />
            <Typography.Text>Location: Adama, Ethiopia</Typography.Text>
            <br />
          </div>
          
        </div>
      </div>
      
    </div>
 );
}

export default EventPage;