import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({ friend }) => {
    // Mapping status to colors for dynamic styling
    const statusStyles = {
        "Overdue": "bg-red-500 text-white",
        "Almost Due": "bg-orange-400 text-white",
        "On-Track": "bg-[#244D3F] text-white",
    };

    return (
        <Link to = {`/friendDetails/${friend.id}`}>
            <div className="bg-white rounded-3xl p-8 flex flex-col items-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                {/* Profile Image with Ring Decoration */}
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
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {friend.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="badge bg-green-50 text-green-600 border-none font-bold text-xs px-3 py-3 uppercase tracking-wider"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                {/* Status Indicator */}
                <div className={`px-6 py-1.5 rounded-full text-sm font-bold shadow-sm ${statusStyles[friend.status] || "bg-gray-200"}`}>
                    {friend.status}
                </div>
            </div>
        </Link>
    );
};

export default FriendCard;