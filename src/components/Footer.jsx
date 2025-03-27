/* eslint-disable react-refresh/only-export-components */
import { FaGithubSquare, FaHome, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { SectionWrapper } from '../hoc';

const Footer = () => {
  return (
    <footer className='dark:bg-dark'>
      <div
        className='container mx-auto grid grid-cols-1 
            md:grid-cols-2 gap-12'
      >
        <div className='flex flex-col'>
          <div className='flex mb-4'>
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div className='text-xl leading-none'>
              <p>Scheme No 78, Indore</p>
              <p>Madhya Pradesh.</p>
            </div>
          </div>

          <div className='flex mb-4 text-lg font-semibold'>
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
            </h4>
            <p>8959827972</p>
          </div>

          <div className='flex mb-4  text-lg font-semibold'>
            <h4>
              <MdEmail
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
            </h4>
            <p>krishdv74@gmail.com</p>
          </div>
        </div>

        <div>
          <h3 className='text-xl font-bold mb-2'>About Me</h3>
          <p>Senior Software Engineer</p>
          <div className='flex space-x-4 mt-4'>
            <a
              href='_blank'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook
                className='text-white text-3xl 
                            hover:text-gray-300'
              />
            </a>
            <a
              href='_blank'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter
                className='text-white text-3xl
                            hover:text-gray-300'
              />
            </a>
            <a
              href='https://github.com/krishdv11'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithubSquare
                className='text-white text-3xl
                            hover:text-gray-300'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/krishdv11/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin
                className='text-white text-3xl
                            hover:text-gray-300'
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, 'footer');
