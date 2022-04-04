import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { Bar, BarChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('data-1.json')
            .then(response => response.json())
            .then(data => setInfo(data))
    }, [])
    return (
        <div>
            <h1>This is dashboard page</h1>
            <div className='graphs'>
                {
                    <LineChart width={500} height={300} data={info}>
                        <Line dataKey={'investment'}></Line>
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                    </LineChart>
                }
                {
                    <BarChart width={500} height={300} data={info}>
                        <Bar dataKey={'revenue'} fill="#00D84A"></Bar>
                        <YAxis></YAxis>
                        <XAxis dataKey={'month'}></XAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                    </BarChart>
                }
                {
                    <PieChart width={400} height={400}>
                        <Pie 
                        dataKey={'sell'}
                        isAnimationActive={true}
                        data={info}
                        cx='50%'
                        cy='50%'
                        outerRadius={150}
                        fill='#00D84A'
                        ></Pie>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                    </PieChart>
                }
            </div>
        </div>
    );
};

export default Dashboard;