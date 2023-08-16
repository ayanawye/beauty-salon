"use client";
import React, {useState} from "react";
import s from "./RecordingPage.module.scss";
import { useAppSelector, useAppDispatch } from "@/store/store";
import { useGetAddressQuery } from "@/services/getAddressApi";
import { createRecordSlice } from "@/store/reducers/createRecordSlice";

const RecordingPage = () => {
  const { record } = useAppSelector((state) => state.createRecordSlice);
  const { data: addresses } = useGetAddressQuery("");
  const [selectedBlock, setSelectedBlock] = useState('')
  const dispatch = useAppDispatch();

  const handleAddAddress = (id) => {
    dispatch(createRecordSlice.actions.addAddress(id));
  };
  console.log(record);

  return (
    <section className={s.record}>
      <div className={s.record_content}>
        <div className={s.left}>
          <img src="/record-girl.jpg" alt="girl" />
        </div>
        <div className={s.right}>
          {!record.address && (
            <>
              <h2 className="uppercase">выберите филиал</h2>
              {addresses?.length !== 0 &&
                addresses?.map((address) => (
                  <div
                    key={address.id}
                    onClick={() => handleAddAddress(address.id)}
                  >
                    <div className={s.text}>
                      <h3>ул. {address.street}</h3>
                      <p>{address.address}</p>
                    </div>
                    <img src="/record-address1.png" alt="address" />
                  </div>
                ))}
            </>
          )}
          {record.address && (
            <>
              <h2 className="uppercase mb-16">кудряшка</h2>
              <div className={s.selected_block} onClick={() => setSelectedBlock('specialist')}>
                <img src="/specialists.svg" alt="svg"/>
                <p className="uppercase">Выбрать специалиста</p>
              </div>
              <div className={s.selected_block} onClick={() => setSelectedBlock('date')}>
                <img src="/date.svg" alt="svg"/>
                <p className="uppercase">Выбрать дату и время</p>
              </div>
              <div className={s.selected_block} onClick={() => setSelectedBlock('service')}>
                <img src="/select-service.svg" alt="svg"/>
                <p className="uppercase">Выбрать услуги</p>
              </div>
            </>
          )}
          {selectedBlock === 'specialist' && <h2>специалисты</h2> }
          {selectedBlock === 'date' && <h2>data</h2> }
          {selectedBlock === 'service' && <h2>услуги</h2> }
        </div>
      </div>
    </section>
  );
};

export default RecordingPage; 