"use client";
import React, { FC } from "react";
import s from "./Experts.module.scss";
import Button, { IVariant } from "@/components/UI-modals/Button/Button";
import { ISpecialist } from "@/models/ISpecialist";
import { useAppDispatch } from "@/store/store";
import { createRecordSlice } from "@/store/reducers/createRecordSlice";
import Link from "next/link";
import Image from "next/image";

interface ExpertsListProps {
  experts: ISpecialist[] | undefined;
  address: number;
}

const ExpertsList: FC<ExpertsListProps> = ({ experts, address }) => {
  const dispatch = useAppDispatch();

  const handleClick = (expert: number) => {
    dispatch(createRecordSlice.actions.addSpecialistId(expert));
    dispatch(createRecordSlice.actions.addAddress(address));
  };

  return (
    <section className={s.expert_list}>
      <div className={s.container}>
        <h2 className="uppercase">специалисты</h2>
        <div className={s.cards}>
          {experts?.length !== 0 &&
            experts?.map((expert) => (
              <div key={expert.id}>
                <div className={s.image_container}>
                <Image layout="fill" src={expert?.avatar} alt="avatar" className={s.image} />
                </div>
                <div className={s.content}>
                  <div>
                    <p className={s.work}>{expert?.status}</p>
                    <h6 className="mt-2.5">{expert?.fio}</h6>
                    <p className="mt-2.5">
                      <span>Опыт работы:</span> {expert?.experience}
                    </p>
                    <p className="mt-2.5">
                      <span>Специализация:</span> {expert?.specialization}
                    </p>
                    <p className="mt-2.5">
                      <span>Образование:</span> {expert?.education}
                    </p>
                    <p className="mb-14 mt-2.5">
                      <span>Повышение квалификации:</span> {expert?.training}
                    </p>
                  </div>
                  <Link href="/record" onClick={() => handleClick(expert.id)}>
                    <Button padding="16px 65px" variant={IVariant.primary}>
                      записаться
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsList;
