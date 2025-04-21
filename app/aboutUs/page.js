import ProyectosClientPage from './client-page';

export const metadata = {
  title: 'Proyectos de Energía Solar | HiPower - Soluciones Renovables en Costa Rica',
  description: 'Servicios especializados en energía solar y almacenamiento con más de 14 años de experiencia. Proyectos innovadores, rentables y con tecnología avanzada.',
  keywords: ['proyectos solares', 'energía renovable', 'paneles solares', 'microrredes', 'almacenamiento de energía', 'Costa Rica'],
  openGraph: {
    title: 'Servicios | HiPower',
    description: 'Servicios especializados en energía solar y almacenamiento con más de 14 años de experiencia. Proyectos innovadores, rentables y con tecnología avanzada.',
    images: [
      {
        url: '/HeroBG.png',
        width: 1200,
        height: 630,
        alt: 'Proyectos de energía solar en Costa Rica',
      },
    ],
  }
};

export default function ProyectosPage() {
  return <ProyectosClientPage />;
} 