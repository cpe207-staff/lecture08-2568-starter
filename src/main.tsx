import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
//เอา css 2.เอาของ index.css ออก ของ main.tsx ซึ่ง main.tsx ก็คือหน้า index.tsx
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
