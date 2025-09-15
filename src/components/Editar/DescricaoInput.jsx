const DescricaoInput = () =>{
    return(
        <div className="flex flex-col">
            <label htmlFor="descricao">Descrição</label>
            <textarea className="border border-gray-950 rounded-sm" id="descricao" name="descricao" placeholder="Digite o uma nova descrição"></textarea>
        </div>
    )

}
export default DescricaoInput