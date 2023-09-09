interface DictionaryEntry {
  homeHeader: string;
  homeContent: string;
  aboutHeader: string;
  aboutContent: string;
}

export const dictionary: Record<string, DictionaryEntry> = {
  en: {
    homeHeader: 'FULL-STACK DEVELOPER',
    homeContent: 'Welcome to the jungle',
    aboutHeader: 'About Me',
    aboutContent: 'Here is some information about me. English is my primary language.'
  },
  fr: {
    homeHeader: 'DÉVELOPPEUSE FULL-STACK',
    homeContent: 'oui oui baguette',
    aboutHeader: 'Sobre Yo',
    aboutContent: 'Aqui tenemos un poco informacion sobre yo. Hablo espanol tambien.'
  }
}