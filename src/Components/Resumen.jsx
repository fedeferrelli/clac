import React from 'react'

function Resumen({va, cuota, periodos, interes, interesTemp}) {

    console.log(va)

    const TEA = ((1+(interes/12 * interesTemp)/100)**12)-1
    console.log(TEA)
    return (

        <main className="bg-slate-800 pb-10 ">
            <div className="w-5/6 sm:w-1/3 m-auto border border-primary rounded-lg overflow-hidden">
        <table className="w-full mt-0 table-auto  bg-slate-800  border-primary rounded-sm p-2 m-auto text-white">
        <thead>
          <tr className=" bg-primary text-slate-800 p-2 rounded-2xl h-10 text-xl">
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
            <td className="p-1">{Math.round(interes * interesTemp * 10/12) / 10}%</td>
            
          </tr>
      
          <tr className="border border-primary hover:bg-primary cursor-pointer text-lg hover:text-slate-800 text-center">
            <td className="p-1">Tasa Nominal Anual</td>
            <td className="p-1">{Math.round(interes * interesTemp * 10) / 10}%</td>
            
          </tr>
      
          <tr className="border border-primary hover:bg-primary cursor-pointer text-lg hover:text-slate-800 text-center">
            <td className="p-1">Tasa Efectiva Anual</td>
            <td className="p-1">{Math.round(TEA*1000)/10}%</td>
            
          </tr>

          <tr className="border border-primary hover:bg-primary cursor-pointer text-lg hover:text-slate-800 text-center">
            <td className="p-1">Monto a Devolver</td>
            <td className="p-1">{new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "ARS",
                        }).format(cuota*periodos)}</td>
            
          </tr>

          <tr className="border border-primary hover:bg-primary cursor-pointer hover:text-slate-800 text-center">
            <td className="p-1">Intereses a Pagar</td>
            <td className="p-1">{new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "ARS",
                        }).format(cuota*periodos-va)}</td>
            
          </tr>
      
        </tbody>
      </table>
      </div>
      </main>
    )
}

export default Resumen