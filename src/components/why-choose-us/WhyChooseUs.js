import React from "react";
import SLayout, { STitle } from "../section-layout/SectionLayout";
import List, { Item } from "../whatweimport/List";

export default function WhyChooseUs({ children }) {
  return (
    <div id="jan-morks" className="bg-white relative why-choose-us">
      <SLayout>
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/2"></div>
          <div className="w-full lg:w-1/2 px-8 lg:px-8 py-4 bg-white/75 backdrop-blur-sm rounded-xl">
            <div className="flex flex-col gap-4 relative mb-4">
              <STitle>Why Choose Massage Jan Morks?</STitle>
              <div className="text-gray-500 text-xl font-medium">
                We are proud to offer a wide range of comprehensive services to
                meet the needs of adults, seniors, and pediatric patients.
              </div>
              <div className="text-gray-500">
                Brisket cow leberkas pastrami shoulder. Tri-tip jowl jerky
                meatball bresaola sirloin. Venison leberkas landjaeger picanha
                fatback cow rump chicken. Tri-tip pork chop pork beef tail. Cow
                meatloaf shankle pork loin beef ribs jowl bresaola. Short ribs
                rump turducken sirloin ham hock pork belly kevin. Porchetta pork
                picanha, ham hock spare. ribs kevin pastrami tongue leberkas
                jowl tenderloin andouille meatloaf ball tip alcatra.
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
