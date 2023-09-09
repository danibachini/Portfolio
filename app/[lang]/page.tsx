
import { dictionary } from '@/content';

export default function ({ params }: { params: { lang: string } }) {
  return (
    <main className='flex flex-wrap flex-grow justify-center md:justify-start gap-4 md:gap-6'>
      {/* <div className='min-w-full md:min-w-0 md:w-64'> */}
      <div className='mx-auto md:min-w-0 md:w-64 bg-slate-400'>
        <p>column 1</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
      </div>
      <div className='mx-auto md:min-w-0 md:w-64 bg-slate-400'>
        <p>column 2</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
      </div>
      <div className='mx-auto md:min-w-0 md:w-64 bg-slate-400'>
        <p>column 3</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
      </div>
      <div className='mx-auto md:min-w-0 md:w-64 bg-slate-400'>
        <p>column 2</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
      </div>
      <div className='mx-auto md:min-w-0 md:w-64 bg-slate-400'>
        <p>column 3</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
      </div>
    </main>
  )
}
