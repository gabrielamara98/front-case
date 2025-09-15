import { useParams} from "react-router-dom"
import InfoGeral from "../components/InfoGeral/InfoGeral"
import { useEffect, useState } from "react";

const Area = () =>{

    const { id } = useParams(); 
    const [valor,setValor] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5241/api/Area/${id}`)
        .then(resp => resp.json())
        .then(data => setValor(data))
    },[])


    return(
        <InfoGeral titulo={valor.nome} descricao={valor.descricao} resposanvel={valor.responsavel}/>
    )
}

export default Area