import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Homepage/HomePage";
import Timeline from "../pages/Timeline/Timeline";

export const router = createBrowserRouter([
    {
        path: '/',
    Component: MainLayout,
    children: [
        {
            index: true,
            Component:  HomePage
        },
        {
            path: '/timeline',
            Component: Timeline
            
        },
        {
            path: '/stats',
        }
    ],
    errorElement: <ErrorPage></ErrorPage>
    }
])