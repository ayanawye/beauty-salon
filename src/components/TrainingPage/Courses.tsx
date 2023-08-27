"use client";
import React from "react";
import s from "./Training.module.scss";
import { useGetCoursesQuery } from "@/services/getCourses";
import Button, { IVariant } from "../UI-modals/Button/Button";
import Link from "next/link";

const Courses = () => {
  const { data: courses } = useGetCoursesQuery("");

  return (
    <section className={s.courses}>
      <div className="container">
        <h2>Курсы</h2>
        <div className={s.svg1}></div>
        <div className={s.svg2}></div>
        <div className={s.courses_cards}>
          {courses?.length !== 0 &&
            courses?.map((el) => (
              <div key={el.id} className={s.courses_cards_card}>
                <img src={el.img} alt="image" className={s.coures_card__img} />
                <div>
                  <h3>{el.title}</h3>
                  <p>
                    <span>Длительность:</span> {el.duration}
                  </p>
                  <p>
                    <span>Цена:</span> {el.price}P
                  </p>
                  <span className="font-semibold">{el.certificate}</span>
                </div>
                <Link href="#consultation" className={s.btn}>
                  <Button variant={IVariant.primary} padding="10px 0">
                    подробнее
                  </Button>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
