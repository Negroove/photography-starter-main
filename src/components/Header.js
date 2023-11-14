import React from 'react';
import { Link } from 'react-router-dom';
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <Link to={'/'} className='max-w-[200]'>
          <img src={Logo} alt=''></img>
        </Link>
        {/* Esta clase oculta el nav en pantallas grandes y lo muestra en otras pantallas */}
        <nav className='hidden xl:flex gap-x-12 font-semibold'>
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
    </header>
  );
};

export default Header;
