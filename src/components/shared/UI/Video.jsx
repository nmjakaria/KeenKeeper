import { VideoIcon } from 'lucide-react';
import React from 'react';

const Video = ({data}) => {
    return (
        <div className="flex items-center gap-6 bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-4">
        <div className="p-3 bg-blue-900 text-white rounded-xl"><VideoIcon size={24} /></div>
        <div>
            <h3 className="font-bold text-slate-800">Video with {data.friend.name}</h3>
            <p className="text-xs text-slate-500">{data.date.toLocaleString()}</p>
        </div>
    </div>
    );
};

export default Video;