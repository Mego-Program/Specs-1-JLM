const getSpecs = () => {
  const storageData = localStorage.getItem("specs");

  return storageData !== "undefined" && storageData !== "null" ? JSON.parse(storageData) : false;
};
const addSpecs = (specs) => {
  localStorage.setItem("specs", JSON.stringify(specs));
};
const deleteSpecs = (specs) => {
  localStorage.setItem("specs", JSON.stringify(specs));
};
const editSpecs = (specs) => {
  localStorage.setItem("specs", JSON.stringify(specs));
};
// const statusSpecs = (specs) => {
//   localStorage.setItem("specs", JSON.stringify(specs));
// };
export { getSpecs, addSpecs, deleteSpecs, editSpecs };
