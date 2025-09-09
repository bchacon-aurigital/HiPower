"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
	useEffect(() => {
		AOS.init({
			once: true,
			offset: 80,
			duration: 700,
			easing: "ease-out-cubic",
		});
		// Refrescar en caso de cambios dinámicos
		AOS.refresh();
	}, []);

	return children;
} 