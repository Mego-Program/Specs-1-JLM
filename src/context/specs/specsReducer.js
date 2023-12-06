import { ADD_SPECS, DELETE_SPECS, EDIT_SPECS, DONE_SPECS, LOAD_SPECS_FROM_SERVER } from "./specsTypes";

export const INITIAL_STATE_SPECS = {
  loading: false,
  error: false,
  resError: "",
  specs: [],
};

export const specsReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_SPECS:
      // save the new specs in local storage
      return { ...state, specs: [...state.specs, payload] };

    case EDIT_SPECS: {
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
    }

    case DELETE_SPECS: {
      let newSpecs = state.specs.filter((specs) => specs.id !== payload.id);
      return {
        ...state,
        specs: newSpecs,
      };
    }

    case LOAD_SPECS_FROM_SERVER:
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
