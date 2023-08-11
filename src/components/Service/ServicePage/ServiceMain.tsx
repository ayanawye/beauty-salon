"use client";
import React, { FC } from "react";
import s from "./ServicePage.module.scss";
import Button, { IVariant } from "@/components/UI-modals/Button/Button";
import Image from "next/image";
import { useGetDetailServiceQuery, useGetServiceCategoryPriceQuery } from "@/services/getServiceApi";
import Link from "next/link";

interface ServiceMainProps {
  id: number;
}

const ServiceMain: FC<ServiceMainProps> = ({ id }) => {
  const {data: service} = useGetDetailServiceQuery(id)

  const scrollToConsultation = () => {
    const consultationElement = document.getElementById("consultation");
    if (consultationElement) {
      consultationElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <main className={s.main}>
      <div className="container h-full">
        <div className={s.content}>
          <div className={s.content_left}>
            <h2>{service?.title}</h2>
            <p>
              {service?.text}
            </p>
            <div className={s.content_left__btn}>
                <div>
                <Button onClick={scrollToConsultation} padding="17px 40px" variant={IVariant.primary}>
              <Link href="#consultation">
                  получить скидку 15% на первый визит
              </Link>
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
