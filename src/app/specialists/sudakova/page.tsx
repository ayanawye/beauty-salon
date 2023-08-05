'use client'
import ExpertsList from "@/components/Experts/ExpertsList/ExpertsList";
import Main from "@/components/Experts/Main/Main";
import FirstVisitSale from "@/components/FirstVisitSale/FirstVisitSale";
import { useGetSpecialists1Query } from "@/services/getSpecialists1";
import React from "react";

const Page = () => {
  const {data: experts1} = useGetSpecialists1Query('')
  
  return (
    <>
      <Main />
      <ExpertsList experts={experts1}/>
      <FirstVisitSale />
    </>
  );
};

export default Page;