import { Link, useNavigate, useParams } from "react-router-dom"
import InfoGeral from "../components/InfoGeral/InfoGeral"
import { useEffect, useState } from "react";
import BotaoAlterar from "../components/Botao/BotaoAlterar";
import BotaoDeletar from "../components/Botao/BotaoDeletar";
import Modal from '../components/Modal/Modal'
import Formulario from '../components/Formulario/Formulario'

const Area = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [valor, setValor] = useState([])
    const [valor2, setValor2] = useState([])
    const [modalAberto, setModalAberto] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5241/api/Area/${id}`)
            .then(resp => resp.json())
            .then(data => setValor(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5241/api/Processo/filhos-area/${id}`)
            .then(resp => resp.json())
            .then(data => setValor2(data))
    }, [])


    const handleDeletar = () => {
        fetch(`http://localhost:5241/api/Area/delete/${id}`, {
            method: "PUT"
        }

        )
            .then(response => {
                if (response.ok) {
                    navigate('/')
                    alert("Item deletado com sucesso")
                }
            })

    }

    const abrirModal = () => setModalAberto(true);
    const fecharModal = () => setModalAberto(false);
    return (
        <>
            <InfoGeral titulo={valor.nome} descricao={valor.descricao} resposanvel={valor.responsavel} />
            <BotaoAlterar onClick={abrirModal} />
            <BotaoDeletar onClick={handleDeletar} />
            <Modal isOpen={modalAberto} onClose={fecharModal}>
                <Formulario btnText="Alterar" />
            </Modal>
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
                dados.idArea = id
                fetch("http://localhost:5241/api/Processo/novo-processo-pai", {
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

export default Area