import axios from "axios";

const getAllSpecs = async () => {
  try {
    const req = await axios.get("http://localhost:4000/specs/");
    return req.data.specs;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getSpecs = async (id) => {
  try {
    const req = await axios.get(`http://localhost:4000/specs/${id}`);
    return req.data.specs;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const addSpecs = async (specs) => {
  try {
    const req = await axios.post("http://localhost:4000/specs/createspecs", specs);
    return req.data.message;
  } catch (error) {
    return;
  }
};

const deletedSpecs = async (id) => {
  try {
    const req = await axios.delete(`http://localhost:4000/specs/${id}`);
    return req.data.message;
  } catch (error) {
    return;
  }
};
const editSpecs = async (id, specs) => {
  console.log(specs);
  try {
    const req = await axios.patch(`http://localhost:4000/specs/${id}`, specs);
    return req.data.message;
  } catch (error) {
    return;
  }
};

export { getAllSpecs, getSpecs, addSpecs, deletedSpecs, editSpecs };
