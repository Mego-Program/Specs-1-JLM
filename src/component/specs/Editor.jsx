import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
console.log("aaaaaa");
export default function Editor() {
  const [specs, setSpecs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getSpecs = localStorage.getItem("specs");
    if (getSpecs) {
      const parsedSpecs = JSON.parse(getSpecs);
      setSpecs(parsedSpecs);
    }
  }, []);

  const selectedSpec = specs.find((spec) => spec.id + "" === id + "");

  return (
    <div className="bg-blue-100 p-4 rounded-md">
      <NavLink to="/" className="text-blue-500 underline">
        <div>Back to Home</div>
      </NavLink>
      {selectedSpec && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold">Editor</h2>
          <div className="mt-2">
            <span className="font-bold">id:</span> {selectedSpec.id}
          </div>
          <div className="mt-2">
            <span className="font-bold">data:</span> {selectedSpec.data}
          </div>
          <div className="mt-2">
            <span className="font-bold">title:</span> {selectedSpec.title}
          </div>
          <div className="mt-2">
            <span className="font-bold">Deadline:</span> {selectedSpec.Deadline}
          </div>
          <ul className="list-disc list-inside mt-2">
            {Array.isArray(selectedSpec.guitarPick) &&
              selectedSpec.guitarPick.map((pick, index) => (
                <li key={index} className="mt-1">
                  {pick.we_will}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
//   return (
//     <div>
//       <NavLink to="/">
//         <div>Back to Home</div>
//       </NavLink>
//       {selectedSpec && (
//         <div>
//           <h2>Editor</h2>
//           <div>id: {selectedSpec.id}</div>
//           <div>data: {selectedSpec.data}</div>
//           <div>title: {selectedSpec.title}</div>
//           <div>Deadline: {selectedSpec.Deadline}</div>
//           {/* <ul>
//             {selectedSpec.guitarPick.map((pick, index) => (console.log(pick), (<li key={index}>{pick}</li>)))}
//           </ul> */}
//           <ul>
//             {Array.isArray(selectedSpec.guitarPick) &&
//               selectedSpec.guitarPick.map((pick, index) => <li key={index}>{pick.we_will}</li>)}
//           </ul>

//           {/* Add more fields as needed */}
//         </div>
//       )}
//     </div>
//   );
// }
