import React from "react";
import megafono from "../../assets/megafono.png"
import { FaCaretDown } from "react-icons/fa";

const head = () => {
    return <div className="head" id="inicio2">
        <div className="top-head flex items-center py-10 px-44 gap-20">
            <img src={megafono} alt="" className=" w-52" />
            <div className="text-head flex flex-col gap-1">
                <h3 className="text-xs text-black dark:text-gray-300">POTENCIA TU EMPRESA</h3>
                <h1 className="text-4xl title-oas text-black dark:text-gray-300">Llama <span className="text-[#9867E0] dark:text-[#3f1f70]">AHORA</span></h1>
                <p className="text-oas text-black dark:text-gray-300">Potencia tu presencia en línea con Oasis. Descubre soluciones web líderes y personalizadas. ¡Convierte tu visión digital en realidad ahora! Contáctanos para empezar tu viaje hacia el éxito en la web.</p>
            </div>
        </div>
    </div>
}

export default head
