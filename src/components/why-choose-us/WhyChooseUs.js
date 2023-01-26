import React from "react";
import SLayout, { STitle } from "../section-layout/SectionLayout";

export default function WhyChooseUs({ children }) {
  return (
    <div className="bg-white relative why-choose-us">
      <SLayout>
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/2"></div>
          <div className="w-full lg:w-1/2 px-8 lg:px-8 py-4 bg-white/75 backdrop-blur-sm rounded-xl">
            <div className="flex flex-col gap-4 relative mb-4">
              {/* <STitle>WHY CHOOSE AH Massage?</STitle> */}
              <STitle>WAAROM KIEZEN VOOR MASSAGE AH MASSAGE?</STitle>
              <div className="text-gray-500 text-xl font-medium">
                We zijn er trots op een breed scala aan uitgebreide diensten aan
                te bieden om te voldoen aan de behoeften van volwassenen,
                senioren en pediatrische patiënten.
              </div>
              <div className="text-gray-500">
                Borststuk koe leberkas pastrami schouder. Tri-tip jowl jerky
                gehaktbal bresaola entrecote. Hertenvlees leberkas landjaeger
                picanha fatback koe rump kip. Tri-tip varkenskarbonade
                varkensvlees runderstaart. Rundsgehaktschenkel varkenslende
                runderribben kaak bresaola. Shortribs rump turducken entrecote
                ham spronggewricht varkensbuik kevin. Porchetta varkensvlees
                picanha, ham spronggewricht reserve. spareribs kevin pastrami
                tong leberkas wang ossenhaas andouille gehaktbrood ball tip
                alcatra.
              </div>
            </div>
          </div>
        </div>
      </SLayout>
    </div>
  );
}
export function Row({ children, className }) {
  return (
    <div
      className={
        "flex flex-wrap lg:flex-nowrap items-start rounded-[2rem] p-3 gap-4 " +
        className
      }
    >
      {children}
    </div>
  );
}
export function Col({ children, order, className }) {
  return (
    <div
      className={
        "w-full lg:w-1/3 max-w-sm mx-auto flex flex-col justify-center " +
        className
      }
    >
      {children}
    </div>
  );
}
export function Box({ children, className }) {
  return (
    <div className={"p-5 flex flex-col gap-3 " + className}>{children}</div>
  );
}
export function Title({ children, className }) {
  return (
    <div className={"font-bold py-2 text-center " + className}>{children}</div>
  );
}
export function Image({ children, className, src }) {
  return (
    <img
      className={"text-xl font-bold " + className}
      src={"images/after-sales-services/" + src}
      alt="services"
    />
  );
}
