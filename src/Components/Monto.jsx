import React, {useState} from 'react'


function Monto() {

    const [info, setInfo] = useState(false)

    const [i, setI] = useState(0.001)
    const [va, setVA] = useState(1000)
    const [c, setC] = useState(100)
    const [n, setN] = useState(12)
    const [x, setX] = useState(0)

    const showInfo = () =>{
        setInfo(!info)
    }



    return (
      <div className=" bg-slate-800 w-full min-h-screen">
        {info && (
          <div className="w-full h-screen fixed z-1 bg-white/20 flex">
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
            <div className="my-5 mx-3 rounded-lg relative h-10 border border-primary">
              <label id='tasa' className="absolute -top-4 left-2 text-primary bg-slate-800 z-10 px-1" >Tasa</label>

              <input className="bg-slate-800 text-primary rounded-lg h-full w-full outline-none px-4" type="number" name="tasa" />
            </div>

            <div className="my-5 mx-3 rounded-lg relative h-10 border border-primary">
              <label id='periodos' className="absolute -top-4 left-2 text-primary bg-slate-800 z-10 px-1" >Periodos</label>

              <input className="bg-slate-800 text-primary rounded-lg h-full w-full outline-none px-4" type="number" name="periodos" />
            </div>

            <div className="my-5 mx-3 rounded-lg relative h-10 border border-primary">
              <label id='cuota' className="absolute -top-4 left-2 text-primary bg-slate-800 z-10 px-1" >Cuota a Pagar</label>

              <input className="bg-slate-800 text-primary rounded-lg h-full w-full outline-none px-4" type="number" name="cuota" />
            </div>

            {/*  <input type="submit" value="Submit" /> */}
          </form>
        </div>

      </div>
    );
}

export default Monto
