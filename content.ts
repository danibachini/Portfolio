interface DictionaryEntry {
  homeHeader: string;
  navbarProjects: string;
  navbarSkills: string;
  navbarHistory: string;
  navbarContact: string;
  homeContent: string;
  aboutHeader: string;
  aboutContent: string;
}

export const dictionary: Record<string, DictionaryEntry> = {
  en: {
    homeHeader: 'FULL-STACK DEVELOPER',
    navbarProjects: 'PROJECTS',
    navbarSkills: 'SKILLS',
    navbarHistory: 'HISTORY',
    navbarContact: 'CONTACT',
    homeContent: 'Welcome to the jungle',
    aboutHeader: 'About Me',
    aboutContent: 'Here is some information about me. English is my primary language.'
  },
  fr: {
    homeHeader: 'DÉVELOPPEUSE FULL-STACK',
    navbarProjects: 'PROJECTS',
    navbarSkills: 'COMPÉTENCES',
    navbarHistory: 'PARCOURS',
    navbarContact: 'CONTACT',
    homeContent: 'oui oui baguette',
    aboutHeader: 'Sobre Yo',
    aboutContent: 'Aqui tenemos un poco informacion sobre yo. Hablo espanol tambien.'
  }
}