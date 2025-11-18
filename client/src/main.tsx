import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { TRPCProvider } from "./lib/trpc-provider";

createRoot(document.getElementById("root")!).render(
  <TRPCProvider>
    <App />
  </TRPCProvider>
);
