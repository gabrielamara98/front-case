const ResponsavelInput = () =>{
    return(
        <div className="flex flex-col">
            <label htmlFor="responsavel">Responsavel</label>
            <input className="border border-gray-950 rounded-sm"type="text" id="responsavel" name="responsavel" placeholder="Digite o responsavel da area"></input>
        </div>
    )
}
export default ResponsavelInput