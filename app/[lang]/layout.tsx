import '../globals.css'
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { defaultLocale } from '@/middleware';
import Link from 'next/link';
import Image from 'next/image';


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
      
        <head>
          <link rel="icon" href="/favicon.png" sizes="any" />
        </head>

        <body className={inter.className}>
          
          {/* <div className='justify-between items-center my-4'> */}
          <div className='container justify-between lg:max-w-7xl ml-auto mr-auto fill my-4'>
            {/* <div className='lg:max-w-7xl flex flex-col container ml-auto mr-auto fill'> */}
            <div className='flex'>
              <h1 className='mx-2'>DANI BACHINI.</h1>
            </div>
            <div className='flex'>
              <Link href="https://github.com/danibachini">
                <Image src="/github.png" alt="Github's icon" width="25" height="25" className="cursor-pointer mx-2"  />
              </Link>
              <Link href="https://www.linkedin.com/in/danibachini/">
                <Image src="/linkedin.png" alt="Linkedin's icon" width="25" height="25" className="cursor-pointer mx-2"  />
              </Link>
            </div>
            {/* </div> */}
          </div>

          <div className='bg-neutral-100 py-10 items-center'>
            <div className='lg:max-w-7xl flex flex-col ml-auto mr-auto px-6 fill'>
              <p className='mx-2'>PORTFOLIO</p>
            </div>
          </div> 

          <div className="relative flex flex-col min-h-screen lg:max-w-7xl ml-auto mr-auto px-6 fill">
            <div className="container flex-1 prose lg:prose-lg">
              {children}
            </div>
          </div>

        </body>
      </html>
    </>
  );
}