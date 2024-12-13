import "./App.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login"
import firebaseConfig from "./components/Authentication/Firebase.config";
import Home from "./pages/Home/Home";
import Messages from "./pages/Messages/Messages";
import Notifications from "./pages/Notifications/Notifications";
import Settings from "./pages/Settings/Settings";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

function App() {
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/Registration" element={<Registration />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Messages" element={<Messages />} />
      <Route path="/Notifications" element={<Notifications />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/Forgotpassword" element={<ForgotPassword />} />
      <Route path="*" element={localStorage.getItem("userLoginInfo")? <Navigate to="/Home"/> :<Navigate to="/Registration" replace />} />
    </Route>
  )
);
  return (
    <>
      <RouterProvider router={router} />  
    </>
  );
}

export default App;
