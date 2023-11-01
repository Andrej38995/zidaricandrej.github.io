import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Video from '../assets/Video_mag.gif';

const About = () => {
    const [ref, InView] = useInView({
        threshold: 0.5,
    });

    const [hasBeenInView, setHasBeenInView] = useState(false);
    const [key, setKey] = useState(0);
    useEffect(() => {
        if (InView) {
            setHasBeenInView(true);
            setKey(prevKey => prevKey + 1);
        }
    }, [InView]);

    const stats = [
        { end: 25, label: 'Years of \nExperience' },
        { end: 5, label: 'Projects \nCompleted' },
        { end: 13, label: 'Lines of \nCode', postfix: 'k+' }
    ];

    return (
        <section className='section' id='about' ref={ref}>
            <div className="container mx-auto">
                <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>

                    {/* Image */}
                    <motion.div
                        variants={fadeIn('right', 0.5)}
                        initial='hidden'
                        animate={InView ? 'show' : 'hidden'}
                        style={{ transform: 'scaleY(-1)' }}
                        className='flex-1 h-[540px] hidden lg:flex max-w-[320px] lg:max-w-[382px] mx-auto'>
                        <img src={Video} alt='Zidaric Andrej' className='rounded-full invert-y border-2 border-black/50' />
                    </motion.div>

                    {/* Text segment */}
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial='hidden'
                        animate={InView ? 'show' : 'hidden'}
                        className='flex-1'>

                        <motion.h2 className='h2 text-accent'>
                            About me.
                        </motion.h2>

                        <motion.h3 className='h3 mb-4'>
                            I'm a Chemist and a Front-End Developer
                        </motion.h3>

                        <motion.p className='mb-6'>
                            Master of analytical chemistry and a junior in front-end web development.
                            <br />
                            With each passing day, I realize that life is a never-ending journey of learning,
                            <br />
                            and the field of chemistry presents countless opportunities for new discoveries.
                            <br />
                            <br />
                            {/* With my mindset, I always get the job done.  */}
                        </motion.p>

                        <motion.div className='flex flex-col gap-x-6 lg:gap-x-10 mb-12 max-w-[450px] lg:max-w-[450px] lg:flex-row'>
                            {stats.map(({ end, label, postfix = '' }) => (
                                <div key={label}>
                                    <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                        {InView && <CountUp key={key} start={0} end={end} duration={5} />}
                                        {postfix}
                                    </div>
                                    <div className='font-primary text-small tracking-[2px] mb-5'>
                                        {label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
