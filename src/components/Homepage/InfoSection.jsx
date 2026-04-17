import React from 'react';

const InfoSection = ({friend}) => {
    console.log(friend);
    const stats = [
        { id: 1, value: "10", label: "Total Friends" },
        { id: 2, value: "3", label: "On Track" },
        { id: 3, value: "6", label: "Need Attention" },
        { id: 4, value: "12", label: "Interactions This Month" },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div 
                        key={stat.id} 
                        className="bg-white border border-gray-100 rounded-2xl p-10 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        {/* The Large Numeric Value */}
                        <h2 className="text-5xl font-bold text-[#244D3F] mb-4">
                            {stat.value}
                        </h2>
                        
                        {/* The Label */}
                        <p className="text-slate-500 text-lg font-medium text-center">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoSection;