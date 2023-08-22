"use client";
import React, { FC, useState } from "react";
import s from "./FirstVisitSale.module.scss";
import Button, { IVariant } from "../UI-modals/Button/Button";
import { usePostPhoneMutation } from "@/services/postConsultationApi";
import { message } from "antd";

const FirstVisitSale: FC = () => {
  const [number, setNumber] = useState<string>("");
  const [inputError, setInputError] = useState("");
  const [postPhone] = usePostPhoneMutation()

  const handleSendNumber = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (number.length === 11) {
      setInputError("Верно");
      try {
        await postPhone({phone_number: number})
        message.success({
          type: 'success',
          content: 'С вами скоро свяжется наш администратор',
          className: 'custom-class',
          style: {
            marginTop: '70px',
          },
        });
        setTimeout(() => {
          setNumber('')
          setInputError('')
        }, 2000)
      } catch (error) {
        
      }
    } else if (number.length > 11) {
      setInputError("Введите номер в формате +7XXXXXXXXXX");
    } else {
      setInputError("Ошибка при вводе номера. Пример: +7XXXXXXXXXX");
    }
  };

  return (
    <div className={s.sale} id="consultation">
      <form onSubmit={handleSendNumber}>
        <h2 className="uppercase font-normal text-center">
        консультация
        </h2>
        <p className="font-normal text-center">
          Мы свяжемся с вами в течение нескольких минут и <br /> запишем вас на
          удобную дату
        </p>
        <div className={s.send}>
          <input
            type="number"
            placeholder="+7XXXXXXXXXX"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <div className={s.btn}>
            <Button type="submit" padding="24px 0" variant={IVariant.black}>
              отправить
            </Button>
          </div>
        </div>
          {setInputError.length !== 0 && (
            <h4 className="mt-5 text-center">{inputError}</h4>
          )}
      </form>
    </div>
  );
};

export default FirstVisitSale;
