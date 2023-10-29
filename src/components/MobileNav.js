import React, { useState } from 'react';

// import icons

import { IoMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/cg'

// import link 
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// import motion


const MobileNav = () => {
  return <nav >
    {/* nav open button */}
    <div className='text-3x1 cursor-pointer'>
      <CgMenuRight />
    </div>
    {/* menu */}
    <div className='bg-white shadow-2x1 w-full absolute top-0 rigth-0 max-w-xs h-screen z-20'>
      {/* icon */}
      <div className='text-4x1 absolute z-30 left-4 top-14 text-primary cursor-pointer'>
        <IoMdClose />
      </div>
      {/* menu list */}
      <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary' >
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/about'>Quien soy</Link>
        </li>
        <li>
          <Link to='/portfolio'>Mis trabajos</Link>
        </li>
        <li>
          <Link to='/contact'>Contacto</Link>
        </li>
      </ul>

    </div>

  </nav>;
};

export default MobileNav;
