import Formulario from '../Formulario/Formulario'
import Card from '../Card/Card'

const Home = () =>{
    return(
        <>
            <h1 className='text-3xl'>Areas Cadastradas</h1>
            <Card/>
            <h1 className='mt-10 text-3xl'>Cadastrar uma nova Area</h1>
            <Formulario btnText="Cadastrar"/>
        </>
    )
}
export default Home