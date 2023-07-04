import { useInterceptor } from "../../hooks/useInterceptor";
import {
  onAddNewUser,
  onDeleteUser,
  onLoadUsers,
  onUpdateUser,
  usersStatus,
} from "../users/usersSlice";

const { getRequest, createRequest, deleteRequest, updateRequest } =
  useInterceptor();

const url = "http://localhost:3000/personas";

export const startLoadingUsers = () => {
  return async (dispatch) => {
    const result = await getRequest(url);
    dispatch(onLoadUsers(result));
  };
};

export const startCreatingNewUser = (user) => {
  return async (dispatch) => {
    const result = await createRequest(user, url);
    dispatch(onAddNewUser(result));
  };
};

export const startDeleteUser = (id) => {
  return async (dispatch) => {
    await deleteRequest(`${url}/`, id);
    dispatch(onDeleteUser(id));
  };
};

export const startUpdateUser = (user, id) => {
  return async (dispatch) => {
    const result = await updateRequest(user, id, `${url}/`);
    dispatch(onUpdateUser(result));
  };
};
