import { Plus } from 'lucide-react';
import React from 'react';

const Banner = () => {
  return (
    <div className="w-full bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-5xl font-bold text-[#1e293b] mb-6 tracking-tight">
          Friends to keep close in your life
        </h1>

        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the 
          relationships that matter most.
        </p>

        {/* Call to Action Button */}
        <button className="btn bg-[#244D3F] hover:bg-[#1a382e] text-white border-none px-8 py-4 h-auto rounded-md flex items-center gap-2 mx-auto text-lg transition-all shadow-lg active:scale-95">
          <Plus size={20} strokeWidth={3} />
          <span>Add a Friend</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;