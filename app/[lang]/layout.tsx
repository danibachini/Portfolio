
import '../globals.css'
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/app/[lang]/components/Navbar';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: ReactNode;
  params: { lang: Locale };
}) {

  const { page } = await getDictionary(lang);

  return (
    <>
      <html lang={ lang } className='bg-white'>
      
        <head>
          <link rel="icon" href="/favicon.png" sizes="any" />
          <meta name="robots" content="noindex" />
        </head>

        <body className={inter.className} suppressHydrationWarning={true}> 
        {/* suppressHydrationWarning to prevent error message due to extensions on the browser */}
          
          <div className='flex flex-col px-6 md:max-w-5xl my-4 mx-auto'>
            <div className='flex justify-between'>
              <a href="/">
                <h1 className='mx-2'>DANIELLE BACHINI.</h1>
              </a>
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
              <h1 className='mx-2 text-lg'>{page.homeHeader}</h1>
            </div>
          </div> 

          <Navbar/>

          <div className='min-h-screen md:max-w-5xl mx-auto px-6 '>
            {children}
          </div>

        </body>
      </html>
    </>
  );
}