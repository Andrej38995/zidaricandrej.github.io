import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Result = () => {
  return (
    <p>Thank you, your message has been successfully sent.</p>
  );
};

// export const ContactUs = () => {
//   const form = useRef();
//   const [result, setResult] = useState(false);

function ContactUs(props) {
  const form = useRef(null);
  const [result, showResult] = useState(false);

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_919dunj', 'template_h2bjhoq', form.current, 'w1L7rRIa4IdqYIwnT')
      .then((result) => {
          console.log(result.text);
          // console.log('message sent');
          // setResult(true);
      }, (error) => {
          console.log(error.text);
          // setResult(false);
      });
    e.target.reset();
    showResult(true);
  };

  // return (
  //   <form ref={form} onSubmit={sendEmail}>
  //     <label>Name</label>
  //     <input type="text" name="user_name" />
  //     <label>Email</label>
  //     <input type="email" name="user_email" />
  //     <label>Message</label>
  //     <textarea name="message" />
  //     <input type="submit" value="Send" />
  //   </form>
  // );

  return (
    <section 
      className='py-16 lg:section'
      id='contact'
      >

      <div className='container mx-auto '>
            <div className='flex flex-col lg:flex-row'>

                {/* TEXT */}
                <motion.div
                 variants={fadeIn('right',0.3)}
                 initial='hidden'
                 whileInView={'show'}
                 //  viewport={{once: false, amount: 0.3}}
                 className='
                 flex-1
                 flex
                 justify-start
                 items-center
                 '>
                    <div>
                        <h4
                        className='
                        text-[25px]
                        text-x1
                        uppercase
                        text-accent
                        font-medium
                        mb-2
                        tracking-wide
                        '>
                            Get in touch:
                        </h4>
                        <h2
                        className='
                        text-[55px]
                        lg:text-[80px]
                        leading-none
                        mb-12
                        '>
                            Let's <br />
                            Collaborate!
                        </h2>
                    </div>
                </motion.div>

                {/* FORM */}
                <motion.form
                 ref={form} 
                 onSubmit={sendEmail}
                 variants={fadeIn('left',0.3)}
                 initial='hidden'
                 whileInView={'show'}
                 //  viewport={{once: false, amount: 0.3}}
                 className='
                 flex-1
                 border
                 reounded-2x1
                 flex
                 flex-col
                 gap-y-6
                 pb-19
                 p-6
                 items-start
                 '>
                    {/* NAME */}
                    <input
                     className='
                     bg-transparent
                     border-b
                     py-3
                     outline-none
                     w-full
                     placeholder:text-white
                     focus:border-accent
                     transition-all
                     '
                     type='text' 
                     placeholder='Your Name'
                     name="user_name"
                    />

                    {/* EMAIL */}
                    <input
                     className='
                     bg-transparent
                     border-b
                     py-3
                     outline-none
                     w-full
                     placeholder:text-white
                     focus:border-accent
                     transition-all
                     '
                     type='text' 
                     placeholder='Your E-mail'
                     name="user_email"
                    />

                    {/* MESSAGE */}
                    <input
                     className='
                     bg-transparent
                     border-b
                     py-3
                     outline-none
                     w-full
                     placeholder:text-white
                     focus:border-accent
                     transition-all
                     resize-none
                     mb-12
                     ' 
                     placeholder='Your Message'
                     name="message">
                    </input>
                     
                    <button
                      className='
                      btn btn-1
                      lg:text-[18px]
                      py-2
                      px-4
                      '>
                        Send Message
                    </button>

                    <div className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500'>
                      {result ? <Result /> : null}  
                    </div>

                </motion.form>
            </div>
        </div>
    </section>
  );
};

export default ContactUs;