import React from 'react';

const stats = [
    { label: 'Years Of Experiences', value: '7+' },
    { label: 'Trained Engineers', value: '5000+' },
    { label: 'Hiring Partners', value: '500+' },
    { label: 'Google Rating', value: '4.8' },
];

const Stats = () => {
    return (
        <div className="bg-brand-primary py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-4 border-r border-white/10 last:border-0 hover:-translate-y-1 transition-transform">
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-cyan mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm sm:text-base text-gray-300 font-medium tracking-wide uppercased">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
