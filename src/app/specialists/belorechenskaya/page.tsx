'use client'
import ExpertsList from "@/components/Experts/ExpertsList/ExpertsList";
import Main from "@/components/Experts/Main/Main";
import FirstVisitSale from "@/components/FirstVisitSale/FirstVisitSale";
import { useGetSpecialists2Query } from "@/services/getSpecialists2";
import React from "react";

const Page = () => {
  const {data: experts} = useGetSpecialists2Query('')
  
  return (
    <>
      <Main />
      <ExpertsList experts={experts} />
      <FirstVisitSale />
    </>
  );
};

export default Page;
