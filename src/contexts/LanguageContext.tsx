import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'mk' | 'en' | 'el';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('mk');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['mk', 'en', 'el'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    const translations = {
      // Navigation
      'nav.reform': {
        mk: 'Reform',
        en: 'Reform',
        el: 'Reform',
      },
      'nav.beach_bar': {
        mk: 'Beach Bar',
        en: 'Beach Bar',
        el: 'Παραλιακό Μπαρ',
      },

      // Menu
      'menu.drinks': {
        mk: 'Пиjалоци',
        en: 'Drinks',
        el: 'Ποτά',
      },
      'menu.food': {
        mk: 'Храна',
        en: 'Food',
        el: 'Φαγητό',
      },

      // Capacity section
      'capacity.title': {
        mk: 'Реформ Броеви',
        en: 'Reform Numbers',
        el: 'Αριθμοί Reform',
      },
      'capacity.beach': {
        mk: 'Плажа',
        en: 'Beach',
        el: 'Παραλία',
      },
      'capacity.parking': {
        mk: 'Паркинг места',
        en: 'Parking spots',
        el: 'Θέσεις στάθμευσης',
      },
      'capacity.sunbeds': {
        mk: 'Лежалки',
        en: 'Sunbeds',
        el: 'Ξαπλώστρες',
      },
      'capacity.umbrellas': {
        mk: 'Чадори',
        en: 'Umbrellas',
        el: 'Ομπρέλες',
      },

      // Food categories
      'food.breakfast': {
        mk: 'Појадок',
        en: 'Breakfast',
        el: 'Πρωινό',
      },
      'food.salads': {
        mk: 'Салати',
        en: 'Salads',
        el: 'Σαλάτες',
      },
      'food.pasta': {
        mk: 'Тестенини',
        en: 'Pasta',
        el: 'Μακαρόνια',
      },
      'food.sandwiches': {
        mk: 'Сендвичи',
        en: 'Sandwiches',
        el: 'Σάντουιτς',
      },
      'food.toasts': {
        mk: 'Тостови',
        en: 'Toasts',
        el: 'Τοστ',
      },
      'food.burgers': {
        mk: 'Бургери',
        en: 'Burgers',
        el: 'Μπέργκερ',
      },
      'food.rissoto': {
        mk: 'Рижота',
        en: 'Risotto',
        el: 'Ριζότο',
      },
      'food.appetizers': {
        mk: 'Предјадења',
        en: 'Appetizers',
        el: 'Ορεκτικά',
      },
      'food.desserts': {
        mk: 'Десерти',
        en: 'Desserts',
        el: 'Επιδόρπια',
      },

      // Drink categories
      'drink.coffee': {
        mk: 'Кафе',
        en: 'Coffee',
        el: 'Καφές',
      },
      'drink.water': {
        mk: 'Вода',
        en: 'Water',
        el: 'Νερό',
      },
      'drink.juices': {
        mk: 'Сокови',
        en: 'Juices',
        el: 'Χυμοί',
      },
      'drink.beer': {
        mk: 'Пиво',
        en: 'Beer',
        el: 'Μπύρα',
      },
      'drink.cocktails': {
        mk: 'Коктели',
        en: 'Cocktails',
        el: 'Κοκτέιλ',
      },
      'drink.wine': {
        mk: 'Вино',
        en: 'Wine',
        el: 'Κρασί',
      },
      'drink.alcohol': {
        mk: 'Жестoки пијалоци',
        en: 'Spirits',
        el: 'Αλκοολούχα ποτά',
      },

      // Language switcher
      'language.macedonian': {
        mk: 'Македонски',
        en: 'Macedonian',
        el: 'Μακεδονικά',
      },
      'language.english': {
        mk: 'Англиски',
        en: 'English',
        el: 'Αγγλικά',
      },
      'language.greek': {
        mk: 'Грчки',
        en: 'Greek',
        el: 'Ελληνικά',
      },

      // Footer
      'footer.copyright': {
        mk: '© 2025 Mitko Devemit',
        en: '© 2025 Mitko Devemit',
        el: '© 2025 Mitko Devemit',
      },

      // Events section
      'events.title': {
        mk: 'Реформ',
        en: 'Reform',
        el: 'Reform',
      },
      'events.description': {
        mk: 'Добредојдовте во Реформ, каде што релаксацијата се среќава со возбудата на песочните брегови. Препуштете се на освежителните коктели, уживајте во сонцето на нашите лежалки и уживајте со вкусни залаци со панорамски поглед на езерските води. Без разлика дали барате мирно бегство или живописно искуство покрај плажа, Реформ нуди совршена мешавина од опуштен шарм и привлечност на езерото. Дојдете да се релаксирате, дружете се и создадете незаборавни спомени.',
        en: 'Welcome to Reform, where relaxation meets the excitement of sandy shores. Indulge in refreshing cocktails, bask in the sun on our sunbeds, and enjoy delicious treats with panoramic views of the lake waters. Whether you seek a peaceful escape or a vibrant beachside experience, Reform offers the perfect blend of relaxed charm and lakeside allure. Come to relax, socialize, and create unforgettable memories.',
        el: 'Καλώς ήρθατε στο Reform, όπου η χαλάρωση συναντά τον ενθουσιασμό των αμμώδων ακτών. Απολαύστε αναζωογονητικά κοκτέιλ, λιάζεστε στον ήλιο στις ξαπλώστρες μας και απολαύστε νόστιμα κεράσματα με πανοραμική θέα στις λιμναίες νερές. Είτε αναζητάτε μια ειρηνική διαφυγή είτε μια ζωντανή εμπειρία δίπλα στην παραλία, το Reform προσφέρει την τέλεια μείξη χαλαρού γοητεία και λιμναίας αίγλης. Ελάτε να χαλαρώσετε, να κοινωνικοποιηθείτε και να δημιουργήσετε αξέχαστες αναμνήσεις.',
      },

      // Events list
      'events.events_title': {
        mk: 'Настани',
        en: 'Events',
        el: 'Εκδηλώσεις',
      },
      'events.birthdays': {
        mk: 'Родендени',
        en: 'Birthdays',
        el: 'Γενέθλια',
      },
      'events.christenings': {
        mk: 'Крштенки',
        en: 'Christenings',
        el: 'Βαπτίσεις',
      },
      'events.pre_wedding': {
        mk: 'Предсвадбени настани',
        en: 'Pre-wedding events',
        el: 'Προ-γάμο εκδηλώσεις',
      },
      'events.business': {
        mk: 'Бизнис настани',
        en: 'Business events',
        el: 'Επιχειρηματικές εκδηλώσεις',
      },

      // Alcohol products
      'alcohol.vigor': {
        mk: 'Вигор',
        en: 'Vigor',
        el: 'Βίγκορ',
      },
      'alcohol.smirnoff': {
        mk: 'Смирноф',
        en: 'Smirnoff',
        el: 'Σμίρνοφ',
      },
      'alcohol.absolut': {
        mk: 'Абсолут',
        en: 'Absolut',
        el: 'Αμπσόλουτ',
      },
      'alcohol.gin_sax': {
        mk: 'Џин Сах',
        en: 'Gin Sax',
        el: 'Τζιν Σαξ',
      },
      'alcohol.gordons': {
        mk: 'Гордонс',
        en: 'Gordons',
        el: 'Γκόρντονς',
      },
      'alcohol.bacardi': {
        mk: 'Бакарди',
        en: 'Bacardi',
        el: 'Μπακάρντι',
      },
      'alcohol.martini': {
        mk: 'Мартини',
        en: 'Martini',
        el: 'Μαρτίνι',
      },
      'alcohol.tequila': {
        mk: 'Текила',
        en: 'Tequila',
        el: 'Τεκίλα',
      },
      'alcohol.ouzo': {
        mk: 'Узо',
        en: 'Ouzo',
        el: 'Ούζο',
      },
      'alcohol.mastika': {
        mk: 'Мастика',
        en: 'Mastika',
        el: 'Μαστίχα',
      },
      'alcohol.archers': {
        mk: 'Арчерс',
        en: 'Archers',
        el: 'Άρτσερς',
      },
      'alcohol.baileys': {
        mk: 'Бејлис',
        en: 'Baileys',
        el: 'Μπέιλις',
      },
      'alcohol.rakija': {
        mk: 'Ракија',
        en: 'Rakija',
        el: 'Ρακίγια',
      },
      'alcohol.cognac': {
        mk: 'Коњак',
        en: 'Cognac',
        el: 'Κονιάκ',
      },
      'alcohol.vinjak': {
        mk: 'Винјак',
        en: 'Vinjak',
        el: 'Βίνιακ',
      },
      'alcohol.stock': {
        mk: 'Шток',
        en: 'Stock',
        el: 'Στοκ',
      },
      'alcohol.rum': {
        mk: 'Рум',
        en: 'Rum',
        el: 'Ρουμ',
      },
      'alcohol.captain_morgan': {
        mk: 'Кептан Морган',
        en: 'Captain Morgan',
        el: 'Κάπτεν Μόργκαν',
      },
      'alcohol.aperol': {
        mk: 'Аперол',
        en: 'Aperol',
        el: 'Απερόλ',
      },
      'alcohol.campari': {
        mk: 'Кампари',
        en: 'Campari',
        el: 'Καμπάρι',
      },
      'alcohol.malibu': {
        mk: 'Малибу',
        en: 'Malibu',
        el: 'Μαλίμπου',
      },
      'alcohol.pelinkovac': {
        mk: 'Пелинковац',
        en: 'Pelinkovac',
        el: 'Πελίνκοβατς',
      },
      'alcohol.jagermeister': {
        mk: 'Јегермаестер',
        en: 'Jagermeister',
        el: 'Γιάγκερμάιστερ',
      },
      'alcohol.shaker': {
        mk: 'Шејкер',
        en: 'Shaker',
        el: 'Σέικερ',
      },
      'alcohol.johnny_walker': {
        mk: 'Џони вокер',
        en: 'Johnny Walker',
        el: 'Τζόνι Γουόκερ',
      },
      'alcohol.johnny_walker_black': {
        mk: 'Џони вокер блек',
        en: 'Johnny Walker Black',
        el: 'Τζόνι Γουόκερ Μπλακ',
      },
      'alcohol.ballantines': {
        mk: 'Балантајс',
        en: "Ballantine's",
        el: 'Μπαλαντάινς',
      },
      'alcohol.jack_daniels': {
        mk: 'Џек Даниелс',
        en: 'Jack Daniels',
        el: 'Τζακ Ντάνιελς',
      },
      'alcohol.cutty_sark': {
        mk: 'Кати Сарк',
        en: 'Cutty Sark',
        el: 'Κάτι Σαρκ',
      },
      'alcohol.chivas': {
        mk: 'Чивас',
        en: 'Chivas',
        el: 'Τσίβας',
      },
      'alcohol.jameson': {
        mk: 'Џејмисон',
        en: 'Jameson',
        el: 'Τζέιμσον',
      },
      'alcohol.jb': {
        mk: 'ЏБ',
        en: 'JB',
        el: 'ΤζΜ',
      },
      'alcohol.famous_grouse': {
        mk: 'Фејмос Грус',
        en: 'Famous Grouse',
        el: 'Φέιμος Γκράους',
      },
      'alcohol.finlandia': {
        mk: 'Финландиа',
        en: 'Finlandia',
        el: 'Φινλανδία',
      },
      'alcohol.skyy_vodka': {
        mk: 'Скај Водка',
        en: 'Skyy Vodka',
        el: 'Σκάι Βότκα',
      },
      'alcohol.grey_goose': {
        mk: 'Грејгус',
        en: 'Grey Goose',
        el: 'Γκρέι Γκους',
      },
      'alcohol.bombay': {
        mk: 'Бомбај',
        en: 'Bombay',
        el: 'Μπομπάι',
      },

      // Menu headers
      'menu.product': {
        mk: 'Производ',
        en: 'Product',
        el: 'Προϊόν',
      },
      'menu.price': {
        mk: 'Цена',
        en: 'Price',
        el: 'Τιμή',
      },

      // Coffee products
      'coffee.espresso': {
        mk: 'Еспресо',
        en: 'Espresso',
        el: 'Εσπρέσο',
      },
      'coffee.macchiato': {
        mk: 'Макијато',
        en: 'Macchiato',
        el: 'Μακιάτο',
      },
      'coffee.cappuccino': {
        mk: 'Капучино',
        en: 'Cappuccino',
        el: 'Καπουτσίνο',
      },
      'coffee.decaf_cappuccino': {
        mk: 'Декаф Капучино',
        en: 'Decaf Cappuccino',
        el: 'Καπουτσίνο χωρίς καφεΐνη',
      },
      'coffee.decaf_macchiato': {
        mk: 'Декаф Макијато',
        en: 'Decaf Macchiato',
        el: 'Μακιάτο χωρίς καφεΐνη',
      },
      'coffee.decaf_espresso': {
        mk: 'Декаф Еспресо',
        en: 'Decaf Espresso',
        el: 'Εσπρέσο χωρίς καφεΐνη',
      },
      'coffee.nescafe': {
        mk: 'Нес Кафе',
        en: 'Nescafe',
        el: 'Νεσκαφέ',
      },
      'coffee.irish_coffee': {
        mk: 'Ирско Кафе',
        en: 'Irish Coffee',
        el: 'Ιρλανδικός καφές',
      },
      'coffee.ice_coffee': {
        mk: 'Ајс Кафе',
        en: 'Ice Coffee',
        el: 'Παγωμένος καφές',
      },
      'coffee.freddo_espresso_double': {
        mk: 'Фредо Еспресо Дупло',
        en: 'Freddo Espresso Double',
        el: 'Φρέσκο εσπρέσο διπλό',
      },
      'coffee.freddo_espresso_single': {
        mk: 'Фредо Еспресо Сингл',
        en: 'Freddo Espresso Single',
        el: 'Φρέσκο εσπρέσο απλό',
      },
      'coffee.freddo_cappuccino': {
        mk: 'Фредо Капучино',
        en: 'Freddo Cappuccino',
        el: 'Φρέσκο καπουτσίνο',
      },
      'coffee.latte': {
        mk: 'Лате Кафе',
        en: 'Latte Cafe',
        el: 'Λάτε καφές',
      },
      'coffee.hot_chocolate': {
        mk: 'Топло Чоколадо',
        en: 'Hot Chocolate',
        el: 'Ζεστή σοκολάτα',
      },

      // Beer products
      'beer.skopsko': {
        mk: 'Скопско',
        en: 'Skopsko',
        el: 'Σκόπσκο',
      },
      'beer.amstel': {
        mk: 'Амстел',
        en: 'Amstel',
        el: 'Άμστελ',
      },
      'beer.heineken': {
        mk: 'Хајнекен',
        en: 'Heineken',
        el: 'Χάινεκεν',
      },
      'beer.skopsko_smooth': {
        mk: 'Скопско Смут',
        en: 'Skopsko Smooth',
        el: 'Σκόπσκο Σμουθ',
      },
      'beer.radler': {
        mk: 'Радлер',
        en: 'Radler',
        el: 'Ράντλερ',
      },
      'beer.pint_small': {
        mk: 'Точено мало',
        en: 'Pint Small',
        el: 'Μικρό μπύρα',
      },
      'beer.pint_big': {
        mk: 'Точено големо',
        en: 'Pint Big',
        el: 'Μεγάλο μπύρα',
      },

      // Wine products
      'wine.temjanika': {
        mk: 'Темјаника',
        en: 'Temjanika',
        el: 'Τεμγιάνικα',
      },
      'wine.red_wine': {
        mk: 'Црвено вино',
        en: 'Red Wine',
        el: 'Κόκκινο κρασί',
      },
      'wine.alexandria': {
        mk: 'Александрија',
        en: 'Alexandria',
        el: 'Αλεξάνδρεια',
      },
      'wine.alexandria_couve': {
        mk: 'Александрија куве',
        en: 'Alexandria Couve',
        el: 'Αλεξάνδρεια Κουβέ',
      },
      'wine.traminec': {
        mk: 'Траминец',
        en: 'Traminec',
        el: 'Τραμινέκ',
      },
      'wine.rose': {
        mk: 'Розе',
        en: 'Rose',
        el: 'Ροζέ',
      },

      // Cocktail products
      'cocktail.mojito': {
        mk: 'Мохито',
        en: 'Mojito',
        el: 'Μοχίτο',
      },
      'cocktail.pina_colada': {
        mk: 'Пина Колада',
        en: 'Pina Colada',
        el: 'Πίνα Κολάδα',
      },
      'cocktail.strawberry_colada': {
        mk: 'Строубери Колада',
        en: 'Strawberry Colada',
        el: 'Φραουλόκολαδα',
      },
      'cocktail.cosmopolitan': {
        mk: 'Космополитан',
        en: 'Cosmopolitan',
        el: 'Κοσμοπολίτης',
      },
      'cocktail.margarita': {
        mk: 'Маргарита',
        en: 'Margarita',
        el: 'Μαργαρίτα',
      },
      'cocktail.strawberry_margarita': {
        mk: 'Строубери маргарита',
        en: 'Strawberry Margarita',
        el: 'Φραουλόμαργαρίτα',
      },
      'cocktail.tequila_sunrise': {
        mk: 'Текила Санрајс',
        en: 'Tequila Sunrise',
        el: 'Τεκίλα Σάνραϊζ',
      },
      'cocktail.sandcastle': {
        mk: 'Сандкастл',
        en: 'Sandcastle',
        el: 'Κάστρο άμμου',
      },
      'cocktail.sex_on_beach': {
        mk: "Секс он д'бич",
        en: 'Sex On The Beach',
        el: 'Σεξ ον δε Μπιτς',
      },
      'cocktail.blue_lagoon': {
        mk: 'Блу Лагун',
        en: 'Blue Lagoon',
        el: 'Μπλε Λαγκούνα',
      },
      'cocktail.flamingo': {
        mk: 'Фламинго',
        en: 'Flamingo',
        el: 'Φλαμίνγκο',
      },
      'cocktail.blue_hawaii': {
        mk: 'Блу Хаваи',
        en: 'Blue Hawaii',
        el: 'Μπλε Χαβάη',
      },
      'cocktail.cuba_libre': {
        mk: 'Куба Либре',
        en: 'Cuba Libre',
        el: 'Κούβα Λίμπρε',
      },
      'cocktail.amf': {
        mk: 'А.М.Ф',
        en: 'A.M.F',
        el: 'Α.Μ.Φ',
      },
      'cocktail.arizona_twister': {
        mk: 'Аризона Твистер',
        en: 'Arizona Twister',
        el: 'Αριζόνα Τουίστερ',
      },
      'cocktail.long_island': {
        mk: 'Лонг Ајланд',
        en: 'Long Island',
        el: 'Λονγκ Άιλαντ',
      },

      // Food products - Breakfast
      'food.reform_breakfast': {
        mk: 'Реформ појадок',
        en: 'Reform Breakfast',
        el: 'Πρωινό Reform',
      },
      'food.omelet': {
        mk: 'Омлет',
        en: 'Omelet',
        el: 'Ομελέτα',
      },
      'food.brooklyn': {
        mk: 'Бруклин',
        en: 'Brooklyn',
        el: 'Μπρούκλιν',
      },

      // Food products - Salads
      'food.caesar_salad': {
        mk: 'Цезар',
        en: 'Caesar',
        el: 'Καίσαρας',
      },
      'food.tuna_salad': {
        mk: 'Туна',
        en: 'Tuna',
        el: 'Τόνος',
      },
      'food.greek_salad': {
        mk: 'Грчка',
        en: 'Greek',
        el: 'Ελληνική',
      },
      'food.shop_salad': {
        mk: 'Шопска',
        en: 'Shop',
        el: 'Σαλάτα καταστήματος',
      },

      // Food products - Burgers
      'food.hamburger': {
        mk: 'Хамбургер',
        en: 'Hamburger',
        el: 'Χάμπουργκερ',
      },
      'food.reform_cheeseburger': {
        mk: 'Реформ Чизбургер',
        en: 'Reform Cheeseburger',
        el: 'Τσίζμπουργκερ Reform',
      },
      'food.manhattan_burger': {
        mk: 'Менхетен Бургер',
        en: 'Manhattan Burger',
        el: 'Μπέργκερ Μανχάταν',
      },
      'food.american_classic': {
        mk: 'Американски класик',
        en: 'American Classic',
        el: 'Αμερικανικό κλασικό',
      },
      'food.chicken_burger': {
        mk: 'Чикенбургер',
        en: 'Chicken Burger',
        el: 'Μπέργκερ κοτόπουλο',
      },

      // Juice and soft drink products
      'juice.coca_cola': {
        mk: 'Кока Кола',
        en: 'Coca Cola',
        el: 'Κόκα Κόλα',
      },
      'juice.fanta': {
        mk: 'Фанта',
        en: 'Fanta',
        el: 'Φάντα',
      },
      'juice.schweppes': {
        mk: 'Швепс',
        en: 'Schweppes',
        el: 'Σβέπες',
      },
      'juice.sprite': {
        mk: 'Спрајт',
        en: 'Sprite',
        el: 'Σπράιτ',
      },
      'juice.tonic': {
        mk: 'Тоник',
        en: 'Tonic',
        el: 'Τόνικ',
      },
      'juice.juice': {
        mk: 'Џус',
        en: 'Juice',
        el: 'Χυμός',
      },
      'juice.ice_tea': {
        mk: 'Леден чај',
        en: 'Ice Tea',
        el: 'Παγωμένο τσάι',
      },
      'juice.cedevita': {
        mk: 'Цедевита',
        en: 'Cedevita',
        el: 'Τσεντεβίτα',
      },
      'juice.fresh_orange': {
        mk: 'Цеден Портокал',
        en: 'Fresh Orange Juice',
        el: 'Φρέσκο πορτοκαλάδα',
      },
      'juice.fresh_mix': {
        mk: 'Цеден Микс',
        en: 'Fresh Mix Juice',
        el: 'Φρέσκο μικτός χυμός',
      },
      'juice.lemonade': {
        mk: 'Лимонада',
        en: 'Lemonade',
        el: 'Λεμονάδα',
      },
      'juice.soda': {
        mk: 'Сода',
        en: 'Soda',
        el: 'Σόδα',
      },

      // Water products
      'water.rosa': {
        mk: 'Роса',
        en: 'Rosa',
        el: 'Ρόζα',
      },
      'water.mineral_water': {
        mk: 'Газирана вода',
        en: 'Mineral Water',
        el: 'Μεταλλικό νερό',
      },
      'water.dobra_voda': {
        mk: 'Добра Вода',
        en: 'Dobra Voda',
        el: 'Ντόμπρα Βόντα',
      },
      'water.rosa_1l': {
        mk: 'Rosa 1л',
        en: 'Rosa 1l',
        el: 'Ρόζα 1λ',
      },

      // Pasta products
      'pasta.bolognese': {
        mk: 'Болоњезе',
        en: 'Bolognese',
        el: 'Μπολονέζε',
      },
      'pasta.carbonara': {
        mk: 'Карбонаре',
        en: 'Carbonara',
        el: 'Καρμπονάρα',
      },
      'pasta.four_cheeses': {
        mk: '4 Вида Сирење',
        en: '4 Types of Cheese',
        el: '4 Τύποι Τυριού',
      },

      // Sandwich products
      'sandwich.reform_club': {
        mk: 'Реформ Клуб',
        en: 'Reform Club',
        el: 'Κλαμπ Reform',
      },
      'sandwich.reform_royal': {
        mk: 'Реформ Ројал',
        en: 'Reform Royal',
        el: 'Ρόγιαλ Reform',
      },
      'sandwich.new_york': {
        mk: 'Њујорк',
        en: 'New York',
        el: 'Νέα Υόρκη',
      },
      'sandwich.pepperoni': {
        mk: 'Пеперони',
        en: 'Pepperoni',
        el: 'Πεπερονί',
      },

      // Toast products
      'toast.ham_cheese': {
        mk: 'Шунка Кашкавал',
        en: 'Ham Cheese',
        el: 'Ζαμπόν Τυρί',
      },
      'toast.kulen_cheese': {
        mk: 'Кулен Кашкавал',
        en: 'Kulen Cheese',
        el: 'Κούλεν Τυρί',
      },
      'toast.neck_cheese': {
        mk: 'Врат Кашкавал',
        en: 'Neck Cheese',
        el: 'Λαιμός Τυρί',
      },
      'toast.roast_cheese': {
        mk: 'Печеница Кашкавал',
        en: 'Roast Cheese',
        el: 'Ψητό Τυρί',
      },
      'toast.fries_extra': {
        mk: 'Помфрит Додаток',
        en: 'Fries Extra',
        el: 'Πατάτες Επιπλέον',
      },
      'toast.fries_portion': {
        mk: 'Порција Помфрит',
        en: 'Fries Portion',
        el: 'Μερίδα Πατάτες',
      },

      // Appetizer products
      'appetizer.chicken_fingers': {
        mk: 'Пилешки прсти',
        en: 'Chicken Fingers',
        el: 'Δάχτυλα κοτόπουλο',
      },

      // Dessert products
      'dessert.pancake_cream_banana': {
        mk: 'Палачинка Крем Банана',
        en: 'Pancake Cream Banana',
        el: 'Κρέπα κρέμα μπανάνα',
      },
      'dessert.pancake_honey_nuts': {
        mk: 'Палачинка Мед Ореви',
        en: 'Pancake Honey Nuts',
        el: 'Κρέπα μέλι καρύδια',
      },
      'dessert.ice_cream_ball': {
        mk: 'Сладолед Топка',
        en: 'Ice Cream Ball',
        el: 'Μπάλα παγωτό',
      },

      // Risotto products
      'risotto.vegetable_risotto': {
        mk: 'Рижото со зеленчук',
        en: 'Vegetable Risotto',
        el: 'Ριζότο με λαχανικά',
      },
      'risotto.reform_risotto': {
        mk: 'Реформ Рижото',
        en: 'Reform Risotto',
        el: 'Ριζότο Reform',
      },
      'risotto.chicken_risotto': {
        mk: 'Пилешко Рижото',
        en: 'Chicken Risotto',
        el: 'Ριζότο κοτόπουλο',
      },

      // Ingredient descriptions
      'ingredients.caesar_salad': {
        mk: 'марула, шери, пченка, пилешко, пармезан, дресинг,кубети, маслиново масло',
        en: 'lettuce, croutons, corn, chicken, parmesan, dressing, olive oil',
        el: 'μαρούλι, κρουτόν, καλαμπόκι, κοτόπουλο, παρμεζάνα, σάλτσα, κρουτόν, ελαιόλαδο',
      },
      'ingredients.tuna_salad': {
        mk: 'марула,туна, маслинки, домат, кромид, пченка, лимон, дресинг, маслиново масло',
        en: 'lettuce, tuna, olives, tomato, onion, corn, lemon, dressing, olive oil',
        el: 'μαρούλι, τόνος, ελιές, ντομάτα, κρεμμύδι, καλαμπόκι, λεμόνι, σάλτσα, ελαιόλαδο',
      },
      'ingredients.greek_salad': {
        mk: 'домат,краставица, млад кормид, сирење, маслиново масло, оригано',
        en: 'tomato, cucumber, young onion, cheese, olive oil, oregano',
        el: 'ντομάτα, αγγούρι, νεαρό κρεμμύδι, τυρί, ελαιόλαδο, ρίγανη',
      },
      'ingredients.shop_salad': {
        mk: 'домат, краставица, млад кормид, сирење, маслиново масло',
        en: 'tomato, cucumber, young onion, cheese, olive oil',
        el: 'ντομάτα, αγγούρι, νεαρό κρεμμύδι, τυρί, ελαιόλαδο',
      },
      'ingredients.reform_breakfast': {
        mk: 'јајца, едамер, печурки, домат, пршута, масло за јадење, доматен сос',
        en: 'eggs, edam cheese, mushrooms, tomato, ham, cooking butter, tomato sauce',
        el: 'αυγά, τυρί εντάμ, μανιτάρια, ντομάτα, ζαμπόν, βούτυρο μαγειρέματος, σάλτσα ντομάτας',
      },
      'ingredients.omelet': {
        mk: 'јајца, домат, краставичка, додаток по избор, шунка, кашкавал, печурки, масло за јадење',
        en: 'eggs, tomato, cucumber, choice of addition, ham, cheese, mushrooms, cooking butter',
        el: 'αυγά, ντομάτα, αγγούρι, επιλογή προσθήκης, ζαμπόν, τυρί, μανιτάρια, βούτυρο μαγειρέματος',
      },
      'ingredients.brooklyn': {
        mk: 'лепче, шунка, кашкавал, сланина, шампињони, домат, масло за јадење',
        en: 'bread, ham, cheese, bacon, mushrooms, tomato, cooking butter',
        el: 'ψωμί, ζαμπόν, τυρί, μπέικον, μανιτάρια, ντομάτα, βούτυρο μαγειρέματος',
      },
      'ingredients.hamburger': {
        mk: 'говедска плескавица, марула, домат, краставица, помфрит, лепче',
        en: 'beef patty, lettuce, tomato, cucumber, fries, bread',
        el: 'κεφτεδάκι βοδινού, μαρούλι, ντομάτα, αγγούρι, πατάτες, ψωμί',
      },
      'ingredients.reform_cheeseburger': {
        mk: 'говедска плескавица, зденка, едамер, марула, помфрит, лепче',
        en: 'beef patty, bacon, edam cheese, lettuce, fries, bread',
        el: 'κεφτεδάκι βοδινού, μπέικον, τυρί εντάμ, μαρούλι, πατάτες, ψωμί',
      },
      'ingredients.manhattan_burger': {
        mk: 'говедска плескавица, сланина, кашкавал, марула, домат, кромид, помфрит, лепче',
        en: 'beef patty, bacon, cheese, lettuce, tomato, onion, fries, bread',
        el: 'κεφτεδάκι βοδινού, μπέικον, τυρί, μαρούλι, ντομάτα, κρεμμύδι, πατάτες, ψωμί',
      },
      'ingredients.american_classic': {
        mk: 'говедска плескавица, едамер, ббк сос, кисели краставички, марула, домат, помфрит, лепче',
        en: 'beef patty, edam cheese, bbq sauce, pickles, lettuce, tomato, fries, bread',
        el: 'κεφτεδάκι βοδινού, τυρί εντάμ, σάλτσα μπάρμπεκιου, πίκλες, μαρούλι, ντομάτα, πατάτες, ψωμί',
      },
      'ingredients.chicken_burger': {
        mk: 'пилешки стек, домат, краставица, марула, помфрит, лепче',
        en: 'chicken steak, tomato, cucumber, lettuce, fries, bread',
        el: 'μπριζόλα κοτόπουλο, ντομάτα, αγγούρι, μαρούλι, πατάτες, ψωμί',
      },
      'ingredients.pasta_bolognese': {
        mk: 'болоњезе сос, пармезан, шери, свеж босилек, тестенини по избор, маслиново масло',
        en: 'bolognese sauce, parmesan, croutons, fresh basil, pasta of choice, olive oil',
        el: 'σάλτσα μπολονέζε, παρμεζάνα, κρουτόν, φρέσκο βασιλικό, μακαρόνια επιλογής, ελαιόλαδο',
      },
      'ingredients.pasta_carbonara': {
        mk: 'панцета, јајца, пармезан, бел сос, магданос, свеж босилек, шери, тестенини по избор',
        en: 'pancetta, eggs, parmesan, white sauce, parsley, fresh basil, croutons, pasta of choice',
        el: 'παντσέτα, αυγά, παρμεζάνα, λευκή σάλτσα, μαϊντανός, φρέσκο βασιλικό, κρουτόν, μακαρόνια επιλογής',
      },
      'ingredients.pasta_four_cheeses': {
        mk: 'моцарела, горгонзота, пармезан, адамер, шери, магданос, маслиново масло, тестенини по избор',
        en: 'mozzarella, gorgonzola, parmesan, edam, croutons, parsley, olive oil, pasta of choice',
        el: 'μοτσαρέλα, γκοργκόνζολα, παρμεζάνα, εντάμ, κρουτόν, μαϊντανός, ελαιόλαδο, μακαρόνια επιλογής',
      },
      'ingredients.sandwich_reform_club': {
        mk: 'шунка, сланина, кашкавал, павлака, пармезан, домат, помфрит, лепче',
        en: 'ham, bacon, cheese, cream, parmesan, tomato, fries, bread',
        el: 'ζαμπόν, μπέικον, τυρί, κρέμα, παρμεζάνα, ντομάτα, πατάτες, ψωμί',
      },
      'ingredients.sandwich_reform_royal': {
        mk: 'пилешки стек, едамер, татар сос, марула, домати, помфрит, корнишон лепче',
        en: 'chicken steak, edam cheese, tartar sauce, lettuce, tomatoes, fries, cornichon bread',
        el: 'μπριζόλα κοτόπουλο, τυρί εντάμ, σάλτσα ταρτάρ, μαρούλι, ντομάτες, πατάτες, ψωμί κορνιχόν',
      },
      'ingredients.sandwich_new_york': {
        mk: 'печеница, едамер, павлака, салата, марула, помфрит, лепче',
        en: 'roast beef, edam cheese, cream, salad, lettuce, fries, bread',
        el: 'ψητό βοδινό, τυρί εντάμ, κρέμα, σαλάτα, μαρούλι, πατάτες, ψωμί',
      },
      'ingredients.sandwich_pepperoni': {
        mk: 'кулен, кашкавал, марула, домат, помфрит, лепче',
        en: 'kulen, cheese, lettuce, tomato, fries, bread',
        el: 'κούλεν, τυρί, μαρούλι, ντομάτα, πατάτες, ψωμί',
      },
      'ingredients.toast_ham_cheese': {
        mk: 'шунка, кашкавал, додаток по избор, лепче',
        en: 'ham, cheese, choice of addition, bread',
        el: 'ζαμπόν, τυρί, επιλογή προσθήκης, ψωμί',
      },
      'ingredients.toast_kulen_cheese': {
        mk: 'кулен, кашкавал, додаток по избор, лепче',
        en: 'kulen, cheese, choice of addition, bread',
        el: 'κούλεν, τυρί, επιλογή προσθήκης, ψωμί',
      },
      'ingredients.toast_neck_cheese': {
        mk: 'врат, кашкавал, додаток по избор, лепче',
        en: 'neck, cheese, choice of addition, bread',
        el: 'λαιμός, τυρί, επιλογή προσθήκης, ψωμί',
      },
      'ingredients.toast_roast_cheese': {
        mk: 'печеница, кашкавал, додаток по избор, лепче',
        en: 'roast beef, cheese, choice of addition, bread',
        el: 'ψητό βοδινό, τυρί, επιλογή προσθήκης, ψωμί',
      },
      'ingredients.chicken_fingers': {
        mk: 'пилешко брашно, јајце,презла, сусам,помфрит',
        en: 'chicken flour, egg, breadcrumbs, sesame, fries',
        el: 'αλεύρι κοτόπουλο, αυγό, τριμμένη φρυγανιά, σουσάμι, πατάτες',
      },
      'ingredients.pancake_cream_banana': {
        mk: 'крем банана',
        en: 'banana cream',
        el: 'κρέμα μπανάνα',
      },
      'ingredients.pancake_honey_nuts': {
        mk: 'мед, ореви',
        en: 'honey, nuts',
        el: 'μέλι, καρύδια',
      },
      'ingredients.ice_cream_ball': {
        mk: 'Сладолед',
        en: 'Ice Cream',
        el: 'Παγωτό',
      },
      'ingredients.risotto_vegetable': {
        mk: 'басамати ориз, мешан зеленчук, свежи шампињони, маслиново масло, сол, бибер',
        en: 'basmati rice, mixed vegetables, fresh mushrooms, olive oil, salt, pepper',
        el: 'ρύζι μπασμάτι, μικτά λαχανικά, φρέσκα μανιτάρια, ελαιόλαδο, αλάτι, πιπέρι',
      },
      'ingredients.risotto_reform': {
        mk: 'басамати ориз, пилешко, пармезан, свежи печурки, кинеска мешавина',
        en: 'basmati rice, chicken, parmesan, fresh mushrooms, chinese mix',
        el: 'ρύζι μπασμάτι, κοτόπουλο, παρμεζάνα, φρέσκα μανιτάρια, κινεζικό μίγμα',
      },
      'ingredients.risotto_chicken': {
        mk: 'ориз, пилешко месо, зеленчук, шери, свеж босилек, печурки, маслиново масло, пармезан',
        en: 'rice, chicken meat, vegetables, croutons, fresh basil, mushrooms, olive oil, parmesan',
        el: 'ρύζι, κρέας κοτόπουλο, λαχανικά, κρουτόν, φρέσκο βασιλικό, μανιτάρια, ελαιόλαδο, παρμεζάνα',
      },
    };

    const translation = translations[key as keyof typeof translations];
    if (translation && translation[language]) {
      return translation[language];
    }

    // Fallback to key if translation not found
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
