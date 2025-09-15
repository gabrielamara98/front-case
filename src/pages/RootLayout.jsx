import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { Outlet } from "react-router-dom"

function RootLayout() {

  return (
    <>
      <Header/>
      <main className="flex flex-col items-center gap-8 flex-wrap min-h-screen">
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default RootLayout
