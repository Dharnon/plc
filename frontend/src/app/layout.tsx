import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Horno Industrial - Banco de Pruebas',
  description: 'Sistema de monitorización de horno industrial',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
