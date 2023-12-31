"use client";
import React from "react";
import s from "./Main.module.scss";
import Button, { IVariant } from "@/components/UI-modals/Button/Button";
import Link from "next/link";

const Main = () => {
  return (
    <main className={s.main}>
      <div className="flex flex-col justify-center h-full">
        <h2 className="uppercase">специалисты салона красоты Кудряшка</h2>
        <p className="uppercase mt-3.5">
          Мы берем в команду проверенных специалистов. Поэтому мы гарантируем
          качество услуг!
        </p>
        <div className={s.main_btn}>
          <div>
            <Link href="#consultation">
              <Button padding="16px 37px" variant={IVariant.primary}>
                консультация
              </Button>
            </Link>
          </div>
          <div>
            <Link href="/record">
              <Button padding="16px 100px" variant={IVariant.outlined_pink}>
                записаться онлайн
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
