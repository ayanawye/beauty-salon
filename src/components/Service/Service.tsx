"use client";
import React, { FC } from "react";
import s from "./Service.module.scss";
import Button, { IVariant } from "../UI-modals/Button/Button";
import { useGetServiceQuery } from "@/services/getServiceApi";
import Link from "next/link";

const Service: FC = () => {
  const { data: services } = useGetServiceQuery("");

  return (
    <section className={s.service}>
      <div className="container">
        <h2 className="uppercase font-normal">Услуги</h2>
        <div className={s.service_cards}>
          {services?.length !== 0 &&
            services?.map((service) => (
              <div key={service?.id}>
                <Link href={`/service/${service.id}/${service.title}`}>
                  <img alt="service" src={service.image} />
                  <h4 className="uppercase font-bold">{service?.title}</h4>
                  <p>{service?.description}</p>
                </Link>
              </div>
            ))}
        </div>
        <div className={s.btn}>
          <div>
            <Link href="#consultation">
              <Button padding="17px 20px" variant={IVariant.primary}>
                консультация
              </Button>
            </Link>
          </div>
          <div>
            <Link href="/record">
              <Button padding="17px 100px" variant={IVariant.outlined}>
                записаться онлайн
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
