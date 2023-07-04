import axios from "axios";

export const apiUsers = axios.create({
  baseURL: "http://localhost:3000/personas",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});
