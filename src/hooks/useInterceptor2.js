import { apiUsers } from "../users/apis/apiUsers";

export const useInterceptor = () => {
  const getRequest = async (url) => {
    try {
      let res = await fetch(url);
      let json = await res.json();

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      return json;
    } catch (error) {
      console.log("Error cargando ");
      console.log(error);
      return error;
    }
  };

  const createRequest = async (body, url) => {
    try {
      let options = {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            ...body,
          }),
        },
        res = await fetch(url, options);

      let json = await res.json();

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      console.log(json);

      return json;
    } catch (err) {
      console.log(err);
    }
  };

  const deleteRequest = async (url, id) => {
    try {
      let options = {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
        },
        res = await fetch(`${url}${id}`, options),
        json = await res.json();

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      return json;
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      alert(`Error ${err.status}: ${message}`);
    }
  };

  const updateRequest = async (body, id, url) => {
    try {
      let options = {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            ...body,
          }),
        },
        res = await fetch(`${url}${id}`, options);
      let json = await res.json();
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      return json;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getRequest,
    createRequest,
    deleteRequest,
    updateRequest,
  };
};
