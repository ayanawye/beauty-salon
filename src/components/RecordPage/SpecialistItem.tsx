import { FC } from "react";
import s from "./RecordingPage.module.scss";
import { useAppDispatch } from "@/store/store";
import { createRecordSlice } from "@/store/reducers/createRecordSlice";
import { memberIdSlice } from "@/store/reducers/memberIdSlice";
import { useGetSpecialistsByAddressQuery } from "@/services/getSpecialist";
import { useGetTodaySloteQuery } from "@/services/getDate";
import TodaySlote from "./TodaySlote";

interface SpecialistItemProps {
  id: number | null;
  onClick: () => void;
}

const SpecialistItem: FC<SpecialistItemProps> = ({ id, onClick }) => {
  const dispatch = useAppDispatch();
  const { data: specialists } = useGetSpecialistsByAddressQuery(id);

  const handleAddSpecialist = (id: number) => {
    dispatch(createRecordSlice.actions.addSpecialistId(id));
    dispatch(memberIdSlice.actions.changeMemberId(id));
    onClick();
  };

  return (
    <div>
      <h2 className="uppercase mb-10">Выбрать специалиста</h2>
      <div className={s.specialist}>
        {specialists?.length !== 0 &&
          specialists?.map((el) => (
            <div key={el.id}>
              <div className={s.top}>
                <img src={el.avatar} alt="expert" />
                <div>
                  <h3 onClick={() => handleAddSpecialist(el.id)}>{el.fio}</h3>
                  <p>{el.status}</p>
                </div>
              </div>
              <div className={s.bottom}>
                <p>Ближайшее время для записи на сегодня:</p>
                <TodaySlote onClick={onClick} member={el.id}/>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SpecialistItem;
