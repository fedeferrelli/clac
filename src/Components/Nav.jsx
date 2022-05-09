import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Nav() {

const links = [
    {text: 'Inicio', link:'/', key:1 },
    {text: 'Monto a Financiar', link:'/monto-a-financiar', key:2 },
    {text: 'Cuota a Pagar', link:'/cuota-a-pagar', key:3 },
];

const [showNav, setShowNav] = useState(false);

const showNavBar = () =>{
    setShowNav(true)
}


    return (
      <>
        <section className="hidden sm:flex justify-end bg-slate-800/95 p-6 shadow-xl drop-shadow-lg ">
          <nav className=" text-primary flex text-lg">
            {links.map((i) => (
              <h3 key={i.key} className="mx-4 h-full">
                <Link to={i.link}>{i.text}</Link>
              </h3>
            ))}
          </nav>
        </section>

        <section className="sm:hidden justify-end bg-slate-800 p-2 text-right">

                <button className="bg-primary text-slate-800 p-2 rounded-lg" onClick={e=>showNavBar()}>¿Qué querés calcular?</button>

          { showNav &&
          <div className="fixed z-10 top-0 left-0 right-0 w-full h-screen bg-white/20" onClick={()=>setShowNav(false)}>
          <nav className=" text-primary flex flex-col text-xl text-center bg-slate-800  py-8 pt-16 shadow-xl drop-shadow-lg rounded-b-lg">
            {links.map((i) => (
              <h3 key={i.key} className="py-1" >
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
