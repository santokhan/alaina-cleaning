import DatePicker from "./DatePicker";
import InputName from "./InputName";
import InputEmail from "./InputEmail";
import InputText from "./InputText";

export default function Appointments() {
  return (
    <div className="px-5 lg:py-5 bg-white rounded">
      <div className="flex justify-center flex-wrap py-2">
        <InputName></InputName>
        <InputEmail></InputEmail>
      </div>
      <div className="p-2">
        <DatePicker></DatePicker>
      </div>
      <div className="flex justify-center flex-wrap py-2">
        <InputText></InputText>
      </div>
      <div className="flex justify-center lg:justify-start flex-wrap py-2 px-2">
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-900 font-medium text-sm px-5 py-2.5 rounded-xl focus:bottom-[3px] focus:right-1 shadow-xl focus:shadow-none transition-all ease-in"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
