import React from 'react'
import { CiMenuBurger, CiSquareRemove } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BiCodeAlt, BiHome, BiGitBranch, BiPhone } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className='font-mont font-semibold sticky w-full h-[90px] flex justify-end items-center px-4 bg-[#0A1828] text-[#178582]'>
            {/* menu */}

            <ul className='hidden md:flex'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SKILLS</li>
                <li>PROJECTS</li>
                <li>CONTACT</li>
            </ul>

            {/* hamburger */}
            <div className='md:hidden'>
                <HiMenuAlt3 />
            </div>
            {/* mobile menu */}
            <div className='hidden'>

            </div>
        </div>
    )
}

export default Navbar