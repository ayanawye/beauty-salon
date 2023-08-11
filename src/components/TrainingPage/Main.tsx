"use client";
import React from "react";
import s from "./Training.module.scss";
import Button, { IVariant } from "@/components/UI-modals/Button/Button";
import Image from "next/image";

const Main = () => {
  return (
    <main className={s.main}>
      <div className="flex justify-between h-full">
        <div className={s.main_left}>
          <h2 className="uppercase">
            Обучение в <br /> салоне красоты <br /> Кудряшка
          </h2>
          <p className="mt-3.5">
            Все виды стрижек. В услугу входит мытье, стрижка и укладка. Мы даем
            гарантию на наши услуги!
          </p>
          <div className={s.main_left_btn}>
            <div>
              <Button padding="16px 37px" variant={IVariant.primary}>
                получить скидку 20% на первый визит
              </Button>
            </div>
            <div>
              <Button padding="16px 100px" variant={IVariant.outlined}>
                записаться онлайн
              </Button>
            </div>
          </div>
        </div>
        <div className={s.main_right}>
          <div className={s.image}>
            <div className={s.img}>
              <img
                src="/training-bg.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
