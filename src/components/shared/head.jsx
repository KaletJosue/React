import React from "react";
import corona from "../../assets/corona.png"
import { FaCaretDown } from "react-icons/fa";

const head = () => {
    return <div className="head" id="inicio">
        <div className="top-head flex items-center py-10 px-44 gap-20">
            <div className="text-head flex flex-col gap-1">
                <h3 className="text-xs text-black dark:text-gray-300">CREA TU SITIO WEB AHORA</h3>
                <h1 className="text-4xl text-black dark:text-gray-300 title-oas">Somos OASIS</h1>
                <p className="text-oas text-black dark:text-gray-300">Oasis es una empresa especializada en el desarrollo web a medida para otras empresas que buscan destacarse en el mundo digital. Fundada con una visión de proporcionar soluciones de vanguardia para las necesidades digitales de sus clientes.</p>
            </div>
            <img src={corona} alt="" className=" w-52" />
        </div>
        <div className="bottom-head flex justify-center">
            <a href="#slider">
                <FaCaretDown className=" dark:text-[#f1e8ff] dark:bg-[#34106a] dark:hover:bg-[#170a2c] text-[#9867E0] bg-[#d4b7ff] w-14 h-14 p-4 rounded-full hover:bg-[#9867E0] hover:text-[#d4b7ff] transition-all cursor-pointer" />
            </a>
        </div>
    </div>
}

export default head
