import Benefits from "@/components/Benefits/Benefits";
import Price from "@/components/Service/ServicePage/Price";
import ServiceMain from "@/components/Service/ServicePage/ServiceMain";
import Sliper from "@/components/Service/ServicePage/Sliper";
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
  console.log(params);

  return (
    <>
      <ServiceMain id={Number(params?.id)} />
      <Sliper />
      <Price />
      <Benefits />
    </>
  );
};

export default ServicePage;
