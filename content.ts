
interface DictionaryEntry {
  homeHeader: string;
  historyHeaderWork: string;
  historyHeaderStudy: string;
  historyContentWork: history[];
  historyContentStudy: history[];
  contactName: string;
  contactEmail: string;
  contactMessage: string;
  contactButton: string;
  contactEmailSent: string;
}

interface history {
  role: string;
  place: string;
  dates: string; 
}

export const dictionary: Record<string, DictionaryEntry> = {
  en: {
    homeHeader: `FULL-STACK DEVELOPER`,
    historyHeaderWork: `Work Experience`,
    historyHeaderStudy: `Studies`,
    historyContentWork: [
      {
        role: `Business Developer B2B`, 
        place: `ScaleDynamics`, 
        dates: `11/2019 - 06/2022`
      },
      {
        role: `Account Manager B2B`, 
        place: `AM4`, 
        dates: `06/2016 - 08/2018`
      },
      {
        role: `Copywriter, Social Media Analyst and Planner`, 
        place: `Tatica Web`, 
        dates: `04/2013 - 12/2015`
      },
      {
        role: `Copywriter and Designer`, 
        place: `AgenciaSE`, 
        dates: `08/2012 - 03/2013`
      },
      {
        role: `Copywriter and Designer`, 
        place: `Comunica Brasil`, 
        dates: `11/2011 - 07/2012`
      },
      {
        role: `Marketing Internship`, 
        place: `Garra Vestibulares`, 
        dates: `07/2011 - 11/2011`
      },
      {
        role: `Web Design Internship`, 
        place: `UniFOA`, 
        dates: `11/2010 - 05/2011`
      },
    ],
    historyContentStudy: [
      {
        role: `Programming - Full Time`, 
        place: `At Home`, 
        dates: `08/2022 - Present`
      },
      {
        role: `Introduction to Computer Science`, 
        place: `CS50`, 
        dates: `10/2022 - 04/2023`
      },
      {
        role: `Scientific Computing with Python`, 
        place: `Free Code Camp`, 
        dates: `08/2022 - 10/2022`
      },
      {
        role: `Introduction to Coding`, 
        place: `SheCodes`, 
        dates: `08/2020 - 09/2020`
      },
      {
        role: `French`, 
        place: `Francophonie`, 
        dates: `09/2018 - 06/2019`
      },
      {
        role: `French`, 
        place: `Wizard by Pearson`, 
        dates: `08/2017 - 07/2018`
      },
      {
        role: `Social Communication and Advertising`, 
        place: `UniFOA`, 
        dates: `07/2009 - 12/2012`
      },
    ],
    contactName: 'Name',
    contactEmail: 'Email',
    contactMessage: 'Message',
    contactButton: 'Send',
    contactEmailSent: 'Email Sent Successfully !',
  },
  fr: {
    homeHeader: `DÉVELOPPEUSE FULL-STACK`,
    historyHeaderWork: `Expérience professionnelle`,
    historyHeaderStudy: `Études`,
    historyContentWork: [
      {
        role: `Chargée de Developpement Commercial B2B`, 
        place: `ScaleDynamics`, 
        dates: `11/2019 - 06/2022`
      },
      {
        role: `Gestionnaire de Compte B2B`, 
        place: `AM4`, 
        dates: `06/2016 - 08/2018`
      },
      {
        role: `Rédactrice, Réseaux Sociaux et Planificatrice`, 
        place: `Tatica Web`, 
        dates: `04/2013 - 12/2015`
      },
      {
        role: `Rédactrice et Designer`, 
        place: `AgenciaSE`, 
        dates: `08/2012 - 03/2013`
      },
      {
        role: `Rédactrice et Designer`, 
        place: `Comunica Brasil`, 
        dates: `11/2011 - 07/2012`
      },
      {
        role: `Stage en Marketing`, 
        place: `Garra Vestibulares`, 
        dates: `07/2011 - 11/2011`
      },
      {
        role: `Stage en Web Design`, 
        place: `UniFOA`, 
        dates: `11/2010 - 05/2011`
      },
    ],
    historyContentStudy: [
      {
        role: `Programmation - Temps plein`, 
        place: `De Chez Moi`, 
        dates: `08/2022 - Présent`
      },
      {
        role: `Introduction à l'Informatique`, 
        place: `CS50`, 
        dates: `10/2022 - 04/2023`
      },
      {
        role: `Calcul Scientifique avec Python`, 
        place: `Free Code Camp`, 
        dates: `08/2022 - 10/2022`
      },
      {
        role: `Introduction au codage`, 
        place: `SheCodes`, 
        dates: `08/2020 - 09/2020`
      },
      {
        role: `Français`, 
        place: `Francophonie`, 
        dates: `09/2018 - 06/2019`
      },
      {
        role: `Français`, 
        place: `Wizard by Pearson`, 
        dates: `08/2017 - 07/2018`
      },
      {
        role: `Communication Sociale et Publicité`, 
        place: `UniFOA`, 
        dates: `07/2009 - 12/2012`
      },
    ],
    contactName: 'Nom',
    contactEmail: 'Adresse E-mail',
    contactMessage: 'Message',
    contactButton: 'Envoyer',
    contactEmailSent: 'E-mail Envoyé Avec Succès !',
  }
}
