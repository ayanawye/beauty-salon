import React, { FC, useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useGetWeekDateQuery } from "@/services/getDate";
import s from './RecordingPage.module.scss'
import { useAppDispatch, useAppSelector } from "@/store/store";
import { createRecordSlice } from "@/store/reducers/createRecordSlice";
import { useGetSpecialistsByAddressQuery } from "@/services/getSpecialist";

interface DatePickerProps {
  member: any,
  onClick: () => void;
}

const DatePicker: FC<DatePickerProps> = ({member, onClick}) => {
  const {address, members, free_time_id} = useAppSelector(state => state.createRecordSlice)
  const {data: expert} = useGetSpecialistsByAddressQuery(address)
  const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));
  const { data: dates } = useGetWeekDateQuery(member);
  const dispatch = useAppDispatch()
  const formattedDate = dayjs(value).format('YYYY-MM-DD');
  
  let foundDate = null as any
  for (const key in dates) {
    if (key === formattedDate) {
      const targetValue = dates[formattedDate]
      foundDate = targetValue
      break;
    }
  }
  let foundDateArray = [] as any
  
  const addTime = (time: number) => {
    dispatch(createRecordSlice.actions.addDate(time))
    foundDateArray.push({"date": foundDate, "time": formattedDate});
    localStorage.setItem('foundDate', JSON.stringify(foundDateArray))
  }
  useEffect(() => {
    if(members.length === free_time_id.length){
      onClick()
    }
  }, [members.length, free_time_id.length])
  
  return (
    <div>
      {expert?.length !== 0 && expert?.filter(el => el.id === member)?.map(el => (
        <h3 key={el.id} className="font-semibold text-center mb-4">{el.fio}</h3>
      ))}
      <div className={s.date}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          <DateCalendar
            showDaysOutsideCurrentMonth
            fixedWeekNumber={6}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
          <ul>
              {foundDate?.length !== 0 && foundDate !== null ? (
                foundDate?.map((el: any) =>
                  !el.is_busy ? (
                    <li onClick={() => addTime(el.id)} key={el.id}>
                      {el.time}
                    </li>
                  ) : <h3  key={el.id}>Нет окошек на эту дату !</h3>
                )
              ) : (
                <h3>Нет окошек на эту дату !</h3>
              )}
            </ul>
        </DemoContainer>
      </LocalizationProvider>
      </div>
    </div>
  );
}

export default DatePicker;