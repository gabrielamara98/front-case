import { useEffect,useState } from "react"
import InfoGeral from "../components/InfoGeral/InfoGeral"
import { useParams } from "react-router-dom"

const Processo= () =>{
    const[valor, setValor] = useState({})
    const {id} = useParams()
    
    useEffect(()=>{
        fetch(`http://localhost:5241/api/Processo/${id}`)
        .then(response => response.json())
        .then(data =>setValor(data) )
    },[])
    return(
        <>
        <InfoGeral titulo={valor.nome} descricao={valor.descricao} resposanvel={valor.responsavel}/>
        <h2 className="text-3xl">Processos</h2>
        </>
    )
}
export default Processo