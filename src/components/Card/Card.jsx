const Card = ({titulo,processos}) =>{
    return(
        <div className="grid grid-rows-2 h-[300px] w-[250px] border border-indigo-600 rounded-md bg-red-50">
            <div></div>
            <div className="flex flex-col gap-10 items-center border-t-2 border-indigo-600">
                <h2>{titulo}</h2>
                <p>Subprocessos: {processos}</p>
            </div>
        </div>
    )
}
export default Card