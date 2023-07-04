import axios from "axios";

export const useInterceptor = () => {
  const getRequest = async (url) => {
    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.log("Error cargando usuarios");
      console.log(error);
      return error;
    }
  };

  const createRequest = async (body, url) => {
    try {
      const res = await axios.post(url, body);

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const deleteRequest = async (url, id) => {
    try {
      const response = await axios.delete(`${url}${id}`);

      return response.data;
    } catch (error) {
      let message = error.statusText || "Ocurrió un error";
      alert(`Error ${error.status}: ${message}`);
    }
  };

  const updateRequest = async (body, id, url) => {
    try {
      const response = await axios.put(`${url}${id}`, body);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getRequest,
    createRequest,
    deleteRequest,
    updateRequest,
  };
};
