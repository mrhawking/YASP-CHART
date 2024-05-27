import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OsListPage from "./pages/OsListPage";
import OsItemPage from "./pages/OsItemPage";
import RootLayout from "./pages/RootLayout";
import ChartsContextProvider from "./store/charts-context";

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      { index: true, element: <HomePage /> },
      {
        path: 'oslist', children: [
          { index: true, element: <OsListPage /> },
          { path: ':osId', element: <OsItemPage /> }
        ]
      }
    ]
  },

]);

function App() {

  return (
    <ChartsContextProvider>
      <RouterProvider router={router} >
        {/* 1  В файле эмбллемы убрать позиционку и перенести в классы пр ииспользровании элемента 
      2 Поменять названия уветов на pink и т д*/}
      </RouterProvider>
    </ChartsContextProvider>
  )
}

export default App
