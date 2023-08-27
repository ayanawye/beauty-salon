import { useGetTodaySloteQuery } from "@/services/getDate";
import { createRecordSlice } from "@/store/reducers/createRecordSlice";
import { memberIdSlice } from "@/store/reducers/memberIdSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import dayjs from "dayjs";
import React, { FC } from "react";

interface TodaySloteProps {
  member: number;
  onClick: () => void;
}

const TodaySlote: FC<TodaySloteProps> = ({ member, onClick }) => {
  const { changeDate } = useAppSelector((state) => state.memberIdSlice);
  const dispatch = useAppDispatch();
  const { data: todaySlote } = useGetTodaySloteQuery(member);
  const formattedDate = dayjs(todaySlote?.date).format("YYYY-MM-DD");

  const handleAddSpecialistDate = (date: any) => {
    let foundDateArray: any = {};
    const newData = {
      date: [date],
      time: formattedDate,
    };
    const updatedData = { ...foundDateArray, newData, id: date.id };
    dispatch(createRecordSlice.actions.addSpecialistId(member));
    dispatch(createRecordSlice.actions.addDate(date.id));
    dispatch(memberIdSlice.actions.addDate(updatedData));
    onClick();
  };

  return (
    <ul>
      {todaySlote?.slots?.length !== 0 ? (
        todaySlote?.slots?.map((el: any) =>
          !el.is_busy ? (
            <li key={el.id} onClick={() => handleAddSpecialistDate(el)}>
              {el.time}
            </li>
          ) : (
            <h3 key={el.id}>Нет окошек на сегодня!</h3>
          )
        )
      ) : (
        <h3>Нет окошек на сегодня!</h3>
      )}
    </ul>
  );
};

export default TodaySlote;
