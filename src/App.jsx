import { RouterProvider } from "react-router-dom";
import ChartsContextProvider from "./store/charts-context";
import { router } from "./router";

function App() {

  return (
    <ChartsContextProvider>
      <RouterProvider router={router} />
    </ChartsContextProvider>
  )
}

export default App
