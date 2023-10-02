import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home.jsx";
import Invite from "../components/Invite.jsx";

export default createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/invitation", element: <Invite /> }
])