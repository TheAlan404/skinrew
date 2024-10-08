import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ErrorPage } from "./ErrorPage";
import { AppBase } from "./base/AppBase";
import { HomePage } from "./pages/home/HomePage";
import { EditorPage } from "./pages/editor/EditorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppBase />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                    {
                        path: "editor",
                        element: <EditorPage />,
                    },
                ],
            }
        ],
    }
]);

export const BaseRouter = () => {
    return (
        <RouterProvider
            router={router}
            future={{
                v7_startTransition: true,
            }}
        />
    )
}
