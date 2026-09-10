import type { Locale } from "./config";

export type Dictionary = {
  language: {
    label: string;
    switchTo: string;
    current: string;
  };
  common: {
    contactUs: string;
    learnMore: string;
    ourServices: string;
    home: string;
    about: string;
    contact: string;
    search: string;
    navigation: string;
    poles: string;
    coordinates: string;
    copyright: string;
    menu: string;
    openMenu: string;
    closeMenu: string;
    principalNav: string;
    seeAll: string;
    loading: string;
  };
  search: {
    placeholderNav: string;
    placeholderFull: string;
    aria: string;
    clear: string;
    submit: string;
    suggestions: string;
    searching: string;
    noSuggestions: string;
    seeAllResults: string;
    enter: string;
    types: {
      service: string;
      product: string;
      page: string;
      pole: string;
      section: string;
      action: string;
    };
  };
  searchResults: {
    label: string;
    title: string;
    minChars: string;
    queryPrefix: string;
    resultSingular: string;
    resultPlural: string;
    noResults: string;
    noResultsHint: string;
    didYouMean: string;
    open: string;
    access: string;
  };
  nav: {
    home: string;
    about: string;
    aboutInfolog: string;
    aboutNationalCash: string;
    infogerance: string;
    monetique: string;
    erp: string;
    btp: string;
    telephonie: string;
    telephonieRoot: string;
    iziShop: string;
    electromenager: string;
    services: string;
    groups: {
      integration: string;
      formations: string;
      autres: string;
    };
    items: {
      dataCenter: string;
      securite: string;
      collaboration: string;
      ged: string;
      virtServeurs: string;
      virtPostes: string;
      pearsonVue: string;
      eLearning: string;
      centreAppel: string;
      transformationIt: string;
      affichage: string;
      installationTel: string;
      energie: string;
    };
  };
  poles: {
    it: { name: string; shortName: string; intro: string; description: string };
    finance: { name: string; shortName: string; intro: string; description: string };
    support: { name: string; shortName: string; intro: string; description: string };
    industrie: { name: string; shortName: string; intro: string; description: string };
  };
  footer: {
    taglineFallback: string;
    socials: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    phone: string;
    phoneOptional: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  contactPage: {
    heading: string;
    lead: string;
    address: string;
    map: string;
  };
  cta: {
    finalTitle: string;
    finalBody: string;
  };
  home: {
    polesLabel: string;
    polesTitle: string;
    discover: string;
    heroTitleFallback: string;
    heroDiscoverSolutions: string;
    heroAllSolutions: string;
    heroAriaLabel: string;
    heroNetworkLabel: string;
    heroNetworkDomains: string;
    heroDiscoverPrefix: string;
    introLabel: string;
    introTitleFallback: string;
    introExperience: string;
    introLeadFallback: string;
    introLead2Before: string;
    introLead2Strong: string;
    introLead3Before: string;
    introLead3Strong: string;
    introCta: string;
    missionLabel: string;
    missionTitle: string;
    engagementsLabel: string;
    engagementsTitle: string;
    engagements: [
      string,
      string,
      string,
      string,
      string,
      string,
    ];
    statsLabel: string;
    videoLabel: string;
    videoTitle: string;
    videoIframeTitle: string;
    videoPlaceholderLabel: string;
    videoPlaceholderBody: string;
  };
  about: {
    label: string;
    title: string;
    presentationLabel: string;
    presentationTitle: string;
    engagementLabel: string;
    missionTitle: string;
    territoriesLabel: string;
    presenceTitle: string;
    valuesLabel: string;
    engagementsTitle: string;
    servicesTitle: string;
    servicesLead: string;
    servicesImageAlt: string;
  };
  notFound: {
    code: string;
    title: string;
    body: string;
    backHome: string;
  };
  admin: {
    translations: string;
    localeFr: string;
    localeEn: string;
    localeAr: string;
    titleFr: string;
    titleEn: string;
    titleAr: string;
    descriptionFr: string;
    descriptionEn: string;
    descriptionAr: string;
    contentFr: string;
    contentEn: string;
    contentAr: string;
    translationsHint: string;
  };
};

export type Dictionaries = Record<Locale, Dictionary>;
