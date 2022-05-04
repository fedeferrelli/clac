import React, {useState} from 'react'


function Monto() {

    const [info, setInfo] = useState(false)
    const [showResult, setShowResult] = useState(false)

    const [interes, setInteres] = useState()
    const [va, setVA] = useState()
    const [cuota, setCuota] = useState()
    const [periodos, setPeriodos] = useState()
   


    const showInfo = () =>{
        setInfo(!info)
    }

    const calcular = () =>{
        let i = interes/100;
        let c = cuota;
        let n = periodos;
        let valorActual = (c/i)*(1-(1/((1+i)**n)));

        setVA(valorActual)

        setShowResult(true)
        
       
    }



    return (
      <div className=" bg-slate-800 w-full min-h-screen">
        {info && (
          <div className="w-full h-screen fixed z-10 bg-white/20 flex">
            <div className="w-5/6 bg-slate-800 m-auto p-4 shadow-lg">
              <p className="text-center text-white text-xl font-semibold py-2">
                ¿Querés saber hasta qué monto podes financiar?
              </p>
              <p className="text-center text-white py-2 text-lg">
                Para ello tenes que conocer:
                <li className="mt-3 my-1 italic">
                  la tasa de interés a aplicar,
                </li>
                <li className="my-1 italic">la cantidad de cuotas y</li>
                <li className="my-1 italic"> el monto de cada cuota.</li>
              </p>

              <div
                className="m-auto w-1/2 h-12 mt-4 p-1 flex  bg-primary rounded-lg text-center text-white"
                onClick={() => showInfo()}
              >
                {" "}
                <div className="m-auto text-slate-800 uppercase font-bold text-lg">
                  Ok!
                </div>
              </div>
            </div>
          </div>
        )}

        <div className=" w-full flex flex-row justify-center items-center gap-2">
          <h1 className=" text-primary text-main text-center font-bold text-3xl my-auto">
            Monto a Financiar
          </h1>

          <div
            className="w-5 h-5 text-sm rounded-full border border-primary  text-primary text-center bg-transparent my-auto"
            onClick={() => showInfo()}
          >
            ?
          </div>
        </div>

        <div className="flex flex-col w-full my-6">
          <form className="flex flex-col ">
            <div className="my-5 mx-3 rounded-lg relative h-12 border-2 border-primary">
              <label
                id="tasa"
                className="absolute -top-4 left-2 text-primary bg-slate-800 px-1"
              >
                Tasa
              </label>

              <input
                className="bg-slate-800 text-primary rounded-lg h-full w-full outline-none px-4 text-lg"
                type="number"
                name="tasa"
                onChange={(e) => setInteres(e.target.value)}
              />
            </div>

            <div className="my-5 mx-3 rounded-lg relative h-12 border-2 border-primary">
              <label
                id="periodos"
                className="absolute -top-4 left-2 text-primary bg-slate-800 px-1"
              >
                Periodos
              </label>

              <input
                className="bg-slate-800 text-primary rounded-lg h-full w-full outline-none px-4 text-lg"
                type="number"
                name="periodos"
                onChange={(e) => setPeriodos(e.target.value)}
              />
            </div>

            <div className="my-5 mx-3 rounded-lg relative h-12 border-2 border-primary">
              <label
                id="cuota"
                className="absolute -top-4 left-2 text-primary bg-slate-800 px-1"
              >
                Cuota a Pagar
              </label>

              <input
                className="bg-slate-800 text-primary rounded-lg h-full w-full outline-none px-4 text-lg"
                type="number"
                name="cuota"
                onChange={(e) => setCuota(e.target.value)}
              />
            </div>

            <div
              className="m-auto w-1/2 h-12 mt-4 p-1 flex  bg-primary rounded-lg text-center text-white"
              onClick={() => calcular()}
            >
              {" "}
              <div className="m-auto text-slate-800 uppercase font-bold text-lg">
                Calcular
              </div>
            </div>
          </form>
        </div>


        {showResult && 
            <div className="m-8 rounded-lg p-4 text-white text-lg text-center border border-primary">
            
            Pagando {periodos} cuotas de {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(cuota)} al {interes}% mensual podés financiar <span className="text-xl font-bold text-primary">${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(va)}</span>
            
            </div>}
      </div>
    );
}

export default Monto
