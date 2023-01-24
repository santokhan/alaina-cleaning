import React, { useState } from "react";
import PLayout from "../layout/PLayout";
import PHeader, { PTitle, PIcon } from "../layout/PHeader";
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
            <PTitle>Rates Massage Practice Jan Morks </PTitle>
          </PHeader>
          {/* <PTabs>
            <Tab id={1}>All Massages</Tab>
            <Tab id={2}>30 minute</Tab>
            <Tab id={3}>90 minute</Tab>
            <Tab id={4}>120 minuite</Tab>
          </PTabs> */}
          <PMain>
            <PCard category={4} id="sports" to="/massages/sports">
              <CImg src="/images/massages/card/sport.jpg" />
              <CTitle>sports</CTitle>
              <CDes>Travel 15 km 10,-</CDes>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={4} id="shiatsu" to="/massages/shiatsu">
              <CImg src="/images/massages/card/shiatsu.jpg" />
              <CTitle>shiatsu</CTitle>
              <CDes>Travel 15 km 10,-</CDes>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={2} to="/massages/relaxation">
              <CImg src="/images/massages/card/relax.jpg" />
              <CTitle>relaxation</CTitle>
              <CDes>Travel 15 km 10,-</CDes>
              <Price price={65} time={60}>
                <BookNow to="/appointments"></BookNow>
              </Price>
            </PCard>
            <PCard category={2} id="chair" to="/massages/chair">
              <CImg src="/images/massages/card/chair.png" />
              <CTitle>chair</CTitle>
              <CDes>Travel 15 km 10,-</CDes>
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

export function MassageRatesIndivudual({
  myRef,
  index = ["sports", "shiatsu", "chair"],
}) {
  const [tab, settab] = useState(1);
  function handleTab(id) {
    settab(id);
  }

  return (
    <AgriculturalContext.Provider value={{ tab, handleTab }}>
      <div id="agricultural">
        <PLayout myRef={myRef}>
          <PHeader>
            <PTitle>Ralated Massages</PTitle>
          </PHeader>
          <PMain>
            {index.includes("sports") ? (
              <PCard category={4} id="/sports" to="/massages/sports">
                <CImg src="/images/massages/card/sport.jpg" />
                <CTitle>sports</CTitle>
                <CDes>Travel 25 km 10,-</CDes>
                <Price price={65} time={60}>
                  <BookNow to="/appointments"></BookNow>
                </Price>
              </PCard>
            ) : (
              ""
            )}
            {index.includes("shiatsu") ? (
              <PCard category={4} id="shiatsu" to="/massages/shiatsu">
                <CImg src="/images/massages/card/shiatsu.jpg" />
                <CTitle>shiatsu</CTitle>
                <CDes>Travel 25 km 10,-</CDes>{" "}
                <Price price={65} time={60}>
                  <BookNow to="/appointments"></BookNow>
                </Price>
              </PCard>
            ) : (
              ""
            )}
            {index.includes("relaxation") ? (
              <PCard category={2} to="/massages/relaxation">
                <CImg src="/images/massages/card/relax.jpg" />
                <CTitle>relaxation</CTitle>
                <CDes>Travel 25 km 10,-</CDes>{" "}
                <Price price={65} time={60}>
                  <BookNow to="/appointments"></BookNow>
                </Price>
              </PCard>
            ) : (
              ""
            )}
            {index.includes("chair") ? (
              <PCard category={2} id="chair" to="/massages/chair">
                <CImg src="/images/massages/card/chair.png" />
                <CTitle>chair</CTitle>
                <CDes>Travel 25 km 10,-</CDes>{" "}
                <Price price={65} time={60}>
                  <BookNow to="/appointments"></BookNow>
                </Price>
              </PCard>
            ) : (
              ""
            )}
          </PMain>
        </PLayout>
      </div>
    </AgriculturalContext.Provider>
  );
}
