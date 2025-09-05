'use client';

import { useState, useEffect, useCallback } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const debounce = useCallback((func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  const checkIsMobile = useCallback(() => {
    if (typeof window === 'undefined') return false;
    
    const userAgent = navigator.userAgent;
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;
    const isMobileUA = mobileRegex.test(userAgent);
    const isMobileWidth = window.innerWidth <= 768;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    return isMobileUA || (isMobileWidth && isTouchDevice);
  }, []);

  useEffect(() => {
    setIsMobile(checkIsMobile());

    const debouncedResize = debounce(() => {
      setIsMobile(checkIsMobile());
    }, 150);

    window.addEventListener('resize', debouncedResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [checkIsMobile, debounce]);

  return isMobile;
}; 