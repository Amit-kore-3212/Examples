//get data , setData

import axios from "axios";

export const setData = (payload) => {
  return { type: "DATA", payload: payload };
};

export const getData = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(setData(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
