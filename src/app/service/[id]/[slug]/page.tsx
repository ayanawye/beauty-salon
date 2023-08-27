import Benefits from "@/components/Benefits/Benefits";
import FirstVisitSale from "@/components/FirstVisitSale/FirstVisitSale";
import Price from "@/components/Service/ServicePage/Price";
import ServiceMain from "@/components/Service/ServicePage/ServiceMain";
import Swipers from "@/components/Service/ServicePage/Swiper";
import React, { FC } from "react";

export async function generateStaticParams() {
  const services = await fetch("https://kudryashka.pythonanywhere.com/service_category/").then((res) =>
    res.json()
  );

  return services.map((service: any) => ({
    slug: service.title.replace(/\s+/g, "-"),
    id: service.id.toString(),
  }));
}

const ServicePage: FC = ({ params }: any) => {
  return (
    <>
      <ServiceMain id={Number(params?.id)} />
      <Swipers id={Number(params?.id)}/>
      <Price id={Number(params?.id)}/>
      <FirstVisitSale />
      <Benefits/>
    </>
  );
};

export default ServicePage;
