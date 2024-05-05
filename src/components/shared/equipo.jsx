import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import matpi from '../../assets/img6.png'
import hro from '../../assets/img4.png'
import apple from '../../assets/img3.png'

import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const equipo = () => {
    return (
        <Swiper
            id='proyect'
            spaceBetween={50}
            slidesPerView={1}
        >
            <SwiperSlide id='slider' className='flex flex-col items-center text-center gap-2 px-52 py-20 swi'>
                <h1 className='font-bold text-2xl text-black dark:text-gray-300'>Matpi</h1>
                <p className='text-black dark:text-gray-300 text-sm'>Matpi es una empresa colombiana centrada en la gastronomía, con un enfoque especial en
                    las "comidas rápidas". Además de diseñar y desarrollar su página web, Oasis también se
                    encargó de crear un panel de control (dashboard) tanto para el gerente como para otros
                    usuarios que requieran acceder a los servicios de Matpi.</p>
                <a href="" className='mt-5 mb-5 px-10 py-3 bg-[#9867E0] text-white text-xs rounded-xl border border-[#9867E0] hover:bg-transparent hover:text-[#9867E0] hover:scale-110 transition-all'>Visitar</a>
                <img src={matpi} alt="" className='rounded-3xl' />
            </SwiperSlide>
            <SwiperSlide className='flex flex-col items-center text-center gap-2 px-52 py-20 swi'>
                <h1 className='font-bold text-2xl text-black dark:text-gray-300'>Apple</h1>
                <p className=' text-sm text-black dark:text-gray-300'>
                    Apple es una empresa líder a nivel mundial en tecnología, reconocida por sus innovadores
                    productos y soluciones digitales. Como parte de su compromiso con la excelencia en la
                    experiencia del usuario, Oasis ha colaborado en el desarrollo de una página web para
                    Apple. </p>
                <a href="" className='mt-5 mb-5 px-10 py-3 bg-[#9867E0] text-white text-xs rounded-xl border border-[#9867E0] hover:bg-transparent hover:text-[#9867E0] hover:scale-110 transition-all'>Visitar</a>
                <img src={apple} alt="" className='rounded-3xl' />
            </SwiperSlide>
            <SwiperSlide className='flex flex-col items-center text-center gap-2 px-52 py-20 swi'>
                <h1 className='font-bold text-2xl text-black dark:text-gray-300'>HRO+</h1>
                <p className=' text-sm text-black dark:text-gray-300'>Esta fue una de las primeras páginas web desarrolladas por Oasis, diseñada para HRO+,
                    una
                    empresa colombiana dedicada a la preselección de candidatos. HRO+ se especializa en
                    proporcionar servicios de selección de personal para satisfacer las necesidades de
                    contratación de diversas empresas.</p>
                <a href="" className='mt-5 mb-5 px-10 py-3 bg-[#9867E0] text-white text-xs rounded-xl border border-[#9867E0] hover:bg-transparent hover:text-[#9867E0] hover:scale-110 transition-all'>Visitar</a>
                <img src={hro} alt="" className='rounded-3xl' />
            </SwiperSlide>
        </Swiper>
    );
}

export default equipo
