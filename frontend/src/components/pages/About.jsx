import React from 'react';

const About = () => {
  return (
    <section className='about'>
      <div className='about-wrapper'>
        <img
          src='https://media-exp1.licdn.com/dms/image/C4D03AQG5p2qiT7jtGQ/profile-displayphoto-shrink_400_400/0?e=1598486400&v=beta&t=D0IubSmpXnjWlTlhkgXiwYuYVjI2I2jN156Uxmg9_5o'
          alt=''
        />
        <div>
          <p>
            This is home assignment by
            <a
              href='https://www.coding-academy.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              #Coding Academy
            </a>
          </p>
          <p className='by'>Developed By @Matan Shaviro</p>
          <div className='social-icons'>
            <a
              href='https://www.linkedin.com/in/matan-shaviro-990b0272/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin fa-2x'></i>
            </a>
            <a
              href='https://github.com/matan3sh/vue-misBook'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github-square fa-2x'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
