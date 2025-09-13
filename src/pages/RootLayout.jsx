import Header from "../components/Header/Header"
import Card from "../components/Card/Card"
import { Outlet } from "react-router-dom"

function RootLayout() {

  return (
    <>
      <Header/>
      <main className="flex justify-center">
        <Outlet/>
      </main>
    </>
  )
}

export default RootLayout
