import React from 'react';
// Images
import {Link} from 'react-scroll';

const Header = () => {
  // Let's do pink background lol //
  // return <div className='bg-pink-300'>Header</div>;
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* header logo */} 
          <h1 className='text-3xl font-bold'>
              {/* <a href='#'> */}
              <span 
              className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500'>
              {/* className='text-gradient btn-link'> */}
              Andrej Zidarič
            </span>
            {/* </a> */}
          </h1>
          
          <Link 
           to='contact' 
           activeClass='active'
           smooth={true}
           spy={true}>
            <button className='btn btn-sm'>
             Work with me
            </button>
          </Link>

        </div>
      </div>
    </header>
  )
};

export default Header;
