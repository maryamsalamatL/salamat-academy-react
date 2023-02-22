import http from "./httpService";

const postRegister = (level, newStudent) => {
  const header = {
    headers: {
      Authorization: "SECURE TOKEN",
    },
  };
  return http.post(`/${level}`, newStudent, header);
};
const getAvailableClasses = () => {
  return http.get("/available");
};
export { postRegister, getAvailableClasses };
