"use client";
import Image from "next/image";

export const dynamic = "force-static";

export default function SolarEnergySection() {
	return (
		<section className="relative w-full md:h-screen flex items-center justify-center px-6 md:px-8 py-8 md:py-14 overflow-hidden" aria-labelledby="solar-heading">
			<div className="absolute inset-0 z-0" aria-hidden="true">
				<picture>
					<source
						srcSet="/assets/homepage/mission_section.avif"
						type="image/avif"
						media="(min-width: 768px)"
					/>
					<source
						srcSet="/assets/homepage/mission_section.png"
						type="image/png"
						media="(min-width: 768px)"
					/>
					<source
						srcSet="/assets/homepage/mission_sectionM.avif"
						type="image/avif"
						media="(max-width: 767px)"
					/>
					<source
						srcSet="/assets/homepage/mission_sectionM.png"
						type="image/png"
						media="(max-width: 767px)"
					/>
					<img
						src="/assets/homepage/mission_sectionM.png"
						alt="Paneles solares en techo industrial"
						className="w-full h-full object-cover absolute inset-0"
						loading="lazy"
						decoding="async"
						width="1920"
						height="1080"
					/>
				</picture>
				<div className="absolute inset-0 bg-black bg-opacity-20"></div>
			</div>

			<div className="relative z-10 container mx-auto text-center">
				<div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-duration="800">
					<h2
						id="solar-heading"
						className="text-3xl md:text-[2.40rem] leading-tight font-bold text-white mb-4 max-w-lg mx-auto"
					>
						¿Cómo saber si tu empresa necesita energía solar?
					</h2>

					<p className="text-lg md:text-xl text-white mb-10 max-w-lg mx-auto">
						La energía solar se adapta a distintos tipos de operación. Es ideal si tu empresa:
					</p>

					<div
						className="bg-white bg-opacity-90 rounded-tl-3xl rounded-br-3xl shadow-xl p-12 md:p-20 backdrop-blur-sm"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-16">
							<div className="flex flex-col items-center">
								<div className="text-[#037F3F] mb-4" role="img" aria-label="Icono de eficiencia energética">
									<Image
										src="/assets/homepage/SolarEnergySection1.svg"
										alt="Icono de eficiencia energética"
										width={80}
										height={84}
										className="mb-4 mx-auto lg:mx-0"
									/>
								</div>
								<h3 className="text-lg font-semibold text-gray-800 mb-2">Tiene altos consumos eléctricos o picos de demanda.</h3>
							</div>

							<div className="flex flex-col items-center">
								<div className="text-[#037F3F] mb-4" role="img" aria-label="Icono de sostenibilidad">
									<Image
										src="/assets/homepage/SolarEnergySection2.svg"
										alt="Icono de sostenibilidad"
										width={80}
										height={84}
										className="mb-4 mx-auto lg:mx-0"
									/>
								</div>
								<h3 className="text-lg font-semibold text-gray-800 mb-2">Busca reducir costos operativos y dependencia de la red.</h3>
							</div>

							<div className="flex flex-col items-center">
								<div className="text-[#037F3F] mb-4" role="img" aria-label="Icono de estabilidad energética">
									<Image
										src="/assets/homepage/SolarEnergySection3.svg"
										alt="Icono de estabilidad energética"
										width={80}
										height={84}
										className="mb-4 mx-auto lg:mx-0"
									/>
								</div>
								<h3 className="text-lg font-semibold text-gray-800 mb-2">Requiere energía estable para continuidad operativa.</h3>
							</div>
						</div>
						<a
						href="https://www.hipowercr.com/servicios/"
						className="button-project"
						aria-label="Ir a servicios"
					>
						Cotizar mi proyecto
						</a>
					</div>

				</div>
			</div>
		</section>
	);
}