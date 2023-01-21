import React, { useState, useEffect } from "react";
import axios from "axios";

import DatePicker from "./DatePicker";
import InputName from "./InputName";
import InputEmail from "./InputEmail";
import InputText from "./InputText";
import InputPhone from "./InputPhone";
import InputCoupon from "./InputCoupon";
import { AppointmentContext as APContext } from "../../../context/AppointmentContext";

export default function Appointments() {
  const [data, setdata] = useState({
    coupon: "",
    date: "",
    email: "",
    phone: "",
    message: "",
    name: "",
    time: "",
  });

  function handleData(data) {
    setdata(data);
  }

  function handleSubmit(data) {
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
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(data);
              }}
            >
              <div className="flex justify-center flex-wrap py-2">
                <InputName></InputName>
                <InputEmail></InputEmail>
              </div>
              <div className="flex justify-center flex-wrap py-2">
                <InputPhone></InputPhone>
                <InputCoupon></InputCoupon>
              </div>
              <div className="p-2">
                <DatePicker></DatePicker>
              </div>
              <div className="flex justify-center flex-wrap py-2">
                <InputText></InputText>
              </div>
              <div className="flex justify-center lg:justify-start flex-wrap py-2 px-2">
                <button
                  type="submit"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-900/25 font-medium rounded-lg text-sm px-4 py-2 xl:px-4 xl:py-2.5 focus:outline-none capitalize flex items-center gap-2"
                >
                  <i className="fa fa-database" aria-hidden="true"></i>
                  <span>Submit</span>
                </button>
              </div>
            </form>
          );
        }}
      </APContext.Consumer>
    </APContext.Provider>
  );
}
