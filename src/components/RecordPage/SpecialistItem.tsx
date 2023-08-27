import { FC } from "react";
import s from "./RecordingPage.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { createRecordSlice } from "@/store/reducers/createRecordSlice";
import { memberIdSlice } from "@/store/reducers/memberIdSlice";
import { useGetSpecialistsByAddressQuery } from "@/services/getSpecialist";
import TodaySlote from "./TodaySlote";

interface SpecialistItemProps {
  id: number | null;
  onClick: () => void;
}

const SpecialistItem: FC<SpecialistItemProps> = ({ id, onClick }) => {
  const { members } = useAppSelector((state) => state.createRecordSlice);
  const dispatch = useAppDispatch();
  const { data: specialists } = useGetSpecialistsByAddressQuery(id);
  const filteredMembers = specialists?.filter((el) => !members.includes(el.id));

  const handleAddSpecialist = (id: number) => {
    dispatch(createRecordSlice.actions.addSpecialistId(id));
    dispatch(memberIdSlice.actions.changeMemberId(id));
    onClick();
  };

  return (
    <div>
      <h2 className="uppercase mb-10">Выбрать специалиста</h2>
      <div className={s.specialist}>
        {filteredMembers?.length !== 0 ? (
          filteredMembers?.map((el) => (
            <div key={el.id}>
              <div className={s.top}>
                <div>
                  <img src={el.avatar} alt="expert" />
                </div>
                <div>
                  <h3 onClick={() => handleAddSpecialist(el.id)}>{el.fio}</h3>
                  <p>{el.status}</p>
                </div>
              </div>
              <div className={s.bottom}>
                <p>Ближайшее время для записи на сегодня:</p>
                <TodaySlote onClick={onClick} member={el.id} />
              </div>
            </div>
          ))
        ) : (
          <h3 className="font-semibold text-center uppercase text-xl">
            специалисты недоступны
          </h3>
        )}
      </div>
    </div>
  );
};

export default SpecialistItem;
