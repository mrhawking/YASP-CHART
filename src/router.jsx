import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import OsListPage from "./pages/OsListPage";
import OsItemPage from "./pages/OsItemPage";
import { ROUTES } from "./utils/routes";

export const router = createBrowserRouter([
  {
    path: ROUTES.MAIN, errorElement: <ErrorPage/>, element: <RootLayout />, children: [
      { index: true, element: <HomePage /> },
      {
        path: ROUTES.OSLIST, children: [
          { index: true, element: <OsListPage /> },
          { path: ROUTES.OSITEM, element: <OsItemPage /> }
        ]
      }
    ]
  },

]);