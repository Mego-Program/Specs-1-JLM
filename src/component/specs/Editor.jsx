import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { BorderColor, Save } from "@mui/icons-material";
import DatePicker from "./steps/date";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const iconStyle = {
  color: "#eee",
  width: "1rem",
  height: "1rem",
};

export default function Editor() {
  const [specs, setSpecs] = useState([]);
  console.log("🚀 ~ file: Editor.jsx:13 ~ Editor ~ specs:", specs);
  const [editData, setEditData] = useState({});
  const [formData, setFormData] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getSpecs = localStorage.getItem("specs");
    if (getSpecs) {
      const parsedSpecs = JSON.parse(getSpecs);
      setSpecs(parsedSpecs);
      // console.log(parsedSpecs);
    }
  }, []);

  const selectedSpec = specs.find((spec) => spec.id + "" === id + "");

  useEffect(() => {
    if (selectedSpec) {
      setFormData(selectedSpec);
    }
  }, [selectedSpec]);

  const handleEdit = (field, guitarPick) => {
    setEditData({ ...editData, [guitarPick || field]: !editData[guitarPick || field] });
    setFormData({ ...formData, [field]: selectedSpec[field] });
    setShowDatePicker(true);
    // setFormData((prevFormData) => ({ ...prevFormData, [field]: selectedSpec[field] }));
  };

  const handleSave = (field, guitarPick) => {
    console.log(field, "saved");
    const updatedSpecs = specs.map((spec) =>
      spec.id + "" === id + "" ? { ...spec, [field]: formData[field] } : spec
    );
    setSpecs(updatedSpecs);
    localStorage.setItem("specs", JSON.stringify(updatedSpecs));

    handleEdit(field, guitarPick);
  };
  const handleChange = (field, value) => {
    console.log(value);
    setFormData({ ...formData, [field]: value });
  };
  return (
    <div className="px-6 py-5 rounded-md">
      <NavLink to="/" className="text-blue-500 pointer hover:underline">
        <div>Back to Home</div>
      </NavLink>
      {selectedSpec && (
        <div className="mt-4 text-white">
          <h2 className="text-2xl font-bold text-[#eee] pb-3">Editor</h2>
          <ul className="list-disc list-inside mt-2">
            <li className="list-none p-4 mb-4 relative bg-[#121231] rounded-xl">
              <h4 className="font-bold  pb-2">title: </h4>

              {editData.title ? (
                <input
                  type="text"
                  className="bg-[#21213E] text-white px-2 py-1 rounded outline-none"
                  defaultValue={formData.title || selectedSpec.title}
                  autoFocus
                  onChange={(e) => handleChange("title", e.target.value)}
                />
              ) : (
                formData.title || selectedSpec.title
              )}
              {!editData.title ? (
                <button
                  onClick={() => handleEdit("title")}
                  className="absolute top-[0px] right-[8px]  text-white rounded"
                >
                  <BorderColor style={iconStyle} />
                </button>
              ) : (
                <button
                  onClick={() => handleSave("title")}
                  className="absolute top-[0px] right-[8px]  text-white rounded"
                >
                  <Save style={iconStyle} />
                </button>
              )}
            </li>
            <li className="list-none p-4 mb-4 relative bg-[#121231] rounded-xl">
              <h4 className="font-bold  pb-2"> content: </h4>

              {editData.content ? (
                <input
                  type="text"
                  className="bg-[#21213E] text-white px-2 py-1 rounded outline-none"
                  defaultValue={formData.content || selectedSpec.content}
                  autoFocus
                  onChange={(e) => handleChange("content", e.target.value)}
                />
              ) : (
                formData.content || selectedSpec.content
              )}
              {!editData.content ? (
                <button
                  onClick={() => handleEdit("content")}
                  className="absolute top-[0px] right-[8px]  text-white rounded"
                >
                  <BorderColor style={iconStyle} />
                </button>
              ) : (
                <button
                  onClick={() => handleSave("content")}
                  className="absolute top-[0px] right-[8px]  text-white rounded"
                >
                  <Save style={iconStyle} />
                </button>
              )}
            </li>

            <li className="list-none p-4 mb-4 relative bg-[#121231] rounded-xl">
              <h4 className="font-bold  pb-2">Deadline: </h4>

              {editData.Deadline ? (
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
                    defaultValue={dayjs(selectedSpec.Deadline)}
                    onChange={(value) => handleChange("Deadline", value.format("DD/MM/YYYY"))}
                  />
                </LocalizationProvider>
              ) : (
                <div>{selectedSpec.Deadline}</div>
              )}

              {!editData.Deadline ? (
                <button
                  className="absolute top-[0px] right-[8px]  text-white rounded"
                  onClick={() => handleEdit("Deadline")}
                >
                  <BorderColor style={iconStyle} />
                </button>
              ) : (
                <div>
                  <button
                    onClick={() => handleSave("Deadline")}
                    className="absolute top-[0px] right-[8px]  text-white rounded"
                  >
                    <Save style={iconStyle} />
                  </button>
                </div>
              )}
            </li>
            {Array.isArray(selectedSpec.guitarPick) && (
              <div className=" p-4 mb-4 relative bg-[#121231] rounded-sm">
                {selectedSpec.guitarPick.map((pick, index) => (
                  <div key={index} className="list-none mb-4 relative bg-[#121231] rounded-sm flex flex-wrap">
                    <h4 className="font-bold pb-2 pr-[10px]">Guitar pic: </h4>
                    {editData[`guitarPick-${index}`] ? (
                      <input
                        type="text"
                        className="bg-[#21213E] text-white px-2 py-1 rounded outline-none w-[77%]"
                        // guit...[0].we_will
                        defaultValue={formData.guitarPick[index]?.we_will || pick.we_will}
                        autoFocus
                        onChange={(e) =>
                          handleChange(
                            `guitarPick`,
                            formData.guitarPick.map((pick, i) =>
                              i === index ? { ...formData.guitarPick[index], we_will: e.target.value } : pick
                            )
                          )
                        }
                      />
                    ) : (
                      // formData.guitarPick[index].we_will || pick.we_will
                      formData?.guitarPick &&
                      formData?.guitarPick[index] && (
                        <div className="text-xs pt-[6px]"> {formData?.guitarPick[index]?.we_will} </div>
                      )
                    )}
                    {!editData[`guitarPick-${index}`] ? (
                      <button
                        onClick={() => handleEdit(`guitarPick-${index}`)}
                        className="absolute top-[1px] right-[8px]  text-white rounded"
                      >
                        <BorderColor style={iconStyle} />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleSave(`guitarPick`, `guitarPick-${index}`)}
                        className="absolute top-[1px] right-[8px]  text-white rounded"
                      >
                        <Save style={iconStyle} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
