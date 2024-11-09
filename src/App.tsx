import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import TeamDeatails from "./pages/TeamDetails";
import CreateFormation from "./pages/CreateFormation";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
            ],
        },
        { path: "team/:teamId", element: <TeamDeatails /> },
        { path: "/create-formation", element: <CreateFormation /> },
    ]);

    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
