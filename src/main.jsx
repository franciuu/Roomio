import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// landing page-ul este o pagină separată (public/landing.html); vechiul link #landing duce acolo
if (window.location.hash === "#landing") window.location.replace(`${import.meta.env.BASE_URL}landing.html`);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
