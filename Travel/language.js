let currentLanguage = localStorage.getItem("language") || "en";
const translations = {
  en: {
    homeNav: "Home",
    hotelsNav: "Hotels",
    destinationNav: "Destination",
    contactNav: "Contact",
    aboutNav: "About",

    heroFirstParagraph: "Travel around the world",
    heroHeading: "Travel beyond the limits to ",
    explore: "A beautiful beach",
    exploreHeading: "Explore the world",
    exploreParagraph:
      "Travel to the most beautiful places in the world and enjoy your time",
    bookBtn: "Book Now",
    destinations: "Popular Destinations...",
    destinationsHeading: "We Provide Top Destinations",
    bestDestinations: "Destinations",
    place1: "Italy",
    place1Paragraph:
      "Italy is a country consisting of a peninsula delimited by the Alps and several islands surrounding it, including Sicily and Sardinia.",
    place2: "China",
    place2Paragraph:
      "China is a country in East Asia. It is the world's most populous country, with a population of more than 1.4 billion.",
    place3: "India",
    place3Paragraph:
      "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by land area, the second-most populous country, and the most populous democracy in the world.",
    place4: "Egypt",
    place5: "New York",
    place6: "Maldive",
    viewAllBtn: "View All",
    ourService: "Our Service...",
    servicesHeading: "Services We Offer",
    serrvice1: "Hotel",
    serrvice1Paragraph:
      "The best hotels that provide you with comfort and relaxation",
    serrvice2: "Food",
    serrvice2Paragraph: "Delicious food that suits all tastes",
    serrvice3: "Flights",
    serrvice3Paragraph: "Flights that provide you with comfort and safety",
    serrvice4: "Transport",
    serrvice4Paragraph:
      "Various means of transportation that provide you with comfort and safety",
    serrvice5: "Guides",
    serrvice5Paragraph:
      "Tourist guides that provide you with comfort and safety",
    serrvice6: "Beaches",
    serrvice6Paragraph:
      "White sandy beaches that provide you with comfort and safety",
    serrvice7: "Mountains",
    serrvice7Paragraph:
      "High mountains that provide you with comfort and safety",
    serrvice8: "Cities",
    serrvice8Paragraph:
      "  Tourist cities that provide you with comfort and safety",
    helpText: "We are here to help you",
    contactBtn: "Contact Us",
    hotels: "Hotels...",

    popularHotelsAnt: "Antalya hotels",
    istanbulhotels: "Istanbul hotels",
    Bodromhotels: "Bodrom hotels",

    Trabzonhotels: "Trabzon hotels",
    Dubaihotels: "Dubai hotels",
    Ammanhotels: "Amman hotels",

    DeadSeahotels: "Dead Sea hotels",
    istanbulhotels: "Istanbul hotels",
    Bodromhotels: "Bodrom hotels",

    Mekkahhotels: "Mekkah hotels",

    // istanbulhotels: "Istanbul hotels",
    // Bodromhotels:"Bodrom hotels",

    Antalya: "Antalya",

    bestHotels: "Our Best Hotels",

    hotel1: "The Peninsula",
    hotel1Paragraph: "",
    hotel2: "Mandarin Oriental Bosphorus",
    hotel2Paragraph: "",
    hotel3: "Four Seasons Istanbul",
    hotel3Paragraph: "",
    hotel4: "Raffles Hotel Istanbul",
    hotel5: "Ciragan Palace Kempinski",
    hotel6: "Maxx Royal Belek Golf Resort",
    hotel7: "Rixos Premium Belek",
    hotel8: "The Land Of Legends",
    hotel9: "Titanic Mardan Palace",
    hotel10: "Calista Luxury Resort",
    hotel11: "Lujo Hotel Bodrum",
    hotel12: "Susona Bodrum",
    hotel13: "Be Premium Bodrum",
    hotel14: "Swissôtel Resort Bodrum Beach",
    hotel15: "Radisson Blu Hotel Trabzon",
    hotel16: "Ramada Plaza by Wyndham Trabzon",
    hotel17: "DoubleTree by Hilton Trabzon",
    hotel18: "Zorlu Grand Hotel Trabzon",
    hotel19: "Burj Al Arab Jumeirah ",
    hotel20: "Mandarin Oriental Jumeirah Dubai ",
    hotel21: "Atlantis, The Palm",
    hotel22: "The Ritz Carlton Dubai ",
    hotel23: "Rixos Premium Dubai JBR ",
    hotel24: "The Ritz-Carlton, Amman",
    hotel25: "Four Seasons Hotel Amman",
    hotel26: "The St. Regis Amman",
    hotel27: "Kempinski Ishtar Hotel Dead Sea",
    hotel28: "Hilton Dead Sea Resort & Spa",
    hotel29: "Dead Sea Marriott Resort & Spa",
    hotel30: "Mövenpick Dead Sea Jordan",
    hotel31: "Crowne Plaza Dead Sea",
    hotel32: "Raffles Makkah Palace",
    hotel33: "Swissôtel Hotel Makkah",
    hotel34: "Jumeirah Jabal Omar Makkah",
    hotel35: "Address Jabal Omar Makkah",
    hotel36: "Conrad Makkah",

    travel: "Tikram Travel",
    footerParagraph:
      "Our mission is to provide the best travel experience to our customers. We believe that travel is a way to build memories and relationships.",
    quickLinks: "Quick Links",
    contact: "Contact Us",
    location:
      "123, Lorem ipsum dolor sit, consectetur adipiscing elit, United States",
    getInTouch: "Get in Touch",
    addressHeading: "Address",
    phoneHeading: "Phone",
    emailHeading: "Email",
    contactInfo: "Contact Information",

    about: "About Us",
    aboutUs: "About Us...",
    aboutHeading: "About Our Company",
    aboutUsParagraph:
      "We are a travel company that provides the best travel experience to our customers. We believe that travel is a way to build memories and relationships.",
    whyChooseUs: "Why Choose Us",
    whyChooseUsHeading: "Why Choose Us",
    whyChooseUsParagraph:
      "We provide the best travel experience to our customers. We believe that travel is a way to build memories and relationships.",
    whyChooseUs1: "Quality Service",
    whyChooseUs1paragraph:
      "We provide the best quality service to our customers.",
    whyChooseUs2: "Best Price",
    whyChooseUs2paragraph: "We offer the best price for our customers.",
    whyChooseUs3: "24/7 Support",
    whyChooseUs3paragraph: "We provide 24/7 support to our customers.",
  },
  ar: {
    homeNav: "الصفحة الرئيسية",
    hotelsNav: "فنادق",
    destinationNav: "الوجهات",
    contactNav: "اتصل بنا",
    aboutNav: "اعرف عنا",

    heroFirstParagraph: "سافر حول العالم",
    heroHeading: "انطلق في مغامرة عالمية إلى",
    explore: "شاطئ جميل",
    exploreHeading: "انطلق في مغامرة عالمية",
    exploreParagraph: "سافر إلى أجمل الأماكن في العالم واستمتع بوقتك",
    bookBtn: "حقق حلم السفر اليوم",
    destinations: "وجهات سفر مميزة...",
    destinationsHeading: "استكشف وجهات سفر لا تُنسى",
    bestDestinations: "أفضل الوجهات",
    place1: "إيطاليا",
    place1Paragraph:
      "إيطاليا هي دولة تتألف من شبه جزيرة محددة بسلسلة جبال الألب وعدة جزر تحيط بها، بما في ذلك صقلية وسردينيا.",
    place2: "الصين",
    place2Paragraph:
      "الصين هي دولة في شرق آسيا. إنها أكبر دولة من حيث عدد السكان في العالم، بسكان يزيد عن 1.4 مليار نسمة.",
    place3: "الهند",
    place3Paragraph:
      "الهند، رسميًا جمهورية الهند، هي دولة في جنوب آسيا. إنها سابع أكبر دولة من حيث المساحة البرية، وثاني أكبر دولة من حيث عدد السكان، وأكبر دولة ديمقراطية من حيث عدد السكان في العالم.",
    place4: "مصر",
    place5: "نيويورك",
    place6: "المالديف",
    place3Paragraph:
      "دبي هي إمارة تقع في الجزء الشمالي الشرقي من دولة الإمارات العربية المتحدة، وهي إمارة تشكل مع أبوظبي الإمارتين اللتين تشكلان الدولة.",
    viewAllBtn: "عرض الكل",
    ourService: "خدماتنا...",
    servicesHeading: "الخدمات التي نقدمها",
    serrvice1: "فندق",
    serrvice1Paragraph: "الفنادق المميزة التي توفر لك الراحة والاسترخاء",
    serrvice2: "طعام",
    serrvice2Paragraph: "المأكولات الشهية التي تناسب جميع الأذواق",
    serrvice3: "رحلات جوية",
    serrvice3Paragraph: "الرحلات الجوية التي توفر لك الراحة والأمان",
    serrvice4: "نقل",
    serrvice4Paragraph: "وسائل النقل المتنوعة التي توفر لك الراحة والأمان",
    serrvice5: "دليل سياحي",
    serrvice5Paragraph: "الدلائل السياحية التي توفر لك الراحة والأمان",
    serrvice6: "شواطئ",
    serrvice6Paragraph: "الشواطئ الرملية البيضاء التي توفر لك الراحة والأمان",
    serrvice7: "جبال",
    serrvice7Paragraph: " الجبال الشاهقة التي توفر لك الراحة والأمان",
    serrvice8: "مدن",
    serrvice8Paragraph: "المدن السياحية التي توفر لك الراحة والأمان",
    helpText: "نحن هنا لمساعدتك",
    contactBtn: "تواصل معنا لتحقيق رحلتك المثالية",
    hotels: "فنادق...",
    popularHotels1: "فنادق شهيرة",
    Antalya: "انطاليا",
    bestHotels: "أفضل فنادقنا",
    hotel1: "ذا بانينسولا",
    hotel1Paragraph:
      "يقع فندق ذا بينينسولا إسطنبول على طول الواجهة البحرية لمضيق البوسفور في منطقة كاراكوي التاريخية، ويقدم عرضًا للثقافة التركية النابضة بالحياة والضيافة الفائقة داخل ميناء غلطة، وهو مشروع جديد لتنشيط الواجهة البحرية. يتكون الفندق من أربعة مباني رائعة - ثلاثة منها تاريخية وتم ترميمها بشكل جميل - ويرحب بالضيوف القادمين عن طريق البر أو البحر.",
    hotel2: "ماندارين أورينتال بوسفور",
    hotel2Paragraph:
      "أتلانتس النخلة، دبي هو منتجع فندقي فاخر يقع في قمة نخلة جميرا في الإمارات العربية المتحدة.",
    hotel3: "فور سيزونز اسطنبول",
    hotel3Paragraph:
      "برج العرب هو فندق فاخر يقع في دبي، الإمارات العربية المتحدة.",

    hotel4: "فندق رافلز اسطنبول",
    hotel5: "قصر سيراجان كمبينسكي",
    hotel6: "منتجع ماكس رويال بيليك للجولف",
    hotel7: "ريكسوس بريميوم بيليك",
    hotel8: "أرض الأساطير",
    hotel9: "قصر تيتانيك ماردان",
    hotel10: "منتجع كاليستا الفاخر",
    hotel11: "فندق لوجو بودروم",
    hotel12: "سوسونا بودروم",
    hotel13: "بي بريميوم بودروم",
    hotel14: "منتجع سويس أوتيل بودروم بيتش",
    hotel15: "فندق راديسون بلو طرابزون",
    hotel16: "رمادا بلازا باي ويندام طرابزون",
    hotel17: "دبل تري باي هيلتون طرابزون",
    hotel18: "فندق زورلو جراند طرابزون",
    hotel19: "برج العرب جميرا",
    hotel20: "ماندارين أورينتال جميرا دبي ",
    hotel21: "أتلانتس النخلة ",
    hotel22: "فندق ريتز كارلتون دبي",
    hotel23: "ريكسوس بريميوم دبي جميرا بيتش ريزيدنس ",
    hotel24: "فندق الريتز كارلتون، عمان ",
    hotel25: "فندق فورسيزونز عمان ",
    hotel26: "فندق سانت ريجيس عمان ",
    hotel27: "فندق كمبينسكي عشتار البحر الميت ",
    hotel28: "منتجع وسبا هيلتون البحر الميت ",
    hotel29: "منتجع وسبا ماريوت البحر الميت ",
    hotel30: "موفنبيك البحر الميت الأردن",
    hotel31: "كراون بلازا البحر الميت",
    hotel32: "قصر رافلز مكة",
    hotel33: "فندق سويس أوتيل مكة",
    hotel34: "جميرا جبل عمر مكة",
    hotel35: "العنوان جبل عمر مكة",
    hotel36: "كونراد مكة",

    travel: "السفر",
    footerParagraph:
      "مهمتنا هي تقديم أفضل تجربة سفر لعملائنا. نحن نعتقد أن السفر هو وسيلة لبناء الذكريات والعلاقات.",
    quickLinks: "روابط سريعة",
    contact: "اتصل بنا",
    location:
      "123, لوريم إيبسوم دولور سيت, مجمع أديبيسينغ إيليت, الولايات المتحدة الأمريكية",
    getInTouch: "تواصل معنا",
    addressHeading: "العنوان",
    phoneHeading: "الهاتف",
    emailHeading: "البريد الإلكتروني",
    contactInfo: "معلومات الاتصال",

    about: "عنا",
    aboutUs: "عنا...",
    aboutHeading: "عن شركتنا",
    aboutUsParagraph:
      "نحن شركة سفر تقدم أفضل تجربة سفر لعملائنا. نحن نعتقد أن السفر هو وسيلة لبناء الذكريات والعلاقات.",
    whyChooseUs: "لماذا تختارنا",
    whyChooseUsHeading: "لماذا تختارنا",
    whyChooseUsParagraph:
      "نحن نقدم أفضل تجربة سفر لعملائنا. نحن نعتقد أن السفر هو وسيلة لبناء الذكريات والعلاقات.",
    whyChooseUs1: "خدمة عالية الجودة",
    whyChooseUs1paragraph: "نحن نقدم أفضل خدمة عالية الجودة لعملائنا.",
    whyChooseUs2: "أفضل سعر",
    whyChooseUs2paragraph: "نحن نقدم أفضل سعر لعملائنا.",
    whyChooseUs3: "دعم على مدار الساعة",
    whyChooseUs3paragraph: "نحن نقدم دعم على مدار الساعة لعملائنا.",
  },
  tr: {
    homeNav: "Anasayfa",
    hotelsNav: "Oteller",
    destinationNav: "Hedef",
    contactNav: "İletişim",
    aboutNav: "Hakkında",

    heroFirstParagraph: "Dünya çapında seyahat",
    heroHeading: "Sınırları aşarak seyahat etmek için ",
    explore: "Güzel bir plaj",
    exploreHeading: "Dünyayı keşfet",
    exploreParagraph:
      "Dünyanın en güzel yerlerine seyahat edin ve zamanınızın tadını çıkarın",
    bookBtn: "Şimdi Rezervasyon Yap",
    destinations: "Popüler Hedefler...",
    destinationsHeading: "En İyi Hedefleri Sunuyoruz",
    bestDestinations: "En İyi Hedefler",
    place1: "İtalya",
    place1Paragraph:
      "İtalya, Alpler tarafından sınırlanan bir yarımada ve Sicilya ve Sardinya da dahil olmak üzere çevresindeki birkaç ada içeren bir ülkedir.",
    place2: "Çin",
    place2Paragraph:
      "Çin, Doğu Asya'da bir ülkedir. Dünyanın en kalabalık ülkesidir ve 1.4 milyardan fazla nüfusa sahiptir.",
    place3: "Hindistan",
    place3Paragraph:
      "Hindistan, resmi adıyla Hindistan Cumhuriyeti, Güney Asya'da bir ülkedir. Yüzölçümü bakımından yedinci, nüfus bakımından ikinci en kalabalık ülke ve dünyanın en kalabalık demokrasisidir.",
    place4: "Mısır",
    place5: "New York",
    place6: "Maldivler",
    viewAllBtn: "Hepsini Görüntüle",
    ourService: "Hizmetimiz...",
    servicesHeading: "Sunduğumuz Hizmetler",
    serrvice1: "Otel",
    serrvice1Paragraph: "Size konfor ve rahatlık sunan en iyi oteller",
    serrvice2: "Yemek",
    serrvice2Paragraph: "Her zevke uygun lezzetli yemekler",
    serrvice3: "Uçuşlar",
    serrvice3Paragraph: "Size konfor ve güvenlik sunan uçuşlar",
    serrvice4: "Taşıma",
    serrvice4Paragraph: "Size konfor ve güvenlik sunan çeşitli ulaşım araçları",
    serrvice5: "Rehberler",
    serrvice5Paragraph: "Size konfor ve güvenlik sunan turist rehberleri",
    serrvice6: "Plajlar",
    serrvice6Paragraph: "Size konfor ve güvenlik sunan beyaz kumlu plajlar",
    serrvice7: "Dağlar",
    serrvice7Paragraph: " Size konfor ve güvenlik sunan yüksek dağlar",
    serrvice8: "Şehirler",
    serrvice8Paragraph: "Size konfor ve güvenlik sunan turistik şehirler",
    helpText: "Size yardımcı olmak için buradayız",
    contactBtn: "Bize Ulaşın",
    hotels: "Oteller...",
    popularHotels1: "Popüler Oteller",
    Antalya: "Antalya",
    bestHotels: "En İyi Otellerimiz",
    hotel1: "The Peninsula",
    hotel1Paragraph:
      "Tarihi Karaköy semtinde, Boğaz kıyısında yer alan yeni bir sahil canlandırma projesi olan The Peninsula İstanbul Hotel, Galata Limanı'nda canlı Türk kültürü ve üstün konukseverlik sunuyor. Otel, üçü tarihi ve güzel bir şekilde restore edilmiş dört etkileyici binadan oluşmaktadır ve karadan veya denizden gelen konukları ağırlamaktadır.",
    hotel2: "Mandarin Oriental Bosphorus",
    hotel2Paragraph:
      "Atlantis The Palm, Dubai, Birleşik Arap Emirlikleri'ndeki Palm Jumeirah'ın zirvesinde bulunan lüks bir otel tatil köyüdür.",
    hotel3: "Four Seasons Istanbul",
    hotel3Paragraph:
      "Burj Al Arab, Birleşik Arap Emirlikleri'nde bulunan lüks bir oteldir.",

    hotel4: "Raffles Hotel Istanbul",
    hotel5: "Ciragan Palace Kempinski",
    hotel6: "Maxx Royal Belek Golf Resort",
    hotel7: "Rixos Premium Belek",
    hotel8: "The Land Of Legends",
    hotel9: "Titanic Mardan Palace",
    hotel10: "Calista Luxury Resort",
    hotel11: "Lujo Hotel Bodrum",
    hotel12: "Susona Bodrum",
    hotel13: "Be Premium Bodrum",
    hotel14: "Swissôtel Resort Bodrum Beach",
    hotel15: "Radisson Blu Hotel Trabzon",
    hotel16: "Ramada Plaza by Wyndham Trabzon",
    hotel17: "DoubleTree by Hilton Trabzon",
    hotel18: "Zorlu Grand Hotel Trabzon",
    hotel19: "Burj Al Arab Jumeirah ",
    hotel20: "Mandarin Oriental Jumeirah Dubai ",
    hotel21: "Atlantis, The Palm",
    hotel22: "The Ritz Carlton Dubai ",
    hotel23: "Rixos Premium Dubai JBR ",
    hotel24: "The Ritz-Carlton, Amman",
    hotel25: "Four Seasons Hotel Amman",
    hotel26: "The St. Regis Amman",
    hotel27: "Kempinski Ishtar Hotel Dead Sea",
    hotel28: "Hilton Dead Sea Resort & Spa",
    hotel29: "Dead Sea Marriott Resort & Spa",
    hotel30: "Mövenpick Dead Sea Jordan",
    hotel31: "Crowne Plaza Dead Sea",
    hotel32: "Raffles Makkah Palace",
    hotel33: "Swissôtel Hotel Makkah",
    hotel34: "Jumeirah Jabal Omar Makkah",
    hotel35: "Address Jabal Omar Makkah",
    hotel36: "Conrad Makkah",

    travel: "Seyahat",
    footerParagraph:
      "Misyonumuz, müşterilerimize en iyi seyahat deneyimini sunmaktır. Seyahatin, anılar ve ilişkiler kurmanın bir yolu olduğuna inanıyoruz.",
    quickLinks: "Hızlı Bağlantılar",
    contact: "İletişim",
    location:
      "123, Lorem ipsum dolor sit, consectetur adipiscing elit, United States",

    getInTouch: "İletişime Geçin",
    addressHeading: "Adres",
    phoneHeading: "Telefon",
    emailHeading: "E-posta",
    contactInfo: "İletişim Bilgileri",

    about: "Hakkımızda",
    aboutUs: "Hakkımızda...",
    aboutHeading: "Şirketimiz Hakkında",
    aboutUsParagraph:
      "Müşterilerimize en iyi seyahat deneyimini sunan bir seyahat şirketiyiz. Seyahatin, anılar ve ilişkiler kurmanın bir yolu olduğuna inanıyoruz.",
    whyChooseUs: "Neden Bizi Seçmelisiniz",
    whyChooseUsHeading: "Neden Bizi Seçmelisiniz",
    whyChooseUsParagraph:
      "Müşterilerimize en iyi seyahat deneyimini sunuyoruz. Seyahatin, anılar ve ilişkiler kurmanın bir yolu olduğuna inanıyoruz.",
    whyChooseUs1: "Kaliteli Hibrit",
    whyChooseUs1paragraph: "Müşterilerimize en iyi kaliteli hizmeti sunuyoruz.",
    whyChooseUs2: "En İyi Fiyat",
    whyChooseUs2paragraph: "Müşterilerimize en iyi fiyatı sunuyoruz.",
    whyChooseUs3: "7/24 Destek",
    whyChooseUs3paragraph: "Müşterilerimize 7/24 destek sunuyoruz.",
  },
};

function changeLanguage() {
  const languageSelector = document.getElementById("language");
  currentLanguage = languageSelector.value;
  localStorage.setItem("language", currentLanguage);

  updatePageLanguage();
}

function updatePageLanguage() {
  const elementsToUpdate = document.querySelectorAll("[data-translate]");
  const languageSelector = document.getElementById("language");

  if (currentLanguage === "ar") {
    languageSelector.value = "ar";
    document.body.dir = "rtl";
  } else if (currentLanguage === "en") {
    languageSelector.value = "en";
    document.body.dir = "ltr";
  } else if (currentLanguage === "tr") {
    languageSelector.value = "tr";
    document.body.dir = "ltr";
  }

  elementsToUpdate.forEach((element) => {
    const translationKey = element.getAttribute("data-translate");
    element.innerText = translations[currentLanguage][translationKey];
  });
}

updatePageLanguage();
