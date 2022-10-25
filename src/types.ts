export interface footerList {
  title: string;
  link: string;
}

export interface languagesObj {
  name: string;
  code: string;
  native: string;
}

export interface countriesObj {
  name: string;
  code: string;
  capital: string;
  currency: string;
  emoji: string;
  emojiU: string;
  languages: [];
  states: [];
}

export interface continentObj {
  name: string;
  countries: [];
  code: string;
}
