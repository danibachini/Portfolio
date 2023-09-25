
import type { Metadata } from 'next'
import { dictionary } from '@/content';

export default async function  history ({ params }: { params: { lang: string } }) {
    return (
        <main className='grid gap-6 grid-cols-1 sm:grid-cols-2 '>
            <div className='rounded shadow-md'>
                <h2 className='text-center font-thin py-4'>{dictionary[params.lang]?.historyHeaderWork}</h2>
                <div className='m-6 justify-start gap-10'>
                    {dictionary[params.lang]?.historyContentWork.map((hist, index) => (
                        <div key={index} className='my-6'>
                            <h3 className='text-lg font-medium'>{hist.role}</h3>
                            <h4 className=''>{hist.place}</h4>
                            <p className='text-xs'>{hist.dates}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='rounded shadow-md'>
                <h2 className='text-center font-thin py-4'>{dictionary[params.lang]?.historyHeaderStudy}</h2>
                <div className='m-6 justify-start gap-10'>
                    {dictionary[params.lang]?.historyContentStudy.map((hist, index) => (
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