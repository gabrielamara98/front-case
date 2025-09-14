import DescricaoInput from "./DescricaoInput"
import NomeInput from "./NomeInput"
import ResponsavelInput from "./ResponsavelInput"

const Editar = () =>{
    return(
        <div>
            <form>
                <NomeInput/>
                <ResponsavelInput/>
                <DescricaoInput/>
            </form>
            <button>Alterar Dados</button>
        </div>
    )
}
export default Editar