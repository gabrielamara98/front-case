const InfoGeral= ({titulo, descricao,resposanvel}) =>{
    return(
        <>
            <h1 className='mt-5 text-3xl max-w-sm'>{titulo}</h1>
            <div className='max-w-sm'>
                <p>Descrição: {descricao}</p>
            </div>
            <p className='px-4 py-2 bg-red-500 text-white'>Responsavel: {resposanvel}</p>
        </>
        
    )
}
export default InfoGeral