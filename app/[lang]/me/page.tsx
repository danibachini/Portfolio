
import { Locale } from '@/i18n.config'
import type { Metadata } from 'next'

export default async function me ({ params: { lang } }: { params: { lang: Locale } }) {    
    return (
        <main className='grid grid-cols-1 mb-10'>
            <div className="rounded shadow-md p-6">
                {lang === 'fr' ? (
                    <div className="my-8 md:my-12">
                        <iframe
                        className="h-72 min-w-full sm:h-96"
                        src={`https://www.youtube.com/embed/oQiAopXKKe4?si=Ky9QGcdw3qw9pXZ8`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded Youtube Video"
                        />
                    </div>
                ):(
                    <div className="my-8 md:my-12">
                        <iframe
                        className="h-72 min-w-full sm:h-96"
                        src={`https://www.youtube.com/embed/QrQFIYEEdDM?si=indyBAxp4tJi247D`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded Youtube Video"
                        />
                    </div>
                )}
            </div>
        </main>
    )
}

export const metadata: Metadata = {
  title: 'Dani Bachini | About Me',
}