const NomeInput = ({nome,setNome}) =>{
    

    return(

        <div className="flex flex-col"> 
            <label htmlFor="nome">Nome</label>
            <input value= {nome} onChange={e => setNome(e.target.value)} className="border border-gray-950 rounded-sm"type="text" id="nome" name="nome" placeholder="Digite o nome que deseja alterar" required></input>
        </div>
    )
}
export default NomeInput