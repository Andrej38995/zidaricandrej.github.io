import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
import { fadeIn } from '../variants';
import Image from '../assets/Me_1.png';

const TYPE_ANIMATION_SEQUENCE = [
  'Chemist', 2000,
  'Scientist', 2000,
  'Developer', 2000,
];

const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/andrej.zidaric.5/', icon: <FaFacebook /> },
  { href: 'https://www.instagram.com/andrej38995/', icon: <FaInstagram /> },
  { href: 'https://www.youtube.com/channel/UC00UW4USgpjiF8iUFf1xTXQ', icon: <FaYoutube /> },
  { href: 'https://github.com/Andrej38995', icon: <FaGithub /> }
];

const Banner = () => {
  return (
    <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center py-0'>
      <div className='container mx-auto mb-5'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div>
            <div className='flex-1 text-center font-secondary lg:text-left'>
              {/* HEADER */}
              <motion.h1
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={'show'}
                className='text-[25px] font-semibold leading-[0.8] lg:text-[25px]'>
                Who am I?
              </motion.h1>

              {/* I AM A CHEMIST/SCIENTIST/DEVELOPER */}
              <motion.div
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView={'show'}
                className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
                <span className='text-white mr-3'>
                  I am a
                </span>
                <TypeAnimation
                  sequence={TYPE_ANIMATION_SEQUENCE}
                  speed={50}
                  className='text-accent'
                  wrapper='span'
                  repeat={Infinity}
                />
              </motion.div>

              <motion.p
                variants={fadeIn('up', 0.6)}
                initial="hidden"
                whileInView={'show'}
                className='mb-6 max-w-lg mx-auto lg:mx-0'>
                My name is Andrej Zidarič. I am a dedicated scientist who holds a master's degree in chemistry. Science has always intrigued me, and I find the knowledge it offers to be fascinating.
                <br />
                {/* With each passing day, I realize that life is a never-ending journey of learning, and the field of chemistry presents countless opportunities for new discoveries. */}
                {/* <br /> */}
                Through the use of programming languages, analytical sciences, and chemical analysis, we are able to gain a deeper understanding of the world around us, one atom at a time.
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                variants={fadeIn('up', 0.7)}
                initial="hidden"
                whileInView={'show'}
                className='flex max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0'>

                <Link
                  to='about'
                  activeClass='active'
                  smooth={true}
                  spy={true}>
                  <button className='text-gradient btn-link text-[20px]'>
                    About Me
                  </button>
                </Link>

                <Link
                  to='services'
                  activeClass='active'
                  smooth={true}
                  spy={true}>
                  <button className='text-gradient btn-link text-[20px]'>
                    My Portfolio
                  </button>
                </Link>
              </motion.div>

              {/* SOCIALS */}
              <motion.div
                variants={fadeIn('up', 0.8)}
                initial="hidden"
                whileInView={'show'}
                className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 lg:my-8'>
                {SOCIAL_LINKS.map((link, idx) => (
                  <a key={idx} href={link.href} target='_blank' rel='noopener noreferrer'>
                    {link.icon}
                  </a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* IMAGE */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[100px] lg:max-w-[400px] mx-auto max-h-[600px] '>
            <img
              src={Image}
              alt='Zidaric Andrej'
              className='rounded-full'
              style={{
                filter: `
                drop-shadow(0.8px 0px black) 
                drop-shadow(-0.0px -0.01px black)
                drop-shadow(-0.8px -0px black)
                drop-shadow(-0px 0.80px black)
              `}}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
