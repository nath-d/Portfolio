import React from 'react'
import './Sidebar.css'
import { ImNewspaper } from "react-icons/im";
import { FiHome, FiUser, FiSlack } from "react-icons/fi";
import { BiCodeAlt, BiHome, BiGitBranch, BiPhone } from "react-icons/bi";


const Sidebar = () => {
    return (
        <div>
            <div class="relative min-h-screen md:flex" data-dev-hint="container">
                <input type="checkbox" id="menu-open" class="hidden" />

                <label for="menu-open" class="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden" data-dev-hint="floating action button">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>

                <header class="bg-gray-600 text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
                    <a href="#" class="block p-4 text-white font-bold whitespace-nowrap truncate">
                        Your App is cool
                    </a>

                    <label for="menu-open" id="mobile-menu-button" class="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
                        <svg id="menu-open-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg id="menu-close-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </label>
                </header>

                <aside id="sidebar" class="bg-black text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto sm:w-screen sm:h-screen lg:w-3/12" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
                    <div class="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
                        <a href="#" class="text-white flex items-center space-x-2 px-4" title="Your App is cool">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                            <span class="text-2xl font-extrabold whitespace-wrap truncate">Debarshi Nath</span>
                        </a>

                        <nav data-dev-hint="main navigation">
                            <a href="#" class="-space-x-2 mt-52 flex items-center py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white justify-center">
                            <div className="w-2/4 flex flex-shrink-0 items-center sm:mx-0 sm:h-10 sm:w-10">
                                    <BiHome
                                        className="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className='w-2/4'>Home</div>
                            </a>
                            <a href="#" class="flex items-center py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white justify-center">
                                <div className="w-2/4 flex flex-shrink-0 items-center sm:mx-0 sm:h-10 sm:w-10">
                                    <FiUser
                                        className="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className='w-2/4'>About</div>
                            </a>
                            <a href="#" class="flex items-center py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white justify-center">
                                <div className="w-2/4 flex flex-shrink-0 items-center sm:mx-0 sm:h-10 sm:w-10">
                                    <BiCodeAlt
                                        className="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </div>
                                <span className='w-2/4'>Skills</span>
                            </a>
                            <a href="#" class="flex items-center py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white justify-center">
                                <div className="w-2/4 flex flex-shrink-0 items-center sm:mx-0 sm:h-10 sm:w-10">
                                    <BiGitBranch
                                        className="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </div>
                                <span className='w-2/4'>Projects</span>
                            </a>
                            <a href="#" class="flex items-center py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white justify-center">
                                <div className="w-2/4 flex flex-shrink-0 items-center sm:mx-0 sm:h-10 sm:w-10">
                                    <BiPhone
                                        className="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </div>
                                <span className='w-2/4'>Contact Me</span>
                            </a>
                            {/* <a href="#" class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                <span class="ml-6">Without Icon</span>
                            </a>
                            <a href="#" class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white group">
                                <span class="w-4 h-4 flex-shrink-0 border border-gray-600 rounded group-hover:border-gray-400 transition duration-200"></span>
                                <span>Without Icon And a bit longer than usual</span>
                            </a> */}
                        </nav>
                    </div>

                    <nav data-dev-hint="second-main-navigation or footer navigation">
                        <a href="#" class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                            asd
                        </a>
                        <a href="#" class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                            asd
                        </a>
                        <a href="#" class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                            asd
                        </a>
                    </nav>
                </aside>

                <main id="content" class="flex-1 p-6 lg:px-8">
                    <div class="max-w-7xl mx-auto">
                        <div class="px-4 py-6 sm:px-0">
                            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Sidebar