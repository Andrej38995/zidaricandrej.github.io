import React from 'react';
// import icons with link //
import {BiBriefcase, BiHomeAlt, BiPhone, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs';
import {Link} from 'react-scroll';


// Creating icons for a "NAV" toolbar on the bottom of the page //
const Nav = () => {
  return (
    <nav 
     className='
     fixed bottom-2 
     lg:bottom-8 
     w-full 
     overflow-hidden 
     z-50'>
      <div className='container mx-auto'>

        {/* inner nav */}
        {/* Classname adds black background to bottom nav bar */}
        {/* Buttons: home ; about ; services ; work ; contact */}
        {/* Original max-w-[460px] */}
        <div className='
          w-full 
          bg-black/20
          h-[96px] 
          backdrop-blur-2x1
          rounded-full
          max-w-[360px]
          mx-auto
          px-5
          flex
          justify-between
          items-center
          text-2x1
          text-white/50
          '>

          {/* HOME BUTTON */}
          <Link to='home' 
          activeClass='active'
          smooth={true} // smooth makes transitions smooth
          spy={true}    // spy puts a colorfull circle around link
          offset={-200}    // Home button return to the very top, not only "Banner"
          className='
          cursor-pointer
          w-[60px]
          h-[60px]
          flex
          items-center
          justify-center
          '>
            <BiHomeAlt />
          </Link>

          {/* USER BUTTON */}
          <Link to='about' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='
          cursor-pointer
          w-[60px]
          h-[60px]
          flex
          items-center
          justify-center
          '>
            <BiUser />
          </Link>

          {/* CLIP BUTTON */}
          <Link to='services'
          activeClass='active'
          smooth={true}
          spy={true}
          className='
          cursor-pointer
          w-[60px]
          h-[60px]
          flex
          items-center
          justify-center
          '>
            <BsClipboardData />
          </Link>

          {/* CASE BUTTON */}
          {/* <Link to='work' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='
          cursor-pointer
          w-[60px]
          h-[60px]
          flex
          items-center
          justify-center
          '>
            <BsBriefcase />
          </Link> */}

          {/* CONT BUTTON */}
          <Link to='contact' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='
          cursor-pointer
          w-[60px]
          h-[60px]
          flex
          items-center
          justify-center
          '>
            <BiPhone />
            {/* <BiPhone or BsChatSquare but also BsChatSquareText /> */}
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
