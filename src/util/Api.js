import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/api/", //YOUR_API_URL HERE
  // headers: {
  //   "Content-Type": "application/json",
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Headers":
  //     "Origin, X-Requested-With, Content-Type, Accept",
  //   "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
  // },
});
