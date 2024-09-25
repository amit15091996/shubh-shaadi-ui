import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import PublicLayouts from "./layouts/PublicLayouts";
import Layouts from "./layouts/Layouts";
import PrivateLayouts from "./layouts/PrivateLayouts";
import Login from "../pages/auth/Login";



const ShadiRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>

      {/* public routes */}
      <Route path="" element={<PublicLayouts />} >
      <Route path="login" element={<Login />}/>
      </Route>

  {/* private routes */}
      <Route path="/user" element={<PrivateLayouts />}>

      </Route>
    </Route>
  ),
  { basename: "/wedding-connect" }
)
export default ShadiRoutes;