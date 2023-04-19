import React, {useState} from 'react'
import { CiMenuBurger, CiSquareRemove } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BiCodeAlt, BiHome, BiGitBranch, BiPhone } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
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
            <div onClick={handleClick} className='md:hidden z-10'>
                <HiMenuAlt3 />
            </div>
            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute font-light top-0 left-0 w-full h-screen bg-[#0A1828] flex flex-col justify-center items-center'}>
                <li className='py-4 text-2xl'>HOME</li>
                <li className='py-4 text-2xl'>ABOUT</li>
                <li className='py-4 text-2xl'>SKILLS</li>
                <li className='py-4 text-2xl'>PROJECTS</li>
                <li className='py-4 text-2xl'>CONTACT</li>
            </ul>
        </div>
    )
}

export default Navbar