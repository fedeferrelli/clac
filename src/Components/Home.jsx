import React from 'react';

import { useNavigate } from 'react-router';

import Image from '../assets/undraw_investment_data_re_sh9x.svg';

import elements from '../assets/data/elements.js'

function Home() {

    const navigate = useNavigate();

    return (
      <main className="bg-secondary min-h-screen flex flex-col">
        <div className="w-full h-[400px] relative  bg-[url('https://como-funciona.com/wp-content/uploads/2020/01/c%C3%B3mo-funcionan-las-finanzas-800x400.png')]">
          <div className="w-full h-full sm:bg-gradient-to-r bg-gradient-to-b from-primary via-yellow-500/90   to-yellow-500/90 sm:to-yellow-500/50  absolute"></div>

          <section className="absolute z-10  w-full h-full flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 ml-2 my-auto text-center">
              <h1 className="text-4xl sm:text-5xl text-secondary font-bold  p-8">
                Calculadora de
                <span className="block"> Operaciones de Crédito </span>
              </h1>

              <h3 className="text-2xl text-secondary">
                ¿Necesitas saber las condiciones de un crédito?
              </h3>
              <h3 className="text-2xl text-secondary">
                ¡Acá tenés tu solución!
              </h3>

              <button
                className="bg-secondary px-6 rounded-lg text-primary mt-4 outline-none hover:bg-slate-900 duration-300 h-12"
                onClick={() => navigate(elements.link)}
              >
                Quiero Calcular
              </button>
            </div>
          </section>
        </div>

        <section className="w-full h-full flex flex-col sm:flex-row py-12 m-auto">
          <div className="w-full text-white text-2xl text-center sm:order-2 pb-12">
            <img className="w-11/12 sm:w-4/6 m-auto  " src={Image} />
          </div>

          <div className="m-auto w-full font-light text-white px-3 sm:px-12 sm:order-1 justify-center">
            <h1 className=" text-center text-2xl">
              Una operación de credito típica se comopone de cuatro elementos
            </h1>

            <section className="flex flex-wrap justify-center gap-3 py-8">
              <div className="text-primary border border-primary px-3 py-2 rounded-lg w-auto">
                {" "}
                Tasa de interés{" "}
              </div>
              <div className="text-primary border border-primary px-3 py-2 rounded-lg w-auto">
                {" "}
                Monto Financiado{" "}
              </div>
              <div className="text-primary border border-primary px-3 py-2 rounded-lg w-auto">
                {" "}
                Periodos{" "}
              </div>
              <div className="text-primary border border-primary px-3 py-2 rounded-lg w-auto">
                {" "}
                Cuota a Pagar{" "}
              </div>
            </section>

            <h1 className=" m-auto text-center text-2xl bold">
              Conociendo tres de estos componentes podés calcular el cuarto.
            </h1>
          </div>
        </section>

        <section className="w-11/12 flex flex-col justify-center m-auto">
     
<h1 className=" m-auto text-center text-2xl bold text-white mb-4">Qué vas a Calcular?</h1>

<div className="h-full w-full flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:px-12 pb-12 m-auto ">

          {elements.map((item) => (
            <div key={item.key} className=" my-2 sm:max-w-[300px] min-w-[250px] border border-slate-700 bg-primary rounded-lg p-6 text-secondary shadow-slate-700 shadow-md hover:-translate-y-1 duration-300 flex flex-col justyfy-center">
              <h1 className="text-center text-2xl font-bold">
                {item.titulo}
              </h1>

              <div className="text-center py-2 text-lg">
              {item.bajada}
                <div className="my-4">
                  <div className="mt-3 my-1 italic">{item.otros_elementos[0]},</div>
                  <div className="my-1 italic">{item.otros_elementos[1]} y</div>
                  <div className="my-1 italic"> {item.otros_elementos[2]}.</div>
                </div>
              </div>
              <button
                className="m-auto w-3/4  bg-secondary px-6 rounded-lg text-primary mt-4 outline-none hover:bg-slate-900 duration-300 h-12"
                onClick={() => navigate(item.link)}
              >
                Quiero Calcular
              </button>
            </div>
          ))}
          </div>
        </section>
      </main>
    );
}

export default Home
