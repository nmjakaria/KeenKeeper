import { MessageSquare } from 'lucide-react';
import React from 'react';

const Text = ({data}) => {
    return (
        <div className="flex items-center gap-6 bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-4">
        <div className="p-3 bg-blue-500 text-white rounded-xl"><MessageSquare size={24} /></div>
        <div>
            <h3 className="font-bold text-slate-800">Texted with {data.friend.name}</h3>
            <p className="text-xs text-slate-500">{data.date.toLocaleString()}</p>
        </div>
    </div>
    );
};

export default Text;