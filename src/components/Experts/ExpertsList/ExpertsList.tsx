"use client";
import React, { FC } from "react";
import s from "./Experts.module.scss";
import Button, { IVariant } from "@/components/UI-modals/Button/Button";
import { ISpecialist } from "@/models/ISpecialist";

interface ExpertsListProps {
  experts: ISpecialist[] | undefined;
}

const ExpertsList: FC<ExpertsListProps> = ({ experts }) => {
  
  return (
    <section className={s.expert_list}>
      <div className={s.container}>
        <h2 className="uppercase">специалисты</h2>
        <div className={s.cards}>
          {experts?.length !== 0 &&
            experts?.map((expert) => (
              <div key={expert.id}>
                <img src={expert?.avatar} alt="avatar" />
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
                <Button padding="16px 65px" variant={IVariant.primary}>
                  записаться
                </Button>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsList;
