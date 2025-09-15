import { Children, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Editar from "../Editar/Editar"
import Modal from "../Modal/Modal"

const Card = () =>{
    // const [valor,setValor] = useState([])
    const [modalStatus, setModalStatus] = useState(false)
    
    // useEffect(()=>{
    //     fetch("http://localhost:5134/api/Area/get-all")
    //     .then(response => response.json())
    //     .then(data => setValor(data))
    // },[])

    return (
        <>
        <button>Apagar</button>
        <button onClick={() => setModalStatus(true)}>Editar</button>
        <Modal isOpen={modalStatus} onClose={() => setModalStatus(false) } children={<Editar/>}>
        </Modal>
            {/* {valor.map((item) => {
                return (
                    <div key={item.id} className="grid grid-rows-2 h-[300px] w-[250px] border border-indigo-600 rounded-md bg-red-50">
                        <div></div>
                        <div className="flex flex-col gap-10 items-center border-t-2 border-indigo-600">
                            <h2>{item.nome}</h2>
                            <p>Processos</p>
                            <Link to={`/setor/${item.id}`}><button>Acessar</button></Link>
                        </div>
                    </div>)
            })} */}
        </>
)}
export default Card