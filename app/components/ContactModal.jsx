"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = ({ isOpen, onClose }) => {
  const [hubspotLoaded, setHubspotLoaded] = useState(false);
  const [hubspotLoading, setHubspotLoading] = useState(false);
  
  const loadHubSpot = () => {
    if (hubspotLoaded || hubspotLoading) return;
    
    setHubspotLoading(true);
    
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = () => {
      setHubspotLoaded(true);
      setHubspotLoading(false);
      
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "7941218",
          formId: "1513627b-0a5d-4f12-bd35-c7f935c1eca4",
          region: "na1",
          target: "#hubspot-form-container"
        });
      }
    };
    script.onerror = () => {
      setHubspotLoading(false);
      console.warn('Error loading HubSpot script');
    };
    
    document.head.appendChild(script);
  };
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      loadHubSpot();
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

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
              
              
              <div className="items-center w-full h-full md:h-auto md:max-w-4xl overflow-auto md:overflow-visible"> 
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