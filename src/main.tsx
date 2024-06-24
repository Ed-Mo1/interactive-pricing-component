import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import SubscriptionProvidor from "./context/subscriptionProvidor";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <SubscriptionProvidor>
    <App />
  </SubscriptionProvidor>
);
