
import type { Metadata } from 'next'
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export default async function  history ({ params: { lang } }: { params: { lang: Locale } }) {

    const { page } = await getDictionary(lang);

    return (
        <main className='grid gap-6 grid-cols-1 sm:grid-cols-2 '>
            <div className='rounded shadow-md'>
                <h2 className='text-center font-thin py-4'>{page.historyHeaderWork}</h2>
                <div className='m-6 justify-start gap-10'>
                    {page.historyContentWork.map((hist:any, index:any) => (
                        <div key={index} className='my-6'>
                            <h3 className='text-lg font-medium'>{hist.role}</h3>
                            <h4 className=''>{hist.place}</h4>
                            <p className='text-xs'>{hist.dates}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='rounded shadow-md'>
                <h2 className='text-center font-thin py-4'>{page?.historyHeaderStudy}</h2>
                <div className='m-6 justify-start gap-10'>
                    {page?.historyContentStudy.map((hist:any, index:any) => (
                        <div key={index} className='my-6'>
                            <h3 className='text-lg font-medium'>{hist.role}</h3>
                            <h4 className=''>{hist.place}</h4>
                            <p className='text-xs'>{hist.dates}</p>
                        </div>
                ))}
                </div>
            </div>
        </main>
    )
}

export const metadata: Metadata = {
  title: 'History',
}