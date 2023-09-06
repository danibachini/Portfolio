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

        <body className={inter.className} suppressHydrationWarning={true}> 
      {/* suppressHydrationWarning to prevent error message due to extensions on the browser */}
          
          <div className='flex flex-col px-6 md:max-w-5xl my-4 ml-auto mr-auto'>
            <div className='flex justify-between'>
              <h1 className='mx-2'>DANIELLE BACHINI.</h1>
              <div className='flex'>
                <Link href="https://github.com/danibachini">
                  <Image src="/github.png" alt="Github's icon" width="25" height="25" className="cursor-pointer mx-2 hover:scale-110 duration-300"  />
                </Link>
                <Link href="https://www.linkedin.com/in/danibachini/">
                  <Image src="/linkedin.png" alt="Linkedin's icon" width="25" height="25" className="cursor-pointer mx-2 hover:scale-110 duration-300"  />
                </Link>
              </div>
            </div>
          </div>

          <div className='bg-neutral-100 py-10 items-center'>
            <div className='md:max-w-5xl flex flex-col ml-auto mr-auto px-6 fill'>
              <p className='mx-2 text-lg'>FULL-STACK DEVELOPER</p>
            </div>
          </div> 

          <div className="relative flex flex-col min-h-screen md:max-w-5xl ml-auto mr-auto px-6 fill">
            <div className="container flex-1 prose lg:prose-lg mx-2 my-10">
              {children}
            </div>
          </div>

        </body>
      </html>
    </>
  );
}