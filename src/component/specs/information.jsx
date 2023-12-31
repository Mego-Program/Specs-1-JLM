import React, { useEffect, useState } from "react";
import { Reply } from "@mui/icons-material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { getSpecs } from "../../services/specs.services";

const iconStyle = {
  color: "#eee",
  width: "1rem",
  height: "1rem",
  marginRight: "5px",
};

export default function Editor2({ setOpenEdit2, id }) {
  const [load, setLoad] = useState(!1);
  const [specs, setSpecs] = useState([]);

  useEffect(() => {
    const getTheSpecs = async () => {
      try {
        setLoad(!0);
        const specsData = await getSpecs(id);
        if (specsData?.length) {
          setSpecs(specsData[0]);
          setLoad(!1);
        }
      } catch (error) {
        console.error("Error fetching specs:", error);
      }
    };

    getTheSpecs();
  }, []);

  const closeWindow = () => {
    if (!load) setOpenEdit2(false);
  };

  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#00000026E] z-50">
      <div className="w-[100%] h-[100%] cursor-pointer" onClick={closeWindow}></div>
      <div className="fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]  w-[80%] h-[80%] shadow-xl shadow-slate-900 px-6 py-5 rounded-md bg-[#121231] my-[5px] overflow-auto scrollbar-10">
        {load ? (
          <h1 className="text-white mt-[20px]">LOADDING...</h1>
        ) : (
          specs && (
            <div className="mt-4 text-white">
              <h2 className="text-2xl font-bold text-[#eee] pb-3">information</h2>
              <ul className="list-disc list-inside mt-2 bg-[#121231]">
                {Object.keys(specs).map(
                  (field, index) =>
                    !["id", "date", "guitarPick", "_id", "__v", "selectedRecord"].includes(field) && (
                      <li key={index} className="list-none p-4 relative bg-[#121231] rounded-xl">
                        <h4 className="font-bold pb-2">{field}: </h4>
                        {field === "Deadline" ? (
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                              sx={{
                                "& label": {
                                  color: "white",
                                },
                                "& label.Mui-focused": {
                                  color: "white",
                                },
                                "& .MuiInput-underline:after": {
                                  borderBottomColor: "white",
                                },
                                "& .MuiOutlinedInput-root": {
                                  background: "#21213E",
                                  color: "white",
                                  "& fieldset": {
                                    borderColor: "white",
                                  },
                                  "&:hover fieldset": {
                                    borderColor: "white",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "white",
                                  },
                                  "& .MuiSvgIcon-root": {
                                    color: "white",
                                  },
                                },
                              }}
                              defaultValue={dayjs(specs.Deadline)}
                              readOnly
                            />
                          </LocalizationProvider>
                        ) : (
                          <input
                            type="text"
                            className="bg-[#121231] text-white px-4 py-[15px] rounded outline-none w-[100%] "
                            defaultValue={specs[field]}
                            readOnly
                          />
                        )}
                      </li>
                    )
                )}
                {specs.guitarPick &&
                  specs.guitarPick.map((value, index) => (
                    <div key={index} className="mb-2 mx-4 mt-3">
                      We will:{" "}
                      <input
                        type="text"
                        className="bg-[#121231] text-white px-2 py-1 ml-[5px] rounded-xs outline-none mr-2 w-[96%]"
                        defaultValue={value.we_will}
                        readOnly
                      />
                    </div>
                  ))}
              </ul>
              <div className="flex justify-end mt-[50px] px-6">
                <button
                  onClick={closeWindow}
                  className="flex items-center justify-center pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
                >
                  <Reply style={iconStyle} /> Close
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
