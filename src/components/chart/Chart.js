import React from 'react'
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Chart.css"
function Chart({title,data,dataKey,grid}) {
    
      
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name"stroke="blue"/>
                 <Line type="monotone"dataKey={dataKey}stroke="blue"/>
                 <Tooltip/>
                 {grid&&<CartesianGrid stroke="lightgray"></CartesianGrid>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
