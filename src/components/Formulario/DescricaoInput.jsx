const DescricaoInput = ({descricao,setDescricao}) =>{
    return(
        <div className="flex flex-col">
            <label htmlFor="descricao">Descrição</label>
            <textarea value={descricao} onChange={e => setDescricao(e.target.value)} className="border border-gray-950 rounded-sm" id="descricao" name="descricao" placeholder="Digite uma descrição"></textarea>
        </div>
    )

}
export default DescricaoInput