import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Nav() {

const links = [
    {text: 'Inicio', link:'/', key:1},
    {text: 'Tasa', link:'/tir', key: 2},
    {text: 'Monto a Financiar', link:'/monto-a-financiar', key: 3},
    {text: 'Cuota a Pagar', link:'/cuota-a-pagar', key:4},
    {text: 'Periodos', link:'/periodos', key:5},
    ,
];

const [showNav, setShowNav] = useState(false);

const showNavBar = () =>{
    setShowNav(true)
}


    return (
      <>
        <section className="hidden sm:flex justify-end  bg-slate-800/95 p-6 shadow-xl drop-shadow-lg ">
          <nav className=" text-primary flex text-lg justify-between w-full">
            <div className="text-xl font-extrabold italic">( 1+i )</div>

            <div className=" text-primary flex text-lg">
            {links.map((i) => (
              <h3 key={i.key} className="mx-4 h-full">
                <Link to={i.link}>{i.text}</Link>
              </h3>
            ))}
            </div>
          </nav>
        </section>

        <section className="sm:hidden justify-end bg-slate-800 p-2 text-right">

                <button className="bg-primary text-slate-800 p-2 rounded-lg" onClick={e=>showNavBar()}>¿Qué querés calcular?</button>

          { showNav &&
          <div className="fixed z-10 top-0 left-0 right-0 w-full h-screen bg-slate-500/40" onClick={()=>setShowNav(false)}>
          <nav className=" text-primary flex flex-col text-xl font-bold text-center bg-slate-800  py-8 pt-16 shadow-xl drop-shadow-lg">
            {links.map((i) => (
              <h3 key={i.key} className="py-2" >
                <Link to={i.link}>{i.text}</Link>
              </h3>
            ))}
          </nav>
          </div>
          }      

         
        </section>


      </>
    );
}

export default Nav
