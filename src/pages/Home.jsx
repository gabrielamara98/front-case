import Formulario from '../components/Formulario/Formulario'
import Card from '../components/Card/Card'

const Home = () =>{
    return(
        <>
            <h1 className='mt-5 text-3xl'>Areas Cadastradas</h1>
            <Card/>
            <h1 className='text-3xl'>Cadastrar uma nova Area</h1>
            <Formulario btnText="Cadastrar"/>
        </>
    )
}
export default Home