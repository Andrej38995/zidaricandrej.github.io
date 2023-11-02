import React from 'react';
// Icons //
import {BsArrowUpRight} from 'react-icons/bs';
// Motion //
import {motion} from 'framer-motion';
// Variants //
import {fadeIn} from '../variants';
// Video //
import Image from '../assets/Crypto_Chemistry_Website_logo.png';


// services data
const services = [
    {
        name: 'Bachelor\'s Thesis',
        description: 
            'Influence of temperature on the isolation of industrial hemp components.',
            // Must one liner descripition be
        Link: 'https://dk.um.si/IzpisGradiva.php?id=77479',
    },
    {
        name: 'Master\'s Thesis',
        description: 
            'Optimization of El Salvador geothermal power plant with respect to thermodynamics and Bitcoin mining.',
            // Must one liner descripition be
        Link: 'https://dk.um.si/IzpisGradiva.php?id=83705&lang=slv',
    },
    {
        name: 'Crypto Chemistry Website',
        description: 
            'Latest information and insights on the rapidly evolving world of cryptocurrencies.',
            // Must one liner descripition be
        // Link: 'Cooming soon',
        Link: '"Cooming_soon"',
    },
    // {
    //     name: 'UI/UX Design',
    //     description: 
    //         'Lorem, ipsum dolor.Lorem, ipsum dolor.Lorem.',
    //         // Must one liner descripition be
    //     Link: 'Learn more',
    // },
]


const Services = () => {
    return (
        <section
        className='section' 
        id='services'>
            <div 
            className="
            container 
            mx-auto">
                <div
                 className='
                 flex
                 flex-col
                 lg:flex-row
                 '>
                    {/* {TEXT & IMAGE (Crypto-Chemistry Banter)} */}
                    {/* Image can have backgroud blend with 'mix-blend-lighten' */}
                    <motion.div
                     variants={fadeIn('right',0.3)}
                     initial='hidden'
                     whileInView={'show'}
                      //  viewport={{once: false, amount: 0.3}}
                     className='
                     flex-1
                     lg:bg-bottom
                     bg-no-repeat
                     mb-12
                     lg:mb-0
                     '>
                        <h2
                         className='
                         h2
                         text-accent
                         mb-6
                         '>
                            My Work.
                        </h2>
                        <h3
                         className='
                         h1
                         font-semibold
                         max-w-[455px]
                         mb-12
                         text-[18px]
                         '>
                         {/* With each passing day, I realize that life is a never-ending journey of learning, and the field of chemistry presents countless opportunities for new discoveries. */}
                         The significant undertakings that have shaped my role in both chemistry and 
                         front-end development. 
                         <br />
                         <br />
                         The source of my knowledge and a source of pride for me:
                        </h3>

                        <div
                        variants={fadeIn('right',0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        // viewport={{once: false, amount: 0.3}}
                        // flex-1 bg-me bg-no-repeat h-[640px] mix-blend-lighten bg-top {Original}
                        // {From hidden lg:flex flex-1 max-w-[320px] lg:max-w-[382px] mx-auto Banner}
                        className='
                        flex-1
                        h-[240px] 
                        hidden
                        lg:flex
                        max-w-[120px]
                        lg:max-w-[100%]
                        mx-auto
                        my-[50px]
                        '
                        // style={{ transform: 'scaleY(-1)' }}
                        >

                        {/* <img src={Image} alt='Zidaric Andrej' /> */}
                        <img src={Image} alt='Crypto_Chemistry_Website_logo.png' 
                        className='rounded-[10%] my-0 mx-00'/>
                        </div>

                        {/* <button
                         className='
                         btn btn-sm
                         '>
                            Crypto Chemistry
                        </button> */}
                    </motion.div>
                    {/* Image */}
                    

                    {/* {SERVICES} */}
                    <motion.div
                     variants={fadeIn('left',0.5)}
                     initial='hidden'
                     whileInView={'show'}
                     //  viewport={{once: false, amount: 0.3}}
                     className='flex-1'>
                        {/* {SERVICES LIST} */}
                        <div>
                            {services.map((service,index) => {
                                // Destructure service //
                                const {name, description, Link} = service;
                                return (
                                <div 
                                 className='
                                 border-b
                                 border-white/20
                                 h-[146px]
                                 mb-[38px]
                                 flex'
                                 key={index}>
                                    <div
                                    className='max-w-[476px]'>
                                        <h4
                                        className='
                                        text-[20px]
                                        tracking-wider
                                        font-primary
                                        font-semibold
                                        mb-6
                                        '>
                                            {name}
                                        </h4>
                                        <p
                                        className='
                                        font-secondary
                                        leading-tight
                                        '>
                                            {description}
                                        </p>
                                        {/* {Link} */}
                                    </div>
                                    
                                    <div
                                     className='
                                     flex
                                     flex-col
                                     flex-1
                                     items-end
                                     '> 
                                        <a 
                                         href={Link}
                                         target='_blank' 
                                         className='
                                         btn 
                                         w-9 
                                         h-9 
                                         mb-[42px]
                                         flex
                                         justify-center
                                         items-center
                                         '>
                                            <BsArrowUpRight />
                                        </a>    
                                        {/* <a 
                                         href='#'
                                         className='
                                         text-gradient
                                         text-sm'>
                                            {Link}
                                        </a> */}
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
