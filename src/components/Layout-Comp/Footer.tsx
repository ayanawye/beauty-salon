import React from "react";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="flex w-full h-full">
        <div className={s.footer_img}>
          <img
            src="/address.png"
            alt="address"
          />
        </div>
        <div className={s.footer_contact}>
          <h2 className="uppercase">контакты</h2>
          <div className="flex mt-10 gap-x-6">
            <div>
              <img src="/phone.svg" alt="phone" />
            </div>
            <div>
              <p className="uppercase mb-2 text-base">
                ул. Белореченская <br />
                m. Люблино
              </p>
              <p className="font-bold">+7(999) 599-01-00</p>
              <p className="font-bold">+7(999) 599-01-00</p>
            </div>
          </div>
          <div className="flex mt-5 gap-x-6">
            <div>
              <img src="/phone.svg" alt="phone" />
            </div>
            <div>
              <p className="uppercase mb-2 text-base">
                ул. Судакова <br />
                Д. 27
              </p>
              <p className="font-bold">+7(999) 599-01-00</p>
            </div>
          </div>
          <div className="flex mt-5 gap-x-6">
            <div>
              <img src="/insta.svg" alt="phone" />
            </div>
            <div>
              <p className="uppercase text-base">
              instagram
              </p>
              <a href="#" className="underline uppercase font-bold" target="_blank" rel="noopener noreferrer">beauty_day.salon</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
