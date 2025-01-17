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

export const Conteudo: IContent[] = [
	{
		title: 'Experiência',
		items: [
			{
				id: 0,
				title: {
					pt: 'Desenvolvedor React / React Native Pleno (Remoto)',
					en: 'Mid-Level React / React Native Developer (Remote)',
				},
				company: 'Ahoy by Belago (Remote)',
				date: '06/2023 - 06/2024',
				period: {
					pt: '1 ano',
					en: '1 year',
				},
				description: {
					pt: 'Projetou e desenvolveu um aplicativo multiplataforma utilizado por 10.000+ usuários, reduzindo falhas do app em 30%.',
					en: 'Designed and developed a cross-platform app used by 10,000+ users, reducing app crashes by 30%.',
				},
			},
			{
				id: 1,
				title: {
					pt: 'Desenvolvedor React / React Native Pleno (Remoto)',
					en: 'Mid-Level React / React Native Developer (Remote)',
				},
				company: 'OPAH CONSULT, SP',
				date: '12/2021 - 01/2023',
				period: {
					pt: '1 ano e 2 meses',
					en: '1 year and 2 months',
				},
				description: {
					pt: 'Desenvolveu e manteve apps React Native (Android e iOS) e websites em React, melhorando a retenção de usuários em 15% e reduzindo bugs em 25%.',
					en: 'Developed and maintained React Native apps (Android and iOS) and websites using React, improving user retention by 15% and reducing bugs by 25%.',
				},
			},
			{
				id: 2,
				title: {
					pt: 'Desenvolvedor React Native Pleno (Remoto)',
					en: 'Mid-Level React Native Developer (Remote)',
				},
				company: 'GRUPOW, SC',
				date: '08/2020 - 12/2021',
				period: {
					pt: '1 ano e 4 meses',
					en: '1 year and 4 months',
				},
				description: {
					pt: 'Contribuiu no desenvolvimento de aplicativos móveis React Native (Android e iOS), implementando soluções de API e otimizando a performance do app em 20%.',
					en: 'Contributed to the development of React Native mobile apps (Android and iOS), implementing API solutions and optimizing app performance by 20%.',
				},
			},
			{
				id: 3,
				title: {
					pt: 'Desenvolvedor React / React Native Junior (Remoto)',
					en: 'Junior React / React Native Developer (Remote)',
				},
				company: 'ULTRATEL TELECOM, SP',
				date: '12/2018 - 08/2020',
				period: {
					pt: '2 anos e 8 meses',
					en: '2 years and 8 months',
				},
				description: {
					pt: 'Desenvolveu uma plataforma interna de comunicação para 1.000+ funcionários, aumentando a eficiência do fluxo de trabalho em 30%.',
					en: 'Developed an internal communication platform for 1,000+ employees, increasing workflow efficiency by 30%.',
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
					en: 'Bachelor in Computer Engineering',
				},
				company: 'UNIVERSIDADE SANTA CECÍLIA, SP',
				date: '01/2012 - 12/2016',
				period: {
					pt: '5 anos',
					en: '5 years',
				},
				description: {
					pt: `Graduação com foco no desenvolvimento de circuitos e sistemas computacionais avançados para soluções digitais e elétricas.`,
					en: `Bachelor's degree focused on the development of circuits and advanced computational systems for digital and electrical solutions.`,
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
					pt: 'Curso profissionalizante em Web Design e Desenvolvimento Front-End, com foco em criação e edição.',
					en: 'Professional course in Web Design and Front-End Development, focused on creation and editing.',
				},
			},
		],
	},
];

