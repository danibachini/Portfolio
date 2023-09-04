interface DictionaryEntry {
  homeHeader: string
  homeContent: string
  aboutHeader: string
  aboutContent: string
}
  
export const dictionary: Record<string, DictionaryEntry> = {
  en: {
    homeHeader: "english hakuna ?",
    homeContent: "Welcome to the jungle",
    aboutHeader: "About Me",
    aboutContent: "Here is some information about me. English is my primary language."
  },
  fr: {
    homeHeader: "hakune en français",
    homeContent: "oui oui baguette",
    aboutHeader: "Sobre Yo",
    aboutContent: "Aqui tenemos un poco informacion sobre yo. Hablo espanol tambien."
  }
}