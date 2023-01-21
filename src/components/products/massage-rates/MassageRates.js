import React, { useState } from "react";
import PLayout from "../layout/PLayout";
import PHeader, { PTitle, PIcon } from "../layout/PHeader";
import PTabs, { Tab } from "../layout/PTabs";
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
      <div id="agricultural">
        <PLayout myRef={myRef}>
          <PHeader>
            <PIcon>
              <img className="h-8" src="/images/seeds.png" alt="seeds" />
            </PIcon>
            <PTitle>Rates Massage Practice Jan Morks </PTitle>
          </PHeader>
          {/* <PTabs>
            <Tab id={1}>All Massages</Tab>
            <Tab id={2}>30 minute</Tab>
            <Tab id={3}>90 minute</Tab>
            <Tab id={4}>120 minuite</Tab>
          </PTabs> */}
          <PMain>
            <PCard category={4} id="sports">
              <CImg src="images/massages/card/sport.png" />
              <CTitle>sports</CTitle>
              <CDes>Travel 15 km 10,-</CDes>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={4} id="shiatsu">
              <CImg src="images/massages/card/shiatsu.png" />
              <CTitle>shiatsu</CTitle>
              <CDes>2 x per mnd. 90,-</CDes>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={2}>
              <CImg src="images/massages/card/relaxation.png" />
              <CTitle>relaxation</CTitle>
              <CDes>2 x per mnd. 130,-</CDes>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={2} id="chair">
              <CImg src="images/massages/card/chair.png" />
              <CTitle>chair</CTitle>
              <CDes>2 x per mnd. 50,-</CDes>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={2}>
              <CImg src="images/massages/card/sound-bowl.png" />
              <CTitle>sound-bowl</CTitle>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={2} id="hotstone">
              <CImg src="images/massages/card/houston.png" />
              <CTitle>Hot Stone</CTitle>
              <CDes>2 x per mnd. 130,-</CDes>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
          </PMain>
        </PLayout>
      </div>
    </AgriculturalContext.Provider>
  );
}
