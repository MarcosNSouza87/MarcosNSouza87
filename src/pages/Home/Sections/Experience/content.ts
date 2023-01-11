export interface IContent {
  title: string
  items: IItem[]
}
interface IItem{
  id: number
  title: ISection
  company: string
  date: string
  description: ISection
}
interface ISection {
  pt: string
  en: string
}

export const Conteudo:IContent[] = [
	{
		title: 'Experiência',
		items: [
			{
				id: 0,
				title: {
					pt: 'Desenvolvedor React / React Native Pleno (Remoto)',
					en: 'React / React Native Developer (Remote)',
				},
				company: 'OPAH CONSULT, SP',
				date: '12/2021 - 01/2023',
				description: {
					pt: 'Desenvolvimento em React Native (Android e IOS) em Projetos para a empresa',
					en: 'Development in React Native (Android and IOS) in Projects for the company',
				},
			},
			{
				id: 1,
				title: {
					pt: 'Desenvolvedor React Native Pleno (Remoto)',
					en: 'React Native Developer (Remote)',
				},
				company: 'GRUPOW, SC',
				date: '08/2020 - 12/2021',
				description: {
					pt: 'Desenvolvimento em React Native (Android e IOS) em Projetos para a empresa',
					en: 'Development in React Native (Android and IOS) in Projects for the company',
				},
			},
			{
				id: 2,
				title: {
					pt: 'Desenvolvedor React / React Native Junior (Remoto)',
					en: 'React / React Native Developer (Remote)',
				},
				company: 'ULTRATEL TELECOM, SP',
				date: '12/2018 - 08/2020',
				description: {
					pt: 'Desenvolvimento em React Native (Android e IOS) em Projetos para a empresa',
					en: 'Development in React Native (Android and IOS) in Projects for the company',
				},
			},
		],
	},
  {
    title: 'Formação',
    items: [
      {
        id: 0,
        title: {
          pt: 'Graduação em Engenharia da Computação',
          en: 'Computer Engineering Degree',
        },
        company: 'UNIVERSIDADE SANTA CECÍLIA, SP',
        date: '01/2012 - 12/2017',
        description: {
          pt: 'Graduação em Engenharia da Computação',
          en: 'Computer Engineering Degree',
        },
      },
      {
        id: 1,
        title: {
          pt: 'Web Design e Desenvolvimento Front-End',
          en: 'Web Design and Front-End Development',
        },
        company: 'SOS COMPUTADORES, SP',
        date: '01/2003 - 12/2005',
        description: {
          pt: 'Web Design e Desenvolvimento Front-End',
          en: 'Web Design and Front-End Development',
        },
      }
    ],

  }
]
