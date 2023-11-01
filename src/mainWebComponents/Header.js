import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-6' id='header'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between width-[100%] space-x-8'>

          {/* TEXT */}
          <div class="au-content">
            <div class="au-title">
              Andrej Zidarič
              {/* Aurora Effect */}
              <div class="au-aurora">
                <div class="au-aurora__item"></div>
                <div class="au-aurora__item"></div>
                <div class="au-aurora__item"></div>
                <div class="au-aurora__item"></div>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <Link
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}>
            <button className='rainbow-btn btn-md border-2 border-accent/50'>
              Work with me
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
};

export default Header;
