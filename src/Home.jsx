import Card from "./components/Card/Card"
import Header from "./components/Header/Header"

function Home() {

  return (
    <>
      <Header/>
      <main className="flex justify-center">
      <Card titulo="Administração de Redes" processos="10" />
      </main>
    </>
  )
}

export default Home
