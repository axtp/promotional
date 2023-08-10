// menu items
import {Constants} from "../../../constants";

export const menu_items = [
  {
    label: 'Home',
    path: '#home',
    offset: '70',
  },
  {
    label: 'How to',
    path: '#how-to',
    offset: '70',
  },
  {
    label: 'Testimonials',
    path: '#testimonials',
    offset: '70',
  },
  {
    label: 'Newsfeed',
    path: '#newsfeed',
    offset: '70',
  },
  {
    label: 'Download App',
    path: '#download_app',
    offset: '70',
  },
];

// service section
import envato from 'common/assets/image/saasAppDark/clients/envato.png';
import evernote from 'common/assets/image/saasAppDark/clients/evernote.png';
import forbes from 'common/assets/image/saasAppDark/clients/forbes.png';
import geekwire from 'common/assets/image/saasAppDark/clients/geekwire.png';
import slack from 'common/assets/image/saasAppDark/clients/slack.png';
import usaToday from 'common/assets/image/saasAppDark/clients/usa-today.png';
import headphone from 'common/assets/image/saasAppDark/icons/headphone.svg';
// how it works section
import clock from 'common/assets/image/saasAppDark/icons/clock.png';
import calendar from 'common/assets/image/saasAppDark/icons/calendar.png';
import map from 'common/assets/image/saasAppDark/icons/map.png';
// service section
import service1 from 'common/assets/image/saasAppDark/icons/service1.svg';
import service2 from 'common/assets/image/saasAppDark/icons/service2.svg';
import service3 from 'common/assets/image/saasAppDark/icons/service3.svg';
import service4 from 'common/assets/image/saasAppDark/icons/service4.svg';
import service5 from 'common/assets/image/saasAppDark/icons/service5.svg';
// footer section
import siteLogo from 'common/assets/image/saasAppDark/logo.svg';
// news feed section
import post1 from 'common/assets/image/saasAppDark/post1.png';
import post2 from 'common/assets/image/saasAppDark/post2.png';
import post3 from 'common/assets/image/saasAppDark/post3.png';
// testimonials section
import danielHeuri from 'common/assets/image/saasAppDark/daniel_heuri.jpg';
import danielCovo from 'common/assets/image/saasAppDark/daniell_covo.jpg';
import logo3 from 'common/assets/image/saasAppDark/tm-logo3.svg';
export const clients = [envato, evernote, forbes, geekwire, slack, usaToday];


export const services = [
  {
    id: 1,
    title: 'Fast Performance',
    icon: service1,
  },
  {
    id: 2,
    title: 'User Customization',
    icon: service2,
  },
  {
    id: 3,
    title: 'Modify structure',
    icon: service3,
  },
  {
    id: 4,
    title: 'Customer Analysis',
    icon: service4,
  },
  {
    id: 5,
    title: 'Instant Support',
    icon: service5,
  },
];


export const howItWorksFeatures = [
  {
    id: 1,
    icon: map,
    title: 'Onde',
    desc: `A Masterclass será no Zoom, 100% Online e AO VIVO`,
  },
  {
    id: 1,
    icon: calendar,
    title: 'Data',
    desc: `Dia ${Constants.EventDates.Day}`,
  },
  {
    id: 2,
    icon: clock,
    title: 'Hora',
    desc: `Às ${Constants.EventDates.Time} (Horário de Brasília)`,
  },
];

// stats counter section
export const statsCounter = {
  blockTitle: {
    subtitle: 'Monthly Stats',
    title: `Take your user monitoring experience to new ultimate level with file tracking`,
    text: 'Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. It is built to perform and run fast on all of the latest mobile devices. Build out-of the box blazing fast apps with a small footprint and built-in best practices.',
    button: {
      link: '#',
      label: 'Discover more',
    },
  },
  posts: [
    {
      count: '80',
      title: 'Up to',
      text: 'Customer Response',
      symbol: '%',
    },
    {
      count: '99',
      title: 'Consistent',
      text: 'Performance Score',
      symbol: '%',
    },
    {
      count: '3.5',
      title: 'Down to',
      text: 'Response Time',
      symbol: 'S',
    },
    {
      count: '5x',
      title: 'Up to',
      text: 'Faster then others',
      symbol: '',
    },
  ],
};

// video intro section
export const videoIntro = {
  features: [
    {
      id: 1,
      title: 'Renda em dolar',
      desc: 'Você que deseja ter uma renda em dólar e construir patrimônio nos Estados Unidos.',
    },
    {
      id: 2,
      title: 'Fontes de renda alternativa',
      desc: 'Você que busca novas fontes de rentabilizar o seu capital, principalmente, em uma moeda forte como o dólar.',
    },
    {
      id: 3,
      title: 'Aproveitar Conhecimento',
      desc: 'Você que gostaria de seguir uma metodologia comprovada e segura para investir no mercado imobiliário, por alguém que conhece e já fez isso na prática.',
    },
    {
      id: 4,
      title: 'Saber mais sobre o Mercado Imobiliário Americano',
      desc: 'Você que necessita saber mais sobre os processos, legalidades e possíveis riscos de investir no Mercado Imobiliário Americano',
    },
    {
      id: 5,
      title: 'Conhecer novas oportunidades',
      desc: 'Você que busca entender mais os caminhos e oportunidades a serem exploradas nesse mercado.',
    },
  ],
};

export const posts = [
  {
    id: 1,
    date: 'June 3, 2020',
    image: post1,
    title: 'The three Fundamental Rules to Keep Your Website Goal Orientated',
    excerpt: {
      label: 'Learn More',
      link: '#',
    },
  },
  {
    id: 2,
    date: 'Dec 8, 2020',
    image: post2,
    title: 'Five Common Mistakes Teams Make When Tracking Performance',
    excerpt: {
      label: 'Learn More',
      link: '#',
    },
  },
  {
    id: 3,
    date: 'Dec 8, 2020',
    image: post3,
    title: `Why You Might Want to Reconsider with Tracking First Meaningful Paint`,
    excerpt: {
      label: 'Learn More',
      link: '#',
    },
  },
];

export const testimonials = [
  {
    id: 1,
    logo: danielHeuri,
    videoId: '926e270c-bff1-4681-9681-596be47a3b54',
    author: 'Daniel Heuri',
    designation: 'CEO NXT Advisors, CEO AXT PropTech S/A',
    quote: '"A gente vai fazer uma masterclass ensinando os princípios como participar desse jogo sem tem que ter aquelas quantidades absurdas de dinheiro..."',
  },
  {
    id: 2,
    logo: danielCovo,
    videoId: "926e270c-bff1-4681-9681-596be47a3b54",
    author: 'Danniel Covo',
    designation: 'Empresário, Investidor, CMO AXT PropTech S/A',
    quote: '"A gente vai fazer uma masterclass ensinando os princípios como participar desse jogo sem tem que ter aquelas quantidades absurdas de dinheiro..."',
  }
];

export const footer = {
  about: {
    logo: siteLogo,
    text: `Somos uma empresa de tecnologia especializada em blockchain e à aplicando de forma inovadora na construção de patrimônio.`,
  },
  widgets: [
    {
      id: 2,
      title: 'Sobre A Empresa',
      list: [
        {
          id: 1,
          title: 'Home Page',
          link: 'https://axtp.com.br',
        },
        {
          id: 2,
          title: 'Campanha Atual',
          link: 'https://masterclass.axtp.com.br',
        },
      ],
    },
    {
      id: 3,
      title: 'Políticas',
      list: [
        {
          id: 2,
          title: 'Política de Privacidade',
          link: 'https://www.axtp.com.br/policy/privacy',
        },
        {
          id: 3,
          title: 'Termos de Uso',
          link: 'https://www.axtp.com.br/policy/usage',
        },
      ],
    },
    // {
    //   id: 4,
    //   title: 'My Account',
    //   list: [
    //     {
    //       id: 1,
    //       title: 'Press inquiries',
    //       link: '#',
    //     },
    //     {
    //       id: 2,
    //       title: 'Social media ',
    //       link: '#',
    //     },
    //     {
    //       id: 3,
    //       title: 'directories',
    //       link: '#',
    //     },
    //     {
    //       id: 4,
    //       title: 'Images & B-roll',
    //       link: '#',
    //     },
    //     {
    //       id: 5,
    //       title: 'Permissions',
    //       link: '#',
    //     },
    //   ],
    // },
  ],
  contactInfo: {
    title: 'Contato',
    cnpj: '48.565.176/0001-17',
    address: `Jundiai, SP, Brasil`,
    phone: `+55 11 91636-0102`,
    email: `info@axtp.com`,
  },
};
