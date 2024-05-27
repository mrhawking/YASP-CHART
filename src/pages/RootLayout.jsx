import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <>
      <header>
        header
      </header>
        <Outlet/>
      <footer>footer</footer>
    </>
  )
}

export default RootLayout