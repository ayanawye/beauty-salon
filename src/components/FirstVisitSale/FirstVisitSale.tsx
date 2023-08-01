"use client"
import React, { FC, useState } from 'react';
import s from './FirstVisitSale.module.scss';
import Button, { IVariant } from '../UI-modals/Button/Button';

const FirstVisitSale:FC = () => {
  const [number, setNumber] = useState<string>("")
  const [inputError, setInputError] = useState("")

  const handleSendNumber = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (number.length === 12) {
      console.log(typeof number);
      setInputError('Верно')
    } else if (number.length > 12) {
      setInputError("Длина номера некорректна. Пример: +996 000 00 00 00")
    } else {
      setInputError("Ошибка при вводе номера. Пример: +996 000 00 00 00")
    }
    
  }

  return (
    <div className={s.sale}>
      <form onSubmit={handleSendNumber}>
        <h2 className='uppercase font-normal text-center'>получи скидку 15% на первый визит</h2>
        <p className='font-normal text-center'>Мы свяжемся с вами в течение нескольких минут и <br/> запишем вас на удобную дату</p>
        <div>
          <input type="number" placeholder='+996 000 00 00 00' value={number} onChange={e => setNumber(e.target.value)}/>
          <Button type="submit" padding='24px 84px' variant={IVariant.black}>отправить</Button>
          {setInputError.length !== 0 && <h4 className='mt-3 text-start'>{inputError}</h4>}
        </div>
      </form>
    </div>
  );
};

export default FirstVisitSale;