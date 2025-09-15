const NomeInput = () =>{
    return(
        <div className="flex flex-col"> 
            <label htmlFor="nome">Nome</label>
            <input className="border border-gray-950 rounded-sm"type="text" id="nome" name="nome" placeholder="Digite o nome que deseja alterar"></input>
        </div>
    )
}
export default NomeInput