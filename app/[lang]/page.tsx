
import { dictionary } from '@/content';

export default function ({ params }: { params: { lang: string } }) {
  return (
    <main>
      <div>
        {/* <h1>{dictionary[params.lang]?.homeHeader}</h1> */}
        <p>{dictionary[params.lang]?.homeContent}</p>
      </div>
    </main>
  )
}
