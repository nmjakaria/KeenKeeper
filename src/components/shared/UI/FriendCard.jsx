import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({ friend }) => {
    const getStatusClass = (status) => {
        const s = status?.toLowerCase().trim();
        
        if (s === 'overdue') return 'bg-red-500 text-white border-none';
        if (s === 'on_track') return 'bg-[#244D3F] text-white border-none';
        
        return 'bg-orange-400 text-white border-none';
    };

    return (
        <Link to={`/friendDetails/${friend.id}`} className="block no-underline">
            <div className="bg-white rounded-3xl p-8 flex flex-col items-center shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                {/* Profile Image */}
                <div className="avatar mb-4">
                    <div className="w-24 rounded-full ring ring-gray-100 ring-offset-base-100 ring-offset-2">
                        <img src={friend.picture} alt={friend.name} />
                    </div>
                </div>

                {/* Friend Info */}
                <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-slate-800">{friend.name}</h3>
                    <p className="text-slate-400 text-sm font-medium mt-1">{friend.lastInteracted}</p>
                </div>

                {/* Category Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6 grow">
                    {friend.tags?.map((tag, index) => (
                        <span
                            key={index}
                            className="badge bg-green-50 text-green-700 border-none font-bold text-[10px] px-3 py-3 uppercase tracking-widest"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Status Indicator */}
                <div className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-tighter shadow-sm ${getStatusClass(friend.status)}`}>
                    {friend.status}
                </div>
            </div>
        </Link>
    );
};

export default FriendCard;