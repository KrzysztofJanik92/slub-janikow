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
  }
]
