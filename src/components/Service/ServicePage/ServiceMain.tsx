"use client";
import React, { FC } from "react";
import s from "./ServicePage.module.scss";
import Button, { IVariant } from "@/components/UI-modals/Button/Button";
import Image from "next/image";
import { useGetDetailServiceQuery, useGetServiceCategoryPriceQuery } from "@/services/getServiceApi";

interface ServiceMainProps {
  id: number;
}

const ServiceMain: FC<ServiceMainProps> = ({ id }) => {
  const {data: service} = useGetDetailServiceQuery(id)

  return (
    <main className={s.main}>
      <div className="container">
        <div className={s.content}>
          <div className={s.content_left}>
            <h2>{service?.title}</h2>
            <p>
              {service?.text}
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
            <img src={service?.image} alt="image"/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceMain;
