"use client"; // Necesario si usas Next.js App Router
import React, { useEffect } from "react";

const Form = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    const interval = setInterval(() => {
      if (window.hbspt) {
        clearInterval(interval);
        window.hbspt.forms.create({
          region: "na1",
          portalId: "7941218",
          formId: "5b4eddbf-abed-4e8a-90f5-17ad796c587e",
          target: "#hubspotForm",
        });
      }
    }, 100);
  }, []);

  return (
    <div className="w-full mx-auto max-w-7xl px-10  py-14">
      <h2 className='text-3xl md:text-4xl text-center mx-auto font-roboto font-bold text-[#002D6A] mb-8 max-w-[60%]'>¡Comienza tu asesoría energética!</h2>
      <div id="hubspotForm" className="relative w-full h-auto"></div>
    </div>
  );
};

export default Form;
