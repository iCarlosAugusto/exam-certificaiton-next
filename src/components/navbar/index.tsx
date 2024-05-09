"use client";

import React, { useRef } from 'react';

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

  return (
    <header>
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="Logo" />
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
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
          <button onClick={onToggleMenu} className="text-3xl cursor-pointer md:hidden">Open</button>
        </div>
      </nav>
    </header>
  );
};

export { Navbar }