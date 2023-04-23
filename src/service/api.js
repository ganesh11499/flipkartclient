import axios from "axios";

const URL = "https://flipkartserver-3zzj.onrender.com";

export const authenticate = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Erroe while calling api data");
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Erroe while calling login data");
  }
};

export const payusingPaytm = async (data) => {
  try {
    const res = await axios.post(`${URL}/payment`, data);
    return res.data;
  } catch (error) {
    console.log("Error while calling paytm data");
  }
};
