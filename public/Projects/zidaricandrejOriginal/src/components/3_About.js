import React from 'react';
// Countup //
import CountUp from 'react-countup';
// Intersection observer hook //
import {useInView} from 'react-intersection-observer';
// Motion //
import {motion} from 'framer-motion';
// Variant //
import {fadeIn} from '../variants';
// Images //
// import Image from '../assets/me.png';
// Video //
import Video from '../assets/Video_mag.gif';

const About = () => {
    const [ref, InView] = useInView({
        threshold: 0.5,
    });
    // const [InView] = useInView({
    //         threshold: 0.5,
    //     });
    return (
        <section 
        className='section' 
        id='about'
        ref={ref}>
            <div 
            className="
            container
            mx-auto">
                
                <div
                className='
                flex
                flex-col
                gap-y-10
                lg:flex-row
                lg:items-center
                lg:gap-x-20
                lg:gap-y-0
                h-screen
                '>

                    {/* Image */}
                    <motion.div
                    variants={fadeIn('right',0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    // viewport={{once: false, amount: 0.3}}
                    // flex-1 bg-me bg-no-repeat h-[640px] mix-blend-lighten bg-top {Original}
                    // {From hidden lg:flex flex-1 max-w-[320px] lg:max-w-[382px] mx-auto Banner}
                    className='
                    flex-1
                    h-[540px] 
                    hidden
                    lg:flex
                    max-w-[320px]
                    lg:max-w-[382px]
                    mx-auto
                    '
                    style={{ transform: 'scaleY(-1)' }}
                    >

                    {/* <img src={Image} alt='Zidaric Andrej' /> */}
                    <img src={Video} alt='Zidaric Andrej' 
                    className='rounded-full invert-y'/>
                    </motion.div>
                    {/* </div> */}
                    
                    {/* Text segment */}
                    <motion.div 
                    variants={fadeIn('left',0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    className='
                    flex-1
                    '>
                        <motion.h2 
                        className='
                        h2
                        text-accent
                        '> 
                            About me.
                        </motion.h2>
                        <motion.h3
                        className='
                        h3
                        mb-4
                        '>
                            I'm a Chemist and a Front-End Developer
                        </motion.h3>
                        <motion.p
                        className='
                        mb-6
                        '>
                            Master of analytical chemitry and a junior in front-end web development. 
                            <br />
                            With each passing day, I realize that life is a never-ending journey of learning, 
                            <br />
                            and the field of chemistry presents countless opportunities for new discoveries.
                            <br />
                            <br />
                            {/* With my mindset, I always get the job done.  */}
                        </motion.p>
                        {/* Stats */}
                        <motion.div 
                        className='
                        flex
                        gap-x-6
                        lg:gap-x-10
                        mb-12
                        '>
                            {/* 1.st tick number */}
                            <div>
                                <div 
                                className='
                                text-[40px]
                                font-tertiary
                                text-gradient
                                mb-2
                                '>
                                    {InView ? 
                                    <CountUp 
                                    start=   {0}
                                    end=     {25}
                                    duration={3.5}
                                    /> : null}

                                    {/* <CountUp 
                                    start=   {0}
                                    end=     {25}
                                    duration={3}
                                    /> */}



                                </div>
                                <div
                                    className='
                                    font-primary
                                    text-small
                                    tracking-[2px]'
                                    >
                                        Years of <br />
                                        Experience
                                </div>
                            </div>

                            {/* 2.nd tick number */}
                            <div>
                                <div 
                                className='
                                text-[40px]
                                font-tertiary
                                text-gradient
                                mb-2
                                '>
                                    {InView ? 
                                    <CountUp 
                                    start=   {0}
                                    end=     {5}
                                    duration={3}
                                    /> : null}
                                    {/* k+ */}

                                    {/* <CountUp 
                                    start=   {0}
                                    end=     {5}
                                    duration={3}
                                    /> */}

                                </div>
                                <div
                                    className='
                                    font-primary
                                    text-small
                                    tracking-[2px]'
                                    >
                                        Projects <br />
                                        Completed
                                </div>
                            </div>
                            
                            {/* 3.rd tick number */}
                            <div>
                                <div 
                                className='
                                text-[40px]
                                font-tertiary
                                text-gradient
                                mb-2
                                '>
                                    {InView ? 
                                    <CountUp 
                                    start=   {0}
                                    end=     {13}
                                    duration={3.5}
                                    /> : null}

                                    {/* <CountUp 
                                    start=   {0}
                                    end=     {13}
                                    duration={3}
                                    /> */}


                                    k+
                                </div>
                                <div
                                    className='
                                    font-primary
                                    text-small
                                    tracking-[2px]'
                                    >
                                        Lines of <br />
                                        Code
                                </div>
                            </div>
                            {/* <div className='
                            flex
                            gap-x-8
                            items-center'>
                                <button
                                className='
                                btn btn.lg
                                '>
                                    Contact me
                                </button> */}

                                {/* <a href='#'
                                className='
                                text-gradient
                                btn-link
                                '>
                                </a> */}
                            {/* </div> */}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
