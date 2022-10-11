import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, ComposedChart, Funnel, FunnelChart, LabelList, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import { TopicContext } from '../Main/Main';

const Statistics = () => {
    const [topics] = useContext(TopicContext);
    // console.log(topics);
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className="text-2xl text-slate-500 font-semibold">We have some statistics</h1>
            <h2 className="text-xl text-red-500 font-semibold">Total Quiz VS Topic Name</h2>
            <div className='grid md:grid-cols-2  mt-9 gap-2'>
                <ComposedChart
                    width={350}
                    height={300}
                    data={topics}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="total" stroke="#ff7300" />
                </ComposedChart>
                <PieChart width={350} height={300}>
                    <Pie
                        dataKey="total"
                        isAnimationActive={true}
                        data={topics}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#F90830"
                        label
                    />
                    <Tooltip />
                </PieChart>
                <LineChart
                    width={350}
                    height={300}
                    data={topics}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
                <BarChart width={350} height={300} data={topics}>
                    <Tooltip></Tooltip>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
                <FunnelChart width={350} height={300}>
                    <Tooltip />
                    <Funnel
                        dataKey="total"
                        data={topics}
                        isAnimationActive
                    >
                        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                    </Funnel>
                </FunnelChart>
            </div>
        </div>

    );
};

export default Statistics;