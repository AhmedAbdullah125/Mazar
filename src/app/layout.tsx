//Edited date :14/10/2024
//change Main layout structure
import type { Metadata } from 'next';
import './globals.css';
import './video-react.css';
import Header from '@/components/header/Header';
import Footer from '@/components/home/Footer';
import '../style/main.css';
// import { Navigation } from 'lucide-react';
import '@fortawesome/fontawesome-free/css/all.min.css'


export const metadata: Metadata = {
  title: 'Mazar',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id='root'>
      <body className="w-full" suppressHydrationWarning={true}>
        <Header />
        <>{children}</>
        <Footer /> 
      </body>
    </html>
  );
}
