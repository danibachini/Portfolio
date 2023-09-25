
import type { Metadata } from 'next'
import Image from "next/image";

interface logos {
    image: string;
    brand: string;
}

export default function skills() {

    const front:logos[] = [
        {image: '/html5.jpeg', brand: 'HTML 5'},
        {image: '/css3.jpeg', brand: 'CSS 3'},
        {image: '/js.png', brand: 'Javascript'},
        {image: '/next.png', brand: 'Next.js'},
        {image: '/ts.svg', brand: 'Typescript'},
        {image: '/react.png', brand: 'React'},
        {image: '/tailwind.png', brand: 'Tailwind'},
        {image: '/bootstrap.svg', brand: 'Bootstrap'},
    ];
    const back:logos[] = [
        {image: '/nodejs.png', brand: 'Node.js'},
        {image: '/python.jpeg', brand: 'Python'},
    ];
    const database:logos[] = [
        {image: '/mongodb.svg', brand: 'MongoDB'},
        {image: '/mysql.png', brand: 'MySQL'},
        {image: '/sqlite.png', brand: 'SQLite'},
    ];
    const version:logos[] = [
        {image: '/github.png', brand: 'Github'}, 
        {image: '/git.png', brand: 'Git'}
    ];

    return (
        <main className='grid gap-6 grid-cols-1 sm:grid-cols-2 '>
            <div className='rounded shadow-md'>
                <h1 className='text-center font-thin py-4'>Frontend</h1>
                <div className='m-6 flex flex-wrap justify-center gap-10'>
                    {front.map((logo, index) => (
                        <div className='tooltip tooltip-primary' key={index} data-tip={logo.brand}>
                            <Image
                            src={logo.image} 
                            alt="list of logos" 
                            width={80}
                            height={100}
                            className="w-auto h-16 hover:scale-110 duration-300 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="rounded shadow-md">
                <h1 className='text-center font-thin py-4'>Backend</h1>
                <div className='m-6 flex flex-wrap justify-center gap-10'>
                    {back.map((logo, index) => (
                        <div className='tooltip tooltip-primary' key={index} data-tip={logo.brand}>
                            <Image
                            src={logo.image} 
                            alt="list of logos" 
                            width={80}
                            height={100}
                            className="w-auto h-16 hover:scale-110 duration-300 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className='rounded shadow-md'>
                <h1 className='text-center font-thin py-4'>Database</h1>
                <div className='m-6 flex flex-wrap justify-center gap-10'>
                    {database.map((logo, index) => (
                        <div className='tooltip tooltip-primary' key={index} data-tip={logo.brand}>
                            <Image
                            src={logo.image} 
                            alt="list of logos" 
                            width={80}
                            height={100}
                            className="w-auto h-16 hover:scale-110 duration-300 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="rounded shadow-md">
                <h1 className='text-center font-thin py-4'>Versioning</h1>
                <div className='m-6 flex flex-wrap justify-center gap-10'>
                    {version.map((logo, index) => (
                        <div className='tooltip tooltip-primary' key={index} data-tip={logo.brand}>
                            <Image
                            src={logo.image} 
                            alt="list of logos" 
                            width={80}
                            height={100}
                            className="w-auto h-16 hover:scale-110 duration-300 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            
        </main>
    )
}
 
export const metadata: Metadata = {
  title: 'Skills',
}