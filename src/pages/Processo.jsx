import { useEffect,useState } from "react"
import InfoGeral from "../components/InfoGeral/InfoGeral"
import { useParams,Link } from "react-router-dom"
import Formulario from "../components/Formulario/Formulario"


const Processo= () =>{
    const[valor, setValor] = useState({})
    const[valor2, setValor2] = useState([])
    const {id} = useParams()
    
    useEffect(()=>{
        fetch(`http://localhost:5241/api/Processo/${id}`)
        .then(response => response.json())
        .then(data =>setValor(data) )
    },[])
    useEffect(() => {
        fetch(`http://localhost:5241/api/Processo/processo-filhos/${id}`)
            .then(resp => resp.json())
            .then(data => setValor2(data))
    }, [])
    return(
        <>
        <InfoGeral titulo={valor.nome} descricao={valor.descricao} resposanvel={valor.responsavel}/>
        <h2 className="text-3xl">Processos</h2>
        {valor2.map((item) => {
                return (
                    <div className="border py-2 px-4" key={item.id}>
                        <span><Link to={`processo/${item.id}`}>{item.nome}</Link></span>
                    </div>
                )
            })}
        <h1 className='text-3xl'>Cadastrar um novo Processo</h1>
        <Formulario btnText="Cadastrar" onSubmit={(dados) => {
                dados.idPai = id
                fetch("http://localhost:5241/api/Processo/novo-processo", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dados)
                })
                    .then(response => response.json())
                    .then(() => {
                        window.location.reload();
                    });
            }}/>
        </>
    )
}
export default Processo