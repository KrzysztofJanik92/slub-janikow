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
    password: 'Pau789!',
    greetings: 'To ona - Nasza Kurowa!',
    photo: 'kuce.png',
    paragraph1: 'Bez Ciebie by się nie udało! Juz prościej byłoby to ogarnąć bez Kyla!',
    paragraph2: 'Łatwiej sobie wyobrazić Polskę bez Jarka niż ten ślub bez Ciebie!',
    paragraph3: 'Paula - nawet tysiąc słów nie wyrazi naszej wdzięczności za to ile pracy i miłości włożyłaś w to dość nietypowe\n' +
      '        wydarzenie.\n' +
      '        Strasznie cieszymy się, że to właśnie Ty pomogłaś nam przebrnąć przez organizację naszego ślubu i wesela.\n' +
      '        Mamy nadzieje, że już niedługo wspólnie będziemy się bawić na wspaniałej imprezie.'
  },
  {
    id: 1002,
    name: 'Milena Olimpia',
    surname: 'Dziewulska',
    password: 'joko123!',
    greetings: 'No siema :D',
    photo: 'kuce.png'
  },
  {
    id: 10001,
    name: 'Basia i Piotr',
    surname: 'Zabłoccy',
    password: 'Tucznik123!',
    photo: 'photo1.jpg',
    greetings: 'Drodzy Basiu i Piotrze',
    paragraph1: 'Na wstępie chcemy zaznaczyć, że jest nam bardzo miło, że przybędziecie na nasz ślub i wesele (odmowy nie akceptujemy!).',
    paragraph2: 'Z Tucznikiem przyjaźnię się od niemalże 10 lat. Mój najwierniejszy z wiernych, zawsze jest kiedy go potrzebujemy. ' +
      'Z Basią znamy się krótko, ale czujemy się jakbyśmy znali się od zawsze.',
    paragraph3: 'Bez Was ta impreza nie może się odbyć. Już nie możemy się doczekać, aż razem będziemy się bawić do białego rana!'
  },
  {
    id: 10002,
    name: 'Magda i Marcin',
    surname: 'Ewert',
    password: 'Ewerty789!',
    greetings: 'Drodzy Magdaleno i Marcinie'
  },
  {
    id: 10003,
    name: 'Michał i Karolina',
    surname: 'Ciekańscy',
    password: 'ObywatelTelAvivu1',
    photo: 'pejsy.jpg',
    greetings: 'Siema Karolino i Ciekanie',
    paragraph1: 'Na wstępie chcemy zaznaczyć, że jest nam bardzo miło, że przybędziecie na nasz ślub i wesele (odmowy nie akceptujemy!).',
    paragraph2: 'Z Ciekanem przyjaznię się od niemalże 10 lat. Spędzilismy razem wiele szalonych chwil, imprez i wyjazdów. ' +
      'Karolinę polubiliśmy od pierwszego spotkania. Ten match się udał!',
    paragraph3: 'Ale nie byłbym sobą gdybym Ci żadnej szpilki nie wbił, więc wrzucam Ci zdjęcie Twojego wujka z Tel Avivu :D Do zobaczenia wkrótce!'
  },
  {
    id: 10004,
    name: 'Kasia i Hubert',
    surname: 'Borowscy',
    password: 'Gozdi123!',
    greetings: 'Drodzy Kasiu i Hubercie'
  },
  {
    id: 10005,
    name: 'Klaudia i Łukasz',
    surname: 'Chomiccy',
    password: 'Chomiki123!',
    greetings: 'Drodzy Klaudio i Łukaszu'
  },
  {
    id: 10006,
    name: 'Katarzyna i Sławomir',
    surname: 'Daniel',
    password: 'Daniel123!',
    greetings: 'Drodzy ciociu i wujku'
  },
  {
    id: 10007,
    name: 'Karolina i Karol',
    surname: 'Zięba',
    password: 'Miki123!',
    photo: 'korfu.JPG',
    greetings: 'Drodzy Karolino i Karolu',
    paragraph1: 'Na wstępie chcemy zaznaczyć, że jest nam bardzo miło, że przybędziecie na nasz ślub i wesele (odmowy nie akceptujemy!).',
    paragraph2: 'Bez ulubionej siostry i ulubionego szwagra taka impreza nie może się odbyć!',
    paragraph3: 'Mamy nadzieje, że na tym weselu poczujemy się trochę tak jak na Korfu :D'
  }
]
