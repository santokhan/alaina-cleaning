import React, { useState, useEffect } from "react";
import axios from "axios";

import { AppointmentContext as APContext } from "../../../context/AppointmentContext";
import DatePicker from "./DatePicker";
import InputName from "./InputName";
import InputEmail from "./InputEmail";
import InputText from "./InputText";
import InputPhone from "./InputPhone";
import InputCoupon from "./InputCoupon";
import MassageType from "./MassageType";
import InputTime from "./InputTime";
import HorizontalLinearStepper from "./MultiStep";

export default function Appointments() {
  const [data, setdata] = useState({
    coupon: "",
    date: "",
    email: "",
    phone: "",
    message: "",
    name: "",
    time: "",
    type: "",
  });

  function handleData(data) {
    setdata(data);
  }

  function handleSubmit() {
    console.log(data);

    // axios.post("url", data);
  }

  return (
    <APContext.Provider value={{ data, handleData }}>
      <APContext.Consumer>
        {({ data }) => {
          return (
            <form
              className="px-5 lg:py-5 bg-white rounded"
              onSubmit={handleSubmit}
            >
              <HorizontalLinearStepper
                data={data}
                handleSubmit={handleSubmit}
              ></HorizontalLinearStepper>
            </form>
          );
        }}
      </APContext.Consumer>
    </APContext.Provider>
  );
}

export function FormStep1() {
  return (
    <>
      <MassageType></MassageType>
      <InputName></InputName>
      <BBox>
        <Next></Next>
      </BBox>
    </>
  );
}

export function FormStep2() {
  return (
    <>
      <InputEmail></InputEmail>
      <InputPhone></InputPhone>
      <BBox>
        <Next></Next>
      </BBox>
    </>
  );
}

export function FormStep3() {
  return (
    <>
      <DatePicker></DatePicker>
      <InputTime></InputTime>
      <BBox>
        <Next></Next>
      </BBox>
    </>
  );
}

export function FormStep4() {
  return (
    <>
      <InputCoupon></InputCoupon>
      <InputText></InputText>
      <BBox>
        <SubmitButton></SubmitButton>
      </BBox>
    </>
  );
}

export function BBox({ children }) {
  return (
    <div className="w-full flex justify-center px-4 items-center">
      {children}
    </div>
  );
}

const btnClass =
  "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-900/25 font-medium rounded-lg text-sm px-4 py-2 xl:px-4 xl:py-2.5 focus:outline-none capitalize flex items-center gap-2";

export function Back() {
  return (
    <button type="button" className={btnClass}>
      <i className="fa fa-arrow-left" aria-hidden="true"></i>
      <span>Back</span>
    </button>
  );
}

export function Next() {
  return (
    <button type="button" className={btnClass}>
      <span>Next</span>
      <i className="fa fa-arrow-right" aria-hidden="true"></i>
    </button>
  );
}

export function SubmitButton() {
  return (
    <div className="flex justify-center lg:justify-start flex-wrap py-2 px-2">
      <button type="submit" className={btnClass}>
        <i className="fa fa-database" aria-hidden="true"></i>
        <span>Submit</span>
      </button>
    </div>
  );
}
