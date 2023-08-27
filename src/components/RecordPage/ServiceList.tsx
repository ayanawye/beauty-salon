import { FC, useState } from "react";
import s from "./RecordingPage.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { createRecordSlice } from "@/store/reducers/createRecordSlice";
import { useGetMemberServiceQuery } from "@/services/getServiceApi";
import { useGetSpecialistsByAddressQuery } from "@/services/getSpecialist";

interface ServiceListProps {
  id: number | null;
  onClick: () => void;
}

const ServiceList: FC<ServiceListProps> = ({ id, onClick }) => {
  const {address} = useAppSelector(state => state.createRecordSlice)
  const {data: members} = useGetSpecialistsByAddressQuery(address)
  const { data: servises } = useGetMemberServiceQuery(id);
  const dispatch = useAppDispatch();
  const mySpecialist = members?.find(el => el.id === id)
  
  const handleAddService = (id: number) => {
    dispatch(createRecordSlice.actions.addService(id));
    onClick();
  };

  return (
    <>
      <h3 className="uppercase ">{mySpecialist?.fio}</h3>
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
    </>
  );
};

export default ServiceList;
