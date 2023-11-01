import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Image from '../assets/CryptoChemistryOriginalWebpage.PNG';
import { fadeIn } from '../variants';

// services data
const services = [
    {
        name: 'Bachelor\'s Thesis',
        description: 'Influence of temperature on the isolation of industrial hemp components.',
        Link: 'https://dk.um.si/IzpisGradiva.php?id=77479',
    },
    {
        name: 'Master\'s Thesis',
        description: 'Optimization of El Salvador geothermal power plant with respect to thermodynamics and Bitcoin mining.',
        Link: 'https://dk.um.si/IzpisGradiva.php?id=83705&lang=slv',
    },
    {
        name: 'Crypto Chemistry Website',
        description: 'Latest information and insights on the rapidly evolving world of cryptocurrencies.',
        Link: 'https://www.cryptochemistry.net',
    },
]

const Services = () => {
    return (
        <section className='section' id='services'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row'>
                    {/* Text & Image Section */}
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        //  viewport={{once: false, amount: 0.3}}
                        className='flex-1 lg:bg-bottom bg-no-repeat mb-12 lg:mb-0'>
                        <h2 className='h2 text-accent mb-6'>
                            My Work.
                        </h2>
                        <h3 className='h1 font-semibold max-w-[455px] mb-12 text-[18px]'>
                            {/* With each passing day, I realize that life is a never-ending journey of learning, and the field of chemistry presents countless opportunities for new discoveries. */}
                            The significant undertakings that have shaped my role in both chemistry and
                            front-end development.
                            <br />
                            <br />
                            The source of my knowledge and pride for me:
                        </h3>

                        <div
                            variants={fadeIn('right', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            className='flex-1 h-[240px] hidden lg:flex max-w-[120px] lg:max-w-[100%] mx-auto my-[50px]'>

                            <img src={Image} alt='CryptoChemistryOriginalWebpage.png'
                                className='my-0 mx-00 h-[250px] w-[430px] border-2 border-black/80 rounded-xl' />
                        </div>

                        {/* <button className='btn btn-sm'> Crypto Chemistry </button> */}
                    </motion.div>
                    {/* Image */}


                    {/* {SERVICES} */}
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        //  viewport={{once: false, amount: 0.3}}
                        className='flex-1'>

                        {/* {SERVICES LIST} */}
                        <div>
                            {services.map((service, index) => {
                                // Destructure service //
                                const { name, description, Link } = service;
                                return (
                                    <div
                                        className='border-b border-white/20 h-[146px] mb-[38px] flex'
                                        key={index}>
                                        <div
                                            className='max-w-[476px]'>
                                            <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                                                {name}
                                            </h4>
                                            <p className='font-secondary leading-tight'>
                                                {description}
                                            </p>
                                            {/* {Link} */}
                                        </div>

                                        <div className='flex flex-col flex-1 items-end'>
                                            <a
                                                href={Link}
                                                target='_blank'
                                                rel="noopener noreferrer"
                                                className='rainbow-btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                                                <BsArrowUpRight />
                                            </a>

                                            {/* <a href='#' className='text-gradient text-sm'> {Link} </a> */}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
