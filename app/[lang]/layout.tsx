import '../globals.css'
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { defaultLocale } from '@/middleware';
import { dictionary } from '@/content';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';


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

        <body className={inter.className} suppressHydrationWarning={true}> 
        {/* suppressHydrationWarning to prevent error message due to extensions on the browser */}
          
          <div className='flex flex-col px-6 md:max-w-5xl my-4 mx-auto'>
            <div className='flex justify-between'>
              <h1 className='mx-2'>DANIELLE BACHINI.</h1>
              <div className='flex'>
                <Link href="https://github.com/danibachini" target="_blank">
                  <Image src="/github.png" alt="Github's icon" width="25" height="25" className="cursor-pointer mx-2 hover:scale-110 duration-300"/>
                </Link>
                <Link href="https://www.linkedin.com/in/danibachini/" target="_blank">
                  <Image src="/linkedin.png" alt="Linkedin's icon" width="25" height="25" className="cursor-pointer mx-2 hover:scale-110 duration-300"/>
                </Link>
              </div>
            </div>
          </div>

          <div className='bg-neutral-100 py-10 items-center'>
            <div className='md:max-w-5xl flex flex-col mx-auto px-6 fill'>
              <p className='mx-2 text-lg'>{dictionary[params.lang]?.homeHeader}</p>
            </div>
          </div> 

          <Navbar/>

          <div className='min-h-screen md:max-w-5xl mx-auto px-6 '>
          {/* <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center'> */}
            {children}
          </div>

        </body>
      </html>
    </>
  );
}