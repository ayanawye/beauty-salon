"use client";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import React, { useEffect, useState } from "react";
import s from "./RecordingPage.module.scss";
import { useAppSelector, useAppDispatch } from "@/store/store";
import { createRecordSlice } from "@/store/reducers/createRecordSlice";
import SpecialistItem from "./SpecialistItem";
import ServiceList from "./ServiceList";
import DateCalendar from "./DatePicker";
import Button, { IVariant } from "../UI-modals/Button/Button";
import UserInfoForm from "./UserInfoForm";
import { useGetServiceQuery } from "@/services/getServiceApi";
import { useGetSpecialistsByAddressQuery } from "@/services/getSpecialist";

const RecordingPage = () => {
  const { address, member, free_time_id, services } = useAppSelector(
    (state) => state.createRecordSlice
  );
  console.log(address, member)
  
  const [date, setDate] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState("address");
  const dispatch = useAppDispatch();

  const { memberId } = useAppSelector((state) => state.memberIdSlice);
  const { data: service } = useGetServiceQuery("");
  const { data: members } = useGetSpecialistsByAddressQuery(address);
  const filterService = service?.filter((el: any) => services.includes(el.id));
  const filterMember = members?.filter((el: any) => member.includes(el.id));

  dayjs.locale("ru");
  const formattedDataDayjs = date?.map((item: any) => ({
    ...item,
    formattedDate: dayjs(item.time).format("dddd, D MMMM"),
  }));

  useEffect(() => {
    if(address){
      setSelectedBlock('selection')
    }
    localStorage.removeItem("foundDate");
  }, []);

  useEffect(() => {
    const date = localStorage.getItem("foundDate");
    const parsedFoundDateArray = date ? JSON.parse(date) : [];
    setDate(parsedFoundDateArray);
  }, [free_time_id]);

  const handleAddAddress = (id: number) => {
    dispatch(createRecordSlice.actions.addAddress(id));
    setSelectedBlock("selection");
  };

  const nextPage =
    address !== null &&
    member.length !== 0 &&
    services.length !== 0 &&
    free_time_id.length !== 0;

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
              <div className={s.selected_box}>
                {member.length === 0 ? (
                  <div
                    className={s.selected_block}
                    onClick={() => setSelectedBlock("specialist")}
                  >
                    <img src="/specialists.svg" alt="svg" />
                    <p className="uppercase">Выбрать специалиста</p>
                  </div>
                ) : (
                  <div className={s.chosen}>
                    {filterMember?.length !== 0 &&
                      filterMember?.map((el) => (
                        <React.Fragment key={el.id}>
                          <div className={s.top}>
                            <img src={el.avatar} alt="expert" />
                            <div>
                              <h3>{el.fio}</h3>
                              <p>{el.status}</p>
                            </div>
                          </div>
                          <div
                            onClick={() =>
                              dispatch(
                                createRecordSlice.actions.deleteExpert(el.id)
                              )
                            }
                          >
                            <img src="/delete.svg" alt="" />
                          </div>
                        </React.Fragment>
                      ))}
                  </div>
                )}
                {free_time_id?.length === 0 ? (
                  <div
                    className={s.selected_block}
                    onClick={() => setSelectedBlock("date")}
                  >
                    <img src="/date.svg" alt="svg" />
                    <p className="uppercase">Выбрать дату и время</p>
                  </div>
                ) : (
                  <>
                    {date.length !== 0 &&
                      date.map((el: any) => (
                        <div
                          key={el}
                          className={s.selected_block}
                          onClick={() => setSelectedBlock("date")}
                        >
                          <img src="/date.svg" alt="svg" />
                          <div className={s.right_chosen_time}>
                            {formattedDataDayjs.map((el) => (
                              <React.Fragment key={el}>
                                <p className={s.day}>{el.formattedDate}</p>
                                {el.date.map((timeObj: any) => (
                                  <React.Fragment key={timeObj.time}>
                                    <p key={timeObj.time}>{timeObj.time}</p>
                                    <img
                                      onClick={() =>
                                        dispatch(
                                          createRecordSlice.actions.deleteDate(
                                            timeObj.id
                                          )
                                        )
                                      }
                                      src="/delete.svg"
                                      alt="svg"
                                    />
                                  </React.Fragment>
                                ))}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      ))}
                  </>
                )}
                <div className={`${s.selected_block_service}`}>
                  <div
                    onClick={() => setSelectedBlock("service")}
                    className={s.top}
                  >
                    <img src="/select-service.svg" alt="svg" />
                    <p className="uppercase">Выбрать услуги</p>
                  </div>
                  {services.length !== 0 &&
                    filterService?.map((el) => (
                      <div className={s.bottom} key={el.id}>
                        <div>
                          <h3>{el.title}</h3>
                        </div>
                        <div
                          onClick={() =>
                            dispatch(
                              createRecordSlice.actions.deleteService(el.id)
                            )
                          }
                        >
                          <img src="/delete.svg" alt="" />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </>
          )}
          {selectedBlock === "specialist" && (
            <SpecialistItem
              onClick={() => setSelectedBlock("selection")}
              id={address}
            />
          )}
          {selectedBlock === "date" &&
            filterMember?.length !== 0 &&
            filterMember?.map((el) => (
              <DateCalendar
                key={el.id}
                member={el.id}
                onClick={() => setSelectedBlock("selection")}
              />
            ))}

          {selectedBlock === "service" && (
            <ServiceList
              onClick={() => setSelectedBlock("selection")}
              id={memberId}
            />
          )}
          {selectedBlock === "userInfo" && <UserInfoForm />}
          {nextPage && selectedBlock !== "userInfo" && (
            <Button
              type="submit"
              onClick={() => setSelectedBlock("userInfo")}
              padding="24px 0"
              variant={IVariant.black}
            >
              Далее
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecordingPage;
