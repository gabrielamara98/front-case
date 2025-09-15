import DescricaoInput from "./DescricaoInput"
import NomeInput from "./NomeInput"
import ResponsavelInput from "./ResponsavelInput"

const Editar = () =>{
    return(
        <div className="flex flex-col justify-center border border-gray-950 max-w-lg bg-zinc-500">
            <form className="flex flex-col py-10 px-10 gap-6">
                <NomeInput/>
                <ResponsavelInput/>
                <DescricaoInput/>
            </form>
            <button>Alterar Dados</button>
        </div>
    )
}
export default Editar