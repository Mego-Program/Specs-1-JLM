// import { useState } from "react";
// import DeleteIcon from "@mui/icons-material/Delete";

// import PropTypes from "prop-types";

// const ListItem = ({ ind, we_will, select, inputL, removeLine, handelChange, listKpls }) => (
//   <div className="flex flex-row justify-around">
//     <div className="flex flex-row py-2 px-2">
//       {listKpls.length > 3 && (
//         <div
//           onClick={() => removeLine(ind)}
//           className="ml-[-22px]  mr-[7px] w-4 flex justify-center items-center cursor-pointer text-[#373761]"
//         >
//           <DeleteIcon />
//         </div>
//       )}
//       <p className="pr-2">We will</p>
//       <input
//         type="text"
//         name={`we_will`}
//         id=""
//         data-ind={ind}
//         onChange={handelChange}
//         value={we_will}
//         className="bg-transparent border-b-2 w-32 border-[#21213E] text-white outline-none"
//       />
//     </div>
//     <div className="flex flex-row py-2 px-2">
//       <select
//         className="bg-transparent text-white mr-2 outline-none"
//         name={`select`}
//         onChange={handelChange}
//         value={select}
//         data-ind={ind}
//       >
//         <option className="text-base text-black">within</option>
//         <option className="text-base text-black">in</option>
//         <option className="text-base text-black">until</option>
//       </select>
//       <input
//         type="text"
//         name={`inputL`}
//         data-ind={ind}
//         value={inputL}
//         onChange={handelChange}
//         className="bg-transparent border-b-2 w-32 border-[#21213E] text-white outline-none"
//       />
//     </div>
//   </div>
// );

// export function Step3({ setStep, newSpecsData, setNewSpecsData }) {
//   const [listKpls, setKpls] = useState(newSpecsData.kpls);

//   const addLine = () => {
//     if (listKpls.length < 10) {
//       let uniq = new Date().getTime();
//       setKpls((list) => [
//         ...list,
//         {
//           ind: uniq,
//           we_will: "",
//           select: "within",
//           inputL: "",
//         },
//       ]);
//     } else {
//       alert("You cannot add more than ten lines...");
//     }
//   };

//   const removeLine = (ind) => {
//     if (listKpls.length > 3) {
//       setKpls(listKpls.filter((line) => line.ind !== ind));
//     } else {
//       alert("You cannot remove when last three lines...");
//     }
//   };

//   const handelChange = ({
//     target: {
//       name,
//       value,
//       dataset: { ind },
//     },
//   }) => {
//     let a = [];

//     for (let i = 0; i < listKpls.length; i++) {
//       const obj = listKpls[i];
//       if (parseFloat(ind) === obj.ind) {
//         a.push({
//           ...obj,
//           [name]: value,
//         });
//       } else {
//         a.push(obj);
//       }
//     }

//     setKpls(a);
//   };

//   const handleNext = async () => {
//     await setNewSpecsData((newSpecsData) => ({
//       ...newSpecsData,
//       kpls: listKpls,
//     }));

//     setStep(4);
//   };

//   return (
//     <div className="px-6 py-5 mt-12 min-w-[500px] min-h-[340px] bg-[#121231] rounded-xl flex flex-col justify-between">
//       <div className="text-white">
//         <h1 className="pr-4 text-white text-xl">KPLs</h1>
//         <div className="my-4 flex flex-col">
//           <div className="flex flex-col">
//             {listKpls.map((e, i) => (
//               <ListItem key={i} {...{ ...e, removeLine, handelChange, listKpls }} />
//             ))}
//           </div>
//           <div className="mt-2">
//             <p
//               onClick={listKpls.length < 10 ? addLine : () => ""}
//               className={`text-white ml-2  text-sm font-medium w-6 h-6 rounded-md flex justify-center items-center bg-[#21213E] select-none  ease-in-out ${
//                 listKpls.length >= 10
//                   ? "opacity-30 cursor-not-allowed hover:opacity-30"
//                   : "cursor-pointer hover:opacity-80"
//               }`}
//             >
//               +
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-between">
//         <div
//           onClick={() => setStep(2)}
//           className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
//         >
//           Prev
//         </div>
//         <button
//           type={"button"}
//           className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
//           onClick={handleNext}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";

export function Step3({ setStep, newSpecsData, setNewSpecsData }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNameClick = (name) => {
    // עכשיו תוכל לעשות משהו עם השם שנבחר, לדוג', לעדכן את המצב
    // הכל אותו הוא פה, נשתמש ב־setNewSpecsData כמו בדוגמה הקודמת
    setNewSpecsData({ ...newSpecsData, selectedName: name });
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Name List
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Names from Fake Data</DialogTitle>
        <DialogContent>
          <DialogContentText>Select a name from the list:</DialogContentText>
          {/* השם יתווסף ככפול כדי שנוכל לראות גם את הפעולה במהירות */}
          {fakeData.map((name) => (
            <Button key={name} onClick={() => handleNameClick(name)}>
              {name}
            </Button>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const fakeData = ["John", "Jane", "Doe", "Alice", "Bob"];

// ListItem.propTypes = {
//   ind: PropTypes.number,
//   we_will: PropTypes.string,
//   select: PropTypes.string,
//   inputL: PropTypes.string,
//   removeLine: PropTypes.func,
//   handelChange: PropTypes.func,
//   listKpls: PropTypes.array,
// };

Step3.propTypes = {
  setNewSpecsData: PropTypes.func,
  setStep: PropTypes.func,
  newSpecsData: PropTypes.object,
};
