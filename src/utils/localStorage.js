export const getLocalValue = () => {
  const get = localStorage.getItem("currentUser");
  if (get) {
    return JSON.parse(get);
  }
  return {};
};

export const setLocalValue = (info) => {
  localStorage.setItem("currentUser", JSON.stringify(info));
};
