import Link from 'next/link';
import Image from 'next/image';
import { dictionary } from '@/content';

export default function ({ params }: { params: { lang: string } }) {
  return (
    <main>
      <div>
        {/* <h1>Dani Bachini.</h1> */}
        <h1>DANI BACHINI.</h1>

        <div>
          <Link href="https://github.com/danibachini">
            <Image src="/github.png" alt="logo" width="205" height="25" className="cursor-pointer w-32" priority />
          </Link>
          <Link href="https://www.linkedin.com/in/danibachini/">
            <Image src="/linkedin.png" alt="logo" width="205" height="25" className="cursor-pointer w-32" priority />
          </Link>
        </div>
      </div>
      {/* <div>
        <h1>{dictionary[params.lang]?.homeHeader}</h1>
        <p>{dictionary[params.lang]?.homeContent}</p>
      </div> */}
    </main>
  )
}
