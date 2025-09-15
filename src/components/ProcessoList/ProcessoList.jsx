import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom"

const ProcessoList = () => {
    
    // const [valor, setValor] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     fetch(`http://localhost:5134/api/Setor/${id}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setValor(data)
    //             setLoading(false)
    //         })
    // }, [id])
    
    // if (loading) return <div>Carregando...</div>;
    return (
        <div>
            <h1>{nome}</h1>
        </div>
        // <div className="flex flex-col gap-10">
        //     <h2>{valor.nomeSetor}</h2>
        //     <p>Lista de SubProcessos</p>
        //     {valor.setoresFilhos.map((item) => (
        //         <Link to={`/setor/${item.id}`}><button>{`Acessar ${item.nomeSetor}`}</button></Link>
        //     ))}
        // </div>
    )
}
export default ProcessoList