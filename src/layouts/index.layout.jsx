import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/layout.scss";

const IndexLayout = () => {
  return (
    <div className="index-layout">
      <div className="d-none d-sm-flex flex-column justify-content-center">
        <h1 className="text-danger">
          Switch to mobile display or less than 576px to view items
        </h1>
      </div>
      <main className="index-layout-main d-sm-none">
        <Outlet />
      </main>
    </div>
  );
};

export default IndexLayout;
