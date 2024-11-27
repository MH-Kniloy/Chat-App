import "./App.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login"

function App() {
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Registration />} />
      <Route path="/Login" element={<Login />} />
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
