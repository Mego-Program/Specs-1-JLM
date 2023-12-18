import axios from "axios";

axios.defaults.baseURL = "https://specs-1-jlm-server-tzvis-projects.vercel.app/specs";
// axios.defaults.baseURL = "http://localhost:4000/specs";

const getAllSpecs = async () => {
  try {
    const req = await axios.get("/");
    return req.data.specs;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getSpecs = async (id) => {
  try {
    const req = await axios.get(`/${id}`);
    return req.data.specs;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const addSpecs = async (specs) => {
  try {
    const req = await axios.post("/createspecs", specs);
    return req.data.message;
  } catch (error) {
    return;
  }
};

const deletedSpecs = async (id) => {
  try {
    const req = await axios.delete(`/${id}`);
    return req.data.message;
  } catch (error) {
    return;
  }
};
const editSpecs = async (id, specs) => {
  console.log(specs);
  try {
    const req = await axios.patch(`/${id}`, specs);
    return req.data.message;
  } catch (error) {
    return;
  }
};

export { getAllSpecs, getSpecs, addSpecs, deletedSpecs, editSpecs };
