import React from 'react';
import { useAction } from '../../Context/ActionContext';
import Call from '../../components/shared/UI/Call';
import Text from '../../components/shared/UI/Text';
import Video from '../../components/shared/UI/Video';

const Timeline = () => {
    const { interactions, filter, setFilter } = useAction();

    const filteredData = interactions.filter(item => {
        if (filter === 'all') return true;
        return item.type === filter;
    });

    return (
        <div className='container mx-auto p-4'>
            {/* Filter Dropdown */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-slate-800">Timeline</h2>
                <select 
                    className="select select-bordered w-full max-w-xs rounded-xl font-medium"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">All Activities</option>
                    <option value="call">Calls</option>
                    <option value="text">Messages</option>
                    <option value="video">Video Calls</option>
                </select>
            </div>

            {/* List Display */}
            <div className="space-y-4">
                {filteredData.length > 0 ? (
                    filteredData.map((item) => {
                        if (item.type === 'call') return <Call key={item.id} data={item} />;
                        if (item.type === 'text') return <Text key={item.id} data={item} />;
                        if (item.type === 'video') return <Video key={item.id} data={item} />;
                        return null;
                    })
                ) : (
                    <div className="bg-white p-10 rounded-3xl text-center border border-dashed border-slate-300 text-slate-400">
                        No history found for "{filter}"
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timeline;