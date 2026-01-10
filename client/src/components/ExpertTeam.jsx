import React from 'react';

const team = [
    {
        name: "Senthilkumar S K",
        role: "Senior BIW Project Lead",
        exp: "16+ Years | OEM & Tier-1 Programs",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Gopala Krishna Bikumalla",
        role: "Senior Automotive System Engineer",
        exp: "18+ Years | Global OEM Programs",
        image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Sumit K. Tripathi",
        role: "Senior Automotive Seating Design Specialist",
        exp: "13+ Years | OEM & Tier-1 Seating Programs",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
    }
];

const ExpertTeam = () => {
    return (
        <section className="py-20 bg-white font-dm-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h3 className="text-brand-primary font-bold tracking-wider text-sm uppercase mb-2">OUR TEAM</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Meet Our <span className="text-brand-cyan">Expert Team</span>
                    </h2>
                    <p className="mt-4 text-gray-600">Empowering Engineers | Transforming Careers with Industry Experience</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow group">
                            <div className="h-64 bg-[#a5b4fc] relative overflow-hidden flex items-end justify-center">
                                {/* Using a placeholder for the person cut-out look */}
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-56 w-56 object-cover rounded-full border-4 border-white transform translate-y-8 shadow-lg group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-8 text-center pt-12 text-content">
                                <h3 className="text-xl font-bold text-brand-primary mb-2">{member.name}</h3>
                                <p className="text-brand-accent font-medium text-sm mb-4">{member.role}</p>
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="text-gray-500 text-sm">{member.exp}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertTeam;
