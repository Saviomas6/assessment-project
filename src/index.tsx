import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";

function getLibrary(provider: any) {
  return new Web3(provider);
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <App />
  </Web3ReactProvider>
);
