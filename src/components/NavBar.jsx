import { useState } from 'react';

import menuIconClose from '../assets/images/icon-menu-close.svg';
import menuIcon from '../assets/images/icon-menu.svg';
const NavBar = () => {
  const [open, setOpen] = useState(true);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <ul
        className={`sm:flex sm:flex-row text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center   ${
          open
            ? 'hidden sm:flex'
            : 'flex flex-col justify-center sm:flex-row absolute top-0 right-0  w-[60%] max-sm:h-[100%] gap-7 p-5 text-[20px] max-sm:bg-GrayishBlue'
        }`}
      >
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>New</a>
        </li>
        <li>
          <a href='#'>Popular</a>
        </li>
        <li>
          <a href='#'>Trending</a>
        </li>
        <li>
          <a href='#'>Categories</a>
        </li>
        <img
          onClick={() => setOpen(!open)}
          className={
            open ? 'hidden' : 'w-[50px] absolute right-5 top-4 sm:hidden '
          }
          src={menuIconClose}
          alt='icono cierre'
        />
      </ul>

      <img
        onClick={toggleMenu}
        className='w-10 h-4 cursor-pointer sm:hidden'
        src={menuIcon}
        alt='icono-menu'
      />
    </>
  );
};

export default NavBar;

/* 
  <ul
        className={` 'flex flex-col bg-OffWhite w-[60%] fixed top-0  right-0 h-[100%] p-[30px] text-[25px] justify-center gap-9'${
          open
            ? 'hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center'
            : ''
        }`}
      >
*/
