import { useParams} from "react-router-dom"
import InfoGeral from "../components/InfoGeral/InfoGeral"
import { useEffect, useState } from "react";

const Area = () =>{

    const { id } = useParams(); 
    const [valor,setValor] = useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(resp => resp.json())
        .then(data => setValor(data))
    },[])


    return(
        <InfoGeral titulo="AREAX" descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic rerum corporis illo voluptatibus. Beatae, assumenda aperiam! Id quis nisi, recusandae fuga mollitia asperiores iure deserunt inventore voluptatum nulla consectetur." resposanvel="Gabriel"/>
    )
}

export default Area