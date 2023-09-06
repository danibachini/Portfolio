
import { dictionary } from '@/content';
import Navbar from '@/components/Navbar';

export default function ({ params }: { params: { lang: string } }) {
  return (
    <main>

      <Navbar/>
      
      <div>
        <h1>{dictionary[params.lang]?.homeHeader}</h1>
        <p>{dictionary[params.lang]?.homeContent}</p>
      </div>
    </main>
  )
}
