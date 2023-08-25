"use client";
import React from "react";
import s from "./Training.module.scss";
import Button, { IVariant } from "@/components/UI-modals/Button/Button";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <main className={s.main}>
      <div className={s.content}>
        <div className={s.main_left}>
          <h2 className="uppercase">Обучение в салоне красоты Кудряшка</h2>
          <p className="mt-3.5">
            Все виды стрижек. В услугу входит мытье, стрижка и укладка. Мы даем
            гарантию на наши услуги!
          </p>
          <div className={s.main_left_btn}>
            <div>
              <Link href="#consultation">
                <Button padding="16px 10px" variant={IVariant.primary}>
                  консультация
                </Button>
              </Link>
            </div>
            <div>
              <Link href="/record">
              <Button padding="16px 10px" variant={IVariant.outlined}>
                записаться онлайн
              </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className={s.main_right}>
          <div className={s.image}>
            <div className={s.img}>
              <img src="/training-bg.jpg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
