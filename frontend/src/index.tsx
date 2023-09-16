import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Task3Subpage from "./pages/task3/subpage";
import Task3Counter from "./pages/task3/counter";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/task3/subpage" element={<Task3Subpage />} />
          <Route path="/task3/counter" element={<Task3Counter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
