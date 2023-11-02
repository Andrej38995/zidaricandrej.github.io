import React from 'react';
// Images //
import Image from '../assets/Me_1.png';
// Icons //
import {FaGithub, FaYoutube, FaDribbble, FaFacebook, FaInstagram, FaInstagramSquare} from 'react-icons/fa';
// Type animation //
import {TypeAnimation} from 'react-type-animation';
// Motion //
import {motion} from 'framer-motion';
// Variants //
import {fadeIn} from '../variants';
import {Link} from 'react-scroll';


const Banner = () => {
  return (
    <section id='home' className='
    min-h-[85vh]
    lg:min-h-[78vh]
    flex
    items-center
    py-0'>
      <div className='container mx-auto'>
        <div className='
        flex
        flex-col
        gap-y-8
        lg:flex-row
        lg:items-center
        lg:gap-x-12
        '>
          <div>
            {/* Text */}
            <div className='
            flex-1
            text-center
            font-secondary
            lg:text-left
            '>

              {/* --------------------- */}
              {/* Text - ANDREJ ZIDARIČ */}
              {/* <h1 className='
               text-[25px]
               font-semibold
               leading-[0.8]
               lg:text-[25px]'> */}
               {/* ANDREJ <span> ZIDARIČ </span> */}
                {/* Who am I?
              </h1> */}
              {/* --------------------- */}
              {/* Text - Header animantion */}
              <motion.h1 
               variants={fadeIn('up',0.4)}
               initial="hidden"
               whileInView={'show'}
              //  viewport={{once: false, amount: 0.7}}
               className='
               text-[25px]
               font-semibold
               leading-[0.8]
               lg:text-[25px]
               '>
                Who am I?
              </motion.h1>

              {/* ----------------------------------------- */}
              {/* Text - I AM A CHEMIST/SCIENTIST/DEVELOPER */}
              <motion.div 
               variants={fadeIn('up',0.5)}
               initial="hidden"
               whileInView={'show'}
              //  viewport={{once: false, amount: 0.7}}
               className='
                mb-6 
                text-[36px]
                lg:text-[60px]
                font-secondary
                font-semibold
                uppercase
                leading-[1]'>
                {/* mr-1 determines spaces before word - Colors: white, black, accent */}
                <span className='text-white mr-3'>
                  I am a 
                  </span>
                <TypeAnimation 
                  sequence={[
                    'Chemist', 2000,
                    'Scientist', 2000,
                    'Developer', 2000,
                  ]} 
                  speed={50}
                  className='text-accent'
                  wrapper='span'
                  repeat={Infinity}
                />             
              </motion.div>
              {/* Dodaj obojestransko poravnavo ter zmajšaj razdaljo med vrsticami */}
              <motion.p 
              variants={fadeIn('up',0.6)}
              initial="hidden"
              whileInView={'show'}
              // viewport={{once: false, amount: 0.7}}
              className='
              mb-6
              max-w-lg
              mx-auto
              lg:mx-0'>

               My name is Andrej Zidarič. I am a dedicated scientist who holds a master's degree in chemistry. Science has always intrigued me, and I find the knowledge it offers to be fascinating. 
               <br />
               {/* With each passing day, I realize that life is a never-ending journey of learning, and the field of chemistry presents countless opportunities for new discoveries. */}
               {/* <br /> */}
               Through the use of programming languages, analytical sciences, and chemical analysis, we are able to gain a deeper understanding of the world around us, one atom at a time.
               </motion.p>
              
               {/* ------------- */}
               {/* Text - BUTTON */}
               {/* mb-7 is how down from button is socials ; mb-12 preset*/}
               <motion.div
               variants={fadeIn('up',0.7)}
               initial="hidden"
               whileInView={'show'}
              //  viewport={{once: false, amount: 0.7}}
               className='
               flex
               max-w-max
               gap-x-6
               items-center
               mb-6 
               mx-auto
               lg:mx-0'>
                  {/* New two buttons */}
                  <Link 
                   to='about' 
                   activeClass='active'
                   smooth={true}
                   spy={true}>
                   <button className='text-gradient btn-link text-[17px]'>
                   About Me
                   </button>
                  </Link>
                  <Link 
                   to='services' 
                   activeClass='active'
                   smooth={true}
                   spy={true}>
                   <button className='text-gradient btn-link text-[17px]'>
                   My Portfolio
                   </button>
                  </Link>

                  {/* <button className='btn btn-lg'> */}
                  {/* <button className='text-gradient btn-link'>
                    Contact me
                  </button>
                  <a href='#' className='text-gradient btn-link'>
                    My Portfolio
                  </a> */}
               </motion.div>

               {/* ------------- */}
               {/* Text - SOCIALS */}
               <motion.div 
               variants={fadeIn('up',0.8)}
               initial="hidden"
               whileInView={'show'}
              //  viewport={{once: false, amount: 0.7}}
               className='
               flex
               text-[20px]
               gap-x-6
               max-w-max
               mx-auto
               lg:mx-0
               lg:my-8'>  
                <a 
                href='https://www.facebook.com/andrej.zidaric.5/' 
                target='_blank' 
                rel='noopener noreferrer'
                >
                  <FaFacebook />
                </a>
                <a 
                href='https://www.instagram.com/andrej38995/' 
                target='_blank' 
                rel='noopener noreferrer'>
                  <FaInstagram />
                </a>
                <a 
                href='https://www.youtube.com/channel/UC00UW4USgpjiF8iUFf1xTXQ' 
                target='_blank' 
                rel='noopener noreferrer'>
                  <FaYoutube />
                </a>
               </motion.div>
            </div>
          </div>
          {/* IMAGE */}
          <motion.div 
          variants={fadeIn('down',0.6)}
          initial="hidden"
          whileInView={'show'}
          // viewport={{once: false, amount: 0.7}}
          // Pix resolution: wight:480px ; height: 760px
          // Max height: max-h-[560px]
          // Settings: hidden;lg:flex;flex-1;max-w-[320px];lg:max-w-[382px];mx-auto
          className='
          hidden
          lg:flex
          flex-1
          max-w-[100px]
          lg:max-w-[400px]
          mx-auto
          max-h-[600px]
          '>
            <img src={Image} alt='Zidaric Andrej' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};







// Pre-text - residual //
// const Banner = () => {
//   return <div className='section' id='home'>
//     Banner
//   </div>;
// };

export default Banner;
