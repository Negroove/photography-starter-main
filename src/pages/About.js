import React from 'react';
// import images
import WomanImg from '../img/about/woman.png'
// import link
import { Link } from 'react-router-dom';

const About = () => {
  return <section className='section'>

    <div className=' container mx-auto h-full relative'>
      {/* text & img wrapper */}
      <div className='flex flex-col lg:flex-row h-full items-center
      justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        {/* imagen */}
        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none
        overflow-hidden'>
          <img src={WomanImg} alt=''></img>
        </div>
        <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col
         justify-center items-center lg:items-start'>
          <h1 className='h1'>Quien soy</h1>
          <p className='mb-12 max-x-sm'>Lorem ipsum dolor sit amet, consectetur adipi
            scing elit. Nulla feugiat sit amet massa ut suscipit.
            Maecenas at porta nisl. Pellentesque iaculis egestas cursus.
            Phasellus quam nisi, facilisis eget dapibus rhoncus, iaculis vel sem. Nunc iaculis dolor
            nec nibh consectetur placerat.
            Sed varius lacus et metus
            <br />
            <br />
            Pellentesque iaculis egestas cursus.
            Phasellus quam nisi, facilisis eget dapibus rhoncus, iaculis vel sem. Nunc iaculis dolor
            nec nibh consectetur placerat.
          </p>
          <Link className='btn' to={'/portfolio'}>mira mi trabajo :) </Link>
        </div>
      </div>
    </div>

  </section>;
};

export default About;
