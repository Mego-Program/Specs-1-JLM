import { ADD_SPECS, DELTE_SPECS, EDIT_SPECS } from "./specsTypes";

export const INITIAL_STATE_SPECS = {
  loading: false,
  error: false,
  resError: "",
  specs: [
    {
      date: "2023-10-26",
      title: "Example Title 1",
      id: "12345",
      content: "This is some fake content 1",
    },
    {
      date: "2023-10-27",
      title: "Example Title 2",
      id: "12346",
      content: "This is some fake content 2",
    },
    {
      date: "2023-10-28",
      title: "Example Title 3",
      id: "12347",
      content: "This is some fake content 3",
    },
    // {
    //   date: "2023-10-29",
    //   title: "Example Title 4",
    //   id: "12348",
    //   content: "This is some fake content 4",
    // }]]
  ],
  // {
  //   title: "",
  //   content: "",
  //   users: [],
  //   date: "",
  //   isEdit: false,
  //   id: "",
  //   complete: false,
  // },
};

export const specsReducr = (state, { type, payload }) => {
  switch (type) {
    case ADD_SPECS:
      return { ...state, specs: [...state.specs, payload] };
    case EDIT_SPECS:
      const specs = state.specs.map((specs) => {
        if (specs.id === payload.id) {
          return payload;
        }
        return specs;
      });
      return {
        ...state,
        specs: specs,
      };
    case DELTE_SPECS:
      return {
        ...state,
        specs: state.specs.filter((specs) => specs.id !== payload.id),
      };
  }
};
