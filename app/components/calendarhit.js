"use client";

export default function Calendarhit() {
    return (
        <>
            <div id="Calendarhit" className="bg-[#131313]">
                <div className="text-center text-white py-6 md:py-16 px-4" data-aos="fade-right">
                    <h1 className="text-3xl md:text-4xl font-cp-regular font-[800] tracking-[0.4rem] uppercase">
                        Agendá tu visita
                    </h1>
                    <p className="mt-4 text-md md:text-xl font-cp-regular font-[600] tracking-widest max-w-xl mx-auto">
                        Elegí el servicio que querés, el día que te queda mejor y listo. En minutos tenés tu lugar reservado en Abraham Studio.
                    </p>
                </div>
                <section className="relative flex items-center justify-center w-full h-[50rem] bg-black mb-8" data-aos="fade-right">
                    <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1/4">
                        <img
                            src="/assets/BGcalendarhit1.png"
                            alt="Left background"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="relative z-10 w-[90%] sm:w-[50%] mx-auto bg-white shadow-lg rounded-2xl" data-aos="fade-up">
                        <iframe
                            src="https://app.simplymeet.me/abrahamstudio?is_widget=1&view=compact"
                            style={{
                                width: "100%",
                            }}
                            className="w-full h-[50rem] rounded-lg"
                            frameBorder="1"
                            scrolling="yes"
                        ></iframe>
                    </div>

                    <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/4" data-aos="fade-left">
                        <img
                            src="/assets/BGcalendarhit2.png" 
                            alt="Right background"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>
            </div>
        </>
    );
}
