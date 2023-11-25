import React from "react";
import { Typography } from "antd";
import "./event.css";
import { FaCalendarCheck } from "react-icons/fa";
 

function EventPage() {
 return (
    <div className="EventPage">
      <Typography.Title level={9}>
        <FaCalendarCheck /> Event Page
      </Typography.Title>
      <div className="event-page-container">
        <div className="event-page-card">
          <div className="event-page-card-image">
            <img src="image/woman.jpg" alt="woman" />
            
          </div>
          <div className="event-page-card-content">
            <Typography.Title level={4}>Event Title</Typography.Title>
            <Typography.Text>Event Description</Typography.Text>
            <br />
            <Typography.Text>Date: DD/MM/YYYY</Typography.Text>
            <br />
            <Typography.Text>Time: HH:MM</Typography.Text>
            <br />
            <Typography.Text>Location: City, Country</Typography.Text>
            <br />
          </div>
          
        </div>
        <div className="event-page-card">
          <div className="event-page-card-image">
          <img src="image/woman.jpg" alt="woman" />
          </div>
          <div className="event-page-card-content">
            <Typography.Title level={4}>Event Title</Typography.Title>
            <Typography.Text>Event Description</Typography.Text>
            <br />
            <Typography.Text>Date: DD/MM/YYYY</Typography.Text>
            <br />
            <Typography.Text>Time: HH:MM</Typography.Text>
            <br />
            <Typography.Text>Location: City, Country</Typography.Text>
            <br />
          </div>
          
        </div>
        <div className="event-page-card">
          <div className="event-page-card-image">
          <img src="image/woman.jpg" alt="woman" />
          </div>
          <div className="event-page-card-content">
            <Typography.Title level={4}>Event Title</Typography.Title>
            <Typography.Text>Event Description</Typography.Text>
            <br />
            <Typography.Text>Date: DD/MM/YYYY</Typography.Text>
            <br />
            <Typography.Text>Time: HH:MM</Typography.Text>
            <br />
            <Typography.Text>Location: City, Country</Typography.Text>
            <br />
          </div>
          
        </div><div className="event-page-card">
          <div className="event-page-card-image">
          <img src="image/woman.jpg" alt="woman" />
          </div>
          <div className="event-page-card-content">
            <Typography.Title level={4}>Event Title</Typography.Title>
            <Typography.Text>Event Description</Typography.Text>
            <br />
            <Typography.Text>Date: DD/MM/YYYY</Typography.Text>
            <br />
            <Typography.Text>Time: HH:MM</Typography.Text>
            <br />
            <Typography.Text>Location: City, Country</Typography.Text>
            <br />
          </div>
          
        </div>
      </div>
      
    </div>
 );
}

export default EventPage;