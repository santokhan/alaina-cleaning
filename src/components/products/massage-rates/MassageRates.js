import React, { useState } from "react";
import PLayout from "../layout/PLayout";
import PHeader, { PTitle } from "../layout/PHeader";
import PMain from "../layout/PMain";
import PCard, { CImg, CTitle, CDes, Price } from "../layout/PCard";
import { AgriculturalContext } from "../../../context/tabs/AgriculturalContext";
import BookNow from "../layout/BookNow";

export default function MassageRates({ myRef }) {
  const [tab, settab] = useState(1);
  function handleTab(id) {
    settab(id);
  }

  return (
    <AgriculturalContext.Provider value={{ tab, handleTab }}>
      <div>
        <PLayout myRef={myRef}>
          <PHeader>
            <PTitle>TARIEVEN AH Massage</PTitle>
          </PHeader>
          {/* <PTabs>
            <Tab id={1}>All Massages</Tab>
            <Tab id={2}>30 minuten</Tab>
            <Tab id={3}>90 minuten</Tab>
            <Tab id={4}>120 minuite</Tab>
          </PTabs> */}
          <PMain>
            <PCard category={4} id="sports" to="/massages/sports">
              <CImg src="/images/massages/card/sport.jpg" />
              <CTitle>sportmassage</CTitle>
              <CDes>Regio: Brummen +15km</CDes>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={4} id="shiatsu" to="/massages/shiatsu">
              <CImg src="/images/massages/card/shiatsu.jpg" />
              <CTitle>Shiatsumassge</CTitle>
              <CDes>Regio: Brummen +15km</CDes>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={2} to="/massages/relaxation">
              <CImg src="/images/massages/card/relax.jpg" />
              <CTitle>Ontspanningsmassage</CTitle>
              <CDes>Regio: Brummen +15km</CDes>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={2} id="chair" to="/massages/chair">
              <CImg src="/images/massages/card/chair.png" />
              <CTitle>Stoelmassage</CTitle>
              <CDes>Regio: Brummen +15km</CDes>
              <Price price={35} time={30}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
          </PMain>
        </PLayout>
      </div>
    </AgriculturalContext.Provider>
  );
}
