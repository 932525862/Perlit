import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const uz = {
  nav: {
    home: "Bosh sahifa",
    products: "Mahsulotlar",
    production: "Ishlab chiqarish",
    about: "Kompaniya haqida",
    contacts: "Kontaktlar",
    getQuote: "Bog‘lanish"
  },
  hero: {
    title: "Perlit — issiqlik izolyatsiyasi uchun eng yaxshi yechim",
    subtitle: "O'zbekiston bo'ylab va butun dunyo mamlakatlariga eksport qilamiz",
    description: "Qurilish, qishloq xo'jaligi, metallurgiya va sanoat uchun yuqori sifatli perlit ishlab chiqaramiz. -200°C dan +900°C gacha harorat diapazonida ishlatish mumkin.",
    cta: "Bog‘lanish",
    learnMore: "Batafsil"
  },
  perliteTypes: {
    badge: "Perlit turlari",
    title: "Perlit mahsulotlari",
    subtitle: "Har xil sohalar uchun turli fraksiya va zichlikdagi perlit ishlab chiqaramiz. Har bir tur o'ziga xos xususiyatlarga ega.",
    learnMore: "Batafsil",
    types: {
      filter: {
        name: "Filtr perlit",
        shortDesc: "Suyuqliklarni filtrlash uchun maxsus perlit",
        fullDesc: "Filtr perlit - suyuqliklarni tozalash uchun ishlatiladigan maxsus perlit turi. Oziq-ovqat sanoati, farmatsevtika, kimyo va neft-gaz sanoatida keng qo'llaniladi. Yuqori adsorbsiya qobiliyatiga ega.",
        use1: "Pivo va vino filtrlash",
        use2: "Oziq-ovqat moylari tozalash",
        use3: "Farmatsevtika sanoati",
        use4: "Suv tozalash tizimlari",
        use5: "Kimyoviy ishlab chiqarish",
        use6: "Neft mahsulotlarini tozalash"
      },
      small: {
        name: "Mayda perlit",
        shortDesc: "Qurilish aralashmalari uchun nozik fraksiya",
        fullDesc: "Mayda perlit quruq qurilish aralashmalari, suvaq va bo'yoqlar uchun ideal. 0.16-1.25 mm fraksiya. Yengil og'irligi va ajoyib issiqlik izolyatsiyasi xususiyatlari bilan ajralib turadi.",
        use1: "Quruq qurilish aralashmalari",
        use2: "Dekorativ suvaq",
        use3: "Issiqlik izolyatsion bo'yoqlar",
        use4: "Yengil beton",
        use5: "Pol qoplama aralashmalari",
        use6: "Ohak-suvaq aralashmalari"
      },
      medium: {
        name: "O'rta perlit",
        shortDesc: "Universal qo'llanish uchun optimal fraksiya",
        fullDesc: "O'rta perlit eng ko'p qo'llaniladigan tur. 1.25-2.5 mm fraksiya. Qurilishda issiqlik izolyatsiyasi, qishloq xo'jaligida tuproq yaxshilash va sanoatda to'ldiruvchi sifatida ishlatiladi.",
        use1: "Tom yopish izolyatsiyasi",
        use2: "Devor izolyatsiyasi",
        use3: "Qishloq xo'jaligi substratlari",
        use4: "Gidroponika tizimlari",
        use5: "Metallurgiya qoplamalari",
        use6: "Kriogen izolyatsiya"
      },
      large: {
        name: "Yirik perlit",
        shortDesc: "Katta hajmli izolyatsiya ishlari uchun",
        fullDesc: "Yirik perlit katta hajmli issiqlik izolyatsiyasi ishlari uchun ideal. 2.5-5.0 mm fraksiya. Sanoat ob'ektlari, quvurlar va idishlarni izolyatsiyalash uchun ishlatiladi.",
        use1: "Sanoat quvurlari izolyatsiyasi",
        use2: "Kriogen idishlar",
        use3: "Suv quvurlari muhofazasi",
        use4: "Katta hajmli to'ldirish",
        use5: "Sovuq omborlar izolyatsiyasi",
        use6: "Metallurgiya pechlar"
      }
    }
  },
  applications: {
    badge: "Qo'llanish sohalari",
    title: "Perlit qayerda ishlatiladi",
    subtitle: "Perlit o'zining noyob xususiyatlari tufayli turli sohalarda keng qo'llaniladi. Yengilligi, issiqlik izolyatsiyasi va yonmasligi uni ideal material qiladi.",
    tempMin: "Minimal harorat",
    tempMax: "Maksimal harorat",
    density: "Zichlik",
    fireClass: "Yonishsiz sinf",
    items: {
      construction: {
        title: "Qurilish",
        description: "Yengil beton, issiqlik izolyatsion suvaq va quruq aralashmalar ishlab chiqarish"
      },
      insulation: {
        title: "Issiqlik izolyatsiyasi",
        description: "Binolar, quvurlar va sanoat uskunalari uchun samarali izolyatsiya"
      },
      fireproof: {
        title: "Yong'inga chidamlilik",
        description: "A1 sinf yonmaydigan material, +900°C gacha chidaydi"
      },
      agriculture: {
        title: "Qishloq xo'jaligi",
        description: "Tuproqni yaxshilash, gidroponika va o'simliklar uchun substrat"
      },
      filtration: {
        title: "Filtrlash",
        description: "Oziq-ovqat, farmatsevtika va kimyo sanoatida suyuqliklarni tozalash"
      },
      metallurgy: {
        title: "Metallurgiya",
        description: "Eritilgan metallni izolyatsiyalash va qoplash aralashmalari"
      },
      cryogenic: {
        title: "Kriogen texnika",
        description: "Suyultirilgan gazlar va sovuq saqlash uchun -200°C gacha izolyatsiya"
      },
      chemical: {
        title: "Kimyo sanoati",
        description: "Katalizatorlar, to'ldiruvchilar va adsorbentlar ishlab chiqarish"
      }
    },
    construction: {
      title: "Qurilishda perlit qo'llanilishi",
      items: {
        plaster: "Issiqlik izolyatsion suvaq — devorlarni sovuqdan himoya qiladi",
        concrete: "Yengil beton — oddiy betondan 2-3 marta yengil",
        blocks: "Issiqlik bloklar — qurilish tezligini oshiradi",
        roofing: "Tom izolyatsiyasi — issiqlik yo'qotishni 40% ga kamaytiradi",
        floors: "Pol izolyatsiyasi — ovoz va issiqlik izolyatsiyasi"
      }
    }
  },
  production: {
    title: "Ishlab chiqarish jarayoni",
    subtitle: "Zamonaviy uskunalar va ISO standartlariga muvofiq perlit ishlab chiqaramiz",
    processTitle: "Perlit ishlab chiqarish bosqichlari",
    processSubtitle: "Xom ashyoni qazib olishdan tayyor mahsulotgacha bo'lgan to'liq tsikl",
    factoryBadge: "Zavodlarimiz",
    factoryTitle: "Zamonaviy ishlab chiqarish",
    factoryDescription: "Bizning zavodlarimiz eng yangi texnologiyalar bilan jihozlangan. Sifat nazorati har bir bosqichda amalga oshiriladi.",
    galleryTitle: "Zavod fotolari",
    imageComingSoon: "Rasm tez orada",
    steps: {
      mining: {
        title: "Xom ashyo qazib olish",
        description: "Perlit vulkanik tog' jinslaridan qazib olinadi. Sifatli xom ashyo tanlash muhim."
      },
      crushing: {
        title: "Maydalash",
        description: "Xom ashyo maxsus uskunalarda kerakli o'lchamga maydalanadi."
      },
      heating: {
        title: "Qizdirish",
        description: "Maydalangan perlit 850-1100°C haroratgacha qizdiriladi."
      },
      expansion: {
        title: "Kengayish",
        description: "Yuqori haroratda perlit 10-20 marta kengayadi va yengil bo'ladi."
      },
      classification: {
        title: "Saralash",
        description: "Tayyor perlit fraksiya bo'yicha saralanadi: mayda, o'rta, yirik."
      },
      packaging: {
        title: "Qadoqlash",
        description: "Mahsulot big-bag yoki boshqa qadoqlarga joylashtiriladi."
      }
    },
    factory: {
      quality: "Har bir partiya laboratoriyada tekshiriladi",
      equipment: "Germaniya va Italiya uskunalari",
      control: "Avtomatlashtirilgan sifat nazorati",
      capacity: "Oyiga 5000 m³ dan ortiq ishlab chiqarish"
    },
    stats: {
      factories: "Zavodlar soni",
      operation: "Uzluksiz ish",
      certified: "Sertifikatlangan",
      experience: "Yillik tajriba"
    }
  },
  productDetail: {
    backToProducts: "Mahsulotlarga qaytish",
    grades: "Markalar",
    getQuote: "Bog‘lanish",
    specifications: "Texnik xususiyatlar",
    fraction: "Fraksiya",
    density: "Zichlik",
    tempRange: "Harorat diapazoni",
    fireClass: "Yonish sinfi",
    usageAreas: "Qo'llanish sohalari"
  },
  whyUs: {
    title: "Nega bizni tanlashadi",
    subtitle: "Ishonchli hamkor bo'lishimizning sabablari",
    items: {
      factories: {
        title: "5 ta zavod",
        description: "Butun mamlakat bo'ylab ishlab chiqarish maydonlari"
      },
      fullCycle: {
        title: "To'liq tsikl",
        description: "Xom ashyoni olib kelamiz, ishlab chiqaramiz, qadoqlaymiz va yetkazamiz"
      },
      flexibility: {
        title: "Moslashuvchanlik",
        description: "Kerakli zichlik, fraksiya va elaklarni ishlab chiqaramiz"
      },
      dealers: {
        title: "7 ta diler",
        description: "RF va MDH mamlakatlarida chakana buyurtmalar uchun"
      },
      testing: {
        title: "Sinov",
        description: "Mahsulot namunalarini bepul beramiz"
      },
      delivery: {
       title: "Yuk mashinalari",
description: "Agar mahsulotlarni olib ketish uchun yuk mashinangiz bo‘lmasa, biz o‘zimiz ta’minlab beramiz."

      },
      loyalty: {
        title: "Sodiqlik",
        description: "To'lov kechiktirish va doimiy mijozlarga chegirmalar"
      },
      certification: {
        title: "Sertifikatlash",
        description: "GOST va ISO bo'yicha ishlab chiqaramiz"
      }
    }
  },
  about: {
    title: "Kompaniya haqida",
    subtitle: "Perlit ishlab chiqarishda yetakchi",
    description: "Biz O'zbekiston va MDH mamlakatlariga perlit ishlab chiqarish va yetkazib berishning to'liq tsiklini taqdim etamiz. 15 yildan ortiq tajriba.",
    experience: "Yillik tajriba",
    clients: "Mamnun mijozlar",
    countries: "Eksport mamlakatlari"
  },
  contact: {
    title: "Biz bilan bog'laning",
    subtitle: "Savollaringizga javob beramiz",
    phone: "Telefon",
    email: "Elektron pochta",
    address: "Manzil",
    addressValue: "Toshkent, O'zbekiston",
    form: {
      name: "Ismingiz",
      phone: "Telefon raqamingiz",
      message: "Xabaringiz",
      submit: "Yuborish",
      success: "Xabaringiz yuborildi!"
    }
  },
  footer: {
    rights: "Barcha huquqlar himoyalangan",
    company: "Perlite Group",
    description: "Perlit ishlab chiqarish va yetkazib berish",
    perlit1: "Filtr perlit",
    perlit2 : "Mayda perlit",
    perlit3 : "O'rta perlit",
    perlit4 : "Yirik perlit",
    

  },
  notFound: "Sahifa topilmadi",
  backToHome: "Bosh sahifaga qaytish"
};

const ru = {
  nav: {
    home: "Главная",
    products: "Продукция",
    production: "Производство",
    about: "О компании",
    contacts: "Контакты",
    getQuote: "Контакты"
  },
  hero: {
    title: "Перлит — лучшее решение для теплоизоляции",
    subtitle: "По Узбекистану и экспорт во все страны мира",
    description: "Производим высококачественный перлит для строительства, сельского хозяйства, металлургии и промышленности. Диапазон применения от -200°C до +900°C.",
    cta: "Контакты",
    learnMore: "Подробнее"
  },
  perliteTypes: {
    badge: "Виды перлита",
    title: "Продукция из перлита",
    subtitle: "Производим перлит различных фракций и плотностей для разных отраслей. Каждый вид имеет уникальные характеристики.",
    learnMore: "Подробнее",
    types: {
      filter: {
        name: "Фильтроперлит",
        shortDesc: "Специальный перлит для фильтрации жидкостей",
        fullDesc: "Фильтроперлит — специальный вид перлита для очистки жидкостей. Широко применяется в пищевой промышленности, фармацевтике, химии и нефтегазовой отрасли. Обладает высокой адсорбционной способностью.",
        use1: "Фильтрация пива и вина",
        use2: "Очистка пищевых масел",
        use3: "Фармацевтическая промышленность",
        use4: "Системы водоочистки",
        use5: "Химическое производство",
        use6: "Очистка нефтепродуктов"
      },
      small: {
        name: "Мелкий перлит",
        shortDesc: "Тонкая фракция для строительных смесей",
        fullDesc: "Мелкий перлит идеален для сухих строительных смесей, штукатурок и красок. Фракция 0.16-1.25 мм. Отличается лёгким весом и отличными теплоизоляционными свойствами.",
        use1: "Сухие строительные смеси",
        use2: "Декоративная штукатурка",
        use3: "Теплоизоляционные краски",
        use4: "Лёгкий бетон",
        use5: "Смеси для стяжки пола",
        use6: "Известково-штукатурные смеси"
      },
      medium: {
        name: "Средний перлит",
        shortDesc: "Оптимальная фракция для универсального применения",
        fullDesc: "Средний перлит — наиболее востребованный вид. Фракция 1.25-2.5 мм. Применяется в строительстве для теплоизоляции, в сельском хозяйстве для улучшения почвы и в промышленности как наполнитель.",
        use1: "Теплоизоляция кровли",
        use2: "Изоляция стен",
        use3: "Сельскохозяйственные субстраты",
        use4: "Гидропонные системы",
        use5: "Металлургические покрытия",
        use6: "Криогенная изоляция"
      },
      large: {
        name: "Крупный перлит",
        shortDesc: "Для крупномасштабных изоляционных работ",
        fullDesc: "Крупный перлит идеален для крупномасштабных теплоизоляционных работ. Фракция 2.5-5.0 мм. Используется для изоляции промышленных объектов, трубопроводов и ёмкостей.",
        use1: "Изоляция промышленных трубопроводов",
        use2: "Криогенные ёмкости",
        use3: "Защита водопроводов",
        use4: "Крупнообъёмная засыпка",
        use5: "Изоляция холодильных камер",
        use6: "Металлургические печи"
      }
    }
  },
  applications: {
    badge: "Области применения",
    title: "Где применяется перлит",
    subtitle: "Перлит широко применяется в различных отраслях благодаря своим уникальным свойствам. Лёгкость, теплоизоляция и негорючесть делают его идеальным материалом.",
    tempMin: "Минимальная температура",
    tempMax: "Максимальная температура",
    density: "Плотность",
    fireClass: "Негорючий класс",
    items: {
      construction: {
        title: "Строительство",
        description: "Производство лёгкого бетона, теплоизоляционной штукатурки и сухих смесей"
      },
      insulation: {
        title: "Теплоизоляция",
        description: "Эффективная изоляция зданий, трубопроводов и промышленного оборудования"
      },
      fireproof: {
        title: "Огнестойкость",
        description: "Негорючий материал класса A1, выдерживает до +900°C"
      },
      agriculture: {
        title: "Сельское хозяйство",
        description: "Улучшение почвы, гидропоника и субстраты для растений"
      },
      filtration: {
        title: "Фильтрация",
        description: "Очистка жидкостей в пищевой, фармацевтической и химической промышленности"
      },
      metallurgy: {
        title: "Металлургия",
        description: "Изоляция расплавленного металла и покровные смеси"
      },
      cryogenic: {
        title: "Криогенная техника",
        description: "Изоляция до -200°C для сжиженных газов и холодного хранения"
      },
      chemical: {
        title: "Химическая промышленность",
        description: "Производство катализаторов, наполнителей и адсорбентов"
      }
    },
    construction: {
      title: "Применение перлита в строительстве",
      items: {
        plaster: "Теплоизоляционная штукатурка — защищает стены от холода",
        concrete: "Лёгкий бетон — в 2-3 раза легче обычного бетона",
        blocks: "Теплоблоки — ускоряют строительство",
        roofing: "Изоляция кровли — снижает теплопотери на 40%",
        floors: "Изоляция пола — звуко- и теплоизоляция"
      }
    }
  },
  production: {
    title: "Процесс производства",
    subtitle: "Производим перлит на современном оборудовании в соответствии со стандартами ISO",
    processTitle: "Этапы производства перлита",
    processSubtitle: "Полный цикл от добычи сырья до готовой продукции",
    factoryBadge: "Наши заводы",
    factoryTitle: "Современное производство",
    factoryDescription: "Наши заводы оснащены новейшими технологиями. Контроль качества осуществляется на каждом этапе.",
    galleryTitle: "Фото завода",
    imageComingSoon: "Фото скоро",
    steps: {
      mining: {
        title: "Добыча сырья",
        description: "Перлит добывается из вулканических горных пород. Важен выбор качественного сырья."
      },
      crushing: {
        title: "Дробление",
        description: "Сырьё измельчается на специальном оборудовании до нужного размера."
      },
      heating: {
        title: "Нагрев",
        description: "Измельчённый перлит нагревается до температуры 850-1100°C."
      },
      expansion: {
        title: "Вспучивание",
        description: "При высокой температуре перлит расширяется в 10-20 раз и становится лёгким."
      },
      classification: {
        title: "Сортировка",
        description: "Готовый перлит сортируется по фракциям: мелкий, средний, крупный."
      },
      packaging: {
        title: "Упаковка",
        description: "Продукция упаковывается в биг-бэги или другую тару."
      }
    },
    factory: {
      quality: "Каждая партия проверяется в лаборатории",
      equipment: "Оборудование из Германии и Италии",
      control: "Автоматизированный контроль качества",
      capacity: "Более 5000 м³ в месяц"
    },
    stats: {
      factories: "Количество заводов",
      operation: "Непрерывная работа",
      certified: "Сертифицировано",
      experience: "Лет опыта"
    }
  },
  productDetail: {
    backToProducts: "Вернуться к продукции",
    grades: "Марки",
    getQuote: "Контакты",
    specifications: "Технические характеристики",
    fraction: "Фракция",
    density: "Плотность",
    tempRange: "Диапазон температур",
    fireClass: "Класс горючести",
    usageAreas: "Области применения"
  },
  whyUs: {
    title: "Почему нас выбирают",
    subtitle: "Причины стать нашим партнёром",
    items: {
      factories: {
        title: "5 заводов",
        description: "Производственные площадки по всей стране"
      },
      fullCycle: {
        title: "Полный цикл",
        description: "Ввозим сырьё, производим, фасуем и доставляем"
      },
      flexibility: {
        title: "Гибкость",
        description: "Делаем продукцию нужной плотности, фракции и рассева"
      },
      dealers: {
        title: "7 дилеров",
        description: "В РФ и странах СНГ для розничных заказов"
      },
      testing: {
        title: "Тестирование",
        description: "Бесплатно даём образцы продукции на пробу"
      },
      delivery: {
        title: "Грузовые автомобили",
description: "Если у вас нет грузовика для вывоза продукции, мы предоставим его сами."

      },
      loyalty: {
        title: "Лояльность",
        description: "Отсрочка платежа и скидки постоянным клиентам"
      },
      certification: {
        title: "Сертификация",
        description: "Производим по ГОСТ и ISO, собственные патенты"
      }
    }
  },
  about: {
    title: "О компании",
    subtitle: "Лидер в производстве перлита",
    description: "Мы предоставляем полный цикл производства и поставки перлита по Узбекистану и странам СНГ. Более 15 лет опыта.",
    experience: "Лет опыта",
    clients: "Довольных клиентов",
    countries: "Стран экспорта"
  },
  contact: {
    title: "Свяжитесь с нами",
    subtitle: "Ответим на ваши вопросы",
    phone: "Телефон",
    email: "Эл. почта",
    address: "Адрес",
    addressValue: "Ташкент, Узбекистан",
    form: {
      name: "Ваше имя",
      phone: "Номер телефона",
      message: "Сообщение",
      submit: "Отправить",
      success: "Сообщение отправлено!"
    }
  },
  footer: {
    rights: "Все права защищены",
    company: "Perlite Group",
    description: "Производство и поставка перлита",
    perlit1: "Фильтрационный перлит",
    perlit2: "Мелкий перлит",
   perlit3: "Средний перлит",
   perlit4: "Крупный перлит"
  },
  notFound: "Страница не найдена",
  backToHome: "Вернуться на главную"
};

const en = {
  nav: {
    home: "Home",
    products: "Products",
    production: "Production",
    about: "About Us",
    contacts: "Contacts",
    getQuote: "Contacts Us"
  },
  hero: {
    title: "Perlite — the best solution for thermal insulation",
    subtitle: "Throughout Uzbekistan and export worldwide",
    description: "We produce high-quality perlite for construction, agriculture, metallurgy and industry. Application range from -200°C to +900°C.",
    cta: "Contact Us",
    learnMore: "Learn More"
  },
  perliteTypes: {
    badge: "Perlite Types",
    title: "Perlite Products",
    subtitle: "We produce perlite of various fractions and densities for different industries. Each type has unique characteristics.",
    learnMore: "Learn More",
    types: {
      filter: {
        name: "Filter Perlite",
        shortDesc: "Special perlite for liquid filtration",
        fullDesc: "Filter perlite is a special type of perlite for liquid purification. Widely used in food industry, pharmaceuticals, chemistry and oil & gas. Has high adsorption capacity.",
        use1: "Beer and wine filtration",
        use2: "Food oils purification",
        use3: "Pharmaceutical industry",
        use4: "Water treatment systems",
        use5: "Chemical production",
        use6: "Oil products purification"
      },
      small: {
        name: "Fine Perlite",
        shortDesc: "Fine fraction for construction mixes",
        fullDesc: "Fine perlite is ideal for dry construction mixes, plasters and paints. Fraction 0.16-1.25 mm. Distinguished by light weight and excellent thermal insulation properties.",
        use1: "Dry construction mixes",
        use2: "Decorative plaster",
        use3: "Thermal insulation paints",
        use4: "Lightweight concrete",
        use5: "Floor screed mixes",
        use6: "Lime-plaster mixes"
      },
      medium: {
        name: "Medium Perlite",
        shortDesc: "Optimal fraction for universal application",
        fullDesc: "Medium perlite is the most demanded type. Fraction 1.25-2.5 mm. Used in construction for thermal insulation, in agriculture for soil improvement and in industry as filler.",
        use1: "Roof thermal insulation",
        use2: "Wall insulation",
        use3: "Agricultural substrates",
        use4: "Hydroponic systems",
        use5: "Metallurgical coatings",
        use6: "Cryogenic insulation"
      },
      large: {
        name: "Coarse Perlite",
        shortDesc: "For large-scale insulation works",
        fullDesc: "Coarse perlite is ideal for large-scale thermal insulation works. Fraction 2.5-5.0 mm. Used for insulation of industrial facilities, pipelines and vessels.",
        use1: "Industrial pipeline insulation",
        use2: "Cryogenic vessels",
        use3: "Water pipe protection",
        use4: "Large-volume filling",
        use5: "Cold storage insulation",
        use6: "Metallurgical furnaces"
      }
    }
  },
  applications: {
    badge: "Application Areas",
    title: "Where Perlite is Used",
    subtitle: "Perlite is widely used in various industries due to its unique properties. Lightness, thermal insulation and non-combustibility make it an ideal material.",
    tempMin: "Minimum temperature",
    tempMax: "Maximum temperature",
    density: "Density",
    fireClass: "Non-combustible class",
    items: {
      construction: {
        title: "Construction",
        description: "Production of lightweight concrete, thermal insulation plaster and dry mixes"
      },
      insulation: {
        title: "Thermal Insulation",
        description: "Effective insulation of buildings, pipelines and industrial equipment"
      },
      fireproof: {
        title: "Fire Resistance",
        description: "Non-combustible A1 class material, withstands up to +900°C"
      },
      agriculture: {
        title: "Agriculture",
        description: "Soil improvement, hydroponics and plant substrates"
      },
      filtration: {
        title: "Filtration",
        description: "Liquid purification in food, pharmaceutical and chemical industries"
      },
      metallurgy: {
        title: "Metallurgy",
        description: "Molten metal insulation and covering mixes"
      },
      cryogenic: {
        title: "Cryogenic Engineering",
        description: "Insulation down to -200°C for liquefied gases and cold storage"
      },
      chemical: {
        title: "Chemical Industry",
        description: "Production of catalysts, fillers and adsorbents"
      }
    },
    construction: {
      title: "Perlite Application in Construction",
      items: {
        plaster: "Thermal insulation plaster — protects walls from cold",
        concrete: "Lightweight concrete — 2-3 times lighter than regular concrete",
        blocks: "Thermal blocks — speed up construction",
        roofing: "Roof insulation — reduces heat loss by 40%",
        floors: "Floor insulation — sound and thermal insulation"
      }
    }
  },
  production: {
    title: "Production Process",
    subtitle: "We produce perlite on modern equipment in accordance with ISO standards",
    processTitle: "Perlite Production Stages",
    processSubtitle: "Full cycle from raw material extraction to finished product",
    factoryBadge: "Our Factories",
    factoryTitle: "Modern Production",
    factoryDescription: "Our factories are equipped with the latest technologies. Quality control is carried out at every stage.",
    galleryTitle: "Factory Photos",
    imageComingSoon: "Photo coming soon",
    steps: {
      mining: {
        title: "Raw Material Extraction",
        description: "Perlite is extracted from volcanic rocks. Selection of quality raw materials is important."
      },
      crushing: {
        title: "Crushing",
        description: "Raw material is crushed on special equipment to the required size."
      },
      heating: {
        title: "Heating",
        description: "Crushed perlite is heated to a temperature of 850-1100°C."
      },
      expansion: {
        title: "Expansion",
        description: "At high temperature, perlite expands 10-20 times and becomes light."
      },
      classification: {
        title: "Sorting",
        description: "Finished perlite is sorted by fractions: fine, medium, coarse."
      },
      packaging: {
        title: "Packaging",
        description: "Products are packed in big bags or other containers."
      }
    },
    factory: {
      quality: "Each batch is tested in the laboratory",
      equipment: "Equipment from Germany and Italy",
      control: "Automated quality control",
      capacity: "More than 5000 m³ per month"
    },
    stats: {
      factories: "Number of factories",
      operation: "Continuous operation",
      certified: "Certified",
      experience: "Years of experience"
    }
  },
  productDetail: {
    backToProducts: "Back to Products",
    grades: "Grades",
    getQuote: "Contact Us",
    specifications: "Technical Specifications",
    fraction: "Fraction",
    density: "Density",
    tempRange: "Temperature Range",
    fireClass: "Fire Class",
    usageAreas: "Application Areas"
  },
  whyUs: {
    title: "Why Choose Us",
    subtitle: "Reasons to become our partner",
    items: {
      factories: {
        title: "5 Factories",
        description: "Production facilities across the country"
      },
      fullCycle: {
        title: "Full Cycle",
        description: "Import raw materials, produce, pack and deliver"
      },
      flexibility: {
        title: "Flexibility",
        description: "We make products of required density, fraction and screening"
      },
      dealers: {
        title: "7 Dealers",
        description: "In CIS countries for retail orders"
      },
      testing: {
        title: "Testing",
        description: "Free product samples for trial"
      },
      delivery: {
       title: "Trucks",
description: "If you don't have a truck to transport the products, we will provide one ourselves."
        
      },
      loyalty: {
        title: "Loyalty",
        description: "Payment deferral and discounts for regular customers"
      },
      certification: {
        title: "Certification",
        description: "Production according to GOST and ISO standards"
      }
    }
  },
  about: {
    title: "About Company",
    subtitle: "Leader in perlite production",
    description: "We provide a full cycle of perlite production and delivery throughout Uzbekistan and CIS countries. Over 15 years of experience.",
    experience: "Years of Experience",
    clients: "Satisfied Clients",
    countries: "Export Countries"
  },
  contact: {
    title: "Contact Us",
    subtitle: "We'll answer your questions",
    phone: "Phone",
    email: "Email",
    address: "Address",
    addressValue: "Tashkent, Uzbekistan",
    form: {
      name: "Your Name",
      phone: "Phone Number",
      message: "Message",
      submit: "Send",
      success: "Message sent!"
    }
  },
  footer: {
    rights: "All rights reserved",
    company: "Perlite Group",
    description: "Production and delivery of perlite",
    perlit1: "Filtration perlite",
    perlit2: "Fine perlite",
    perlit3: "Medium perlite",
    perlit4: "Coarse perlite"
  },
  notFound: "Page not found",
  backToHome: "Back to Home"
};

const resources = {
  uz: { translation: uz },
  ru: { translation: ru },
  en: { translation: en },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
