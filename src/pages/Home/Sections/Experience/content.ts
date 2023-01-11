export interface IContent {
  title: string
  items: IItem[]
}
interface IItem{
  id: number
  title: ISection
  company: string
  date: string
	period: ISection
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
				period: {
					pt: '1 ano e 2 meses',
					en: '1 year and 2 months',
				},
				description: {
					pt: 'Desenvolvimento em React Native (Android e IOS) e Web-sites com React JS em Projetos para a empresa',
					en: 'Development in React Native (Android and IOS) and Web-sites with React JS in Projects for the company',
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
				period: {
					pt: '1 ano e 4 meses',
					en: '1 year and 4 months',
				},
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
				period: {
					pt: '2 anos e 8 meses',
					en: '2 year and 8 months',
				},
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
        date: '01/2012 - 12/2016',
				period: {
					pt: '5 anos',
					en: '5 years',
				},
        description: {
          pt: `A Graduação em Engenharia de Computação estuda as técnicas, métodos e
					ferramentas matématicas, fisicas e computacionais para o
					desenvolvimento de circuitos, dispositivos e sistemas para
					desenvolvimento de soluções baseadas nas aréas elétrica e digital.`,
					en: `The Bachelor's Degree in Computer Engineering studies the techniques, methods and
					mathematical, physical and computational tools for the
					development of circuits, devices and systems for
					development of solutions based on the electrical and digital areas.`,
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
				period: {
					pt: '2 anos',
					en: '2 years',
				},
        description: {
          pt: 'Curso Profissionalizante em: Web Design, Edição FRONTEND',
          en: 'Professional Course in: Web Design, FRONTEND Edition',
        },
      }
    ],

  }
]
