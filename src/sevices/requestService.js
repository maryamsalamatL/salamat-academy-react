import http from "./httpService";

const postTerm = ({ title, category }) => {
  return http.post("/terms", { title, category, id: Date.now() });
};
const deleteTerm = (id) => {
  return http.delete(`/terms/${id}`);
};

const getTerms = () => {
  return http.get("/terms");
};
const signupUser = (user) => {
  return http.post("/signup", user);
};
export { getTerms, postTerm, deleteTerm, signupUser };
