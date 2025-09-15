import DescricaoInput from "./DescricaoInput"
import NomeInput from "./NomeInput"
import ResponsavelInput from "./ResponsavelInput"

const Editar = () =>{
    return(

        <div className="flex flex-col py-10 px-10 gap-4">
            <form className="flex flex-col gap-2">
                <NomeInput/>
                <ResponsavelInput/>
                <DescricaoInput/>
            </form>
            <button className='bg-blue-500 text-white px-4 py-2 w-fit rounded self-end cursor-pointer'>Altera dados</button>
        </div>
    )
}
export default Editar