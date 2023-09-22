'use client';

import { useRouter } from 'next/navigation';

export default function Arrows({
    array, 
    number
}: {
    array: string[],
    number: number,
}) {

    const router = useRouter();

    function next() {
        if (number === (array.length - 1) || !(number === 0)) {
            number--;
            router.push(`/projects/${array[number]}`)
        }
        return 
    }
    
    function previous() {
        if (number === 0 || !(number === (array.length - 1))) {
            number++;
            router.push(`/projects/${array[number]}`)
        }
        return 
    }

    return (
        <div className="flex justify-between">
            {/* previous */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="w-6 h-6 cursor-pointer hover:stroke-neutral-400" onClick={previous}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

            {/* next */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="w-6 h-6 cursor-pointer hover:stroke-neutral-400" onClick={next}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>
    )
}