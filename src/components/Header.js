import React from 'react';

// importo componentes

import Socials from './Socials'
import Logo from '../img/header/logo.svg'
import MobileNav from './MobileNav'

// import link
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='bg-pink-200 fixed w-full px-[30px] 
    lg:px-[100px] z-30 h-[100px] 
    lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* Este es el logo */}
        <Link to={'/'} className='max-w-[200]'>
          <img src={Logo} alt=''></img>
        </Link>
        {/* nav - inicializado oculto - se muestra en escritorio */}
        <nav className='hidden lg:flex gap-x-10 font-semibold'>
          <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>
            Inicio
          </Link>
          <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>
            Contacto
          </Link>
          <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition'>
            Mis Trabajos
          </Link>
          <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>
            Quien soy
          </Link>
        </nav>

      </div>
      <Socials />
      <MobileNav />
    </header>);
};

export default Header;
