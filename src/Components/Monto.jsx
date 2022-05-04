import React, {useState} from 'react'


function Monto() {

    const [info, setInfo] = useState(false)

    const showInfo = () =>{
        setInfo(!info)
    }


    return (

        <div className=" bg-slate-800 w-full min-h-screen">

        {info && <div className="w-full h-screen fixed z-1 bg-white/20 flex"> 
        <div className="w-3/4 bg-slate-800 m-auto p-4 shadow-lg">
            <p className="text-center text-white text-lg font-semibold py-2">
                ¿Querés saber hasta qué monto podes financiar?
                
            </p>
            <p className="text-center text-white py-2">
               
                Para ello tenes que conocer: 
                <li className="mt-3 my-1 italic">la tasa de interés a aplicar,</li>
                <li className="my-1 italic">la cantidad de cuotas y</li>
                <li className="my-1 italic"> el monto de cada cuota.</li> 
            </p>

            <div className="m-auto w-1/2 h-12 mt-4 p-1 flex  bg-primary rounded-lg text-center text-white" onClick={()=>showInfo()}> <div className="m-auto text-slate-800 uppercase font-bold">Ok!</div></div>

        </div>
        
        </div>}    
        
        <div className=" w-full flex flex-row justify-center items-center gap-2">
        <h1 className=" text-primary text-main text-center font-bold text-2xl my-auto" >
            Monto a Financiar
        </h1>

        <div className="w-5 h-5 text-xs rounded-full border border-primary  text-primary text-center bg-transparent my-auto" onClick={()=>showInfo()} >
            ?
        </div>
        </div>

        

        </div>
    )
}

export default Monto
