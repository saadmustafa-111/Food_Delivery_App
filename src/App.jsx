import React from "react";
import { Route, Routes } from "react-router-dom";
import Rastaurants from "./Pages/Rastaurants";
import Home from "./Pages";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/restaurant"
          element={
            <Layout>
              <Rastaurants />{" "}
            </Layout>
          }
        />
        {/* Add other routes as needed */}
      </Routes>
    </>
  );
}
