import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  // Hide button handler
  const [HideButton, setHideButton] = useState(true);
  function handleButton() {
    setHideButton(!HideButton);
    handleMenu();
  }

  function handleMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    if (HideButton) {
      mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }
}

  return (
<nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
        <div className="flex flex-shrink-0 items-center" onClick={handleButton}>
          <img className="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
          <img className="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
          <h1 to className='text-white font-bold ml-3 text-2xl'>Gallery.id</h1>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4 px-3">
            <Link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium text-[20px]" aria-current="page">Home</Link>
            <Link to="/gallery" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium text-[20px]">Gallery</Link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="sm:hidden hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2 text-center">
      <Link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</Link>
      <Link to="/gallery" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Gallery</Link>
    </div>
  </div>
</nav>


  )
}

export default Navbar