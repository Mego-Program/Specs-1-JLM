import { LocalizationProvider, DesktopDatePicker, DatePicker, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export const Step4 = ({ children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <h1>Responsive variant</h1>
        <DatePicker defaultValue={dayjs("2022-04-17")} />
      </div>
      <div>
        <h1>Desktop variant</h1>
        <DesktopDatePicker onChange={(e, v) => console.log(e, v)} defaultValue={dayjs("2022-04-17")} />
      </div>
      <div>
        <h1>Mobile variant</h1>
        <MobileDatePicker defaultValue={dayjs("2022-04-17")} />
      </div>
    </LocalizationProvider>
  );
};

// import PropTypes from "prop-types";

// export function Step4({ setStep, newSpecsData, setNewSpecsData }) {
//   return (
//     <div className="px-6 py-5 mt-12 min-w-[500px] min-h-[340px] bg-[#121231] rounded-xl flex flex-col justify-between">
//       <div className="text-4xl text-white">step 4</div>;
//       <div className="flex justify-between">
//         <button
//           onClick={() => setStep(3)}
//           className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
//         >
//           Prev
//         </button>
//         <button
//           type={"button"}
//           className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
//           onClick={() => setStep(5)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// Step4.propTypes = {
//   setNewSpecsData: PropTypes.func,
//   setStep: PropTypes.func,
//   newSpecsData: PropTypes.object,
// };
