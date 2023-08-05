"use client"
import Image from "next/image";
import React, { FC } from "react";
import s from "./Service.module.scss";
import Button, { IVariant } from "../UI-modals/Button/Button";

const data = [
  {
    title: "Брови",
    price: 200,
    id: 1,
    category: [
      {
        id: 1,
        title: "jdjd",
      },
      {
        id: 2,
        title: "jdjd",
      },
      {
        id: 3,
        title: "jdjd",
      },
      {
        id: 4,
        title: "jdjd",
      },
    ],
    img: "https://n1s1.hsmedia.ru/44/87/28/448728e6e87fa9480e410c2e944ec186/1080x1112_0xac120004_677094081676671852.jpeg",
  },
  {
    title: "Брови",
    price: 200,
    id: 2,
    category: [
      {
        id: 1,
        title: "jdjd",
      },
      {
        id: 2,
        title: "jdjd",
      },
      {
        id: 3,
        title: "jdjd",
      },
      {
        id: 4,
        title: "jdjd",
      },
    ],
    img: "https://n1s1.hsmedia.ru/44/87/28/448728e6e87fa9480e410c2e944ec186/1080x1112_0xac120004_677094081676671852.jpeg",
  },
  {
    title: "Брови",
    price: 200,
    id: 3,
    category: [
      {
        id: 1,
        title: "jdjd",
      },
      {
        id: 2,
        title: "jdjd",
      },
      {
        id: 3,
        title: "jdjd",
      },
      {
        id: 4,
        title: "jdjd",
      },
    ],
    img: "https://n1s1.hsmedia.ru/44/87/28/448728e6e87fa9480e410c2e944ec186/1080x1112_0xac120004_677094081676671852.jpeg",
  },
  {
    title: "Брови",
    price: 200,
    id: 4,
    category: [
      {
        id: 1,
        title: "jdjd",
      },
      {
        id: 2,
        title: "jdjd",
      },
      {
        id: 3,
        title: "jdjd",
      },
      {
        id: 4,
        title: "jdjd",
      },
    ],
    img: "https://n1s1.hsmedia.ru/44/87/28/448728e6e87fa9480e410c2e944ec186/1080x1112_0xac120004_677094081676671852.jpeg",
  },
  {
    title: "Брови",
    price: 200,
    id: 5,
    category: [
      {
        id: 1,
        title: "jdjd",
      },
      {
        id: 2,
        title: "jdjd",
      },
      {
        id: 3,
        title: "jdjd",
      },
      {
        id: 4,
        title: "jdjd",
      },
    ],
    img: "https://n1s1.hsmedia.ru/44/87/28/448728e6e87fa9480e410c2e944ec186/1080x1112_0xac120004_677094081676671852.jpeg",
  },
];

const Service: FC = () => {
  return (
    <section className={s.service}>
      <div className="container">
        <h2 className="uppercase font-normal">Услуги</h2>
        <div className={s.service_cards}>
          {data.length !== 0 &&
            data.map((el) => (
              <div key={el.id}>
                <Image
                  alt="service"
                  src="/service.png"
                  width={270}
                  height={270}
                />
                <h4 className="uppercase font-bold">{el?.title}</h4>
                <ul>
                  {el?.category.length !== 0 &&
                    el.category.map((cat) => (
                      <li key={cat.id}>{cat?.title}, </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>
        <div className={s.btn}>
          <div>
          <Button padding="17px 40px" variant={IVariant.primary}>получить скидку 15% на первый визит</Button>
          </div>
          <div>
          <Button padding="17px 100px" variant={IVariant.outlined}>записаться онлайн</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
