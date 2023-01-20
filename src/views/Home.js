import Header from "../components/header/Header";
import MassageRates from "../components/products/massage-rates/MassageRates";
import Footer from "../components/footer/Footer";
import WhyIcon from "../components/why-icon/WhyIcon";
import ContactFrom from "../components/contact/ContactFrom";
import Gallary from "../components/gallary/Gallary";
import React, { useRef } from "react";
import SwiperSlider from "../components/hero-section/SwiperSlider";
import About from "../components/about-company/AboutCompany";
import MassageVertical from "../components/mui/tabs/MassageVertical";
import WhyChooseUs from "../components/why-choose-us/WhyChooseUs";
import WhatWeProvide from "../components/what-we-provide/WhatWeProvide";
import ClientSay from "../components/client-say/ClientSay";
import Gallery from "../components/mui/gallery/Gallery";
import SercviceArea from "../components/service-area/ServiceArea";

export default function Home() {
  const myRef = useRef(null);
  function startScroll() {
    myRef.current.scrollIntoView();
  }

  return (
    <div className="text-light-sky relative bg-gray-50">
      <Header></Header>
      <SwiperSlider startScroll={startScroll}></SwiperSlider>
      <About></About>
      <MassageVertical></MassageVertical>
      <WhyChooseUs></WhyChooseUs>
      <WhatWeProvide></WhatWeProvide>
      <MassageRates myRef={myRef}></MassageRates>
      <ClientSay></ClientSay>
      <Gallary></Gallary>
      <ContactFrom></ContactFrom>
      <SercviceArea></SercviceArea>
      <Footer></Footer>
    </div>
  );
}
