import React from "react";
import s from "./Training.module.scss";

const TrainBenefit = () => {
  return (
    <div className={s.benefits}>
      <div className="container">
        <h2>Что вы получите в результате обучения</h2>
        <div className={s.cards}>
          <div className={s.card}>
            <div className={s.image}>
              <img className={s.img1} src="/brash1.png" alt="avatar" />
              <img className={s.img2} src="/brash2.png" alt="avatar" />
              <img className={s.img3} src="/brash3.png" alt="avatar" />
            </div>
            <h3>насыщенная программа</h3>
          </div>
          <div className={s.card}>
            <div className={s.image}>
              <img src="/benefit3.png" alt="avatar" />
            </div>
            <h3>работа после курса</h3>
          </div>
          <div className={s.card}>
            <div className={s.image}>
              <img src="/benefit2.png" alt="avatar" />
            </div>
            <h3>опытные ментора</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainBenefit;
