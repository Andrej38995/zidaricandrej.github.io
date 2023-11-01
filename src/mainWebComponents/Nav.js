import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { BiHomeAlt, BiPhone, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase } from 'react-icons/bs';

const NAV_ITEMS = [
  // { to: 'header', icon: BiHomeAlt, offset: { up: 0, down: 0 } },
  { to: 'home', icon: BiHomeAlt, offset: { up: -200, down: -200 } },
  { to: 'about', icon: BiUser, offset: { up: 0, down: 0 } },
  { to: 'services', icon: BsClipboardData, offset: { up: 0, down: 0 } },
  { to: 'work', icon: BsBriefcase, offset: { up: 0, down: 0 } },
  { to: 'contact', icon: BiPhone, offset: { up: 0, down: 0 } },
];

const NavButton = ({ to, icon: Icon, offset, isActive, onClick, scrollDirection }) => (
  <Link
    onClick={(e) => onClick(e, to)}
    to={to}
    activeClass='active'
    smooth
    spy
    offset={scrollDirection === 'down' ? offset.down : offset.up}
    className={`nav-btn cursor-pointer ${isActive ? 'click-effect' : ''}`}
  >
    <Icon color="#fff" />
  </Link>
);

const Nav = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const handleNavClick = (e, to) => {
    e.preventDefault();
    setTimeout(() => {
      setActiveButton(to);
    }, 250);
  };

  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50'>
          {NAV_ITEMS.map(item => (
            <NavButton 
              key={item.to} 
              {...item}
              isActive={activeButton === item.to}
              onClick={handleNavClick}
              scrollDirection={scrollDirection}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
