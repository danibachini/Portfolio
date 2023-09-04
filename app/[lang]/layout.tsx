import '../globals.css'
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { defaultLocale } from '@/middleware';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  return (
    <>
      <html lang={params.lang ?? defaultLocale} className='bg-white'>
      
        {/*   CHECK ICON LATER  */}
        {/* <head>
          <link rel="icon" href="/favicon.png" sizes="any" />
        </head> */}


        <body className={inter.className}>
          
          <div className="relative flex flex-col min-h-screen lg:max-w-7xl ml-auto mr-auto px-6 fill">
            <div className="container flex-1 py-8 prose lg:prose-lg">
              {children}
            </div>
          </div>
        </body>
      </html>
    </>
  );
}