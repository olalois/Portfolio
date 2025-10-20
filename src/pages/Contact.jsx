import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wgi4zsg', 'template_85kqz7h', form.current, 'd-3naAut-3eFGGnfb')
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again");
        }
      );
  };

  return (
    <div className='text-white min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 md:px-10 py-10'>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-5xl bg-black shadow-lg shadow-gray-300 rounded-2xl p-6 sm:p-8 md:p-10">

        {/* LEFT SECTION */}
        <div className="section1 w-full md:w-1/2 flex flex-col gap-5 justify-center text-center md:text-left">
          <h1 className='text-gray-200 font-bold text-2xl sm:text-3xl'>Get In Touch</h1>
          <p className='text-gray-300 text-sm sm:text-base'>
            I am always open to discussing new projects, creative ideas, or opportunities.
            Feel free to reach out, and let's see how we can collaborate.
          </p>

          <div className="socials flex justify-center md:justify-start mt-3">
            <ul className='flex gap-5'>
              <li className='bg-gray-700 p-2 rounded-full hover:scale-110 duration-200'>
                <a href="https://github.com/olalois" target='_blank' rel='noreferrer'>
                  <FaGithub className="text-2xl sm:text-3xl" />
                </a>
              </li>
              <li className='bg-gray-700 p-2 rounded-full hover:scale-110 duration-200'>
                <a href="https://www.linkedin.com/in/olakanmi-lois-0724a1271/" target='_blank' rel='noreferrer'>
                  <FaLinkedin className="text-2xl sm:text-3xl" />
                </a>
              </li>
              <li className='bg-gray-700 p-2 rounded-full hover:scale-110 duration-200'>
                <a href="https://www.instagram.com/ola_k_lois/" target='_blank' rel='noreferrer'>
                  <FaInstagram className="text-2xl sm:text-3xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION (FORM) */}
        <div className="section2 w-full md:w-1/2 flex justify-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col gap-4 sm:gap-5 w-full max-w-sm'
          >
            <input
              type="text"
              name="user_name"
              placeholder='Your Name'
              required
              className='border-2 border-gray-700 w-full outline-none px-3.5 py-2.5 rounded-lg placeholder:text-sm bg-transparent text-white'
            />
            <input
              type="email"
              name="user_email"
              placeholder='Your Email'
              required
              className='border-2 border-gray-700 w-full outline-none px-3.5 py-2.5 rounded-lg placeholder:text-sm bg-transparent text-white'
            />
            <textarea
              name="message"
              rows="6"
              placeholder='Your Message'
              required
              className='border-2 border-gray-700 w-full outline-none px-3.5 pt-3 pb-2 rounded-lg placeholder:text-sm bg-transparent text-white resize-none'
            ></textarea>
            <button
              type='submit'
              className='w-full py-2 rounded-lg bg-gray-700 font-semibold hover:bg-gray-600 transition duration-200'
            >
              Let's Work Together
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
