import React from 'react'

function Resumen({va, cuota, periodos, interes, interesTemp=12}) {

    const TEA = ((1+(interes/12 * interesTemp)/100)**12)-1

    return (

        <div className="bg-slate-800 pt-3">
            <div className="w-11/12 sm:w-1/3 m-auto border border-primary rounded-lg overflow-hidden">
        <table className="w-full mt-0 table-auto  bg-slate-800  border-primary rounded-sm p-2 m-auto text-white">
        <thead>
          <tr className=" bg-primary text-slate-800 p-2 rounded-2xl h-10 text-2xl sm:text-xl">
            <th colSpan='2' >Resumen</th>
            
            
          </tr>
        </thead>
        <tbody >
          <tr className="border border-primary hover:bg-primary cursor-pointer text-lg hover:text-slate-900 text-center">
            <td className="p-1">Monto a Financiar</td>
            <td className="p-1">{new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "ARS",
                        }).format(va)}</td>
            
          </tr>
          
          <tr className="border border-primary hover:bg-primary cursor-pointer text-lg hover:text-slate-800 text-center">
            <td className="p-1">Cuota a Pagar</td>
            <td className="p-1">{new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "ARS",
                        }).format(cuota)}</td>
            
          </tr>
      
          <tr className="border border-primary hover:bg-primary cursor-pointer text-lg hover:text-slate-800 text-center">
            <td className="p-1">Cantidad de Cuotas</td>
            <td className="p-1">{periodos}</td>
            
          </tr>
      
          <tr className="border border-primary hover:bg-primary cursor-pointer text-lg hover:text-slate-800 text-center">
            <td className="p-1">Tasa Mensual</td>
            <td className="p-1">{Math.round(interes * interesTemp * 100/12) / 100}%</td>
            
          </tr>
      
          <tr className="border border-primary hover:bg-primary cursor-pointer text-lg hover:text-slate-800 text-center">
            <td className="p-1">Tasa Nominal Anual</td>
            <td className="p-1">{Math.round(interes * interesTemp * 100) / 100}%</td>
            
          </tr>
      
          <tr className="border border-primary hover:bg-primary cursor-pointer text-lg hover:text-slate-800 text-center">
            <td className="p-1">Tasa Efectiva Anual</td>
            <td className="p-1">{Math.round(TEA*10000)/100}%</td>
            
          </tr>

          <tr className="border border-primary hover:bg-primary cursor-pointer text-lg hover:text-slate-800 text-center">
            <td className="p-1">Monto a Devolver</td>
            <td className="p-1">{new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "ARS",
                        }).format(cuota*periodos)}</td>
            
          </tr>

          <tr className="border border-primary hover:bg-primary cursor-pointer text-lg hover:text-slate-800 text-center">
            <td className="p-1">Intereses a Pagar</td>
            <td className="p-1">{new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "ARS",
                        }).format(cuota*periodos-va)}</td>
            
          </tr>
      
        </tbody>
      </table>
      </div>
      <main className="w-full bg-secondary flex justify-center mt-6">

            <div className="text-primary text-sm m-auto py-4" >  Hecho con
             <span className="text-xl inline mx-1"><a href="https://es.wikipedia.org/wiki/Rock_and_roll" target="blank" rel="noopener noreferrer">🎸</a></span> 
             por 
             
             <span className="text-md inline mx-1"><a href="https://portfolio-fedeferrelli.vercel.app/" target="blank" rel="noopener noreferrer">Fede Mazza</a></span> 
             </div>
            
        </main>
      </div>
    )
}

export default Resumen
