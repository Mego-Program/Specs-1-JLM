import { ADD_SPECS, DELETE_SPECS, EDIT_SPECS, LOAD_SPECS_FROM_LOCAL_STORAGE, DONE_SPECS } from "./specsTypes";
import { deleteSpecs, addSpecs, editSpecs } from "../../services/specs.services";

export const INITIAL_STATE_SPECS = {
  loading: false,
  error: false,
  resError: "",
  specs: [
    {
      date: "2023.10.26",
      title: "Example Title 1",
      id: "12345",
      content: "This is some fake content 1",
    },
    {
      date: "2023.10.27",
      title: "Example Title 2",
      id: "12346",
      content: "This is some fake content 2",
    },
    {
      date: "2023.10.28",
      title: "Example Title 3",
      id: "12347",
      content: "This is some fake content 3",
    },
    {
      date: "2023.10.29",
      title: "Example Title 4",
      id: "12348",
      content: "This is some fake content 4",
    },
    {
      date: "2023.10.30",
      title: "Example Title 5",
      id: "12349",
      content: "This is some fake content 5",
    },
    // {
    //   title: "",
    //   content: "",
    //   users: [],
    //   date: "",
    //   isEdit: false,
    //   id: "",
    //   complete: false,
    // },
  ],
};

export const specsReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_SPECS:
      // save the new specs in local storage
      addSpecs(localStorage.setItem("specs", JSON.stringify([...state.specs, payload])));

      return { ...state, specs: [...state.specs, payload] };
    case EDIT_SPECS: {
      const specs = state.specs.map((specs) => {
        if (specs.id === payload.id) {
          return payload;
        }
        return specs;
      });

      editSpecs(specs);
      return {
        ...state,
        specs: specs,
      };
    }
    case DELETE_SPECS: {
      let newSpecs = state.specs.filter((specs) => specs.id !== payload.id);
      deleteSpecs(newSpecs);

      return {
        ...state,
        specs: newSpecs,
      };
    }
    case LOAD_SPECS_FROM_LOCAL_STORAGE:
      console.log(payload);
      return {
        ...state,
        specs: payload,
      };
    case DONE_SPECS: {
      console.log(payload);
      const status = state.specs.map((specs) => {
        if (specs.id === payload.id) {
          return payload;
        }
        return specs;
      });
      return {
        ...state,
        specs: status,
      };
    }
  }
};
