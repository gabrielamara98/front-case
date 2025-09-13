import { useEffect, useState } from "react"

const Card = () =>{
    const [valor,setValor] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setValor(data))
    },[])

    return (
        <>
            {valor.map((item) => {
                return (
                    <div key={item.id} className="grid grid-rows-2 h-[300px] w-[250px] border border-indigo-600 rounded-md bg-red-50">
                        <div></div>
                        <div className="flex flex-col gap-10 items-center border-t-2 border-indigo-600">
                            <h2>{item.name}</h2>
                            <p>Subprocessos</p>
                        </div>
                    </div>)
            })}
        </>
)}
export default Card