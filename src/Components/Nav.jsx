import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import elements from '../assets/data/elements';

function Nav() {

const [showNav, setShowNav] = useState(false);

const showNavBar = () =>{
    setShowNav(true)
}

    return (
      <>
        <section className="hidden sm:flex justify-end  bg-slate-800/95 p-6 shadow-xl drop-shadow-lg ">
          <nav className=" text-primary flex text-lg justify-end w-full">
            

            <div className=" text-primary flex text-lg">
            {elements.map((i) => (
              <h3 key={i.key} className="mx-4 h-full">
                <Link to={i.link}>{i.titulo}</Link>
              </h3>
            ))}
            </div>
          </nav>
        </section>

        <section className="sm:hidden justify-end bg-slate-800 p-2 text-right">

                <button className="bg-primary text-slate-800 p-2 rounded-lg" onClick={e=>showNavBar()}>¿Qué querés calcular?</button>

          { showNav &&
          <div className="fixed z-20 top-0 bottom-0 left-0 right-0 w-full h-screen bg-slate-500/40" onClick={()=>setShowNav(false)}>
          <nav className=" text-primary flex flex-col text-xl font-bold text-center bg-slate-800  py-8 pt-16 shadow-xl drop-shadow-lg">
            {elements.map((i) => (
              <h3 key={i.key} className="py-2" >
                <Link to={i.link}>{i.titulo}</Link>
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
