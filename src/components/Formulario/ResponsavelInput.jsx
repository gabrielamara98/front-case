const ResponsavelInput = ({responsavel,setResponsavel}) =>{

    return(
        <div className="flex flex-col">
            <label htmlFor="responsavel">Responsavel</label>
            <input value={responsavel} onChange={e => setResponsavel(e.target.value)}className="border border-gray-950 rounded-sm"type="text" id="responsavel" name="responsavel" placeholder="Digite o responsavel da area" required></input>
        </div>
    )
}
export default ResponsavelInput