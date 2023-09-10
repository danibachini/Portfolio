
import { dictionary } from '@/content';

export default function ({ params }: { params: { lang: string } }) {
  return (
    <main className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center'>
      <div className='h-64 bg-slate-400'>
        <p>column 1</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
      </div>
      <div className='h-64 bg-slate-400'>
        <p>column 2</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
      </div>
      <div className='h-64 bg-slate-400'>
        <p>column 3</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
      </div>
      <div className='h-64 bg-slate-400'>
        <p>column 4</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
      </div>
      <div className='h-64 bg-slate-400'>
        <p>column 5</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
        <p>{dictionary[params.lang]?.homeContent}</p>
      </div>
    </main>
  )
}
