"use client"
import Image from "next/image";
import React, { FC } from "react";
import s from "./Service.module.scss";
import Button, { IVariant } from "../UI-modals/Button/Button";
import { useGetServiceQuery } from "@/services/getServiceApi";


const Service: FC = () => {
  const {data: services} = useGetServiceQuery('')

  return (
    <section className={s.service}>
      <div className="container">
        <h2 className="uppercase font-normal">Услуги</h2>
        <div className={s.service_cards}>
          {services?.length !== 0 &&
            services?.map((service) => (
              <div key={service?.id}>
                <img
                  alt="service"
                  src={service.image}
                />
                <h4 className="uppercase font-bold">{service?.title}</h4>
                <p>{service?.description}</p>
              </div>
            ))}
        </div>
        <div className={s.btn}>
          <div>
          <Button padding="17px 20px" variant={IVariant.primary}>получить скидку 15% на первый визит</Button>
          </div>
          <div>
          <Button padding="17px 20px" variant={IVariant.outlined}>записаться онлайн</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
