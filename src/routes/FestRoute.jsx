import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../Form";
import Participants from "../Participants";
import TechFestCURAJ from "../layout/TechFestCURAJ";

const FestRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TechFestCURAJ>
            <Form />
          </TechFestCURAJ>
        }
      />
      <Route
        path="/all"
        element={
          <TechFestCURAJ>
            <Participants />
          </TechFestCURAJ>
        }
      />
    </Routes>
  );
};

export default FestRoute;
