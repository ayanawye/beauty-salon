import { FC } from "react";
import s from "./RecordingPage.module.scss";
import { useAppDispatch } from "@/store/store";
import { createRecordSlice } from "@/store/reducers/createRecordSlice";

interface SpecialistItemProps {
  id: number | null;
  onClick: () => void;
}

const SpecialistItem: FC<SpecialistItemProps> = ({ id, onClick }) => {
  const dispatch = useAppDispatch();
  
  const handleAddSpecialist = (id: number) => {
    dispatch(createRecordSlice.actions.addSpecialistId(id));
    onClick()
  };

  const handleAddSpecialistDate = (id: number) => {
    dispatch(createRecordSlice.actions.addSpecialistId(id));
    dispatch(createRecordSlice.actions.addDate('15:00'));
    onClick()
  };

  return (
    <div className="h-full">
      <h2 className="uppercase mb-10">Выбрать специалиста</h2>
      <div className={s.specialist}>
        <div className={s.top}>
          <img src="/expert-photo.png" alt="expert" />
          <div>
            <h3 onClick={() => handleAddSpecialist(1)}>Иман Бацаева</h3>
            <p>топ-стилист</p>
          </div>
        </div>
        <div className={s.bottom}>
          <p>Ближайшее время для записи завтра:</p>
          <ul>
            <li onClick={() => handleAddSpecialistDate(1)}>15:00</li>
            <li>15:00</li>
            <li>15:00</li>
            <li>15:00</li>
            <li>15:00</li>
            <li>15:00</li>
          </ul>
        </div>
      </div>
      <div className={s.specialist}>
        <div className={s.top}>
          <img src="/expert-photo.png" alt="expert" />
          <div>
            <h3>Иман Бацаева</h3>
            <p>топ-стилист</p>
          </div>
        </div>
        <div className={s.bottom}>
          <p>Ближайшее время для записи завтра:</p>
          <ul>
            <li>15:00</li>
            <li>15:00</li>
            <li>15:00</li>
            <li>15:00</li>
            <li>15:00</li>
            <li>15:00</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpecialistItem;
