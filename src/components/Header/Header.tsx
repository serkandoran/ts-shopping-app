"use client"
import React from 'react'

const Header = () => {
  
  return <div className="
                        header-container flex justify-between items-center 
                        h-16 w-full px-12 
                        bg-slate-500 text-white text-2xl
                        sticky top-0
                      ">
    <ul className="p-4 cursor-pointer hover:mb-4 transition-all">
    <li>Home</li>
   </ul>
   <div className="p-4 cursor-pointer hover:mb-4 transition-all">
    <span>Login</span>
   </div>
  </div>
}

export default Header