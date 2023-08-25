import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import s from "./RecordingPage.module.scss";
import Button, { IVariant } from "../UI-modals/Button/Button";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { createRecordSlice, postRecord } from "@/store/reducers/createRecordSlice";
import {message} from 'antd';
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

interface FormData {
  fio: string;
  email: string;
  phone_number: string;
  comment: string;
}

const UserInfoForm: FC = () => {
  const {address, comment, fio, email, member, free_time_id, services, phone_number} = useAppSelector(state => state.createRecordSlice)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      dispatch(createRecordSlice.actions.addFio(data.fio));
      dispatch(createRecordSlice.actions.addEmail(data.email));
      dispatch(createRecordSlice.actions.addNumber(data.phone_number));
      dispatch(createRecordSlice.actions.addComment(data.comment));
      
      await dispatch(postRecord({
        address,
        comment,
        fio,
        email,
        member,
        free_time_id,
        services,
        phone_number
      }));
  
      message.success({
        type: 'success',
        content: 'Вы успешно записались на услугу',
        className: 'custom-class',
        style: {
          marginTop: '70px',
        },
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 1000)
      
    } catch (error) {
      console.error("Произошла ошибка:", error);
    }
  };
  
  console.log(address, comment, fio, email, member, free_time_id, services, phone_number);
  

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className="uppercase mb-10">Ваши данные</h2>
      <div>
        <label>ФИО*</label>
        <input
          type="text"
          {...register("fio", { required: "Обязательное поле" })}
        />
        {errors.fio && <p className="text-white mt-4">{errors.fio.message}</p>}
      </div>

      <div>
        <label>E-mail</label>
        <input
          type="email"
          {...register("email", {
            required: "Обязательное поле",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Неверный формат email",
            },
          })}
        />
        {errors.email && <p className="text-white mt-4">{errors.email.message}</p>}
      </div>

      <div>
        <label>Телефон номер*</label>
        <input
          type="tel"
          {...register("phone_number", {
            required: "Обязательное поле",
            pattern: {
              value: /^\+7\d{10}$/,
              message: "Введите номер в формате +7XXXXXXXXXX",
            },
          })}
        />
        {errors.phone_number && <p className="text-white mt-4">{errors.phone_number.message}</p>}
      </div>

      <div>
        <label>Комментарий к записи</label>
        <textarea {...register("comment")} />
      </div>

      <div className={s.form_btn}>
      <Button type="submit" padding="24px 0" variant={IVariant.black}>
      Записаться
      </Button>
      </div>
    </form>
  );
};

export default UserInfoForm;