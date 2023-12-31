"use client";
import React from "react";
import s from "./Footer.module.scss";
import { useGetAddressQuery } from "@/services/getAddressApi";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Footer = () => {
  const { data: addresses } = useGetAddressQuery("");
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/record" && (
        <footer className={s.footer}>
          <div className={s.content}>
            <div className={s.footer_contact}>
              <h2 className="uppercase mb-10">контакты</h2>
              {addresses?.length !== 0 &&
                addresses?.map((address) => (
                  <div key={address.id} className="flex mb-5 gap-x-6">
                    <div className={s.image_container}>
                      <Image
                        layout="fill"
                        className={s.image}
                        src="/phone.svg"
                        alt="phone"
                      />
                    </div>
                    <div>
                      <p className="uppercase text-base">
                        ул. {address?.street}
                      </p>
                      <p className="uppercase mb-2 text-base">
                        m. {address?.metro}
                      </p>
                      <a href={`tel:${address?.number}`} className="font-bold">
                        {address?.number}
                      </a>
                      <a
                        href={`tel:${address?.number_2}`}
                        className="font-bold"
                      >
                        {address?.number_2}
                      </a>
                    </div>
                  </div>
                ))}
              <div className="flex mt-5 gap-x-6">
                <div className={s.image_container}>
                  <Image
                    layout="fill"
                    className={s.image}
                    src="/insta.svg"
                    alt="insta"
                  />
                </div>
                <div>
                  <p className="uppercase text-base">instagram</p>
                  <a
                    href="https://instagram.com/kudryashka.salon?igshid=MzRlODBiNWFlZA=="
                    className="underline uppercase font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    kudryashka.salon
                  </a>
                </div>
              </div>
            </div>
            <div className={s.footer_img}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A865479aa5656044a02bc59b6ce0c61b870459acd46dab82bc70a82c0010175f3&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
