import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import PropTypes from "prop-types";

export function Step4({ setStep, newSpecsData, setNewSpecsData }) {
  const handleDateChange = (date) => {
    setNewSpecsData({ ...newSpecsData, date: date });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="px-6 py-5 mt-12 min-w-[500px] min-h-[340px] bg-[#121231] rounded-xl flex flex-col justify-between">
        <div className="text-4xl text-white">Deadline</div>
        <div>
          <div>
            <h1 className="text-white">Desktop variant </h1>
          </div>
          <DesktopDatePicker
            defaultValue={dayjs("2023-01-01")}
            onChange={handleDateChange}
            className="color-white bg-white"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => setStep(3)}
            className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
          >
            Prev
          </button>
          <button
            type={"submit"}
            className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
          >
            Submit
          </button>
        </div>
      </div>
    </LocalizationProvider>
  );
}

Step4.propTypes = {
  setNewSpecsData: PropTypes.func,
  setStep: PropTypes.func,
  newSpecsData: PropTypes.object,
};