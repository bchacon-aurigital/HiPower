"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = ({ isOpen, onClose }) => {
  const [hubspotLoaded, setHubspotLoaded] = useState(false);
  const [hubspotLoading, setHubspotLoading] = useState(false);
  
  const createForm = () => {
    const container = document.getElementById('hubspot-form-container');
    if (container && window.hbspt) {
      // Clear any existing form
      container.innerHTML = '';

      window.hbspt.forms.create({
        portalId: "7941218",
        formId: "1513627b-0a5d-4f12-bd35-c7f935c1eca4",
        region: "na1",
        target: "#hubspot-form-container"
      });
    }
  };

  const loadHubSpot = () => {
    if (hubspotLoading) return;

    // If script already loaded, just create form
    if (hubspotLoaded || window.hbspt) {
      // Use setTimeout to ensure the container is in the DOM
      setTimeout(() => createForm(), 0);
      return;
    }

    setHubspotLoading(true);

    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.fetchPriority = 'high';
    script.onload = () => {
      setHubspotLoaded(true);
      setHubspotLoading(false);
      createForm();
    };
    script.onerror = () => {
      setHubspotLoading(false);
      console.warn('Error loading HubSpot script');
    };

    document.head.appendChild(script);
  };

  // Preload HubSpot script in idle time so the form is instant when the modal opens
  useEffect(() => {
    const preload = () => {
      if (window.hbspt || hubspotLoaded || hubspotLoading) return;
      setHubspotLoading(true);
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.async = true;
      script.onload = () => {
        setHubspotLoaded(true);
        setHubspotLoading(false);
      };
      script.onerror = () => setHubspotLoading(false);
      document.head.appendChild(script);
    };

    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(preload, { timeout: 4000 });
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(preload, 3000);
      return () => clearTimeout(id);
    }
  }, []);

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
            className="fixed inset-0 z-50 bg-white "
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sliderVariants}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            style={{
              height: '100vh',
              width: '100vw',
              overflow: 'hidden'
            }}
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 text-[#002D6A] hover:text-[#037F3F] transition-colors bg-white rounded-full p-2 shadow-md"
              aria-label="Cerrar ventana de contacto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            {/* Scroll container */}
            <div 
              className='bg-white'
              style={{
                height: '100vh',
                width: '100vw',
                overflowY: 'auto',
                overflowX: 'hidden',
                WebkitOverflowScrolling: 'touch',
                padding: '60px 20px 40px 20px'
              }}
            >
              {/* Form container */}
              <div 
                style={{
                  width: '100%',
                  maxWidth: '900px',
                  margin: '0 auto',
                  minHeight: 'calc(100vh - 100px)'
                }}
              >
                <div 
                  style={{
                    border: '2px solid #000000',
                    borderTopRightRadius: '24px',
                    backgroundColor: 'white',
                    padding: '32px 24px'
                  }}
                >
                  <div id="hubspot-form-container"></div>
                </div>
              </div>
            </div>
            
            {/* Global styles for HubSpot form */}
            <style dangerouslySetInnerHTML={{
              __html: `
                /* Reset HubSpot iframe styles */
                #hubspot-form-container iframe {
                  width: 100% !important;
                  min-width: 100% !important;
                  max-width: 100% !important;
                  border: none !important;
                  margin: 0 !important;
                  padding: 0 !important;
                }
                
                /* Ensure form fields don't overflow */
                .hs-form {
                  width: 100% !important;
                  max-width: 100% !important;
                  box-sizing: border-box !important;
                }
                
                .hs-form-field {
                  width: 100% !important;
                  max-width: 100% !important;
                  box-sizing: border-box !important;
                  margin-bottom: 16px !important;
                }
                
                .hs-input {
                  width: 100% !important;
                  max-width: 100% !important;
                  box-sizing: border-box !important;
                }
                
                .hs-fieldtype-select select {
                  width: 100% !important;
                  max-width: 100% !important;
                  box-sizing: border-box !important;
                }
                
                /* Mobile specific adjustments */
                @media (max-width: 768px) {
                  #hubspot-form-container iframe {
                    width: 100% !important;
                  }
                  
                  .hs-form {
                    width: 100% !important;
                  }
                  
                  .hs-form-field {
                    width: 100% !important;
                  }
                  
                  .hs-input {
                    width: 100% !important;
                    font-size: 16px !important;
                  }
                }
              `
            }} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactModal;