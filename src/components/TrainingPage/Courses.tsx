import React from 'react';
import s from './Training.module.scss';

const Courses = () => {
  return (
    <section className={s.coures}>
      <div className='container'>
        <h2>Курсы</h2>
        <div className={s.svg1}></div>
        <div className={s.svg2}></div>
        <div className={s.coures_cards}>
          <div className={s.coures_card}>
            <img src='/course.png' alt='image' className={s.coures_card__img} />
            <h3>Парихмахер -универсал</h3>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;