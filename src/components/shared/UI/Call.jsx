import React from 'react';
import { Phone } from 'lucide-react';

const Call = ({ data }) => (
    <div className="flex items-center gap-6 bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-4">
        <div className="p-3 bg-[#244D3F] text-white rounded-xl"><Phone size={24} /></div>
        <div>
            <h3 className="font-bold text-slate-800">Called with {data.friend.name}</h3>
            <p className="text-xs text-slate-500">{data.date.toLocaleString()}</p>
        </div>
    </div>
);
export default Call;