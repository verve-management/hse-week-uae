import axios from "axios";

export const sendContactForm = async (data) => {
  return axios.post(
    "https://api.nexanglobal.com/send-email",
    data
  );
};
