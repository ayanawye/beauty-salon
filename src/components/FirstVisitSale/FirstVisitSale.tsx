"use client";
import React, { FC, useState } from "react";
import s from "./FirstVisitSale.module.scss";
import Button, { IVariant } from "../UI-modals/Button/Button";

const FirstVisitSale: FC = () => {
  const [number, setNumber] = useState<string>("");
  const [inputError, setInputError] = useState("");

  const handleSendNumber = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (number.length === 12) {
      console.log(typeof number);
      setInputError("Верно");
    } else if (number.length > 12) {
      setInputError("Длина номера некорректна. Пример: +996 000 00 00 00");
    } else {
      setInputError("Ошибка при вводе номера. Пример: +996 000 00 00 00");
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
            placeholder="+996 000 00 00 00"
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
