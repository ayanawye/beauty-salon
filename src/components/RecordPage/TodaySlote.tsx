import { useGetTodaySloteQuery } from "@/services/getDate";
import { createRecordSlice } from "@/store/reducers/createRecordSlice";
import { useAppDispatch } from "@/store/store";
import React, { FC } from "react";

interface TodaySloteProps {
  member: number;
  onClick: () => void;
}

const TodaySlote: FC<TodaySloteProps> = ({ member, onClick }) => {
  const dispatch = useAppDispatch();
  const { data: todaySlote } = useGetTodaySloteQuery(member);
  console.log(todaySlote);

  const handleAddSpecialistDate = (time: number) => {
    dispatch(createRecordSlice.actions.addSpecialistId(member));
    dispatch(createRecordSlice.actions.addDate(time));
    onClick();
  };

  return (
    <ul>
      {todaySlote?.slots?.length !== 0 ? (
        todaySlote?.slots?.map((el: any) =>
          !el.is_busy ? (
            <li key={el.id} onClick={() => handleAddSpecialistDate(el.time)}>
              {el.time}
            </li>
          ) : (
            <h3 key={el.id}>Нет окошек на сегодня !</h3>
          )
        )
      ) : (
        <h3>Нет окошек на сегодня !</h3>
      )}
    </ul>
  );
};

export default TodaySlote;
