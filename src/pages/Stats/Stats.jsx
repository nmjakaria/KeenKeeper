import React from 'react';
import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useAction } from '../../Context/ActionContext';

const Stats = () => {
    const { interactions } = useAction();
    
    const counts = {
        call: 0,
        text: 0,
        video: 0
    };

    interactions.forEach(element => {
        if (counts[element.type] !== undefined) {
            counts[element.type]++;
        }
    });

    const data = [
        { name: 'Calls', value: counts.call, color: '#244D3F' },
        { name: 'Texts', value: counts.text, color: '#10B981' },
        { name: 'Videos', value: counts.video, color: '#F59E0B' },
    ];

    const totalInteractions = counts.call + counts.text + counts.video;

    return (
        <div className='container mx-auto p-6'>
            <div className="bg-white rounded-4xl p-8 shadow-sm border border-slate-100">
                <div className="mb-8">
                    <h2 className="text-3xl font-black text-slate-800 tracking-tight">Friendship Analytics</h2>
                    <p className="text-slate-400 font-medium">Visualizing your connection consistency</p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-around gap-8">
                    {/* Chart Section */}
                    <div className="relative w-full max-w-75 aspect-square">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    innerRadius="75%"
                                    outerRadius="100%"
                                    paddingAngle={8}
                                    dataKey="value"
                                    stroke="none"
                                    cornerRadius={10}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip 
                                    contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        
                        {/* Middle Text Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-4xl font-black text-slate-800">{totalInteractions}</span>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total</span>
                        </div>
                    </div>

                    {/* Custom Legend Section */}
                    <div className="flex flex-col gap-4 w-full md:w-auto">
                        {data.map((item, index) => (
                            <div key={index} className="flex items-center justify-between md:justify-start gap-10 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                    <span className="font-bold text-slate-700">{item.name}</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-xl font-black text-slate-800">{item.value}</span>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                                        {totalInteractions > 0 ? ((item.value / totalInteractions) * 100).toFixed(0) : 0}%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;