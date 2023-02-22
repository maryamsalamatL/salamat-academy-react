import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
// axios.interceptors.request.use(
//   (request) => {
//     console.log(request);
//   },
//   (error) => {
//     console.log(error);
//   }
// );
const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export default http;
