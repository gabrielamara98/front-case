import Formulario from '../Formulario/Formulario'
import ProcessoList from '../ProcessoList/ProcessoList'
import { useState } from 'react';
import Modal from '../Modal/Modal'

const InfoGeral= ({titulo, descricao,resposanvel,onClick}) =>{

    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = () => setModalAberto(true);
    const fecharModal = () => setModalAberto(false);


    return(
        <>
            <h1 className='mt-5 text-3xl max-w-sm'>{titulo}</h1>
            <div className='max-w-sm'>
                <p>{descricao}</p>
            </div>
            <p className='px-4 py-2 bg-red-500 text-white'>Responsavel: {resposanvel}</p>
            <div className='flex gap-10'>
                <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mt-5"onClick={abrirModal}>Editar</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mt-5"onClick={onClick}>Apagar</button>
            </div>
            <Modal isOpen={modalAberto} isClosed = {fecharModal}>
                <Formulario btnText="Alterar"/>
            </Modal>
            <h2>Processos</h2>
        </>
        
    )
}
export default InfoGeral