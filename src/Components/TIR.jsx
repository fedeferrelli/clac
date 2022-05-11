import React, { useState, useEffect } from "react";
import Resumen from "./Resumen";

function TIR() {
  const [info, setInfo] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const [interes, setInteres] = useState("");
 
  const [va, setVA] = useState("");
  const [cuota, setCuota] = useState("");
  const [periodos, setPeriodos] = useState("");

/* Para mobile: toggle para mostrar explicacion */
  const showInfo = () => {
    setInfo(!info);
  };

  
 /* Calcula el resultado de la pantalla */ 
  const calcular = () => {
   
    let v = va
    let c = cuota;
    let n = periodos;

    var tasaMin=-0.1
    var tasaMax = 2;
    var i = (tasaMin+tasaMax)/2
    var vaPrueba = c / i * (1 - 1 / (1 + i) ** n);
    var vaMax = c / tasaMin * (1 - 1 / (1 + tasaMin) ** n);
    var vaMin = c / tasaMax * (1 - 1 / (1 + tasaMax) ** n);
   
    var error = Math.abs(va-vaPrueba);

    if(vaMin>va  || vaMax<va ){

      setShowResult(false)}

      else{

        setShowResult(true)
        while(error>0.0000000001){

          if (vaPrueba<va)
                { tasaMax=i}
          else  {tasaMin=i }

        i = (tasaMin+tasaMax)/2

        vaPrueba = c / i * (1 - 1 / (1 + i) ** n);
        error = Math.abs(va-vaPrueba);
        setInteres(i)
       }
    } 
    
  };

  useEffect(() => {
     calcular(); 
  }, [va, cuota, periodos]);



  return (
    <div className=" bg-slate-800 w-full py-4 sm:py-8">
      {/* Para mobile: explicación de los requisitos para utilizar esta pantalla */
        info && (
        <div className="w-full h-screen fixed z-10 bg-slate-700/70 flex">
          <div className="w-11/12 bg-slate-800 m-auto p-4 shadow-lg">
            <p className="text-center text-white text-xl font-semibold py-2">
              ¿Querés saber la tasa de la operación?
            </p>
            <p className="text-center text-white py-2 text-lg">
              Para ello tenes que conocer:
              <li className="mt-3 my-1 italic">
                el monto financiado,
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

      <div className="h-screen w-full mx-auto flex ">

        <main className="sm:flex sm:flex-col w-full ">

{/* Titulo */}
          <div className=" w-full flex flex-row justify-center items-center gap-2">
            <h1 className=" text-primary text-main text-center font-bold text-3xl my-auto">
              Tasa de Ineterés
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
            <div className="sm:flex sm:flex-row  sm:w-1/2 ">
              <div className="w-full bg-slate-700 m-auto p-4 hidden sm:flex sm:flex-col shadow-lg">
                <p className="text-center text-white text-xl font-semibold py-2">
                ¿Querés saber la tasa de la operación?
                </p>
                <p className="text-center text-white py-2 text-lg">
                  Para ello tenes que conocer:
                  <li className="mt-3 my-1 italic">
                  el monto financiado,
                  </li>
                  <li className="my-1 italic">la cantidad de cuotas y</li>
                  <li className="my-1 italic"> el monto de cada cuota.</li>
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


                <div className="my-5 rounded-lg relative h-12 sm:h-10 sm:border border border-primary">
                  <label
                    id="monto"
                    className="absolute -top-4 left-2 text-primary bg-slate-800 px-1"
                  >
                    Monto a Financiar
                  </label>

                  <input
                    className="bg-slate-800 text-primary rounded-lg h-full w-full outline-none px-4 text-lg"
                    type="number"
                    name="monto"
                    onChange={(e) => setVA(e.target.value)}
                  />
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
              </form>
            </div>
          </section>

{/* Muestra el resultado de la pantalla y el resumen */}
          {cuota !== "" && va !== "" && periodos !== "" && (

showResult ? 
            <>
              <div className="w-11/12 mx-auto my-2 rounded-lg p-4 text-white text-lg text-center border border-primary sm:w-1/3 sm:mx-auto">
                Pagando {periodos} cuotas de{" "}
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "ARS",
                }).format(cuota)}{" "}
                para financiar {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "ARS",
                }).format(va)}
                es necesario cobrar una tasa de 
                <span className="text-xl font-bold text-primary block mt-2">
                  
                  {Math.round(interes*1000) / 10}% mensual
                </span>
                <span className="text-xl font-bold text-primary block mt-2">
                  
                  {Math.round(interes* 12000) / 10}% nominal anual
                </span>

                <span className="text-xl font-bold text-primary block mt-2">
                  
                  {Math.round((((1+interes)**12)-1)*1000)/10 }% efectiva anual
                </span>
              </div>

              <Resumen
                va={va}
                cuota={cuota}
                periodos={periodos}
                interes={interes*100}
                
              />
            </>
            :
            <div className="w-11/12 mx-auto my-2 p-4 text-white text-sm text-center font-light italic sm:w-1/3 sm:mx-auto">
                Con los datos ingresados la TIR está fuera del rango de cálculo ( -10% / 200% mensual)
              </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default TIR;
