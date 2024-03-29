export interface IProject {
  id: number;
  title: string;
  description: {pt: string; en: string}
  image: string;
  link: string;
  tags: string[];
}
/*projetos realizados em empresas:{
  Analitica Ensino Web,
  Digigua Web,
  Digigua Mobile,
  banco Luso brasileiro Pessoas Jurídicas Web,
  banco Luso brasileiro Empresas Mobile,
  banco Luso brasileiro Empresas Backoffice,
  banco Luso brasileiro Pessoas Físicas,
  banco Luso brasileiro Pessoas Físicas Mobile,
  banco Random Web,
  banco Random Mobile,
  UnimedLitoral Mobile,
  PED cliente Mobile,
  PED Prestadores Mobile,
  Instituto Scheibel Mobile,
  Ibitipoca Comuna Mobile,
  Ultratel Web,
  Ultratel Mobile,
}\
* projetos pessoais:{
  Ecoleta,
  Happy,
  Proffy,
  Be The Hero,
  Move.it,
  Podcastr,
  Letmeask,
  DtMoney,
  Ig.news,
  Dashgo,
  DevQuiz,
  StoreShop Web,

}
*/
export const listProjects:IProject[] = [
  
  {
    id: 1,
    title: 'Ecoleta',
    description: {en:'Ecoleta is a project that aims to connect people to companies that collect specific waste, such as light bulbs, batteries, cooking oil, etc.',
    pt:'Ecoleta é um projeto que tem como objetivo conectar pessoas a empresas que coletam resíduos específicos, como lâmpadas, pilhas, óleo de cozinha, etc.'},
    image: '',
    link: '',
    tags: ['React', 'React Native', 'Node.js', 'TypeScript', 'Expo', 'SQLite', 'Knex.js', 'Leaflet', 'React Leaflet', 'Axios', 'Celebrate', 'Multer', 'Express', 'Cors', 'Nodemon', 'VS Code', 'Insomnia', 'Yarn', 'Git', 'GitHub', 'Google Maps', 'IBGE API', 'Mailtrap', 'Heroku', 'Netlify'],
  },
  {
    id: 2,
    title: 'Happy',
    description: {en:'Happy is a project that aims to connect people to orphanages in their region to make many children happy.',
    pt:'Happy é um projeto que tem como objetivo conectar pessoas a orfanatos em sua região para fazer muitas crianças felizes.'},
    image: '',
    link: '',
    tags: ['React', 'React Native', 'Node.js', 'TypeScript', 'Expo', 'SQLite', 'Knex.js', 'Leaflet', 'React Leaflet', 'Axios', 'Celebrate', 'Multer', 'Express', 'Cors', 'Nodemon', 'VS Code', 'Insomnia', 'Yarn', 'Git', 'GitHub', 'Google Maps', 'IBGE API', 'Mailtrap', 'Heroku', 'Netlify'],
  },
  {
    id: 3,
    title: 'Proffy',
    description: {en:'Proffy is a project that aims to connect people to teachers in their region to make many children happy.',
    pt:'Proffy é um projeto que tem como objetivo conectar pessoas a professores em sua região para fazer muitas crianças felizes.'},
    image: '',
    link: '',
    tags: ['React', 'React Native', 'Node.js', 'TypeScript', 'Expo', 'SQLite', 'Knex.js', 'Leaflet', 'React Leaflet', 'Axios', 'Celebrate', 'Multer', 'Express', 'Cors', 'Nodemon', 'VS Code', 'Insomnia', 'Yarn', 'Git', 'GitHub', 'Google Maps', 'IBGE API', 'Mailtrap', 'Heroku', 'Netlify'],
  },
  {
    id: 4,
    title: 'Be The Hero',
    description: {en:'Be The Hero is a project that aims to connect people to ONGs in their region to make many children happy.',
    pt:'Be The Hero é um projeto que tem como objetivo conectar pessoas a ONGs em sua região para fazer muitas crianças felizes.'},
    image: '',
    link: '',
    tags: ['React', 'React Native', 'Node.js', 'TypeScript', 'Expo', 'SQLite', 'Knex.js', 'Leaflet', 'React Leaflet', 'Axios', 'Celebrate', 'Multer', 'Express', 'Cors', 'Nodemon', 'VS Code', 'Insomnia', 'Yarn', 'Git', 'GitHub', 'Google Maps', 'IBGE API', 'Mailtrap', 'Heroku', 'Netlify'],
  },
  {
    id: 5,
    title: 'Move.it',
    description: {en:'Move.it is a project that aims to connect people to ONGs in their region to make many children happy.',
    pt:'Move.it é um projeto que tem como objetivo conectar pessoas a ONGs em sua região para fazer muitas crianças felizes.'},
    image: '',
    link: '',
    tags: ['React', 'React Native', 'Node.js', 'TypeScript', 'Expo', 'SQLite', 'Knex.js', 'Leaflet', 'React Leaflet', 'Axios', 'Celebrate', 'Multer', 'Express', 'Cors', 'Nodemon', 'VS Code', 'Insomnia', 'Yarn', 'Git', 'GitHub', 'Google Maps', 'IBGE API', 'Mailtrap', 'Heroku', 'Netlify'],
  },
  {
    id: 6,
    title: 'Podcastr',
    description: {en:'Podcastr is a project that aims to connect people to ONGs in their region to make many children happy.',
    pt:'Podcastr é um projeto que tem como objetivo conectar pessoas a ONGs em sua região para fazer muitas crianças felizes.'},
    image: '',
    link: '',
    tags: ['React', 'React Native', 'Node.js', 'TypeScript', 'Expo', 'SQLite', 'Knex.js', 'Leaflet', 'React Leaflet', 'Axios', 'Celebrate', 'Multer', 'Express', 'Cors', 'Nodemon', 'VS Code', 'Insomnia', 'Yarn', 'Git', 'GitHub', 'Google Maps', 'IBGE API', 'Mailtrap', 'Heroku', 'Netlify'],
  },
  {
    id: 7,
    title: 'Letmeask',
    description: {en:'Letmeask is a project that aims to connect people to ONGs in their region to make many children happy.',
    pt:'Letmeask é um projeto que tem como objetivo conectar pessoas a ONGs em sua região para fazer muitas crianças felizes.'},
    image: '',
    link: '',
    tags: ['React', 'React Native', 'Node.js', 'TypeScript', 'Expo', 'SQLite', 'Knex.js', 'Leaflet', 'React Leaflet', 'Axios', 'Celebrate', 'Multer', 'Express', 'Cors', 'Nodemon', 'VS Code', 'Insomnia', 'Yarn', 'Git', 'GitHub', 'Google Maps', 'IBGE API', 'Mailtrap', 'Heroku', 'Netlify'],
  },
  {
    id: 8,
    title: 'dtmoney',
    description: {en:'dtmoney is a project that aims to connect people to ONGs in their region to make many children happy.',
    pt:'dtmoney é um projeto que tem como objetivo conectar pessoas a ONGs em sua região para fazer muitas crianças felizes.'},
    image: '',
    link: '',
    tags: ['React', 'React Native', 'Node.js', 'TypeScript', 'Expo', 'SQLite', 'Knex.js', 'Leaflet', 'React Leaflet', 'Axios', 'Celebrate', 'Multer', 'Express', 'Cors', 'Nodemon', 'VS Code', 'Insomnia', 'Yarn', 'Git', 'GitHub', 'Google Maps', 'IBGE API', 'Mailtrap', 'Heroku', 'Netlify'],
  },
  {
    id: 9,
    title: 'PayFlow',
    description: {pt:'PayFlow é um projeto que concentra todos os seus boletos no mesmo app.',
    en:'PayFlow is a project that brings all your bills together in the same app.'},
    image: '',
    link: '',
    tags: ['React Native','React-Navigation','Node.js', 'Typescript', 'Axios', 'React-Hook-form'],
    },
]