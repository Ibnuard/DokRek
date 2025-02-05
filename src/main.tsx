import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/poppins.css";
import "./css/styles.css";
import Routes from "./routes/index.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="180750905273-5k99t4ue0osv96l955c5kpgau0inmmi9.apps.googleusercontent.com">
    <StrictMode>
      <Routes />
    </StrictMode>
  </GoogleOAuthProvider>
);
