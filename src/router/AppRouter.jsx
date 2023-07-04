import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MultipleRequestApp } from "../MultipleRequestApp";
import { UserCrudPage } from "../users/pages/UserCrudPage";
import { SaintsCrudPage } from "../saints/pages/SaintsCrudPage";
import { NavBar } from "../ui/NavBar";
import { UserCrudPage2 } from "../users/pages/UserCrudPage2";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/usuarios" element={<UserCrudPage2 />} />
        <Route path="/santos" element={<SaintsCrudPage />} />

        <Route path="/" element={<Navigate to="/usuarios" />} />
      </Routes>
    </>
  );
};
