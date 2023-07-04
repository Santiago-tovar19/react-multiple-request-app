import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startCreatingNewUser,
  startDeleteUser,
  startLoadingUsers,
  startUpdateUser,
} from "../../store/users/thunks";
import { Formik, useFormik, useFormikContext } from "formik";
import { MyIneerComponents } from "../components/MyIneerComponents";

export const UserCrudPage = () => {
  const inputID = useRef();
  const input1 = useRef();
  console.log(input1);
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const inputValueRef = useRef();

  const cambioProps = (values) => {
    values.name = "nosewey";
  };

  const submitForm = (id) => {
    event.preventDefault();
  };

  const dispatch2 = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          phone: "",
        }}
        onSubmit={(values, { resetForm }) => {
          event.preventDefault();

          if (inputID.id === undefined) {
            let user = {
              name: values.name,
              username: values.username,
              email: values.email,
              phone: values.phone,
            };

            // dispatch2(startCreatingNewUser(user));
            resetForm();
          } else {
            let user = {
              name: values.name,
              username: values.username,
              email: values.email,
              phone: values.phone,
            };

            dispatch2(startUpdateUser(user, inputID.id));
            resetForm();
          }
        }}
      >
        {({ handleSubmit, values, handleChange }) => (
          <form className="crud-form" onSubmit={handleSubmit}>
            <MyIneerComponents />
          </form>
        )}
      </Formik>
    </>
  );
};
