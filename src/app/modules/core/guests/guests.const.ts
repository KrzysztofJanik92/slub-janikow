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
  },
  {
    id: 10008,
    name: 'Alicja i Tomasz',
    surname: 'Strus',
    password: 'Strus123!',
    greetings: 'Drodzy Alicjo i Tomku'
  },
  {
    id: 10009,
    name: 'Anna i Mariusz',
    surname: 'Dziewulscy',
    password: 'Królik19',
    greetings: 'Drodzy mamo i tato',
    paragraph1: 'Z głębi serca dziękuję Wam za wszystkie dni, które wspólnie przeżyliśmy.',
    paragraph2: 'Jesteśmy Wam wdzięczni za każdą pogodną chwilę, za miłość, uśmiech, dobrą radę... To dzięki Wam spotkamy się na tym weselu.',
    paragraph3: 'Już niedługo nasza rodzina powiększy się o dodatkową osobę - Krzyśka. Ale Wy i tak juz dawno przyjęliście go w Wasze progi.'
  },
  {
    id: 100010,
    name: 'Monika i Marcin',
    surname: 'Janik',
    password: '1Nowehaslo',
    greetings: 'Drodzy mamo i tato',
    paragraph1: 'Przede wszystkim dzięki Wam, ten ślub i wesele stanie się faktem, za co chcielibyśmy serdecznie podziękować!',
    paragraph2: 'Już za chwile Milena stanie się formalnie Janikiem, ja przestanę być wolnym człowiekiem, a babcia może nawet przestanie mnie pytać o magisterkę.',
    paragraph3: 'Mamy nadzieje, że będziecie się wspaniale bawić na tej imprezie, a wspomnienie tego wydarzenia bedzię z nami już do końca życia. Bardzo Was kochamy, i cieszymy się, że razem  znami spędzicie ten magiczny czas!'
  },
  {
    id: 100011,
    name: 'Joanna i Marcin',
    surname: 'Pala',
    password: 'CiociaAsia',
    greetings: 'Drodzy Asiu i Marcinie'
  },
  {
    id: 100012,
    name: 'Danuta i Andrzej',
    surname: 'Michalczuk',
    password: 'Sarnów14',
    greetings: 'Drodzy Danuto i Andrzeju'
  },
  {
    id: 100014,
    name: 'Ewa i Waldek',
    surname: 'Sawczuk',
    password: 'WujekWaldek1',
    greetings: 'Drodzy Ewo i Waldku'
  },
  {
    id: 100015,
    name: 'Aneta i Konrad',
    surname: 'Sawiccy',
    password: 'Maciek123!',
    greetings: 'Drodzy Aneto i Konradzie'
  },
  {
    id: 100016,
    name: 'Zosia Pietrusiewicz',
    surname: 'Marcin Michalczuk',
    password: 'MarcinZosia1',
    greetings: 'Drodzy Zosiu i Marcinie'
  },
  {
    id: 100017,
    name: 'Urszula i Andrzej',
    surname: 'Chojnaccy',
    password: 'Majster14',
    greetings: 'Drodzy babciu i dziadku'
  },
  {
    id: 100018,
    name: 'Urszula i Krzysztof',
    surname: 'Poreda',
    password: 'Poreda123!',
    greetings: 'Drodzy Urszulo i Krzysztofie'
  },
  {
    id: 100019,
    name: 'Małgorzata',
    surname: 'Dobkiewicz',
    password: 'Mia55',
    greetings: 'Droga Małgorzato'
  },
  {
    id: 100020,
    name: 'Anna i Marek',
    surname: 'Poreda',
    password: 'MarekAnia21',
    greetings: 'Drodzy Anno i Marku'
  },
  {
    id: 100021,
    name: 'Ewelina i Marcin',
    surname: 'Poreda',
    password: 'MarcinEwelina99',
    greetings: 'Drodzy Ewelino i Marcinie'
  },
  {
    id: 100022,
    name: 'Renata i Andrzej',
    surname: 'Boreczek',
    password: 'Renata94!',
    greetings: 'Drodzy Renato i Andrzeju'
  },
  {
    id: 100023,
    name: 'Kasia i Przemek',
    surname: 'Isańscy',
    password: 'KasiaPrzemek12',
    greetings: 'Drodzy Kasiu i Przemku'
  },
  {
    id: 100024,
    name: 'Sandra Olechowicz',
    surname: 'Mateusz Dziewulski',
    password: 'illumaeti2000',
    greetings: 'Drodzy Sandro i Mateuszu'
  },
  {
    id: 100025,
    name: 'Alicja i Ryszard',
    surname: 'Pazur',
    greetings: 'Drodzy babciu i dziadku',
    password: 'Dziadkowie1'
  },
  {
    id: 100026,
    name: 'Beata i Albert',
    surname: 'Lawenda',
    greetings: 'Drodzy ciociu i wujku',
    password: 'Lawenda22'
  },
  {
    id: 100027,
    name: 'Magdalena i Grzegorz',
    surname: 'Mitrut',
    greetings: 'Siema Mitrutki!',
    password: 'Mitra!!!'
  },
  {
    id: 100028,
    name: 'Edyta Królik',
    surname: 'Adam Hnatów',
    greetings: 'Drodzy Edyto i Adamie',
    password: 'MOLON-LABE'
  },
  {
    id: 100029,
    name: 'Wiktoria i Piotr',
    surname: 'Daniel',
    greetings: 'Drodzy Wiktorio i Piotrze',
    password: 'WiktoriaPiotr1'
  },
  {
    id: 100030,
    name: 'Jola i Lenek',
    surname: 'Frąk',
    greetings: 'Drodzy ciociu i wujku',
    password: 'JolaLenek1'
  },
  {
    id: 10031,
    name: 'Karol',
    surname: 'Daniel',
    greetings: 'Drogi Karolu',
    password: 'KarolD1'
  },
  {
    id: 10032,
    name: 'Karolina i Łukasz',
    surname: 'Górscy',
    greetings: 'Witam szanownych przyjaciół z Wiednia',
    password: 'powazneHasloDoSystemu1'
  },
  {
    id: 10033,
    name: 'Anastasia Stoll',
    surname: 'Dawid Taszkun',
    greetings: 'Witam szanownego Pana basisto-wokalistę wraz z Panią Anastasią',
    password: 'ForSeveralMoments1'
  },
  {
    id: 10034,
    name: 'Michał',
    surname: 'Lawenda',
    greetings: 'Drogi Michale',
    password: 'MichałL1'
  },
  {
    id: 10034,
    name: 'Filip',
    surname: 'Laskowski',
    greetings: 'Drogi Filipie',
    password: 'skonopi_92'
  },
  {
    id: 10035,
    name: 'Beata Pszczołowska',
    surname: 'Piotr Niwiński',
    greetings: 'Drodzy Beato i Piotrze',
    password: 'RealMadrid1'
  },
  {
    id: 10036,
    name: 'Justyna Przewrocka',
    surname: 'Mateusz Janik',
    greetings: 'Drodzy Justyno i Mateuszu',
    password: 'Ignacy2020'
  },
  {
    id: 10037,
    name: 'Małgorzata Zięba',
    surname: 'Seweryn Niewiadomoski',
    greetings: 'Drodzy Małgosiu i Sewerynie',
    password: 'GosiaSeweryn123!'
  },
  {
    id: 10037,
    name: 'Jarosław',
    surname: 'Zięba',
    greetings: 'Drogi Jarku',
    password: 'Jarek99!'
  },
  {
    id: 10038,
    name: 'Sylwia i Łukasz',
    surname: 'Zięba',
    greetings: 'Drodzy Sylwio i Łukaszu',
    password: 'Ziębowie234!'
  },
  {
    id: 10039,
    name: 'Barbara i Mirosław',
    surname: 'Zięba',
    greetings: 'Drodzy Basiu i Mirku',
    password: 'Ziębowie1'
  },
  {
    id: 10040,
    name: 'Krystyna i Robert',
    surname: 'Przewroccy',
    greetings: 'Drodzy Krysiu i Robercie',
    password: 'Przewroccy1'
  },
  {
    id: 10041,
    name: 'Agata i Marek',
    surname: 'Polichańczuk',
    greetings: 'Drodzy Agato i Marku',
    password: 'Lubartów12'
  },
  {
    id: 10042,
    name: 'Ada i Kacper',
    surname: 'Polichańczuk',
    greetings: 'Drodzy Ado i Kacprze',
    password: 'AdaxKacper'
  },
  {
    id: 10043,
    name: 'Elżbieta',
    surname: 'Dziewulska',
    greetings: 'Droga babciu',
    password: 'BabciaEla'
  },
  {
    id: 10044,
    name: 'Kamila i Kamil',
    surname: 'Kościesza',
    greetings: 'Drodzy Kamilo i Kamilu',
    password: 'Kamila4Kamil'
  },
  {
    id: 10045,
    name: 'Asia i Radek',
    surname: 'Pietrak',
    greetings: 'Drodzy Asiu i Radku',
    password: '99Pietrak'
  },
  {
    id: 10046,
    name: 'Karolina',
    surname: 'Pietrak',
    greetings: 'Droga Karolino',
    password: 'Karolina97'
  },
  {
    id: 10047,
    name: 'Julia',
    surname: 'Pietrak',
    greetings: 'Droga Julio',
    password: 'JuliaP'
  },
  {
    id: 10048,
    name: 'Aleksandra i Piotr',
    surname: 'Szwajczewscy',
    greetings: 'Drodzy Aleksandro i Piotrze',
    password: 'OlaPiotrek99'
  },
  {
    id: 10049,
    name: 'Amelia i Iga',
    surname: 'Szwajczewskie',
    greetings: 'Drogie Amelko i Igo',
    password: 'Siostry'
  },
  {
    id: 10050,
    name: 'Katarzyna i Artur',
    surname: 'Dula',
    greetings: 'Drodzy Katarzyno i Arturze',
    password: 'Dula2021'
  }
]
