import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('data-1.json')
            .then(response => response.json())
            .then(data => setInfo(data))
    }, [])
    return (
        <div>
            <h1 className='main-head'>Let's see our company's analysis bars</h1>
            <div className='graphs'>
                <div>
                    <h3>Investment LineChart</h3>
                    {
                        <LineChart width={500} height={300} data={info}>
                            <Line dataKey={'investment'}></Line>
                            <XAxis dataKey={'month'}></XAxis>
                            <YAxis></YAxis>
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                        </LineChart>
                    }
                </div>
                <div>
                    <h3>Revenue BarChart</h3>
                    {
                        <BarChart width={500} height={300} data={info}>
                            <Bar dataKey={'revenue'} fill="#00D84A"></Bar>
                            <YAxis></YAxis>
                            <XAxis dataKey={'month'}></XAxis>
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                        </BarChart>
                    }
                </div>
                <div>
                    <h3>Sell AreaChart</h3>
                    {
                        <AreaChart
                            width={500}
                            height={400}
                            data={info}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
                            <Legend></Legend>
                        </AreaChart>
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;