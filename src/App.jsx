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

function App() {
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/Registration" element={<Registration />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="*" element={<Navigate to="/Registration" replace />} />
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
