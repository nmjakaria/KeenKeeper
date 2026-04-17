import React from 'react';
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Latest X icon

const Footer = () => {
    return (
        <footer className="bg-[#1a3d31] text-white pt-20 pb-10 px-6 mt-20">
            <div className="container mx-auto">
                {/* Top Section: Branding & Info */}
                <div className="text-center mb-16">
                    <h2 className="text-7xl font-bold mb-6 tracking-tight">KeenKeeper</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                </div>

                {/* Social Links Section */}
                <div className="text-center mb-20">
                    <h3 className="text-xl font-semibold mb-6">Social Links</h3>
                    <div className="flex justify-center gap-4">
                        <a href="#" className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="#" className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors">
                            <FaXTwitter size={24} />
                        </a>
                    </div>
                </div>

                {/* Divider Line */}
                <hr className="border-gray-500 opacity-20 mb-8" />

                {/* Bottom Section: Copyright & Legal */}
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm md:text-base">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    
                    <div className="flex gap-8 mt-6 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;