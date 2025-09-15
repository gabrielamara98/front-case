import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Card = () =>{
    const [valor,setValor] = useState([])
    
    useEffect(()=>{
        fetch("http://localhost:5241/api/Area/get-all")
        .then(response => response.json())
        .then(data => setValor(data))
    },[])

    return (
        <>
            {valor.map((item) => {
                return (
                    <div key={item.id} className="grid grid-rows-2 w-[250px] border border-indigo-600 rounded-md bg-red-50 py-4 px-4">
                        <div></div>
                        <div className="flex flex-col gap-10 items-center border-t-2 border-indigo-600">
                            <h2 className="">{item.nome}</h2>
                            <Link to={`/setor/${item.id}`}state={{nome:item.nome}} ><button className="bg-blue-500 text-white px-4 py-2 rounded w-fit cursor-pointer">Acessar</button></Link>
                        </div>
                    </div>)
            })}
        </>
)}
export default Card