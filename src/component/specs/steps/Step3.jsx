import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { fetchDataFromExternalAPI } from "../../../services/specs.services";

// useEffect(() => {
//   const getSpecses = async () => {
//     const specsData = await fetchDataFromExternalAPI();
//   };

//   getSpecses();
// }, []);

//  [
//   { id: 1700675535447, date: "2023-11-22", title: "", content: "2", guitarPick: [1], name: "John" },
//   {
//     id: 1700675542842,
//     date: "2023-11-22",
//     title: "0000000000000",
//     content: "1113",
//     guitarPick: [1],
//     name: "Jane",
//   },
//   { id: 1700676346323, date: "2023-11-22", title: "adsfg", content: "asdf", guitarPick: [4], name: "Doe" },
//   {
//     id: 1700734910418,
//     date: "2023-11-23",
//     title: "ssssss",
//     content: "ddddd",
//     guitarPick: [1],
//     name: "Alice",
//   },
//   { id: 1700735026382, date: "2023-11-23", title: "wert", content: "rtyry", guitarPick: [1], name: "Bob" },
//   {
//     id: 1700747521173,
//     date: "2023-11-23",
//     title: "gayhsid",
//     content: "asdfgh",
//     guitarPick: [1],
//     name: "John",
//   },
// ];

export function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [project, setProject] = useState({
    loadding: true,
    data: null,
    error: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const specsData = await fetchDataFromExternalAPI();

        if (Array.isArray(specsData)) {
          setProject({
            loadding: false,
            error: false,
            data: specsData,
          });
        } else {
          setProject({
            loadding: false,
            error: "Dont find data",
            data: null,
          });
        }
      } catch (error) {
        setProject({
          loadding: false,
          error: error.message,
          data: null,
        });
      }
    };

    fetchData();
  }, []);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return project.loadding ? (
    <h1> Loadding Project...</h1>
  ) : (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Choose a project</DialogTitle>
      <List sx={{ pt: 0 }}>
        {project.data.map((item) => (
          <ListItem disableGutters key={item.id}>
            <ListItemButton onClick={() => handleListItemClick(item.name)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  {/* הסרתי את הסמל של האדם מכאן */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export function Step3({ setStep, newSpecsData, setNewSpecsData }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNameClick = (record) => {
    setNewSpecsData({ ...newSpecsData, selectedRecord: record });
    handleClose();
  };

  return (
    <div className="step-container p-5 bg-[#121231] rounded-xl flex flex-col justify-between min-w-[500px] min-h-[340px]">
      <div className="text-4xl text-white">
        <Typography variant="subtitle1" component="div" sx={{ fontSize: "30px" }}>
          {/* Selected: {newSpecsData.selectedRecord !== undefined ? newSpecsData.selectedRecord : "None"} */}
          Association to projects
        </Typography>
      </div>
      <br />
      <Button variant="outlined" onClick={handleClickOpen} className="bg-white text-purple-900">
        You want to associate a task with a specific project?
      </Button>
      {/* <SimpleDialog selectedValue={newSpecsData.selectedRecord} open={open} onClose={handleClose} /> */}
      <SimpleDialog selectedValue={newSpecsData.selectedRecord} open={open} onClose={handleNameClick} />

      <div className="flex justify-between">
        <div
          onClick={() => setStep(2)}
          className="pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
        >
          Prev
        </div>
        <button
          type={"button"}
          className=" pt-1 pb-1 bg-[#21213E] select-none text-white rounded-md text-center w-24 text-base font-bold cursor-pointer hover:opacity-70"
          onClick={() => setStep(4)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string,
};
