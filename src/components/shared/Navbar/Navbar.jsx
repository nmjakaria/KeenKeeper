import React from 'react';
import { HiOutlineHome } from "react-icons/hi2";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { NavLink } from 'react-router';

const Navbar = () => {
    // Shared active and base styles for NavLinks
    const navLinkClasses = ({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            isActive 
                ? "bg-[#244D3F] text-white shadow-md" 
                : "text-slate-600 hover:text-[#244D3F] hover:bg-slate-50"
        }`;

    const Links = (
        <>
            <li>
                <NavLink to="/" className={navLinkClasses}>
                    <HiOutlineHome className="text-xl" />
                    <span>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/timeline" className={navLinkClasses}>
                    <MdOutlineAccessTime className="text-xl" />
                    <span>Timeline</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/stats" className={navLinkClasses}>
                    <IoStatsChartOutline className="text-xl" />
                    <span>Stats</span>
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 container mx-auto py-4 px-4 sticky top-0 z-50">
            {/* Brand Section */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                        {Links}
                    </ul>
                </div>
                <NavLink to="/" className="text-3xl font-bold flex items-center">
                    <span className="text-[#1A1A1A]">Keen</span>
                    <span className="text-[#244D3F]">Keeper</span>
                </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {Links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;