import React, { useRef, useState, memo } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';



const ResultMessage = memo(({ success }) => {
  if (success) {
    return <p>Thank you, your message has been successfully sent.</p>;
  } else {
    return <p>Sorry, there was a problem sending your message. Please try again.</p>;
  }
});

function isValidEmail(email) {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

function ContactUs() {
  const formRef = useRef(null);
  const emailInputRef = useRef(null);
  const [messageSent, setMessageSent] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const emailInput = formRef.current.elements.user_email.value;

    // Email validation
    if (!emailInput) {
      setErrorMessage('Email is required.');
      emailInputRef.current.focus();
      return;
    }
    if (!isValidEmail(emailInput)) {
      setErrorMessage('Invalid email format.');
      emailInputRef.current.focus();
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm('service_919dunj', 'template_h2bjhoq', formRef.current, 'w1L7rRIa4IdqYIwnT');
      setMessageSent(true);
      setErrorMessage('');
    } catch (error) {
      console.error("Email sending error:", error);
      setMessageSent(false);
      setErrorMessage(error?.text || 'Failed to send email.');
    } finally {
      setIsLoading(false);
    }

    e.target.reset();
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto pt-10'>
        <div className='flex flex-col lg:flex-row'>

          {/* TEXT */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-[25px] text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch:
              </h4>
              <h2 className='text-[55px] lg:text-[80px] leading-none mb-12'>
                Let's <br />
                Collaborate!
              </h2>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            //ref={form}
            ref={formRef}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-19 p-6 items-start'>

            {/* NAME */}
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your Name'
              name="user_name"
            />

            {/* EMAIL */}
            <input
              ref={emailInputRef}
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='email'
              placeholder='Your E-mail'
              name="user_email"
              required
            />

            {/* Error Message */}
            {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}

            {/* MESSAGE */}
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-5'
              placeholder='Your Message'
              name="message">
            </input>

            <button className='flex-1 rainbow-btn btn-lg w-[100%] text-[20px] px-4 border-2 border-accent' disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>

            <div className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500'>
              {messageSent !== null && <ResultMessage success={messageSent} />}
            </div>

          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
