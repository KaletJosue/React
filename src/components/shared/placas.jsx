import React from "react";
import { BsFillFlagFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { FaTheaterMasks } from "react-icons/fa";

const placas = () => {
    return <div className="con-plac mt-10 py-10 px-20 flex justify-between gap-5 flex-wrap" id="servicio">
        <div className="carta hover:scale-95">
            <BsFillFlagFill className="text-[#1b0059] bg-[#9876E0] w-14 h-14 p-5 rounded-xl"/>
            <h3 className=" dark:text-gray-300">Soluciones</h3>
            <p className=" dark:text-gray-300">Oasis ofrece desarrollos web personalizados, centrados en las necesidades de cada cliente. Nuestro equipo crea soluciones visualmente impactantes y altamente funcionales.</p>
        </div>
        <div className="carta hover:scale-95">
            <FaGraduationCap className="text-[#1b0059] bg-[#9876E0] w-14 h-14 p-5 rounded-xl" />
            <h3 className=" dark:text-gray-300">Experiencia</h3>
            <p className=" dark:text-gray-300">Como líder en el campo del desarrollo web, Oasis se enorgullece de su compromiso inquebrantable con la calidad en cada aspecto de nuestros servicios.</p>
        </div>
        <div className="carta hover:scale-95">
            <FaTheaterMasks className="text-[#1b0059] bg-[#9876E0] w-14 h-14 p-5 rounded-xl" />
            <h3 className=" dark:text-gray-300">Transformacion</h3>
            <p className=" dark:text-gray-300">Al optar por Oasis, te embarcarás en un viaje de transformación digital. Nuestro enfoque integral no solo se centra en el desarrollo web, sino también en la creación de experiencias significativas para nuestros clientes.</p>
        </div>
    </div>
}

export default placas