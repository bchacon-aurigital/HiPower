import ProyectosClientPage from './client-page';

export const metadata = {
  title: 'Sobre Nosotros | HiPower - Soluciones Energéticas Sostenibles en Costa Rica',
  description: 'Con más de 14 años de experiencia, diseñamos e instalamos proyectos solares que contribuyen a un futuro más limpio y sostenible en Costa Rica.',
  keywords: ['energía solar', 'sostenibilidad', 'proyectos solares', 'Costa Rica', 'empresa sostenible', 'energía renovable'],
  openGraph: {
    title: 'Sobre Nosotros | HiPower',
    description: 'Impulsamos el cambio hacia un futuro más limpio y sostenible. Más de 14 años diseñando, instalando y construyendo proyectos solares en Costa Rica.',
    images: [
      {
        url: './HeroBG.png',
        width: 1200,
        height: 630,
        alt: 'HiPower - Soluciones energéticas sostenibles en Costa Rica',
      },
    ],
  }
};

export default function AboutUsPage() {
  return <ProyectosClientPage />;
} 