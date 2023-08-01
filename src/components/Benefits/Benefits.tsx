import React from 'react';
import s from './Benefits.module.scss';

const Benefits = () => {
  return (
    <section className={s.benefit}>
      <div className='container'>
        <h2 className='uppercase'>почему выбирают нас</h2>
        <div className={s.benefit_cards}>
          <div>
            <h4 className='font-semibold'>01</h4>
            <p>широкий спектр <br/> услуг в одном месте</p>
          </div>
          <div>
            <h4 className='font-semibold'>02</h4>
            <p>высококвалифицированные мастера </p>
          </div>
          <div>
            <h4 className='font-semibold'>03</h4>
            <p>приемлемые <br/> цены</p>
          </div>
          <div>
            <h4 className='font-semibold'>04</h4>
            <p>Индивидуальный <br/> подход </p>
          </div>
          <div>
            <h4 className='font-semibold'>05</h4>
            <p>уютная атмосфера</p>
          </div>
          <div>
            <h4 className='font-semibold'>06</h4>
            <p>бесплатный чай, <br/>кофе</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;