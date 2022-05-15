import React, { useState, useEffect } from "react";
import Resumen from "./Resumen";

function Cuota() {
  const [info, setInfo] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const [interes, setInteres] = useState("");
  const [interesTemp, setInteresTemp] = useState(12);
  const [va, setVA] = useState("");
  const [cuota, setCuota] = useState(12);
  const [periodos, setPeriodos] = useState("");

/* Para mobile: toggle para mostrar explicacion */
  const showInfo = () => {
    setInfo(!info);
  };

  
 /* Calcula el resultado de la pantalla */ 
  const calcular = () => {
    let i = interes / 100;
    let v = va;
    let n = periodos;
    let m = interesTemp;
    let cuotaAPagar = (v * (i / (12 / m))) / (1 - 1 / (1 + i / (12 / m)) ** n);
    setCuota(cuotaAPagar);
    setShowResult(true);
  };

  useEffect(() => {
    calcular();
  }, [interesTemp, interes, va, periodos]);



  return (
    <div className=" bg-slate-800 w-full border border-red-800 bg-orange-200 min-h-screen h-auto py-4 sm:py-8">
      {/* Para mobile: explicación de los requisitos para utilizar esta pantalla */
        info && (
        <div className="w-full h-screen fixed top-0 z-10 bg-slate-700/70 flex">
          <div className="w-11/12 bg-slate-800 m-auto p-4 shadow-lg">
            <p className="text-center text-white text-xl font-semibold py-2">
              ¿Querés saber hasta qué cuota hay que pagar?
            </p>
            <p className="text-center text-white py-2 text-lg">
              Para ello tenes que conocer:
              <li className="mt-3 my-1 italic">
                la tasa de interés a aplicar,
              </li>
              <li className="my-1 italic">la cantidad de cuotas y</li>
              <li className="my-1 italic"> el monto financiado.</li>
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

      <div className="h-screen w-full mx-auto flex ">

        <main className="sm:flex sm:flex-col w-full ">

{/* Titulo */}
          <div className=" w-full flex flex-row justify-center items-center gap-2">
            <h1 className=" text-primary text-main text-center font-bold text-3xl my-auto">
              Cuota a Pagar
            </h1>

            <div
              className="w-5 h-5 text-sm rounded-full border border-primary  text-primary text-center bg-transparent my-auto sm:hidden"
              onClick={() => showInfo()}
            >
              ?
            </div>
          </div>

          <section className="sm:flex sm:flex-row sm:w-3/4 sm:mx-auto sm:pt-4 sm:gap-8">

{/* Para laptop: explicación de los requisitos para utilizar esta pantalla */}
            <div className="sm:flex sm:flex-row  sm:w-1/2">
              <div className="w-full bg-slate-700 m-auto  p-4 hidden sm:flex sm:flex-col shadow-lg">
                <p className="text-center text-white text-xl font-semibold py-2">
                  ¿Querés saber qué cuota hay que pagar?
                </p>
                <p className="text-center text-white py-2 text-lg">
                  Para ello tenes que conocer:
                  <li className="mt-3 my-1 italic">
                    la tasa de interés a aplicar,
                  </li>
                  <li className="my-1 italic">la cantidad de cuotas y</li>
                  <li className="my-1 italic"> el monto financiado.</li>
                </p>

                <div
                  className="m-auto w-1/2 h-12 mt-4 p-1 flex  bg-primary rounded-lg text-center text-white sm:hidden"
                  onClick={() => showInfo()}
                >
                  {" "}
                  <div className="m-auto text-slate-800 uppercase font-bold text-lg">
                    Ok!
                  </div>
                </div>
              </div>
            </div>

{/* Formulario */}
            <div className="flex flex-col mx-auto w-11/12 my-6 sm:w-1/2">
              <form className="flex flex-col w-full m-auto">
                <div className="flex flex-row gap-5">
                  <div className="my-5 rounded-lg relative h-12 sm:h-10 sm:border border border-primary w-1/2">
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

                  <div className="my-5 rounded-lg relative h-12 sm:h-10 sm:border border border-primary w-1/2 flex flex-row justify-center items-center overflow-hidden">
                    <div
                      className={
                        interesTemp === 12
                          ? "w-1/2 h-full flex justify-center text-center cursor-pointer bg-primary text-slate-800"
                          : "w-1/2 h-full flex justify-center text-center cursor-pointer bg-slate-800 text-primary "
                      }
                      onClick={() => setInteresTemp(12)}
                    >
                      <span className="m-auto"> mensual</span>
                    </div>

                    <div
                      className={
                        interesTemp === 1
                          ? "w-1/2 h-full flex justify-center text-center bg-primary text-slate-800 cursor-pointer"
                          : "w-1/2 h-full flex justify-center text-center cursor-pointer bg-slate-800 text-primary "
                      }
                      onClick={() => setInteresTemp(1)}
                    >
                      <span className="m-auto"> anual</span>
                    </div>
                  </div>
                </div>

                <div className="my-5 rounded-lg relative h-12 sm:h-10 sm:border border border-primary">
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

                <div className="my-5 rounded-lg relative h-12 sm:h-10 sm:border border border-primary">
                  <label
                    id="va"
                    className="absolute -top-4 left-2 text-primary bg-slate-800 px-1"
                  >
                    Monto Financiado
                  </label>

                  <input
                    className="bg-slate-800 text-primary rounded-lg h-full w-full outline-none px-4 text-lg"
                    type="number"
                    name="va"
                    onChange={(e) => setVA(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </section>

{/* Muestra el resultado de la pantalla y el resumen */}
          {va !== "" && interes !== "" && periodos !== "" && (
            <>
              <div className="w-11/12 mx-auto my-2 rounded-lg p-4 text-white text-lg text-center border border-primary sm:w-1/3 sm:mx-auto">
                
                Para financiar $
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "ARS",
                  }).format(va)} al {Math.round(interes * interesTemp * 10) / 10}% anual en {periodos} plazos hay que pagar cuotas de
                <span className="text-xl font-bold text-primary block mt-2">
                  $
                  {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "ARS",
                }).format(cuota)}
                </span>
                
              </div>

              <Resumen
                va={va}
                cuota={cuota}
                periodos={periodos}
                interes={interes}
                interesTemp={interesTemp}
              />
            </>
          )}
        </main>
      </div>
      <main className="w-full bg-secondary flex justify-center bg-orange-500">

</main>
    </div>
  );
}

export default Cuota;
