export const sendContactForm = async (data) => {
  return axios.post(
    "http://51.20.72.238:5000/send-email",
    data
  );
};
