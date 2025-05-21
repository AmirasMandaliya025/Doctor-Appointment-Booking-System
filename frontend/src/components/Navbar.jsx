import React from 'react'
import { NavLink } from 'react-router-dom'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => {

    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)


  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400'>
         <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-center gap-5 font-medium'>
            <NavLink 
                to="/" 
                className={({isActive}) => 
                    isActive 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-gray-600 hover:text-blue-600'
                }
            >
                <li>HOME</li>
            </NavLink>
            <NavLink 
                to="/doctors" 
                className={({isActive}) => 
                    isActive 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-gray-600 hover:text-blue-600'
                }
            >
                <li>ALL DOCTORS</li>
            </NavLink>
            <NavLink 
                to="/about" 
                className={({isActive}) => 
                    isActive 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-gray-600 hover:text-blue-600'
                }
            >
                <li>ABOUT</li>
            </NavLink>
            <NavLink 
                to="/contact" 
                className={({isActive}) => 
                    isActive 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-gray-600 hover:text-blue-600'
                }
            >
                <li>CONTACT</li>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {token ? 
            <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8  rounded-full' src={assets.profile_pic} alt="" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
                </div>
            : 
            <button onClick={() => navigate('/login')} className='bg-blue-600 text-white px-8 py-3 rounded-full font-light hidden md:block'>
                    Create Account
                </button>
            }
            
        </div>
    </div>
  )
}

export default Navbar