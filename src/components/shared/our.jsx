import React from 'react'

import forma from "../../assets/forma.png"
import deyber from "../../assets/profile4.png"
import kalet from "../../assets/yo.png"
import juan from "../../assets/profile2.png"
import tomas from "../../assets/profile.png"

import campana from "../../assets/campana.png"

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const our = () => {
    return <div className='mt-20'>
        <div
            style={{
                height: '150px',
                overflow: 'hidden'
            }}
        >
            <svg
                preserveAspectRatio="none"
                style={{
                    height: '100%',
                    width: '100%'
                }}
                viewBox="0 0 500 150"
            >
                <path
                    d="M0.00,50.10 C150.00,150.33 349.20,-50.10 500.00,50.10 L500.00,150.33 L0.00,150.33 Z"
                    style={{
                        stroke: 'none'
                    }}
                    className='forma'
                />
            </svg>
        </div>
        <div className="container-our">
            <h1 className='text-center font-bold text-white text-2xl dark:text-gray-300'>Conoce nuestro <span className='text-[#9867E0]'>Equipo</span></h1>
            <p className='text-center text-sm text-white dark:text-gray-300 px-20 mb-10 textpour'>Reunimos a un grupo de profesionales apasionados y dedicados que trabajan en conjunto para lograr nuestros objetivos compartidos</p>
            <div className="content-our">
                <div className="our flex flex-col gap-10 items-center rounded-xl hover:-translate-y-3 transition-all bg-white dark:bg-transparent dark:border-2 dark:border-white">
                    <img src={deyber} alt="" className='w-24 rounded-full' />
                    <p className='text-xs  dark:text-gray-200'><span className='text-sm font-bold'>Deiber Cardenas:</span> Se trata de un ingeniero en software altamente capacitado, posee un profundo conocimiento en el desarrollo del backend, incluyendo tecnologías como Node.js, Django y Spring Boot, entre otros.</p>
                    <a href="" className='text-xs py-3 px-10 bg-[#9867E0] text-white rounded-xl hover:bg-[#b584ff]'>+ Info</a>
                </div>
                <div className="our flex flex-col gap-10 items-center rounded-xl hover:-translate-y-3 transition-all bg-white dark:bg-transparent dark:border-2 dark:border-white">
                    <img src={kalet} alt="" className='w-24 rounded-full' />
                    <p className='text-xs dark:text-gray-200'><span className='text-sm font-bold'>Kalet Josue:</span> Este profesional se destaca en el desarrollo front-end y las interfaces de usuario. Su experiencia incluye un dominio sólido de HTML, CSS y JavaScript, ademas de manejar frameworks como React, Angular y Vue.js.</p>
                    <a href="" className='text-xs py-3 px-10 bg-[#9867E0] text-white rounded-xl hover:bg-[#b584ff]'>+ Info</a>
                </div>
                <div className="our flex flex-col gap-10 items-center rounded-xl hover:-translate-y-3 transition-all bg-white dark:bg-transparent dark:border-2 dark:border-white">
                    <img src={tomas} alt="" className='w-24 rounded-full' />
                    <p className='text-xs dark:text-gray-200'><span className='text-sm font-bold'>Tomas Vargas:</span> Este es nuestro gerente, un líder experimentado en la gestión, con un historial probado de éxito en la dirección estratégica y operativa. Su enfoque se centra en la creación de un entorno de trabajo colaborativo.</p>
                    <a href="" className='text-xs py-3 px-10 bg-[#9867E0] text-white rounded-xl hover:bg-[#b584ff]'>+ Info</a>
                </div>
                <div className="our flex flex-col gap-10 items-center rounded-xl hover:-translate-y-3 transition-all bg-white dark:bg-transparent dark:border-2 dark:border-white">
                    <img src={juan} alt="" className='w-24 rounded-full' />
                    <p className='text-xs dark:text-gray-200'><span className='text-sm font-bold'>Jose Luis:</span> Ingeniero con un profundo dominio en la infraestructura de red. Sus habilidades abarcan tecnologías como Cisco, Juniper y AWS. Cuenta con experiencia significativa en la configuración y gestión de servidores.</p>
                    <a href="" className='text-xs py-3 px-10 bg-[#9867E0] text-white rounded-xl hover:bg-[#b584ff]'>+ Info</a>
                </div>
            </div>
            <div className="head" id="inicio">
                <div className="top-head flex items-center py-10 px-44 gap-20">
                    <div className="text-head flex flex-col gap-1">
                        <h3 className="text-xs text-white dark:text-gray-300">HAZ CRECER TU HUELLA DIGITAL</h3>
                        <h1 className="text-4xl title-oas text-white dark:text-gray-300">Transforma tu EXITO</h1>
                        <p className="text-oas text-white dark:text-gray-300">Descubre cómo Oasis, líder indiscutible en desarrollo web, te ofrece estrategias de marketing innovadoras y soluciones completamente personalizadas. Transforma tu presencia en línea en una verdadera historia de éxito. ¡No esperes más! Ponte en contacto con nosotros hoy mismo.</p>
                    </div>
                    <img src={campana} alt="" className=" w-52" />
                </div>
            </div>

            <footer className="footer">
                <div className="container2">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Oasis</h4>
                            <ul>
                                <li><a href="#container">Inicio</a></li>
                                <li><a href="#container2">Sobre nosotros</a></li>
                                <li><a href="#porta">Portafolio</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Necesitas Ayuda</h4>
                            <ul>
                                <li>+57 313 857 79 80</li>
                                <li>+57 322 810 46 36</li>
                                <li>+57 311 284 34 02</li>
                                <li>+57 324 619 78 80</li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Tienda online</h4>
                            <ul>
                                <li><a href="#container">Inicio</a></li>
                                <li><a href="#produ">Servicios</a></li>
                                <li><a href="#our2">Nuestro Equipo</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Mas informacion</h4>
                            <div className="social-links">
                                <a href="https://facebook.com/" target="_blank"><FaFacebookF className='w-full h-full p-3 rounded-full' /></a>
                                <a href="https://twitter.com/home" target="_blank"><FaTwitter className='w-full h-full p-3 rounded-full' /></a>
                                <a href="https://www.instagram.com/" target="_blank"><AiFillInstagram className='w-full h-full p-3 rounded-full' /></a>
                                <a href="https://web.whatsapp.com/" target="_blank"><IoLogoWhatsapp className='w-full h-full p-3 rounded-full' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="copyright">
                Copyright © 2024 Oasis. All Rights Reserved.
            </div>
        </div>
    </div>
}

export default our
