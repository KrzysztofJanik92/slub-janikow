import {User} from "../models/user.model";

export const guests: User[] = [
  {
    id: 1000,
    name: 'Admin',
    surname: 'Adminowski',
    password: 'admin123!',
    greetings: 'Witamy szanownego Pana Admina'
  },
  {
    id: 1001,
    name: 'Paula',
    surname: 'Józefowicz',
    password: 'jebacpalikota123!',
    greetings: 'No siema :D'
  },
  {
    id: 1002,
    name: 'Milena Olimpia',
    surname: 'Dziewulska',
    password: 'joko123!',
    greetings: 'No siema :D'
  },
  {
    id: 10001,
    name: 'Basia i Piotr',
    surname: 'Zabłoccy',
    password: 'Tucznik123!',
    greetings: 'Siema'
  },
  {
    id: 10002,
    name: 'Magda i Marcin',
    surname: 'Ewert',
    password: 'Ewerty789!',
    greetings: 'Siema'
  },
  {
    id: 10003,
    name: 'Michał i Karolina',
    surname: 'Ciekańscy',
    password: 'ObywatelTelAvivu1'
  },
  {
    id: 10004,
    name: 'Kasia i Hubert',
    surname: 'Borowscy',
    password: 'Gozdi123!'
  },
  {
    id: 10005,
    name: 'Klaudia i Łukasz',
    surname: 'Chomiccy',
    password: 'Chomiki123!'
  }
]
