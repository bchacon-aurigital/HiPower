"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const timelineData = [
    {
        id: "1945",
        year: "1945",
        title: "El nacimiento de una visión",
        icon: "light-bulb",
        description: "La historia de Hi Power comienza con un hombre visionario: Federico Varela Herrera. Este nació el 8 de agosto de 1945 en San Carlos de Alajuela, rodeado de árboles, cataratas y campos. Su infancia en el pueblo de San Vicente, marcada por un profundo amor por la naturaleza, sembró en él, el deseo de protegerla a lo largo de su vida.",
        animate: true
    },
    {
        id: "1993",
        year: "1993",
        title: "La inspiración en medio de una crisis energética",
        icon: "lightning",
        description: "Durante una consultoría para empresas cafetaleras y azucareras en Honduras, Federico fue testigo de una crisis energética nacional, donde hubo racionamientos de hasta 12 horas que afectaron industrias, hospitales, escuelas, comercios y a la población en general. Allí conoció los sistemas de energía alternativos, lo que despertó en él una fascinación por las energías renovables y sembró la semilla de un futuro más sostenible.",
        animate: true
    },
    {
        id: "2011",
        year: "2011",
        title: "Fundación de Hi Power",
        icon: "flag",
        description: "Con el conocimiento adquirido y el apoyo de su hijo Marco Varela, en 2011 nace Hi Power con una visión clara: Ser impulsores del cambio en el modelo energético de Costa Rica y la región. Desde entonces, la empresa ha sido pionera y ha liderado proyectos innovadores que combinan sostenibilidad, tecnología y compromiso social",
        animate: true
    },
    {
        id: "hoy",
        year: "Hoy",
        title: "Impulsando un futuro solar",
        icon: "arrow-up",
        description: "Hoy, Hi Power continúa con un propósito firme que consiste en contribuir a la sostenibilidad de nuestro planeta, reduciendo la huella de carbono de nuestra sociedad y los costos energéticos de nuestros hogares, empresas e instituciones mediante la generación de energía limpia y eficiente.",
        animate: true
    }
];

const iconComponents = {
    "light-bulb": (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 16a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" fill="currentColor" />
            <path d="M12 13V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    "lightning": (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    "flag": (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v12zm0 0v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    "arrow-up": (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
};

const TimelineItem = ({ data, index }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: false
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.2
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: index * 0.2 + 0.1
            }
        }
    };

    const lineVariants = {
        hidden: { scaleX: 0, opacity: 0 },
        visible: {
            scaleX: 1,
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: index * 0.2 + 0.05
            }
        }
    };

    return (
        <div
            className="relative py-12"
            ref={ref}
            aria-labelledby={`timeline-title-${data.id}`}
        >
            {/* Desktop layout (md and above) */}
            <div className="hidden md:flex items-center justify-center relative z-10">
                <div className="flex-1 relative">
                    {/* Left card */}
                    <motion.div
                        className="mr-10 flex justify-end"
                        variants={itemVariants}
                        initial="hidden"
                        animate={controls}
                    >
                        <div className="bg-white w-full border-4 border-[#037F3F] rounded-lg p-6 max-w-sm">
                            <p className="text-[#037F3F] font-bold text-4xl mb-1" id={`timeline-year-${data.id}`}>{data.year}</p>
                            <h3 className="text-[#037F3F] font-bold text-4xl" id={`timeline-title-${data.id}`}>{data.title}</h3>
                        </div>
                    </motion.div>

                    {/* Horizontal connector line - left */}
                    <motion.div
                        className="absolute top-1/2 right-0 w-10 h-1 bg-[#037F3F] transform -translate-y-1/2 origin-right"
                        variants={lineVariants}
                        initial="hidden"
                        animate={controls}
                    ></motion.div>
                </div>

                {/* Center icon */}
                <motion.div
                    className="w-24 h-24 rounded-full bg-white border-4 border-[#037F3F] flex items-center justify-center text-[#037F3F] z-20"
                    variants={iconVariants}
                    initial="hidden"
                    animate={controls}
                    role="img"
                    aria-label={`Ícono para ${data.title}`}
                >
                    {iconComponents[data.icon]}
                </motion.div>

                <div className="flex-1 relative">
                    {/* Horizontal connector line - right */}
                    <motion.div
                        className="absolute top-1/2 left-0 w-10 h-1 bg-[#037F3F] transform -translate-y-1/2 origin-left"
                        variants={lineVariants}
                        initial="hidden"
                        animate={controls}
                    ></motion.div>

                    {/* Right card */}
                    <motion.div
                        className="ml-10"
                        variants={itemVariants}
                        initial="hidden"
                        animate={controls}
                    >
                        <div className="bg-white border-4 border-[#037F3F] rounded-lg p-6 max-w-sm">
                            <p className="text-gray-700 text-base">{data.description}</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Mobile layout (below md) */}
            <motion.div
                className="md:hidden w-full max-w-sm mx-auto relative"
                variants={itemVariants}
                initial="hidden"
                animate={controls}
            >
                <div className="bg-white border-4 w-full border-[#037F3F] rounded-lg p-5">
                    <div className="flex items-center mb-3">
                        <p className="text-[#037F3F] font-bold text-xl mr-3">{data.year}</p>
                        <p className="text-[#037F3F] font-bold text-xl flex-1">{data.title}</p>
                    </div>
                    <p className="text-gray-700 text-sm">{data.description}</p>
                </div>
            </motion.div>
        </div>
    );
};

const Timeline = () => {
    return (
        <section
            className="px-6 md:px-8 py-8 md:py-14 max-w-screen-xl mx-auto relative overflow-hidden"
            aria-labelledby="timeline-heading"
        >

            <div className='max-w-xl mx-auto text-center mb-9'>
            <h2 className="text-3xl lg:text-[2.7rem] leading-10 font-semibold text-black mb-2">
                Nuestra Historia <br/>
                Un legado de ­
                <span className="text-[#0046AD] font-bold">
                energía limpia
                </span>
            </h2>
            <p className="text-xl text-black">
            Un sueño impulsado por la pasión por la naturaleza y la innovación en energía sustentable.
            </p>
            </div>

            <div className="relative pb-20">
                {/* Vertical line with gradient for desktop */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 z-0 hidden md:block"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(3, 127, 63, 0), rgba(3, 127, 63, 1) 10%, rgba(3, 127, 63, 1) 90%, rgba(3, 127, 63, 0) 100%)'
                    }}>
                </div>

                {/* Vertical line with gradient for mobile */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 z-0 md:hidden"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(3, 127, 63, 0), rgba(3, 127, 63, 1) 10%, rgba(3, 127, 63, 1) 90%, rgba(3, 127, 63, 0) 100%)'
                    }}>
                </div>

                {timelineData.map((item, index) => (
                    <TimelineItem key={item.id} data={item} index={index} />
                ))}
            </div>
        </section >
    );
};

export default Timeline;