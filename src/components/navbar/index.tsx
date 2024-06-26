"use client";

import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { ProfileMenu } from './profile.menu.component';

const Navbar = () => {

  const onToggleMenu = () => { 
    isModalOpen.current = !isModalOpen.current;
    if(isModalOpen.current === true){
      document.body.style.overflow = "hidden"
    } else{
      document.body.style.overflow = "visible"
    }
    containerMenuMobile.current?.classList.toggle('top-[0%]')
  };

  const isModalOpen = useRef<boolean>(false);
  const containerMenuMobile = useRef<HTMLDivElement>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const isAuthenticated = true;

  return (
    <header>
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <Link href={"/"}>
            <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="Logo" />
          </Link>
        </div>
        <div ref={containerMenuMobile} className="nav-links duration-500 bg-white md:static absolute md:min-h-fit min-h-[100vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <button onClick={onToggleMenu} className="text-3xl cursor-pointer md:hidden">Fechar</button>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-gray-500" href="#">Products</a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">Solution</a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">Resource</a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">Developers</a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          {isAuthenticated 
            ?  
              <div className='relative flex flex-col items-end'>
                <div className="p-5 bg-orange-300 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer" onClick={() => setShowProfileMenu(oldState => !oldState)}>
                  <span className="text-white font-bold">C</span>
                </div>
                <div className='absolute top-11'>
                  {showProfileMenu && (<ProfileMenu/>)}
                </div>
              </div>

            :
              <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                <Link href={"authentication"}>
                  Sign in
                </Link>
              </button>
          }

          <button onClick={onToggleMenu} className="text-3xl cursor-pointer md:hidden">Open</button>
        </div>
      </nav>
    </header>
  );
};

export { Navbar }