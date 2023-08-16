"use client";
import React, { useState } from "react";
import s from "./RecordingPage.module.scss";
import { useAppSelector, useAppDispatch } from "@/store/store";
import { createRecordSlice } from "@/store/reducers/createRecordSlice";
import SpecialistItem from "./SpecialistItem";
import ServiceList from "./ServiceList";

const RecordingPage = () => {
  const { record } = useAppSelector((state) => state.createRecordSlice);
  const [selectedBlock, setSelectedBlock] = useState("address");
  const dispatch = useAppDispatch();

  const handleAddAddress = (id: number) => {
    dispatch(createRecordSlice.actions.addAddress(id));
    setSelectedBlock("selection");
  };
  console.log(record);

  return (
    <section className={s.record}>
      <div className={s.record_content}>
        <div className={s.left}>
          <img src="/record-girl.jpg" alt="girl" />
        </div>
        <div className={s.right}>
          {selectedBlock === "address" && (
            <>
              <h2 className="uppercase">выберите филиал</h2>
              <div
                className="cursor-pointer"
                onClick={() => handleAddAddress(1)}
              >
                <div className={s.text}>
                  <h3>ул Белореченская</h3>
                  <p>Д. 41 корпус 1</p>
                </div>
                <img src="/record-address1.png" alt="address" />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleAddAddress(2)}
              >
                <div className={s.text}>
                  <h3>ул Судакова</h3>
                  <p>Д. 27</p>
                </div>
                <img src="/record-address2.png" alt="address" />
              </div>
            </>
          )}
          {selectedBlock === "selection" && (
            <>
              <h2 className="uppercase mb-16">кудряшка</h2>
              {record.specialist_id === null ? (
                <div
                  className={s.selected_block}
                  onClick={() => setSelectedBlock("specialist")}
                >
                  <img src="/specialists.svg" alt="svg" />
                  <p className="uppercase">Выбрать специалиста</p>
                </div>
              ) : (
                <div className={s.chosen}>
                  <div className={s.top}>
                    <img src="/expert-photo.png" alt="expert" />
                    <div>
                      <h3>Иман Бацаева</h3>
                      <p>топ-стилист</p>
                    </div>
                  </div>
                  <div onClick={() => dispatch(createRecordSlice.actions.deleteExpert())}>
                    <img src="/delete.svg" alt="" />
                  </div>
                </div>
              )}
              <div
                className={s.selected_block}
                onClick={() => setSelectedBlock("date")}
              >
                <img src="/date.svg" alt="svg" />
                <p className="uppercase">Выбрать дату и время</p>
              </div>
              <div
                className={s.selected_block}
                onClick={() => setSelectedBlock("service")}
              >
                <img src="/select-service.svg" alt="svg" />
                <p className="uppercase">Выбрать услуги</p>
              </div>
            </>
          )}
          {selectedBlock === "specialist" && (
            <SpecialistItem
              onClick={() => setSelectedBlock("selection")}
              id={record?.address}
            />
          )}
          {selectedBlock === "date" && <h2>data</h2>}
          {selectedBlock === "service" && (
            <ServiceList
              onClick={() => setSelectedBlock("selection")}
              id={record?.address}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default RecordingPage;
