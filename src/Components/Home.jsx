import React from 'react';

import Image from '../assets/bg_white.png'

function Home() {

    return (

        <main className="bg-secondary min-h-screen">

        <div className="w-full h-[400px] relative  bg-[url('https://como-funciona.com/wp-content/uploads/2020/01/c%C3%B3mo-funcionan-las-finanzas-800x400.png')]">
         <div className="w-full h-full bg-yellow-500/80 bg-gradient-to-r from-yellow-500  absolute"></div>       

<section className="absolute z-10 border border-red-500 w-full h-full flex flex-col sm:flex-row justify-center">


<h1 className="text-5xl text-white font-bold  w-1/2 border border-green-600 m-auto">Calculadora</h1>

<h1 className="text-4xl text-gray-700 font-bold uppercase w-1/2 border border-orange-600 m-auto">Calculadora</h1>


</section>




        </div>

        </main>


    )
}

export default Home
