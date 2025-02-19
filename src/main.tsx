import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Calendar } from "./index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Calendar mode="month" expandable showHeader />
    </div>
  </StrictMode>
);
