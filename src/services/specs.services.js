import axios from "axios";

<<<<<<< HEAD
axios.defaults.baseURL = "https://specs-1-jlm-server-tzvis-projects.vercel.app/specs";
const getAllSpecs = async () => {
  try {
    const req = await axios.get("/");
=======
const getAllSpecs = async () => {
  try {
    const req = await axios.get("http://localhost:4000/specs/");
>>>>>>> ab1a6983abcbad074c47feada48992a2ed41686f
    return req.data.specs;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getSpecs = async (id) => {
  try {
<<<<<<< HEAD
    const req = await axios.get(`/${id}`);
=======
    const req = await axios.get(`http://localhost:4000/specs/${id}`);
>>>>>>> ab1a6983abcbad074c47feada48992a2ed41686f
    return req.data.specs;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const addSpecs = async (specs) => {
  try {
<<<<<<< HEAD
    const req = await axios.post("/createspecs", specs);
=======
    const req = await axios.post("http://localhost:4000/specs/createspecs", specs);
>>>>>>> ab1a6983abcbad074c47feada48992a2ed41686f
    return req.data.message;
  } catch (error) {
    return;
  }
};

const deletedSpecs = async (id) => {
  try {
<<<<<<< HEAD
    const req = await axios.delete(`/${id}`);
=======
    const req = await axios.delete(`http://localhost:4000/specs/${id}`);
>>>>>>> ab1a6983abcbad074c47feada48992a2ed41686f
    return req.data.message;
  } catch (error) {
    return;
  }
};
const editSpecs = async (id, specs) => {
  console.log(specs);
  try {
<<<<<<< HEAD
    const req = await axios.patch(`/${id}`, specs);
=======
    const req = await axios.patch(`http://localhost:4000/specs/${id}`, specs);
>>>>>>> ab1a6983abcbad074c47feada48992a2ed41686f
    return req.data.message;
  } catch (error) {
    return;
  }
};

export { getAllSpecs, getSpecs, addSpecs, deletedSpecs, editSpecs };
