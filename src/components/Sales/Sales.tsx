"use client";
import React from "react";
import s from "./Sales.module.scss";
import Button, { IVariant } from "../UI-modals/Button/Button";
import { useGetActionQuery } from "@/services/getAction";
import Link from "next/link";

const Sales = () => {
  const { data: sales } = useGetActionQuery("");

  return (
    <section className={s.sale} id="sales">
      <div className="container">
        <h2 className="uppercase">акции</h2>
        <div className={s.sale_cards}>
          <div className={s.active}>
            <p>
              приветственная <br /> акция
            </p>
            <h3 className="mt-3">скидка 15 %</h3>
          </div>
          <div>
            <p>
              ШКОЛЬНИКАМ И <br /> СТУДЕНТАМ НА ВСЕ <br /> УСЛУГИ
            </p>
            <h3 className="mt-3">скидка 10 %</h3>
          </div>
          <div>
            <p>
              СТРИЖКА <br /> ПЕНСИОНЕРАМ
            </p>
            <h3 className="mt-3">250р</h3>
          </div>
        </div>
        <div className={s.sale_big_card}>
          {sales?.length !== 0 &&
            sales?.map((sale) => (
              <div key={sale.id}>
                <p>{sale.description}</p>
                <h3 className="mt-3">{sale.title}</h3>
              </div>
            ))}
          {sales?.length !== 0 && <img src="/sun_curcle.svg" alt="image" />}
        </div>
        <div className={s.sale_btn}>
          <div>
            <Link href="#consultation">
              <Button padding="17px 40px" variant={IVariant.primary}>
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

export default Sales;
