"use client";
import React, { FC } from "react";
import s from "./ServicePage.module.scss";
import Button, { IVariant } from "@/components/UI-modals/Button/Button";
import Image from "next/image";

interface ServiceMainProps {
  id: number;
}

const ServiceMain: FC<ServiceMainProps> = ({ id }) => {
  console.log(id);

  return (
    <main className={s.main}>
      <div className="container">
        <div className={s.content}>
          <div className={s.content_left}>
            <h2>Брови</h2>
            <p>
              Все виды стрижек. В услугу входит мытье, стрижка и укладка. Мы
              даем гарантию на наши услуги!{" "}
            </p>
            <div className={s.content_left__btn}>
              <div>
                <Button padding="17px 40px" variant={IVariant.primary}>
                  получить скидку 15% на первый визит
                </Button>
              </div>
              <div>
                <Button padding="17px 100px" variant={IVariant.outlined}>
                  записаться онлайн
                </Button>
              </div>
            </div>
          </div>
          <div className={s.content_right}>
            <Image src="/eye-brow.png" alt="image" width={100} height={100} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceMain;
