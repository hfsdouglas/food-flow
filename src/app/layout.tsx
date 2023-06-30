import './globals.css';

export const metadata = {
  title: 'FoodFlow',
  description: 'Sistema de PDV e delivery para pequenos restaurantes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
