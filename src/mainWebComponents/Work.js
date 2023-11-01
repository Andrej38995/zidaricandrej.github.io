import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import projectImg1 from '../assets/projectImg1.png'; // Crypto Chemistry
import projectImg2 from '../assets/projectImg2.jpg'; // Modern Website
import projectImg3 from '../assets/projectImg3.png'; // PDF AI Reader

const ImageCard = ({ imageSrc, subTitle, title, link }) => (
    <div className='flex-1 group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer'
        onClick={link ? () => window.location.href = link : null} >
        {/* Overlay */}
        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
        {/* Img */}
        <img className='group-hover:scale-110 transition-all duration-500' src={imageSrc} alt='' />
        {/* Sub-title */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50'>
            <span className='text-gradient'> {subTitle} </span>
        </div>
        {/* Title */}
        <div className='absolute -bottom-full left-12 group-hover:bottom-3 transition-all duration-700 z-50'>
            <span className='text-3xl text-white font-semibold'> {title} </span>
        </div>
    </div>
);

const Work = () => {
    return (
        <section className='section' id='work'>
            <div className="container mx-auto ">
                <div className='flex flex-col pt-10'>
                    <div className='flex flex-col lg:flex-row gap-x-5 gap-y-10 mb-1 scale-95'>
                        {/* TEXT */}
                        <motion.div
                            variants={fadeIn('right', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            className='flex-1' >
                            <div className='flex-1 scale-100'>
                                <h2 className='h2 leading-tight text-accent'>
                                    My web Projects.</h2>
                                <p className='max-w-sm mb-16 font-semibold'>
                                    Presented projects are my pathway to become<br />the best full-stack developer.</p>
                                {/* BUTTON */}
                                <button className='btn btn-sm'
                                    onClick={() => window.location.href = process.env.PUBLIC_URL + "/Projects/zidaricandrejOriginal/build/index.html"}>
                                    View Original Portfolio Website
                                </button>
                            </div>
                        </motion.div>

                        {/* Crypto Chemistry Image */}
                        <motion.div
                            variants={fadeIn('left', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            className='flex-1' >
                            <div className='flex-1'>
                                <ImageCard
                                    imageSrc={projectImg1}
                                    subTitle="HTML & CSS"
                                    title="Crypto Chemistry"
                                    link={process.env.PUBLIC_URL + "/Projects/cryptoChemistry/index.html"} />
                            </div>
                        </motion.div>
                    </div>

                    {/* Second image row */}
                    <motion.div
                        variants={fadeIn('up', 0.3)}
                        initial='hidden'
                        whileInView={'show'} >
                        <div className='flex flex-col lg:flex-row gap-x-5 gap-y-10 mb-10 scale-95'>
                            <ImageCard
                                imageSrc={projectImg2} subTitle="UI/UX Design" title="Modern Website"
                                link={process.env.PUBLIC_URL + "/Projects/modernApp/dist/index.html"} />
                            <ImageCard
                                imageSrc={projectImg3} subTitle="SaaS Platform" title="PDF AI Reader (Cooming Soon)" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

export default Work;
