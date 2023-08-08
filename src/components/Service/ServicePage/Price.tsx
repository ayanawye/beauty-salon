'use client'
import React, { FC } from 'react';
import s from './ServicePage.module.scss'
import Button, { IVariant } from '@/components/UI-modals/Button/Button';
import { useGetServiceCategoryPriceQuery } from '@/services/getServiceApi';

interface ServicePriceProps {
  id: number;
}

const Price: FC<ServicePriceProps> = ({id}) => {
  const {data: servicePrice} = useGetServiceCategoryPriceQuery(id)

  return (
    <section className={s.price}>
      <div className="container">
        <h2>СТОИМОСТЬ</h2>
        <div className={s.price_cards}>
          {servicePrice?.length !==0 && servicePrice?.map(el => (
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