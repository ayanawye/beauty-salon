"use client";
import React from "react";
import s from "./RecordingPage.module.scss";
import {useAppSelector} from '../../store/store'

const RecordingPage = () => {
  const {record} = useAppSelector(state => state.createRecordSlice)
  
  return (
    <section className={s.record}>
      <div className={s.record_content}>
        <div className={s.left}>
          <img src="/record-girl.jpg" alt="girl" />
        </div>
        <div className={s.right}>
          <h2 className="uppercase">выберите филиал</h2>
          <div>
            <div className={s.text}>
              <h3>ул Белореченская</h3>
              <p>Д. 41 корпус 1</p>
            </div>
            <img src="/record-address1.png" alt="address" />
          </div>
          <div>
            <div className={s.text}>
              <h3>ул Судакова</h3>
              <p>Д. 27</p>
            </div>
            <img src="/record-address2.png" alt="address" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecordingPage;
