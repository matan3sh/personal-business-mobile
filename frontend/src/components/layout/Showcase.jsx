import React from 'react';
import Contact from '../main/Contact';

const Showcase = () => {
  return (
    <section id='showcase'>
      <div className='container'>
        <h1>הסרת שיער בלייזר</h1>
        <p>ללא סכנת כוויות, ללא כאבים, מותאם לכל גווני העור</p>
        <p>ייעודי לטיפול בעור שזוף, מותאם לילדים ונוער</p>
        <p className='order-now'>הזמינו עכשיו</p>
        <div className='box'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default Showcase;
