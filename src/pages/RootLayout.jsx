import Header from "../components/Header/Header"
import { Outlet } from "react-router-dom"

function RootLayout() {

  return (
    <>
      <Header/>
      <main className="flex flex-col items-center gap-5 flex-wrap">
        <Outlet/>
      </main>
    </>
  )
}

export default RootLayout
