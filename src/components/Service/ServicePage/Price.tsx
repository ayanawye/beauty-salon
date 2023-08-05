'use client'
import React from 'react';
import s from './ServicePage.module.scss'
import Button, { IVariant } from '@/components/UI-modals/Button/Button';

const data = [
  {id: 1, title: "женская стрижка", price:  2300},
  {id: 2, title: "женская стрижка", price:  2300},
  {id: 3, title: "женская стрижка", price:  2300},
  {id: 4, title: "женская стрижка", price:  2300},
  {id: 5, title: "женская стрижка", price:  2300},
  {id: 6, title: "женская стрижка", price:  2300},
]

const Price = () => {
  return (
    <section className={s.price}>
      <div className="container">
        <h2>СТОИМОСТЬ</h2>
        <div className={s.price_cards}>
          {data.map(el => (
            <div key={el.id}>
              <h4>{el.title}</h4>
              <p>{el.price}</p>
            </div>
          ))}
        </div>
        <div className={s.price_btn}>
          <div>
          <Button padding="17px 40px" variant={IVariant.primary}>получить скидку 15% на первый визит</Button>
          </div>
          <div>
          <Button padding="17px 100px" variant={IVariant.outlined}>записаться онлайн</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;