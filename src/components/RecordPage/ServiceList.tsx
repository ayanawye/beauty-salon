import { FC, useState } from "react";
import s from "./RecordingPage.module.scss";
import { useAppDispatch } from "@/store/store";
import { createRecordSlice } from "@/store/reducers/createRecordSlice";
import { useGetMemberServiceQuery } from "@/services/getServiceApi";

interface ServiceListProps {
  id: number | null;
  onClick: () => void;
}

const ServiceList: FC<ServiceListProps> = ({ id, onClick }) => {
  const { data: servises } = useGetMemberServiceQuery(id);
  const dispatch = useAppDispatch();

  const handleAddService = (id: number) => {
    dispatch(createRecordSlice.actions.addService(id));
    onClick();
  };

  return (
    <div className="h-full">
      <h2 className="uppercase mb-10">Выбрать услуги</h2>
      {servises &&
        servises?.map((el: any) => (
          <div
            key={el.id}
            onClick={() => handleAddService(el.id)}
            className={s.service}
          >
            <h3 className="uppercase">{el?.title}</h3>
            <p className="uppercase">{el?.price}P</p>
          </div>
        ))}
    </div>
  );
};

export default ServiceList;
