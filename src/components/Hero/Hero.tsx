"use client";
import React from "react";
import s from "./Hero.module.scss";
import Button, { IVariant } from "../UI-modals/Button/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.hero_content}>
        <div className={s.hero_left}>
          <div className={s.hero_left__content}>
            <h1>Салон красоты Кудряшка</h1>
            <p>
              Cтрижки, окрашивания, укладки, макияж, маникюр и педикюр,
              косметология, перманентный макияж, массаж, коррекция фигуры
            </p>
            <Button padding="17px 100px" variant={IVariant.outlined}>
              <Link href="#">записаться онлайн</Link>
            </Button>
          </div>
        </div>
        <div className={s.hero_right}>
          <div className={s.hero_right__content}>
            <div>
              <p className="uppercase mb-2 text-base">
                ул. Белореченская <br />
                m. Люблино
              </p>
              <p className="font-bold">+7(999) 599-01-00</p>
              <p className="font-bold">+7(999) 599-01-00</p>
            </div>
            <div>
              <p className="uppercase mb-2 text-base">
                ул. Cудакова <br />
                m. Люблино
              </p>
              <p className="font-bold">+7(999) 599-01-00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
