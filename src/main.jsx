import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserContext } from "./context/UserContext/UserContext.jsx";
import { GroupContext } from "./context/GroupContext/GroupContext.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { NotificationContext } from "./context/NotificationContext/NotificationContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <UserContext>
        <GroupContext>
          <NotificationContext>
            <App />
          </NotificationContext>
        </GroupContext>
      </UserContext>
    </Provider>
  </StrictMode>
);
