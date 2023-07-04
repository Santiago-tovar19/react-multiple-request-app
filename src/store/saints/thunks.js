import { useInterceptor } from "../../hooks/useInterceptor";
import {
  onAddNewSaint,
  onDeleteSaint,
  onLoadSaints,
  onUpdateSaint,
} from "./saintsSlice";

const { getRequest, createRequest, deleteRequest, updateRequest } =
  useInterceptor();

const url = "http://localhost:5000/santos";

export const startLoadingSaints = () => {
  return async (dispatch) => {
    const result = await getRequest(url);
    dispatch(onLoadSaints(result));
  };
};

export const startCreatingNewSaint = (saint) => {
  return async (dispatch) => {
    const result = await createRequest(saint, url);
    dispatch(onAddNewSaint(result));
  };
};

export const startDeleteSaint = (id) => {
  return async (dispatch) => {
    await deleteRequest(`${url}/`, id);
    dispatch(onDeleteSaint(id));
  };
};

export const startUpdateSaint = (saint, id) => {
  return async (dispatch) => {
    const result = await updateRequest(saint, id, `${url}/`);
    dispatch(onUpdateSaint(result));
  };
};
