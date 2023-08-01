"use client";
import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import s from "./Header.module.scss";
import Image from "next/image";
import Button, { IVariant } from "../UI-modals/Button/Button";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className="flex h-full justify-between items-center">
          <Image alt="logo" src="/logo1.png" width={75} height={78} priority />
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                id="headlessui-menu-button-:R15cq"
                className="inline-flex w-full items-center uppercase text-sm justify-center gap-x-1.5 px-3 py-2 font-normal rounded-lg text-gray-900  hover:bg-gray-50"
              >
                услуги
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 uppercase text-xs"
                        )}
                      >
                        стрижки
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 uppercase text-xs"
                        )}
                      >
                        окрашивание
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2  uppercase text-xs"
                        )}
                      >
                        уход
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                id="headlessui-menu-button-:R19cq"
                className="inline-flex w-full rounded-lg items-center uppercase text-sm justify-center gap-x-1.5 px-3 py-2 font-normal hover:bg-gray-50"
              >
                Options
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 uppercase text-xs"
                        )}
                      >
                        стрижки
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 uppercase text-xs"
                        )}
                      >
                        окрашивание
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2  uppercase text-xs"
                        )}
                      >
                        уход
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <Link href="/#" className={s.link}>обучение</Link>
          <Link href="/#" className={s.link}>акции</Link>
          <p className={s.link}>ПН. - ВС. 10:00 - 22:00</p>
          <Button variant={IVariant.primary} padding="12px 35px">консультация</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
