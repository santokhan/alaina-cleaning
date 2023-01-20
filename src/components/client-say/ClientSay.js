import React from "react";
import SLayout, {
  SHeader,
  SMain,
  STitle,
} from "../section-layout/SectionLayout";
import List, { Item } from "../whatweimport/List";

export default function ClientSay({ children }) {
  return (
    <div id="clientSay" className="bg-white relative client-say">
      <SLayout>
        <SHeader>
          <STitle>What our happy customers say:</STitle>
          <div className="mt-8">
            <i
              className="fa fa-quote-right text-3xl xl:text-5xl"
              aria-hidden="true"
            ></i>
          </div>
        </SHeader>
        <div className="max-w-2xl mx-auto py-2 text-center text-[#535353] my-6 xl:my-10">
          Men rarely acknowledge how much they love to get a massage... But I
          want to say, that without my afterwork Friday massage sessions here,
          my productivity would've been so much lower...
        </div>
        <div className="flex justify-center">Lara Gupta</div>
      </SLayout>
    </div>
  );
}
