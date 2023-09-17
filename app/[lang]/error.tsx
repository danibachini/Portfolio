
'use client';
 
import { dictionary } from '@/content';
import { useEffect } from 'react'
 
export default function Error({
  params,
  error,
  reset,
}: {
  params: { lang: string }
  error: Error
  reset: () => void
}) {
  useEffect(() => {
      console.error(error)
  }, [error])
 
  return (
    <div className='grid grid-cols-1 justify-items-center mt-5 rounded shadow-md p-16'>
      {/* <h2>Something went wrong!</h2> */}
      <h2>{dictionary[params.lang]?.contactEmailSent} </h2>
      <button
        className='my-6 btn bg-black rounded-none text-slate-100 hover:bg-slate-50 
        border hover:border-black hover:text-black font-light btn-sm '
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <div className='text-center mt-20 text-neutral-400 text-sm'>
        <p>If the error persists, please, let me know.</p>
        <p>You can reach me via the <a 
          href="/contact" 
          className='text-neutral-600 underline underline-offset-2'
          >
            Contact page
          </a> or send me a direct message on <a 
          href="https://www.linkedin.com/in/danibachini/" 
          className='text-neutral-600 underline underline-offset-2'
          target="_blank"
          >
            Linkedin
          </a>
        </p>
      </div>
    </div>
  )
}