/* Defining the shape of the data that we are getting from the API. */

type Flags = {
  png: string
  svg: string
}

type NativeName = {
  [key: string]: {
    official?: string
    common: string
  }
}

type Name = {
  common: string
  nativeName: NativeName
  official?: string
}

type Currencies = {
  [key: string]: {
    name: string
    symbol?: string
  }
}

type Languages = {
  [key: string]: string
}

export interface CountryCardFields {
  flags: Flags
  name: Name
  population: number
  region: string
}

export interface DetailFields extends CountryCardFields {
  borders: string[]
  capital: string[]
  currencies: Currencies
  languages: Languages
  subregion: string
  tld: string[]
}
