
import type { Metadata } from 'next'
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary'
import Form from '../components/ContactForm';

export default async function Contact ({ params: { lang } }: { params: { lang: Locale } }) {

    const { page } = await getDictionary(lang);
    const currentLang: string = lang;

    return(
        <main className='grid grid-cols-1 mb-10'>
            <Form params={{ page: page, currentLang: currentLang }}  />
        </main>
    )
}

export const metadata: Metadata = {
    title: 'Dani Bachini | Contact',
}