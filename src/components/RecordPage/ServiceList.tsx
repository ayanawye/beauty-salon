import { FC, useState } from "react";
import s from "./RecordingPage.module.scss";
import { useAppDispatch } from "@/store/store";
import { createRecordSlice } from "@/store/reducers/createRecordSlice";

interface ServiceListProps {
  id: number | null;
  onClick: () => void;
}

const ServiceList: FC<ServiceListProps> = ({ id, onClick }) => {
  const dispatch = useAppDispatch();

  const handleAddService = (id: number) => {
    dispatch(createRecordSlice.actions.addService(id));
    onClick();
  };

  return (
    <div className="h-full">
      <h2 className="uppercase mb-10">Выбрать услуги</h2>
      <div onClick={() => handleAddService(1)} className={s.service}>
        <h3 className="uppercase">Женская стрижка</h3>
        <p className="uppercase">1000R</p>
      </div>
    </div>
  );
};

export default ServiceList;
