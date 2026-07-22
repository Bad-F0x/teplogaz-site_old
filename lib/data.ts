export const company = {
  name: "ООО ПК Теплогаз",
  shortName: "ПК Теплогаз",
  tagline: "Проектирование и разработка газопроводов",
  description:
    "Полный комплекс по газификации объектов — от получения лимитов и оформления техусловий до проектирования, строительно-монтажных работ и ввода в эксплуатацию.",
  phone: "+7 913 600 00 21",
  email: "Pk-teplogaz@yandex.ru",
  address: "г. Омск, ул. Малиновского 19",
  mapCoords: { lat: 55.038996, lng: 73.324859 } as const,
  inn: "5501256010",
  kpp: "550101001",
  bank: "ФИЛИАЛ «НОВОСИБИРСКИЙ» АО «АЛЬФА-БАНК»",
  bik: "045004774",
  correspondentAccount: "30101810600000000774",
  currentAccount: "40702810023050013396",
  legalAddress:
    "улица Малиновского, д. 19, ПОМЕЩ. 5-П, Омская область, г. Омск",
  director: "Калистратов Дмитрий Борисович",
};

export const navItems = [
  { label: "Главная", href: "#hero" },
  { label: "О нас", href: "#about" },
  { label: "Команда", href: "#team" },
  { label: "Благодарности", href: "#thanks" },
  { label: "Контакты", href: "#contacts" },
] as const;

export interface Direction {
  title: string;
  description: string;
}

export const directions: Direction[] = [
  {
    title: "Проектирование газопроводов",
    description:
      "Разработка проектной документации для наружных и внутренних систем газоснабжения любой сложности.",
  },
  {
    title: "Строительство газопроводов",
    description:
      "Полный комплекс строительно-монтажных работ по прокладке газораспределительных сетей.",
  },
  {
    title: "Газификация частных домов",
    description:
      "Подведение газа к частным домовладениям под ключ — от проекта до ввода в эксплуатацию.",
  },
  {
    title: "Газификация промышленных объектов",
    description:
      "Оснащение газовым оборудованием производственных предприятий и котельных.",
  },
  {
    title: "Техническое обслуживание",
    description:
      "Регулярное обслуживание и ремонт газопроводов и газового оборудования.",
  },
  {
    title: "Пусконаладочные работы",
    description:
      "Настройка и проверка систем газоснабжения, ввод объектов в эксплуатацию.",
  },
  {
    title: "Консультационные услуги",
    description:
      "Помощь в подготовке документов, получении разрешений и согласований.",
  },
];

export interface Partner {
  name: string;
  url: string;
}

export const partners: Partner[] = [
  { name: "АО «Омскгазстройэксплуатация»", url: "https://omskgse.ru/" },
  { name: "АО «Омскоблгаз»", url: "https://www.omskoblgaz.ru/" },
];

export const aboutCompany = {
  history:
    "Компания основана в 2010 году и с тех пор успешно реализует проекты в сфере газоснабжения. За более чем 15 лет работы мы накопили колоссальный опыт в проектировании и строительстве газопроводов различного уровня сложности.",
  approach:
    "Мы ценим каждого заказчика и предлагаем индивидуальный подход к решению задач. Работаем под ключ — от первой консультации до ввода объекта в эксплуатацию. Берём на себя все этапы: проектирование, согласование, строительство и пусконаладочные работы.",
  sro: {
    name: "СРО «Объединение строителей Омской области»",
    ogrn: "1145543009314",
  },
  regions: [
    "Работаем с муниципальными районами Омской области, выполняем государственные контракты в Новосибирской области, а также реализуем проекты в Новом Уренгое и Ханты-Мансийском автономном округе.",
  ],
  certification:
    "Наши сотрудники имеют аттестацию НОПРИЗ (Национальное объединение изыскателей и проектировщиков), что подтверждает их высокую квалификацию и соответствие профессиональным стандартам.",
};

export interface CertificatePage {
  id: string;
  imageSrc: string;
}

export interface TeamMember {
  name: string;
  position: string;
  description: string;
  initials: string;
  imageSrc: string;
  certificatePages?: CertificatePage[];
}

export const team: TeamMember[] = [
  {
    name: "Дмитрий Калистратов",
    position: "Руководитель компании",
    description:
      "Специалист в сфере проектирования сооружений и эксплуатации газонефтепроводов и газонефтехранилищ.",
    initials: "ДК",
    imageSrc: "/images/team/kalistratov.jpg",
    certificatePages: [
      {
        id: "kalistratov-01",
        imageSrc: "/images/certificates/kalistratov-cert-01.jpg",
      },
      {
        id: "kalistratov-06",
        imageSrc: "/images/certificates/kalistratov-cert-06.jpg",
      },
    ],
  },
  {
    name: "Болдырев Денис",
    position: "Возглавляет проектно-изыскательский отдел",
    description:
      "Имеет большой стаж работы в проектировании наружных и внутренних систем газоснабжения.",
    initials: "ДБ",
    imageSrc: "/images/team/boldyrev.jpg",
    certificatePages: [
      {
        id: "boldyrev-01",
        imageSrc: "/images/certificates/boldyrev-cert-01.jpg",
      },
      {
        id: "boldyrev-06",
        imageSrc: "/images/certificates/boldyrev-cert-06.jpg",
      },
      {
        id: "boldyrev-proxy-01",
        imageSrc: "/images/certificates/boldyrev-proxy-01.jpg",
      },
      {
        id: "boldyrev-proxy-02",
        imageSrc: "/images/certificates/boldyrev-proxy-02.jpg",
      },
    ],
  },
  {
    name: "Медведев Михаил",
    position: "Возглавляет строительно-монтажный отдел",
    description:
      "Работал в АО «Омскоблгаз» в отделе строительства и эксплуатации газораспределительных сетей. Имеет большой опыт в своей специализации.",
    initials: "ММ",
    imageSrc: "/images/team/medvedev.jpg",
  },
];

export interface GratitudeLetter {
  id: string;
  from: string;
  imageSrc: string;
}

export const gratitudeLetters: GratitudeLetter[] = [
  {
    id: "thanks-1",
    from: "ООО «ГазСтройИнвест»",
    imageSrc: "/images/thanks/thanks-1.jpg",
  },
  {
    id: "thanks-2",
    from: "Администрация г. Тюмень",
    imageSrc: "/images/thanks/thanks-2.jpg",
  },
  {
    id: "thanks-3",
    from: "ООО «ТеплоЭнергоРесурс»",
    imageSrc: "/images/thanks/thanks-3.jpg",
  },
  {
    id: "thanks-4",
    from: "ИП Смирнов А. В.",
    imageSrc: "/images/thanks/thanks-4.jpg",
  },
  {
    id: "thanks-5",
    from: "ООО «СеверГазМонтаж»",
    imageSrc: "/images/thanks/thanks-5.jpg",
  },
  {
    id: "thanks-6",
    from: "Благодарственное письмо",
    imageSrc: "/images/thanks/thanks-6.jpg",
  },
];
