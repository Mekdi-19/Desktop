 
import React from "react";
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

 
    function Dashbaord() {
      const data = [
      {
      name: 'java',
      'no of project': 40,
      'completed project': 24,
      amt: 24,
      },
      {
      name: 'python',
      'no of project': 30,
      'completed project': 13,
      amt: 22,
      },
      {
      name: 'C++',
      'no of project': 20,
      'completed project': 9,
      amt: 20,
      },
      {
      name: 'C',
      'no of project': 27,
      'completed project': 3,
      amt: 200,
      },
      {
      name: 'node js',
      'no of project': 189,
      'completed project': 48,
      amt: 210,
      },
      {
      name: 'node',
      'no of project': 23,
      'completed project': 18,
      amt: 25,
      },
      {
      name: 'nojs',
      'no of project': 43,
      'completed project': 34,
      amt: 21,
      },
      ];
      
      return (
      <main className='main-container'>
      <div className='main-title'>
      <h3>DASHBOARD</h3>
      </div>
      
      members Dashbaord
       
        <div className='main-cards'>
          <div className='card'>
            <div className='card-inner'>
              <h3>members</h3>
              <BsPeopleFill className='card_icon' />
            </div>
            <h1>18 active members</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>event </h3>
              <BsFillGrid3X3GapFill className='card_icon' />
              
            </div>
            <h1>12</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>add members</h3>
              <BsPeopleFill className='card_icon' />
            </div>
            <h1>33</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>ALERTS</h3>
              <BsFillBellFill className='card_icon' />
            </div>
            <h1>42</h1>
          </div>
        </div>
      
        <div className='charts'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='no of project' fill='#8884d8' />
              <Bar dataKey='completed project' fill='#82ca9d' />
            </BarChart>
          </ResponsiveContainer>
      
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='no of project' stroke='#8884d8' activeDot={{ r: 8 }} />
              <Line type='monotone' dataKey='completed project' stroke='#82ca9d' />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
      );
      };
export default Dashbaord;