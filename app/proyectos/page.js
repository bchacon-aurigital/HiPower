import ProyectosClientPage from './client-page';

export const metadata = {
  title: 'Proyectos de Energía Solar | HiPower - Soluciones Renovables en Costa Rica',
  description: 'Descubre nuestros proyectos de energía solar y almacenamiento en Costa Rica. Implementamos soluciones sostenibles para hogares, empresas e industrias.',
  keywords: ['proyectos solares', 'energía renovable', 'paneles solares', 'microrredes', 'almacenamiento de energía', 'Costa Rica'],
  openGraph: {
    title: 'Proyectos de Energía Solar | HiPower',
    description: 'Descubre nuestros proyectos de energía solar y almacenamiento en Costa Rica',
    images: [
      {
        url: './HeroBG.png',
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