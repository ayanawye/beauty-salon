"use client";
import React from "react";
import s from "./Hero.module.scss";
import Button, { IVariant } from "../UI-modals/Button/Button";
import Link from "next/link";
import { useGetAddressQuery } from "@/services/getAddressApi";

const Hero = () => {
  const {data: addresses} = useGetAddressQuery('')
  
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
            <div className={s.hero_btn}>
            <Button padding="17px 0" variant={IVariant.outlined_white}>
              <Link href="/record">записаться онлайн</Link>
            </Button>
            </div>
          </div>
        </div>
        <div className={s.hero_right}>
          <div className={s.hero_right__content}>
            {addresses?.length !== 0 && addresses?.map(address => (
              <div key={address.id}>
              <p className="uppercase text-base">
                ул. {address?.street}
              </p>
              <p className="uppercase mb-2 text-base">
                m. {address?.metro}
              </p>
              <a href={`tel:${address?.number}`} className="font-bold">{address?.number}</a>
              <a href={`tel:${address?.number_2}`} className="font-bold">{address?.number_2}</a>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
