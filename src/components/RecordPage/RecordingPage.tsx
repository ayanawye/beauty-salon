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
import Link from "next/link";
import { memberIdSlice } from "@/store/reducers/memberIdSlice";

const RecordingPage = () => {
  const { address, members, free_time_id, services } = useAppSelector(
    (state) => state.createRecordSlice
  );
  const { memberId, changeDate } = useAppSelector(
    (state) => state.memberIdSlice
  );

  const [selectedBlock, setSelectedBlock] = useState("address");
  const dispatch = useAppDispatch();
  const { data: service } = useGetServiceQuery("");
  const { data: membersList } = useGetSpecialistsByAddressQuery(address);
  const filterService = service?.filter((el: any) => services.includes(el.id));
  const filterMember = membersList?.filter((el: any) =>
    members.includes(el.id)
  );
  dayjs.locale("ru");

  let formattedDataDayjs = changeDate?.map((item: any) => ({
    ...item,
    formattedDate: dayjs(item.newData.time).format("dddd, D MMMM"),
  }));

  useEffect(() => {
    setSelectedBlock("selection");
  }, [address]);

  const handleAddAddress = (id: number) => {
    dispatch(createRecordSlice.actions.addAddress(id));
    setSelectedBlock("selection");
  };

  const deleteData = (id: number) => {
    dispatch(createRecordSlice.actions.deleteDate(id));
    dispatch(memberIdSlice.actions.deleteDate(id));
  };

  const nextPage =
    address !== null &&
    members.length !== 0 &&
    services.length !== 0 &&
    free_time_id.length !== 0;

  const btnVisible = nextPage && selectedBlock === "selection";

  return (
    <section className={s.record}>
      <div className={s.record_content}>
        <div className={s.left}>
          <Link href="/">
            <img src="/logo1.png" alt="logo" className={s.logo} />
          </Link>
          <img src="/record-girl.jpg" alt="girl" />
        </div>
        <div className={s.right}>
          {selectedBlock === "address" && (
            <>
              <div className={s.main_title}>
                <Link href="/">
                  <img src="/arrow.svg" alt="back-svg" />
                </Link>
                <h2 className="uppercase">выберите филиал</h2>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleAddAddress(2)}
              >
                <div className={s.text}>
                  <h3>ул Белореченская</h3>
                  <p>Д. 41 корпус 1</p>
                </div>
                <img src="/record-address1.png" alt="address" />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleAddAddress(1)}
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
              <div className={s.main_title}>
                <img
                  src="/arrow.svg"
                  onClick={() => setSelectedBlock("address")}
                  className={s.svg}
                  alt="back-svg"
                />
                <h2 className="uppercase">кудряшка</h2>
              </div>
              <div className={s.selected_box}>
                {members.length === 0 ? (
                  <div
                    className={s.selected_block}
                    onClick={() => setSelectedBlock("specialist")}
                  >
                    <img src="/specialists.svg" alt="svg" />
                    <p className="uppercase">Выбрать специалиста</p>
                  </div>
                ) : (
                  <>
                    <div className={s.chosen}>
                      {filterMember?.length !== 0 &&
                        filterMember?.map((el) => (
                          <div className={s.member} key={el.id}>
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
                              <img src="/delete.svg" alt="delete" />
                            </div>
                          </div>
                        ))}
                      <p
                        onClick={() => setSelectedBlock("specialist")}
                        className={s.add_member}
                      >
                        +
                      </p>
                    </div>
                  </>
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
                    {formattedDataDayjs.length !== 0 && (
                      <div className={s.selected_block}>
                        <img src="/date.svg" alt="svg" />
                        {members.length > 1 && (
                          <p
                            onClick={() => setSelectedBlock("date")}
                            className={s.add_member}
                          >
                            +
                          </p>
                        )}
                        <div className={s.right_chosen_time}>
                          {formattedDataDayjs?.map((el, index) => (
                            <div className={s.right_chosen_time} key={index}>
                              {el?.newData.date?.map((timeObj: any) => (
                                <div key={el.id}>
                                  <div>
                                    <p className={s.day}>{el.formattedDate}</p>
                                    <p key={timeObj.time}>{timeObj.time}</p>
                                  </div>
                                  <img
                                    onClick={() => deleteData(timeObj.id)}
                                    src="/delete.svg"
                                    alt="svg"
                                  />
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
          {selectedBlock === "date" && filterMember?.length !== 0 && (
            <>
              <div className={s.main_title}>
                <img
                  onClick={() => setSelectedBlock("selection")}
                  src="/arrow.svg"
                  alt="back-svg"
                />
                <h2 className="uppercase">Выбрать дату и время</h2>
              </div>
              {filterMember?.map((el) => (
                <>
                  <DateCalendar
                    key={el.id}
                    member={el.id}
                    onClick={() => setSelectedBlock("selection")}
                  />
                </>
              ))}
            </>
          )}
          {selectedBlock === "service" && (
            <div>
              <h2 className="uppercase mb-10">Выбрать услуги</h2>
              {members?.length !== 0 && members?.map(el => (
                <ServiceList
                  key={el}
                  onClick={() => setSelectedBlock("selection")}
                  id={el}
                />
              ))}
            </div>
          )}
          {selectedBlock === "userInfo" && <UserInfoForm />}
          {btnVisible && (
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
