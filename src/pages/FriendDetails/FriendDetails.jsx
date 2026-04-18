import React from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';
import {  
    Archive, 
    Trash2, 
    Phone, 
    MessageSquare, 
    Video, 
    Edit3,
    ArrowLeft, 
    BellRing
} from 'lucide-react';

const FriendDetails = () => {
    const { id } = useParams();
    const friends = useLoaderData();
    const navigate = useNavigate();

    // Find the specific friend based on the URL ID
    const exactFriend = friends.find(friend => friend.id === parseInt(id));

    // Loading/Error State
    if (!exactFriend) {
        return (
            <div className="min-h-screen bg-white flex flex-col justify-center items-center gap-4">
                <h1 className="text-4xl font-bold">Friend Not Found</h1>
                <button onClick={() => navigate(-1)} className="btn btn-outline text-white">
                    Go Back
                </button>
            </div>
        );
    }

    // Dynamic style for the status badge
    const getStatusClass = (status) => {
        switch (status?.toLowerCase()) {
            case 'overdue': return 'badge-error text-white';
            case 'on-track': return 'bg-[#244D3F] text-white border-none';
            default: return 'bg-orange-400 text-white border-none';
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen pb-20">
            <div className="container mx-auto p-4 lg:p-10">
                
                {/* Back Button */}
                <button 
                    onClick={() => navigate(-1)} 
                    className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft size={20} /> Back to Shelf
                </button>

                {/* Main Bento Grid Layout */}
                <div className="grid grid-cols-12 gap-6">

                    {/* LEFT COLUMN: Profile & Actions */}
                    <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
                        
                        {/* Profile Summary Card */}
                        <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl">
                            <div className="avatar mb-6">
                                <div className="w-32 rounded-full ring ring-[#244D3F] ring-offset-base-100 ring-offset-4">
                                    <img src={exactFriend.picture} alt={exactFriend.name} />
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-800">{exactFriend.name}</h2>
                            
                            <div className="mt-4 flex flex-wrap justify-center gap-2">
                                <span className={`badge font-bold px-4 py-3 ${getStatusClass(exactFriend.status)}`}>
                                    {exactFriend.status}
                                </span>
                                <span className="badge bg-green-100 text-[#244D3F] border-none font-bold px-4 py-3">
                                    {exactFriend.category || 'FRIEND'}
                                </span>
                            </div>

                            <p className="mt-8 text-slate-500 italic text-lg leading-relaxed">
                                "{exactFriend.bio || 'No bio provided for this connection.'}"
                            </p>
                            
                            <div className="mt-6 pt-6 border-t border-slate-100 w-full text-center">
                                <p className="text-slate-400 text-sm">Preferred Channel</p>
                                <p className="text-slate-700 font-semibold">{exactFriend.email}</p>
                            </div>
                        </div>

                        {/* Quick Actions Sidebar */}
                        <div className="flex flex-col gap-3">
                            <button className="btn bg-white border-none hover:bg-slate-100 text-slate-700 normal-case justify-start gap-4 h-16 rounded-2xl shadow-md transition-all active:scale-95"> 
                                <BellRing size={20} className="text-blue-500"/>
                                <span className="font-bold">Snooze 2 Weeks</span>
                            </button>
                            <button className="btn bg-white border-none hover:bg-slate-100 text-slate-700 normal-case justify-start gap-4 h-16 rounded-2xl shadow-md transition-all active:scale-95">
                                <Archive size={20} className="text-amber-500" /> 
                                <span className="font-bold">Archive Connection</span>
                            </button>
                            <button className="btn bg-white border-none hover:bg-red-50 text-red-500 normal-case justify-start gap-4 h-16 rounded-2xl shadow-md transition-all active:scale-95">
                                <Trash2 size={20} /> 
                                <span className="font-bold">Remove Friend</span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Statistics & Goals */}
                    <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">

                        {/* Top Stats Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white p-8 rounded-3xl shadow-lg text-center border-b-4 border-[#244D3F]">
                                <h3 className="text-5xl font-black text-[#244D3F]">{exactFriend.days_since_contact}</h3>
                                <p className="text-slate-500 font-medium mt-2">Days Since Contact</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-lg text-center border-b-4 border-[#244D3F]">
                                <h3 className="text-5xl font-black text-[#244D3F]">{exactFriend.goal}</h3>
                                <p className="text-slate-500 font-medium mt-2">Frequency Goal</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-lg text-center border-b-4 border-[#244D3F]">
                                <h3 className="text-2xl xl:text-3xl font-black text-[#244D3F] py-2">
                                    {exactFriend.next_due_date || 'TBD'}
                                </h3>
                                <p className="text-slate-500 font-medium mt-2">Next Reach Out</p>
                            </div>
                        </div>

                        {/* Relationship Goal Card */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg flex justify-between items-center border border-slate-50">
                            <div>
                                <h3 className="text-xl font-bold text-[#244D3F] mb-1">Relationship Goal</h3>
                                <p className="text-slate-500 text-lg">
                                    Maintain connection every <span className="font-bold text-slate-800">{exactFriend.goal} days</span>
                                </p>
                            </div>
                            <button className="btn btn-circle btn-ghost border border-slate-200 text-slate-400 hover:text-[#244D3F]">
                                <Edit3 size={20} />
                            </button>
                        </div>

                        {/* Quick Check-In Interface */}
                        <div className="bg-white p-10 rounded-3xl shadow-lg">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-2xl font-bold text-slate-800">Quick Check-In</h3>
                                <span className="text-slate-400 text-sm">Last contacted: {exactFriend.last_interacted || 'Unknown'}</span>
                            </div>
                            
                            <div className=" grid grid-cols-3 gap-6">
                                <button className="group bg-slate-100 flex flex-col items-center justify-center gap-4 p-8 border-2 border-slate-50 rounded-3xl hover:border-[#244D3F] hover:bg-slate-50 transition-all active:scale-95">
                                    <div className="p-4 bg-slate-300 rounded-full group-hover:bg-[#244D3F] group-hover:text-white transition-colors">
                                        <Phone size={28} />
                                    </div>
                                    <span className="font-bold text-slate-700">Call</span>
                                </button>
                                
                                <button className="group bg-slate-100 flex flex-col items-center justify-center gap-4 p-8 border-2 border-slate-50 rounded-3xl hover:border-[#244D3F] hover:bg-slate-50 transition-all active:scale-95">
                                    <div className="p-4 bg-slate-300 rounded-full group-hover:bg-[#244D3F] group-hover:text-white transition-colors">
                                        <MessageSquare size={28} />
                                    </div>
                                    <span className="font-bold text-slate-700">Text</span>
                                </button>
                                
                                <button className="group bg-slate-100 flex flex-col items-center justify-center gap-4 p-8 border-2 border-slate-50 rounded-3xl hover:border-[#244D3F] hover:bg-slate-50 transition-all active:scale-95">
                                    <div className="p-4 bg-slate-300 rounded-full group-hover:bg-[#244D3F] group-hover:text-white transition-colors">
                                        <Video size={28} />
                                    </div>
                                    <span className="font-bold text-slate-700">Video</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;