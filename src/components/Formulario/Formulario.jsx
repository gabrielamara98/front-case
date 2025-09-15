import { useState } from "react"
import DescricaoInput from "./DescricaoInput"
import NomeInput from "./NomeInput"
import ResponsavelInput from "./ResponsavelInput"

const Formulario = ({ btnText }) => {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [responsavel, setResponsavel] = useState('')

    const handleSubmit = (x) => {
        x.preventDefault()
        const objeto = {
            nome,
            descricao,
            responsavel
        }

        const data = JSON.stringify(objeto)

        fetch("http://localhost:5241/api/Area/nova-area", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })
        .then(response => response.json())
        .then(() =>{
            setNome('')
            setResponsavel('')
            setDescricao('')
        })

    }

    return (

        <div className="flex flex-col py-10 px-10 gap-4 w-4xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <NomeInput nome={nome} setNome={setNome} />
                <ResponsavelInput responsavel={responsavel} setResponsavel={setResponsavel} />
                <DescricaoInput descricao={descricao} setDescricao={setDescricao} />
                <button type="submit" className='bg-blue-500 text-white px-4 py-2 w-fit rounded self-end cursor-pointer'>{btnText}</button>
            </form>
        </div>
    )
}
export default Formulario