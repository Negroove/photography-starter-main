import React from 'react';

import { ImFacebook, ImInstagram, ImYoutube,ImWhatsapp  } from 'react-icons/im'

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-4'>
      <li>
        <a href='/' target='_blank'><ImWhatsapp/></a>
      </li>
      <li>
        <a href='https://www.instagram.com/' target='_blank'><ImInstagram/></a>
      </li>
      <li>
        <a href='https://www.youtube.com/' target='_blank'><ImYoutube/></a>
      </li>
      <li>
        <a href='https://www.youtube.com/' target='_blank'><ImFacebook/></a>
      </li>
    </ul>
  </div>;
};

export default Socials;
