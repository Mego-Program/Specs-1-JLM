import { useReducer } from "react";
import { INITIAL_STATE_SPECS, specsReducr } from "../../context/specs/specsReducer";
import { ADD_SPECS, DELTE_SPECS, EDIT_SPECS } from "../../context/specs/specsTypes";
import { NavLink } from "react-router-dom";

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;

  return formattedDate;
}

export default function specs() {
  const [state, dispatch] = useReducer(specsReducr, INITIAL_STATE_SPECS);

  const addSpecs = () => {
    dispatch({
      type: ADD_SPECS,
      payload: specs[specs.length - 1],
      // date: getTodayDate(),
      // title: new Date().getTime(),
      // id: new Date().getTime(),
    });
  };
  const editSpecs = (id) => {
    dispatch({
      type: EDIT_SPECS,
      payload: {
        date: datespecs(),
        title: new Date().getTime(),
        id,
      },
    });
  };
  const delteSpecs = (id) => {
    dispatch({
      type: DELTE_SPECS,
      payload: {
        id,
      },
    });
  };
  // const datespecs = (id) => {
  //   dispatch({
  //     type: DATE_SPECS,
  //     payload: {
  //       date: getTodayDate(),
  //       id,
  //     },
  //   });
  // };

  return (
    <div className="bg-slate-800 h-screen">
      <NavLink
        to="/add-new-specs"
        className="w-[278px] h-[55px] bg-amber-400 rounded-[5px] border-[5px] flex flex-row"
      >
        <div className="text-slate-900 text-lg font-normal font-['Poppins'] capitalize leading-[18px] basis-2/3">
          add a new spec
        </div>
        <div className="w-[81px] h-[49px] bg-slate-900 rounded-[5px] basis-1/3">
          <div className="text-amber-400 text-[33px] font-normal font-['Poppins'] capitalize leading-[33px]">
            +
          </div>
        </div>
      </NavLink>
      <div className="text-white-500">
        <button onClick={addSpecs}>add</button>
        {state.specs.map((s, i) => (
          <div key={i}>
            {s.date}
            <div className="w-[1168px] h-[143px] bg-slate-900 rounded-[9px] border border-amber-400">
              {s.title}

              <button onClick={() => editSpecs(s.id)}>edit</button>
              <button onClick={() => delteSpecs(s.id)}>delte</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
