"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Script from 'next/script';

const ContactModal = ({ isOpen, onClose }) => {
  const [hubspotLoaded, setHubspotLoaded] = useState(false);
  
  useEffect(() => {
    if (isOpen && hubspotLoaded && window.hbspt) {
      window.hbspt.forms.create({
        portalId: "7941218",
        formId: "5b4eddbf-abed-4e8a-90f5-17ad796c587e",
        region: "na1",
        target: "#hubspot-form-container"
      });
    }
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, hubspotLoaded]);

  const handleHubspotLoad = () => {
    setHubspotLoaded(true);
    if (isOpen && window.hbspt) {
      window.hbspt.forms.create({
        portalId: "7941218",
        formId: "5b4eddbf-abed-4e8a-90f5-17ad796c587e",
        region: "na1",
        target: "#hubspot-form-container"
      });
    }
  };

  const sliderVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: { 
        type: 'tween', 
        ease: "easeInOut", 
        duration: 0.5 
      }
    },
    exit: { 
      x: '100%',
      transition: { 
        type: 'tween', 
        ease: "easeInOut", 
        duration: 0.5 
      }
    }
  };

  return (
    <>
      <Script 
        src="//js.hsforms.net/forms/embed/v2.js" 
        strategy="lazyOnload"
        onLoad={handleHubspotLoad}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 overflow-auto"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sliderVariants}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <div className="z-10 absolute top-4 right-4 md:top-10 md:left-10">             
                <button 
                  onClick={onClose}
                  className="text-[#002D6A] hover:text-[#037F3F] transition-colors bg-white rounded-full"
                  aria-label="Cerrar ventana de contacto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-12 md:h-12">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              
              <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full md:h-auto md:max-w-7xl overflow-auto md:overflow-visible">
                <div className="bg-gradient-to-br from-[#037F3F] to-[#002D6A] text-white p-4 md:p-6 lg:p-8 flex flex-col rounded-bl-none md:rounded-bl-3xl">
                  <h3 className="text-2xl md:text-3xl font-light mb-2">Escríbenos</h3>
                  <p className="text-sm md:text-md font-thin mb-4">Elegí la opción que mejor se ajuste a tu consulta:</p>
                  
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <p className="text-sm md:text-md mb-1 font-light">Teléfono:</p>
                      <a 
                        href="tel:+50640004990" 
                        className="flex items-center justify-center w-full bg-transparent border border-white py-2 md:py-3 px-3 md:px-4 rounded-br-xl rounded-tl-xl transition-colors hover:bg-white hover:bg-opacity-10 font-light text-sm md:text-base"
                        aria-label="Llamar al teléfono principal"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        (+506) 4000-4990
                      </a>
                    </div>

                    <div>
                    <p className="text-sm md:text-md mb-1 font-light">General:</p>
                      <a 
                        href="mailto:solar@hipowercr.com" 
                        className="flex items-center justify-center w-full bg-transparent border border-white py-2 md:py-3 px-3 md:px-4 rounded-br-xl rounded-tl-xl transition-colors hover:bg-white hover:bg-opacity-10 font-light text-sm md:text-base"
                        aria-label="Enviar email al correo general"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        solar@hipowercr.com
                      </a>
                    </div>

                    <div>
                    <p className="text-sm md:text-md mb-1 font-light">Ventas y asesoría:</p>
                      <a 
                        href="mailto:asesor@hipowercr.com" 
                        className="flex items-center justify-center w-full bg-transparent border border-white py-2 md:py-3 px-3 md:px-4 rounded-br-xl rounded-tl-xl transition-colors hover:bg-white hover:bg-opacity-10 font-light text-sm md:text-base"
                        aria-label="Enviar email a ventas y asesoría"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        asesor@hipowercr.com
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-6">
                    <p className="text-xs md:text-sm mb-2 md:mb-4">Redes Sociales:</p>
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                      <a 
                        href="https://www.instagram.com/hipower.cr/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-transparent border border-white py-2 md:py-4 px-2 md:px-4 rounded-br-xl rounded-tl-xl transition-colors hover:bg-white hover:bg-opacity-10 font-light text-sm md:text-base"
                        aria-label="Ir a nuestro Instagram"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="md:w-5 md:h-5">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        <span className="ml-1 md:ml-2 text-base md:text-xl">Instagram</span>
                      </a>
                      
                      <a 
                        href="https://www.facebook.com/hipowercr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-transparent border border-white py-2 md:py-4 px-2 md:px-4 rounded-br-xl rounded-tl-xl transition-colors hover:bg-white hover:bg-opacity-10 font-light text-sm md:text-base"
                        aria-label="Ir a nuestro Facebook"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="md:w-5 md:h-5">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                        <span className="ml-1 md:ml-2 text-base md:text-xl">Facebook</span>
                      </a>
                      
                      <a 
                        href="https://www.linkedin.com/company/hipowercr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-transparent border border-white py-2 md:py-4 px-2 md:px-4 rounded-br-xl rounded-tl-xl transition-colors hover:bg-white hover:bg-opacity-10 font-light text-sm md:text-base"
                        aria-label="Ir a nuestro LinkedIn"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="md:w-5 md:h-5">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <span className="ml-1 md:ml-2 text-base md:text-xl">LinkedIn</span>
                      </a>
                      
                      <a 
                        href="https://www.youtube.com/@hipowercr/videos" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-transparent border border-white py-2 md:py-4 px-2 md:px-4 rounded-br-xl rounded-tl-xl transition-colors hover:bg-white hover:bg-opacity-10 font-light text-sm md:text-base"
                        aria-label="Ir a nuestro canal de YouTube"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="md:w-5 md:h-5">
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                        </svg>
                        <span className="ml-1 md:ml-2 text-base md:text-xl">YouTube</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 lg:p-8 overflow-auto border-2 border-[#000000] rounded-tr-none md:rounded-tr-3xl h-[700px] md:h-auto "> 
                  <div id="hubspot-form-container" className="hubspot-form min-h-[350px]">
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactModal;