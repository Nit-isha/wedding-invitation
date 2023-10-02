import { createBrowserRouter } from "react-router-dom";
import Bride from "../components/Bride.jsx";
import Groom from "../components/Groom.jsx";
import Home from "../components/Home.jsx";

export default createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/bride", element: <Bride /> },
    { path: "/groom", element: <Groom /> },
])