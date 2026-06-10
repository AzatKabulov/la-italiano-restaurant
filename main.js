// ─── CONSTANTS ───────────────────────────────────────────────
const PROMO_CODE = 'PASTA20';
const PROMO_DISCOUNT = 0.2;
const DEPOSIT_STANDARD = 100;
const DEPOSIT_PRIVATE = 250;
const LUNCH_SET_PRICE = 68;
const TOAST_DURATION_MS = 2800;
const REVIEW_AUTO_INTERVAL_MS = 5500;

// ─── TRANSLATIONS ─────────────────────────────────────────────
const T = {
  en:{
    nav_about:'About',nav_menu:'Menu',nav_reserve:'Reserve',nav_specials:'Offers',
    nav_reviews:'Reviews',nav_contact:'Contact',nav_cart:'Cart',
    hero_line1:'Authentic',hero_line3:'italiana',
    hero_desc:'Three generations of Tessore family recipes from Palermo. Hand-rolled pasta every morning, wood-fired pizza, the real taste of Sicily.',
    hero_cta1:'View Menu',hero_cta2:'Our Story',badge_text:'Founded<br>in Palermo',
    about_title:'A family <em>tradition</em><br>since 1987',
    about_quote:'"Good food is the foundation of genuine happiness." — Every dish at La Italiano is made as if your grandmother were watching.',
    about_desc:'Chef Marco Tessore brought his family\'s recipes from Palermo. We use no semi-finished products — every sheet of pasta dough is rolled by hand each morning. Our wood-fired oven was shipped directly from Sicily.',
    stat1:'Years of tradition',stat2:'Dishes on menu',stat3:'Guest rating',
    menu_title:'Choose your <em>dish</em>',
    cat_all:'All',cat_starters:'Starters',cat_desserts:'Desserts',cat_drinks:'Drinks',
    pizza_title:'Pizza from our<br><em>wood-fired</em> oven',
    pizza_desc:'Dough fermented for 48 hours. San Marzano tomatoes. Campania mozzarella. Oven at 485°C. Baked in 90 seconds.',
    pf1:'Oven temperature',pf2:'Dough fermentation',pf3:'Pizza varieties',pizza_cta:'See our pizzas →',
    drinks_title:'Cocktails, wines<br>&amp; <em>refreshments</em>',
    drinks_intro:'From classic Tuscan wines to our signature Italian lemonade, squeezed fresh every morning — every glass tells a story.',
    add_to_cart_btn:'+ Add to Cart',
    specials_title:'Curated <em>offers</em> &amp; experiences',
    specials_desc:'More than a meal — an experience. Reserve a moment, celebrate an occasion, or discover a seasonal secret from our chef.',
    ob_limited:'Limited seats',ob_daily:'Daily',ob_gift:'Gift',ob_seasonal:'Seasonal',
    sp1_title:"Chef's Secret Dinner",
    sp1_sub:'A 7-course tasting journey by Chef Marco every Fri & Sat. Wine pairing available. Max 12 guests per night.',
    sp2_title:'Business Lunch Set',
    sp2_sub:'Starter + pasta or pizza + dessert + still water. Weekdays 12:00–15:00. Fast, generous, genuinely Italian.',
    sp3_title:'Compleanno Package',
    sp3_sub:"It's your birthday? Celebrate with a complimentary slice of our signature Tiramisù cake — on the house. Simply present a valid ID to our staff and book a table in advance.",
    sp3_tc:'<strong>T&amp;C</strong><br>Valid on the birthday date only · Table booking required · Present original ID · One complimentary dessert per booking · Dine-in only',
    sp4_title:'White Truffle Season',
    sp4_sub:'October & November only. Fresh white truffle shaved tableside. The rarest ingredient in Italian cooking.',
    per_person:'per person',for_two:'for two',complimentary:'Free',with_dinner:'with dinner',seasonal_price:'seasonal price',
    book_now:'Book Now',order_now:'Order Now',notify_me:'Notify Me',
    reviews_title:'What our <em>guests</em> say',reviews_count:'Based on 340+ reviews',
    footer_desc:'Authentic Italian cuisine in the heart of Kuala Lumpur. Handmade pasta, wood-fired pizza and risotto using family recipes from Palermo.',
    footer_menu:'Menu',footer_restaurant:'Restaurant',footer_reserve:'Table Reservation',
    footer_gift:'Gift Cards',footer_hours:'Daily 12:00 – 23:00',
    footer_copy:'© La Italiano. All rights reserved.',footer_promo:'Promo code',
    res_title:'Reserve Your Table',res_sub:'3 simple steps to your perfect table',
    res_section_title:'Reserve your <em>table</em>',
    res_section_desc:'Open daily for lunch and dinner. Private dining available. Secure your table with a refundable deposit.',
    res_step1:'Date & Time',res_step2:'Choose Table',res_step3:'Your Details',
    res_step1_desc:'When would you like to dine?',
    res_occasion_label:'Occasion',
    res_next_tables:'See Available Tables →',
    res_next_details:'Continue to Your Details →',
    res_back:'← Back',
    res_email:'Email Address',
    res_hours_label:'Hours',
    res_capacity_label:'Capacity',res_capacity_value:'Up to 80 guests',
    res_deposit_label:'Deposit',res_deposit_value:'From RM 100 (refundable)',
    res_preview_label:'Floor Plan',res_status_open:'Tables Available',
    res_qb_note:'Quick check — or open the full reservation wizard below.',
    res_check_btn:'Check Availability & Book',
    res_open_full:'Open Full Floor Plan →',
    leg_free:'Available',leg_taken:'Reserved',leg_selected:'Your choice',
    res_date:'Date',res_time:'Time',res_guests:'Guests',res_name:'Full Name',
    res_phone:'Phone',res_note:'Special Request',
    deposit_title:'Reservation Deposit',
    deposit_desc:'A refundable deposit secures your table. Deducted from your final bill on the night.',
    res_confirm:'Confirm & Pay Deposit →',
    res_pick_table:'← Select a table',
    res_pick_sub:'Click any available table on the floor plan to see details and begin your reservation.',
    res_success_title:'Prenotazione Confermata!',
    res_success_desc:'Your table is reserved. A confirmation will be sent to your phone. We look forward to welcoming you to La Italiano.',
    gift_title:'Gift Cards',gift_sub:'The perfect Italian gift — delivered digitally within minutes',
    gift_hero_title:'Give the gift of <em style="color:var(--gold);font-style:italic">la dolce vita</em>',
    gift_hero_desc:'La Italiano gift cards are the perfect present for any occasion. Valid for 12 months, redeemable for dine-in, delivery and catering. Delivered instantly by email.',
    gift_choose:'Choose Amount',gift_details:'Recipient Details',
    gift_to_name:'Recipient Name',gift_to_email:'Recipient Email',gift_from:'Your Name',gift_pay_email:'Your Email',gift_msg:'Personal Message',
    gift_total_label:'Total to pay',gift_buy:'Purchase Gift Card →',
    cat_page_title:'Catering by La Italiano',cat_page_sub:'We bring authentic Italian to your event',
    cat_hero_title:'Your event, our <em style="color:var(--gold);font-style:italic">cucina</em>',
    cat_hero_desc:'From intimate gatherings of 20 to grand events of 300+. Chef Marco and the La Italiano team bring handmade pasta stations, wood-fired pizza, and a full service front-of-house to your venue.',
    cat_choose_pkg:'Choose Package',cat_enquiry:'Send Enquiry',
    cat_event_type:'Event Type',cat_guests_count:'Expected Guests',
    cat_event_date:'Event Date',cat_location:'Venue / Location',cat_notes:'Additional Notes',cat_submit:'Send Enquiry →',
    cart_title:'Your Order',promo_btn:'Apply',checkout_btn:'Checkout →',
    checkout_title:'Checkout',delivery_method:'Delivery Method',
    opt_delivery:'Delivery',opt_pickup:'Pickup',
    your_details:'Your Details',field_name:'Name',field_phone:'Phone',
    delivery_address:'Delivery Address',field_street:'Street & Number',field_unit:'Unit',
    field_time:'Delivery Time',field_note:'Special Instructions',
    total_label:'Total to pay',place_order:'Confirm Order',
    success_title:'Grazie mille!',
    success_desc:"Your order is confirmed. We're already firing up the wood oven for your pasta.",
    success_time:'⏱ Estimated delivery: 35–45 minutes',
    toast_added:'added to cart',toast_promo:'🎉 20% discount applied!',toast_invalid:'✕ Promo code not found',
    subtotal:'Subtotal',delivery:'Delivery',free:'Free',discount:'Discount',total:'Total',
    cart_empty:'Cart is empty.<br>Add a dish from the menu.',
    add_btn:'Add',chef_label:'Chef',hit_label:'Hit',
    marquee:['🍝 Handmade Pasta','🍕 Wood-Fired Pizza','🍋 Italian Lemonade','🍷 Wines of Tuscany','🫒 Extra Virgin Olive Oil','🧀 Parmigiano 36 Months','🍮 Nonna Maria\'s Tiramisù','✦ Dal 1987'],
  },
  ru:{
    nav_about:'О нас',nav_menu:'Меню',nav_reserve:'Бронь',nav_specials:'Акции',
    nav_reviews:'Отзывы',nav_contact:'Контакты',nav_cart:'Корзина',
    hero_line1:'Настоящая',hero_line3:'italiana',
    hero_desc:'Три поколения рецептов семьи Тесторе из Палермо. Ручная паста каждое утро, пицца из дровяной печи, настоящий вкус Сицилии.',
    hero_cta1:'Смотреть меню',hero_cta2:'Наша история',badge_text:'Основан<br>в Палермо',
    about_title:'Семейная <em>традиция</em><br>с 1987 года',
    about_quote:'"Хорошая еда — основа настоящего счастья." — Каждое блюдо в La Italiano готовится с заботой, как будто ваша бабушка наблюдает за каждым движением.',
    about_desc:'Шеф-повар Марко Тесторе привёз семейные рецепты из Палермо. Мы не используем полуфабрикаты — каждый лист теста раскатывается вручную каждое утро. Наша дровяная печь доставлена прямо с Сицилии.',
    stat1:'Лет традиций',stat2:'Блюд в меню',stat3:'Рейтинг гостей',
    menu_title:'Выберите ваше <em>блюдо</em>',
    cat_all:'Всё',cat_starters:'Закуски',cat_desserts:'Десерты',cat_drinks:'Напитки',
    pizza_title:'Пицца из<br><em>дровяной</em> печи',
    pizza_desc:'Тесто ферментируется 48 часов. Томаты Сан-Марцано. Моцарелла из Кампании. Печь 485°C.',
    pf1:'Температура печи',pf2:'Ферментация теста',pf3:'Видов пиццы',pizza_cta:'Смотреть пиццы →',
    drinks_title:'Коктейли, вина<br>и <em>напитки</em>',
    drinks_intro:'От классических тосканских вин до фирменного итальянского лимонада — каждый бокал рассказывает историю.',
    add_to_cart_btn:'+ В корзину',
    specials_title:'Особые <em>предложения</em> и впечатления',
    specials_desc:'Больше, чем еда — впечатление. Зарезервируйте момент, отпразднуйте событие или откройте сезонный секрет шефа.',
    ob_limited:'Мест мало',ob_daily:'Ежедневно',ob_gift:'Подарок',ob_seasonal:'Сезонный',
    sp1_title:'Тайный ужин шеф-повара',
    sp1_sub:'7 перемен блюд от шефа Марко каждую пятницу и субботу. Возможна подборка вин. Максимум 12 гостей.',
    sp2_title:'Бизнес-ланч',
    sp2_sub:'Закуска + паста или пицца + десерт + вода. Будни 12:00–15:00. Быстро, щедро, по-итальянски.',
    sp3_title:'Пакет «Комплеанно»',
    sp3_sub:'День рождения? Получите бесплатный кусок нашего фирменного Тирамису. Просто предъявите действующий документ персоналу и забронируйте стол заранее.',
    sp3_tc:'<strong>Условия</strong><br>Действует только в день рождения · Требуется бронь · Предъявите оригинал документа · Один десерт на бронирование · Только за столом в ресторане',
    sp4_title:'Сезон белого трюфеля',
    sp4_sub:'Только октябрь–ноябрь. Свежий белый трюфель, натёртый прямо за столом.',
    per_person:'с человека',for_two:'на двоих',complimentary:'Бесплатно',with_dinner:'с ужином',seasonal_price:'сезонная цена',
    book_now:'Забронировать',order_now:'Заказать',notify_me:'Уведомить',
    reviews_title:'Что говорят наши <em>гости</em>',reviews_count:'На основе 340+ отзывов',
    footer_desc:'Итальянская кухня в сердце Куала-Лумпура. Ручная паста, пицца из дровяной печи и ризотто по семейным рецептам из Палермо.',
    footer_menu:'Меню',footer_restaurant:'Ресторан',footer_reserve:'Бронь стола',
    footer_gift:'Подарочные карты',footer_hours:'Ежедн. 12:00 – 23:00',
    footer_copy:'© La Italiano. Все права защищены.',footer_promo:'Промокод',
    res_title:'Забронировать стол',res_sub:'3 простых шага к вашему идеальному столику',
    res_section_title:'Забронируйте <em>столик</em>',
    res_section_desc:'Работаем ежедневно на обед и ужин. Приватные залы доступны. Забронируйте столик с возвратным депозитом.',
    res_step1:'Дата и время',res_step2:'Выбор стола',res_step3:'Ваши данные',
    res_step1_desc:'Когда вы хотите поужинать?',
    res_occasion_label:'Повод',
    res_next_tables:'Смотреть доступные столы →',
    res_next_details:'Продолжить к данным →',
    res_back:'← Назад',
    res_email:'Электронная почта',
    res_hours_label:'Часы работы',
    res_capacity_label:'Вместимость',res_capacity_value:'До 80 гостей',
    res_deposit_label:'Депозит',res_deposit_value:'От RM 100 (возвратный)',
    res_preview_label:'План зала',res_status_open:'Столы свободны',
    res_qb_note:'Быстрая проверка — или откройте полный мастер бронирования.',
    res_check_btn:'Проверить наличие и забронировать',
    res_open_full:'Открыть полный план зала →',
    leg_free:'Свободен',leg_taken:'Занят',leg_selected:'Ваш выбор',
    res_date:'Дата',res_time:'Время',res_guests:'Гостей',res_name:'Полное имя',
    res_phone:'Телефон',res_note:'Особые пожелания',
    deposit_title:'Депозит за бронирование',
    deposit_desc:'Возвратный депозит подтверждает бронь. Будет зачтён в счёт итогового чека.',
    res_confirm:'Подтвердить и оплатить →',
    res_pick_table:'← Выберите стол',
    res_pick_sub:'Нажмите на свободный стол на плане зала, чтобы увидеть детали и начать бронирование.',
    res_success_title:'Prenotazione Confermata!',
    res_success_desc:'Ваш стол забронирован. Подтверждение будет отправлено на ваш телефон. Ждём вас в La Italiano.',
    gift_title:'Подарочные карты',gift_sub:'Идеальный итальянский подарок — доставка за минуты',
    gift_hero_title:'Подарите вкус <em style="color:var(--gold);font-style:italic">la dolce vita</em>',
    gift_hero_desc:'Подарочные карты La Italiano — идеальный подарок для любого случая. Действительны 12 месяцев, подходят для ужина, доставки и кейтеринга. Мгновенная доставка на email.',
    gift_choose:'Выберите сумму',gift_details:'Данные получателя',
    gift_to_name:'Имя получателя',gift_to_email:'Email получателя',gift_from:'Ваше имя',gift_pay_email:'Ваш Email',gift_msg:'Личное сообщение',
    gift_total_label:'К оплате',gift_buy:'Купить подарочную карту →',
    cat_page_title:'Кейтеринг La Italiano',cat_page_sub:'Мы привезём настоящую итальянскую кухню на ваше мероприятие',
    cat_hero_title:'Ваше мероприятие, наша <em style="color:var(--gold);font-style:italic">cucina</em>',
    cat_hero_desc:'От камерных встреч на 20 человек до торжеств на 300+. Шеф Марко и команда La Italiano привезут станцию ручной пасты, пиццу из дровяной печи и полный сервис.',
    cat_choose_pkg:'Выберите пакет',cat_enquiry:'Отправить запрос',
    cat_event_type:'Тип мероприятия',cat_guests_count:'Количество гостей',
    cat_event_date:'Дата мероприятия',cat_location:'Место / Адрес',cat_notes:'Дополнительные пожелания',cat_submit:'Отправить запрос →',
    cart_title:'Ваш заказ',promo_btn:'Применить',checkout_btn:'Оформить →',
    checkout_title:'Оформление заказа',delivery_method:'Способ получения',
    opt_delivery:'Доставка',opt_pickup:'Самовывоз',
    your_details:'Ваши данные',field_name:'Имя',field_phone:'Телефон',
    delivery_address:'Адрес доставки',field_street:'Улица и дом',field_unit:'Квартира',
    field_time:'Время доставки',field_note:'Комментарий',
    total_label:'Итого к оплате',place_order:'Подтвердить заказ',
    success_title:'Grazie mille!',
    success_desc:'Ваш заказ принят. Уже разжигаем дровяную печь.',
    success_time:'⏱ Ожидаемое время: 35–45 минут',
    toast_added:'добавлен в корзину',toast_promo:'🎉 Скидка 20% применена!',toast_invalid:'✕ Промокод не найден',
    subtotal:'Подытог',delivery:'Доставка',free:'Бесплатно',discount:'Скидка',total:'Итого',
    cart_empty:'Корзина пуста.<br>Добавьте блюдо из меню.',
    add_btn:'Добавить',chef_label:'Шеф',hit_label:'Хит',
    marquee:['🍝 Паста Ручной Работы','🍕 Пицца из Дровяной Печи','🍋 Итальянский Лимонад','🍷 Вина Тосканы','🫒 Масло Extra Virgin','🧀 Пармезан 36 Месяцев','🍮 Тирамису Нонны Марии','✦ Dal 1987'],
  }
};

// ─── MEAL OF THE DAY ─────────────────────────────────────────
const MOTD = [
  { // Sunday
    day:{en:'Sunday',ru:'Воскресенье'},
    name:{en:'Orecchiette con Cime di Rapa',ru:'Ореккьетте с Цимой ди Рапа'},
    desc:{en:'Handmade ear-shaped pasta from Puglia tossed with sautéed broccoli rabe, anchovy, chilli flakes and toasted breadcrumbs. A Sunday classic from the south.',ru:'Ручная паста из Апулии с брокколи рабе, анчоусами и поджаренными панировочными сухарями. Южновоскресная классика.'},
    img:'https://images.unsplash.com/photo-1551183053-bf91798d047c?w=600&q=80',
    price:52,
    drink:{en:'Complimentary Sparkling Mineral Water (500ml)',ru:'В подарок: газированная вода (500мл)'},
    cartId:'motd_sun'
  },
  { // Monday
    day:{en:'Monday',ru:'Понедельник'},
    name:{en:'Paccheri al Ragù di Agnello',ru:'Паккери с Рагу из Ягнёнка'},
    desc:{en:'Giant ribbed tubes filled with slow-braised lamb ragù, rosemary, Barolo wine and fresh ricotta. A bold start to the week.',ru:'Крупные ребристые трубочки с рагу из медленно тушёного ягнёнка, розмарином и бароло. Отличное начало недели.'},
    img:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80',
    price:58,
    drink:{en:'Complimentary Limonata Fresca (house-squeezed)',ru:'В подарок: свежевыжатый лимонад'},
    cartId:'motd_mon'
  },
  { // Tuesday
    day:{en:'Tuesday',ru:'Вторник'},
    name:{en:'Tonnarelli Cacio e Pepe al Tartufo',ru:'Тоннарелли Качо э Пепе с Трюфелем'},
    desc:{en:'Roman tonnarelli pasta, aged Pecorino Romano, generous black pepper and a finish of aromatic black truffle oil. Rustic perfection.',ru:'Тоннарелли по-римски с выдержанным пекорино романо, чёрным перцем и ароматным трюфельным маслом.'},
    img:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80',
    price:62,
    drink:{en:'Complimentary Espresso Romano (post-meal)',ru:'В подарок: эспрессо романо (после еды)'},
    cartId:'motd_tue'
  },
  { // Wednesday
    day:{en:'Wednesday',ru:'Среда'},
    name:{en:'Branzino al Cartoccio',ru:'Бранзино аль Карточчо'},
    desc:{en:'Whole Mediterranean sea bass baked in parchment with cherry tomatoes, Taggiasca olives, capers, lemon and white wine. Served with grilled polenta.',ru:'Запечённый в пергаменте средиземноморский сибас с томатами черри, оливками, каперсами и белым вином. Подаётся с полентой на гриле.'},
    img:'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80',
    price:72,
    drink:{en:'Complimentary glass of Pinot Grigio delle Venezie',ru:'В подарок: бокал Пино Гриджо делле Венецие'},
    cartId:'motd_wed'
  },
  { // Thursday
    day:{en:'Thursday',ru:'Четверг'},
    name:{en:'Risotto al Limone e Gamberi',ru:'Ризотто с Лимоном и Креветками'},
    desc:{en:'Arborio rice slowly cooked with tiger prawns, Amalfi lemon zest, white wine, mascarpone and fresh dill. Bright, coastal and luxurious.',ru:'Арборио с тигровыми креветками, цедрой лимона Амальфи, маскарпоне и свежим укропом. Яркий, береговой, роскошный.'},
    img:'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80',
    price:66,
    drink:{en:'Complimentary Acqua di Paradiso (tropical house mocktail)',ru:'В подарок: Аква ди Парадизо (тропический мокктейль)'},
    cartId:'motd_thu'
  },
  { // Friday
    day:{en:'Friday',ru:'Пятница'},
    name:{en:'Tagliolini ai Frutti di Mare',ru:'Тальолини с Морепродуктами'},
    desc:{en:'Thin egg tagliolini with a generous mix of prawns, squid, clams, mussels, garlic, white wine, cherry tomatoes and parsley. The taste of the Amalfi coast on a Friday night.',ru:'Тонкие яичные тальолини с креветками, кальмаром, мидиями, чесноком, белым вином и томатами черри. Вкус побережья Амальфи в пятничный вечер.'},
    img:'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80',
    price:78,
    drink:{en:'Complimentary Aperol Spritz (aperitivo glass)',ru:'В подарок: Апероль Шприц (аперитивный бокал)'},
    cartId:'motd_fri'
  },
  { // Saturday
    day:{en:'Saturday',ru:'Суббота'},
    name:{en:'Costolette d\'Agnello alla Scottadito',ru:'Котлеты д\'Аньелло алла Скоттадито'},
    desc:{en:'Grilled baby lamb chops marinated in rosemary, garlic and lemon, served with roasted fingerling potatoes and salsa verde. A Roman street-food classic elevated.',ru:'Жареные ягнячьи котлетки в маринаде из розмарина и чеснока с молодым картофелем и сальсой верде. Возвышенная классика римской уличной еды.'},
    img:'https://images.unsplash.com/photo-1558030089-e09b463c8ac4?w=600&q=80',
    price:84,
    drink:{en:'Complimentary glass of Barolo DOCG (Piedmont)',ru:'В подарок: бокал Бароло DOCG (Пьемонт)'},
    cartId:'motd_sat'
  },
];

// ─── MENU DATA ────────────────────────────────────────────────
const MENU=[
  {id:1,name:{en:'Spaghetti Carbonara',ru:'Спагетти Карбонара'},cat:'pasta',price:42,tags:['hit','classic'],
   desc:{en:'Guanciale, egg yolk, pecorino romano, black pepper. No cream — the original only.',ru:'Гуанчале, яичный желток, пекорино романо, чёрный перец. Без сливок — только оригинал.'},
   img:'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80'},
  {id:2,name:{en:'Tagliatelle Bolognese',ru:'Тальятелле Болоньезе'},cat:'pasta',price:46,tags:['popular'],
   desc:{en:'Beef & pork, San Marzano tomatoes, red wine, simmered for 4 hours.',ru:'Говядина и свинина, томаты Сан-Марцано, красное вино, 4 часа томления.'},
   img:'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&q=80'},
  {id:3,name:{en:'Spaghetti Aglio e Olio',ru:'Спагетти Алио э Олио'},cat:'pasta',price:36,tags:['vegetarian'],
   desc:{en:'Garlic, extra virgin olive oil, parsley, parmesan. Simplicity is the highest sophistication.',ru:'Чеснок, оливковое масло extra virgin, петрушка, пармезан.'},
   img:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80'},
  {id:4,name:{en:'Penne Arrabbiata',ru:'Пенне Арабьята'},cat:'pasta',price:38,tags:['spicy','vegetarian'],
   desc:{en:'Cherry tomatoes, garlic, hot peperoncino, fresh basil. The fire of Naples in every bite.',ru:'Томаты черри, чеснок, острый перец пеперончино, базилик.'},
   img:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80'},
  {id:5,name:{en:'Fettuccine al Tartufo',ru:'Фетуччине с Трюфелем'},cat:'pasta',price:88,tags:['chef','luxury'],
   desc:{en:'Fresh egg fettuccine, black truffle cream, 36-month parmigiano, truffle oil.',ru:'Свежие яичные фетуччине, крем из чёрного трюфеля, пармезан 36 месяцев.'},
   img:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80'},
  {id:14,name:{en:'Spaghetti alle Vongole',ru:'Спагетти Вонголе'},cat:'pasta',price:64,tags:['seafood','chef'],
   desc:{en:'Vongole clams, white wine, garlic, parsley, olive oil. The sea on your plate.',ru:'Мидии вонголе, белое вино, чеснок, петрушка, оливковое масло.'},
   img:'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80'},
  {id:15,name:{en:'Margherita',ru:'Маргарита'},cat:'pizza',price:38,tags:['classic','vegetarian'],
   desc:{en:'San Marzano tomatoes, Fior di latte mozzarella, fresh basil. The three colours of Italy.',ru:'Томаты Сан-Марцано, моцарелла Fior di latte, свежий базилик.'},
   img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80'},
  {id:16,name:{en:'Diavola',ru:'Дьявола'},cat:'pizza',price:44,tags:['spicy','hit'],
   desc:{en:'Spicy pepperoni, hot Calabrian pepper, mozzarella, tomatoes. For the brave only.',ru:'Пикантная пепперони, острый калабрийский перец, моцарелла, томаты.'},
   img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80'},
  {id:17,name:{en:'Quattro Formaggi',ru:'Четыре Сыра'},cat:'pizza',price:48,tags:['vegetarian'],
   desc:{en:'Mozzarella, gorgonzola, parmigiano, taleggio. A quartet of Italian cheeses on thin crust.',ru:'Моцарелла, горгонзола, пармезан, таледжо. Квартет итальянских сыров.'},
   img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80'},
  {id:18,name:{en:'Prosciutto e Rucola',ru:'Прошутто э Рукола'},cat:'pizza',price:52,tags:['chef'],
   desc:{en:'Cured prosciutto, rocket, cherry tomatoes, parmigiano — added after baking.',ru:'Сыровяленая прошутто, рукола, томаты черри, пармезан — добавляются после выпекания.'},
   img:'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80'},
  {id:19,name:{en:'Tartufo Bianco',ru:'Трюфельная Бьянка'},cat:'pizza',price:79,tags:['chef','luxury'],
   desc:{en:'Crème fraîche base, mozzarella, ricotta, truffle oil, shaved black truffle.',ru:'Основа крем-фреш, моцарелла, рикотта, трюфельное масло, стружка трюфеля.'},
   img:'https://images.unsplash.com/photo-1548369937-47519962c11a?w=600&q=80'},
  {id:6,name:{en:'Mushroom Risotto',ru:'Ризотто с Грибами'},cat:'risotto',price:50,tags:['hit'],
   desc:{en:'Arborio, forest mushrooms, white wine, parmigiano, butter. Creamy perfection.',ru:'Арборио, лесные грибы, белое вино, пармезан, сливочное масло.'},
   img:'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80'},
  {id:7,name:{en:'Risotto Nero',ru:'Ризотто Нерро'},cat:'risotto',price:60,tags:['chef'],
   desc:{en:'Squid ink rice, seafood medley, garlic, white wine, olive oil.',ru:'Рис с чернилами каракатицы, морепродукты, чеснок, белое вино.'},
   img:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80'},
  {id:8,name:{en:'Classic Bruschetta',ru:'Брускетта Классик'},cat:'starters',price:19,tags:['light'],
   desc:{en:'Toasted ciabatta, cherry tomatoes, basil, olive oil, garlic.',ru:'Хрустящая чиабатта, томаты черри, базилик, оливковое масло, чеснок.'},
   img:'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80'},
  {id:9,name:{en:'Beef Carpaccio',ru:'Карпаччо из Говядины'},cat:'starters',price:42,tags:['chef'],
   desc:{en:'Thinly sliced beef tenderloin, capers, parmigiano, rocket, truffle oil.',ru:'Тонко нарезанная говяжья вырезка, каперсы, пармезан, рукола, трюфельное масло.'},
   img:'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80'},
  {id:10,name:{en:'Tiramisù',ru:'Тирамису'},cat:'desserts',price:25,tags:['classic'],
   desc:{en:'Mascarpone, savoiardi, double espresso, amaretto, cocoa. Nonna Maria\'s recipe.',ru:'Маскарпоне, савоярди, двойной эспрессо, амаретто, какао. Рецепт нонны Марии.'},
   img:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80'},
  {id:11,name:{en:'Panna Cotta',ru:'Панна Котта'},cat:'desserts',price:22,tags:['delicate'],
   desc:{en:'Vanilla panna cotta with raspberry coulis and fresh berries.',ru:'Ванильная панна котта с малиновым кули и свежими ягодами.'},
   img:'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80'},
  {id:20,name:{en:'Aperol Spritz',ru:'Апероль Шприц'},cat:'drinks',price:26,tags:['aperitivo','hit'],
   desc:{en:'The icon of Italian aperitivo. Aperol, Prosecco, soda water, fresh orange slice.',ru:'Символ итальянского аперитива. Апероль, Просекко, содовая, долька апельсина.'},
   img:'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80'},
  {id:21,name:{en:'Limonata Italiana',ru:'Итальянский Лимонад'},cat:'drinks',price:16,tags:['fresh','signature'],
   desc:{en:'Hand-squeezed Amalfi lemons, sparkling water, fresh mint, agave. Made every morning.',ru:'Свежевыжатые лимоны Амальфи, газированная вода, мята, агава. Готовится каждое утро.'},
   img:'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80'},
  {id:22,name:{en:'Acqua di Paradiso',ru:'Вода Рая'},cat:'drinks',price:18,tags:['tropical','signature'],
   desc:{en:'Passion fruit, mango, elderflower, sparkling water, lime. A taste of paradise, Italian style.',ru:'Маракуйя, манго, бузина, газированная вода, лайм. Вкус рая по-итальянски.'},
   img:'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&q=80'},
  {id:12,name:{en:'Chianti Classico',ru:'Кьянти Классико'},cat:'drinks',price:32,tags:['wine'],
   desc:{en:'Dry red from the heart of Tuscany. Cherry, leather, dry earth.',ru:'Красное сухое вино из сердца Тосканы. Вишня, кожа, сухая земля.'},
   img:'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80'},
  {id:23,name:{en:'Negroni Classico',ru:'Негрони Классико'},cat:'drinks',price:28,tags:['cocktail'],
   desc:{en:'Campari, sweet vermouth, gin — equal parts, stirred over ice, orange peel. Born in Florence, 1919.',ru:'Кампари, сладкий вермут, джин — равные части, лёд, цедра апельсина. Флоренция, 1919 г.'},
   img:'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80'},
  {id:13,name:{en:'House Limoncello',ru:'Домашний Лимончелло'},cat:'drinks',price:18,tags:['liqueur'],
   desc:{en:'Homemade limoncello from an Amalfi family recipe. Ice-cold and aromatic.',ru:'Домашний лимончелло по семейному рецепту из Амальфи. Ледяной и ароматный.'},
   img:'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?w=600&q=80'},
  {id:24,name:{en:'Espresso Romano',ru:'Эспрессо Романо'},cat:'drinks',price:12,tags:['coffee'],
   desc:{en:'Double ristretto from our La Marzocco machine, served with a lemon rind. Short and electric.',ru:'Двойной ристретто на кофемашине La Marzocco, с цедрой лимона. Короткий и бодрящий.'},
   img:'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80'},
];

const FEATURED_DRINKS=[
  {id:20,img:'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=900&q=85'},
  {id:21,img:'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=900&q=85'},
  {id:22,img:'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=900&q=85'},
  {id:23,img:'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=900&q=85'},
  {id:13,img:'https://images.unsplash.com/photo-1614308457932-e44bec476b48?w=900&q=85'},
];

const REVIEWS=[
  {name:{en:'Alexander V.',ru:'Александр В.'},location:{en:'Kuala Lumpur',ru:'Куала-Лумпур'},stars:5,date:{en:'November 2024',ru:'Ноябрь 2024'},source:'Google',
   text:{en:'"The best carbonara outside of Rome. The pizza dough is impossibly light and the tiramisù dissolves before you realise it. We come every week."',ru:'"Лучшая карбонара за пределами Рима. Тесто для пиццы невесомое, а тирамису растворяется прежде, чем успеваешь осознать. Приходим каждую неделю."'},
   avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=70'},
  {name:{en:'Priya Menon',ru:'Прия Менон'},location:{en:'Petaling Jaya',ru:'Петалинг-Джая'},stars:5,date:{en:'October 2024',ru:'Октябрь 2024'},source:'TripAdvisor',
   text:{en:'"Limonata Italiana is the most refreshing drink I have ever had. The Aglio e Olio is deceptively simple and deeply satisfying."',ru:'"Limonata Italiana — самый освежающий напиток, который я когда-либо пробовала. Агио э Олио обманчиво прост и очень сытный."'},
   avatar:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=70'},
  {name:{en:"Liam O'Brien",ru:"Лиам О'Брайен"},location:{en:'Expat · Bangsar',ru:'Экспат · Бангсар'},stars:5,date:{en:'October 2024',ru:'Октябрь 2024'},source:'Google',
   text:{en:'"Chef\'s Secret Dinner on Friday is extraordinary — 7 courses, each better than the last. The wine pairings are thoughtfully chosen. Book weeks in advance."',ru:'"Тайный ужин в пятницу — это нечто особенное: 7 перемен, каждая лучше предыдущей. Бронировать за несколько недель."'},
   avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=70'},
  {name:{en:'Nur Aisyah',ru:'Нур Айша'},location:{en:'Mont Kiara',ru:'Монт Кьяра'},stars:5,date:{en:'September 2024',ru:'Сентябрь 2024'},source:'Google',
   text:{en:'"Came for the Compleanno Package for my husband\'s birthday. The Prosecco surprise, the Tiramisù candle, the warm staff — it was perfect."',ru:'"Пришли на пакет «Комплеанно» в честь дня рождения мужа. Сюрприз с Просекко, свеча на тирамису — всё было идеально."'},
   avatar:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=70'},
  {name:{en:'Dmitri Kovalev',ru:'Дмитрий Ковалёв'},location:{en:'KLCC',ru:'KLCC'},stars:5,date:{en:'September 2024',ru:'Сентябрь 2024'},source:'Google',
   text:{en:'"The Risotto Nero is a masterpiece — squid ink depth, perfectly cooked seafood. And the Negroni here is the best in KL, bar none."',ru:'"Ризотто Нерро — шедевр. А Негрони здесь лучший в КЛ, без вопросов."'},
   avatar:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=70'},
  {name:{en:'Wei Ling Tan',ru:'Вэй Линь Тан'},location:{en:'Cheras',ru:'Черас'},stars:5,date:{en:'August 2024',ru:'Август 2024'},source:'TripAdvisor',
   text:{en:'"The lunch set is extraordinary value — three courses for RM 68 for two. The pasta quality is the same as the dinner menu. My new go-to for weekdays."',ru:'"Бизнес-ланч — невероятная ценность: три блюда за RM 68 на двоих. Качество пасты такое же, как в ужинном меню."'},
   avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=70'},
];

// ─── FLOOR PLAN TABLES ───────────────────────────────────────
const TABLES=[
  // Window row (along top wall) — intimate 2-tops
  {id:'T1',cx:104,cy:102,r:18,seats:2,maxGuests:3,zone:'Window',status:'free'},
  {id:'T2',cx:176,cy:102,r:18,seats:2,maxGuests:3,zone:'Window',status:'taken'},
  {id:'T3',cx:248,cy:102,r:18,seats:2,maxGuests:3,zone:'Window',status:'free'},
  {id:'T4',cx:320,cy:102,r:18,seats:2,maxGuests:3,zone:'Window',status:'free'},
  {id:'T5',cx:392,cy:102,r:18,seats:2,maxGuests:3,zone:'Window',status:'taken'},
  // Central dining — 4-tops
  {id:'T6',cx:120,cy:210,r:25,seats:4,maxGuests:5,zone:'Central',status:'free'},
  {id:'T7',cx:225,cy:210,r:25,seats:4,maxGuests:5,zone:'Central',status:'free'},
  {id:'T8',cx:330,cy:210,r:25,seats:4,maxGuests:5,zone:'Central',status:'taken'},
  {id:'T9',cx:430,cy:210,r:25,seats:4,maxGuests:5,zone:'Central',status:'free'},
  // Lower dining — larger 4/6-tops
  {id:'T10',cx:155,cy:338,r:27,seats:4,maxGuests:6,zone:'Garden Side',status:'free'},
  {id:'T11',cx:290,cy:338,r:27,seats:4,maxGuests:6,zone:'Garden Side',status:'free'},
  {id:'T12',cx:415,cy:338,r:27,seats:4,maxGuests:6,zone:'Garden Side',status:'taken'},
  // Private dining suite
  {id:'T13',cx:584,cy:347,r:32,seats:6,maxGuests:10,zone:'Private Dining',status:'free',isPrivate:true},
];

// ─── STATE ────────────────────────────────────────────────────
let lang = 'en';
let cart = [], discount = 0, currentCat = 'all';
let reviewOffset = 0, reviewAutoTimer;
let featDrinkIdx = 0;
let selectedTable = null;
let selectedGiftAmt = 0;
let selectedCatPkg = '';

// ─── FOCUS TRAP ───────────────────────────────────────────────
const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
let trapHandler = null;
let preFocusEl = null;

function trapFocus(modalEl) {
  preFocusEl = document.activeElement;
  const focusable = () => [...modalEl.querySelectorAll(FOCUSABLE)].filter(el => !el.closest('[hidden]'));
  trapHandler = (e) => {
    if (e.key !== 'Tab') return;
    const els = focusable();
    if (!els.length) return;
    const first = els[0], last = els[els.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  };
  document.addEventListener('keydown', trapHandler);
  const firstEl = focusable()[0];
  if (firstEl) setTimeout(() => firstEl.focus(), 50);
}

function releaseTrap() {
  if (trapHandler) { document.removeEventListener('keydown', trapHandler); trapHandler = null; }
  if (preFocusEl) { try { preFocusEl.focus(); } catch(e) {} preFocusEl = null; }
}

// ─── GLOBAL ESCAPE HANDLER ────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (document.getElementById('lunchOverlay').classList.contains('open')) { closeLunchModal(); return; }
  if (document.getElementById('modalOverlay').classList.contains('open')) { closeCheckout(); return; }
  ['cateringOverlay', 'giftOverlay', 'resOverlay'].forEach(id => {
    if (document.getElementById(id).classList.contains('open')) closeOverlay(id);
  });
});

// ─── LANGUAGE ─────────────────────────────────────────────────
function setLang(l) {
  lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.textContent === l.toUpperCase()));
  applyTranslations(); buildMarquee(); renderMenu(currentCat); updateCartUI(); renderReviews(); updateDrinkShowcase(featDrinkIdx); renderMOTD();
}

function applyTranslations() {
  const t = T[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.dataset.i18n; if (t[k] !== undefined) el.innerHTML = t[k]; });
  const hint = document.getElementById('resDateHint');
  if (hint) hint.textContent = lang === 'ru' ? 'Формат: дд.мм.гггг' : 'Format: day / month / year';
  updateDepositDisplay();
}

// ─── MARQUEE ──────────────────────────────────────────────────
function buildMarquee() {
  const track = document.getElementById('marquee'); track.innerHTML = '';
  const items = T[lang].marquee;
  [...items, ...items].forEach(txt => {
    const el = document.createElement('div'); el.className = 'marquee-item';
    el.innerHTML = `<span class="marquee-dot"></span>${txt}`; track.appendChild(el);
  });
}

// ─── DRINK SHOWCASE ───────────────────────────────────────────
function buildDrinkTabs() {
  const bar = document.getElementById('drinkTabs'); bar.innerHTML = '';
  FEATURED_DRINKS.forEach((fd, i) => {
    const d = MENU.find(m => m.id === fd.id); if (!d) return;
    const btn = document.createElement('button');
    btn.className = 'drink-tab' + (i === 0 ? ' active' : '');
    btn.textContent = d.name[lang];
    btn.onclick = () => updateDrinkShowcase(i);
    bar.appendChild(btn);
  });
}

function updateDrinkShowcase(i) {
  featDrinkIdx = i;
  const fd = FEATURED_DRINKS[i]; const d = MENU.find(m => m.id === fd.id); if (!d) return;
  const img = document.getElementById('drinkFeatImg');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = fd.img; img.onload = () => { img.style.transition = 'opacity 0.6s'; img.style.opacity = '1'; };
    document.getElementById('drinkFeatName').textContent = d.name[lang];
    document.getElementById('drinkFeatDesc').textContent = d.desc[lang];
    document.getElementById('drinkFeatPrice').textContent = `RM ${d.price}`;
    document.querySelectorAll('.drink-tab').forEach((b, idx) => b.classList.toggle('active', idx === i));
  }, 300);
}

function addFeaturedDrink() { addToCart(FEATURED_DRINKS[featDrinkIdx].id); }

// ─── MEAL OF THE DAY ─────────────────────────────────────────
function renderMOTD() {
  const dow = new Date().getDay();
  const m = MOTD[dow];
  const imgEl = document.getElementById('motdImg');
  imgEl.src = m.img;
  imgEl.alt = m.name[lang];
  document.getElementById('motdTitle').textContent = m.name[lang];
  document.getElementById('motdDesc').textContent = m.desc[lang];
  document.getElementById('motdDrink').textContent = m.drink[lang];
  document.getElementById('motdPrice').innerHTML = `RM ${m.price} <small style="font-family:'Jost',sans-serif;font-size:0.7rem;color:var(--text-dim);display:block;">${m.day[lang]}</small>`;
  const badge = document.getElementById('motdBadge');
  badge.textContent = lang === 'ru' ? 'Сегодня' : 'Today';
  document.getElementById('motdCartBtn').textContent = lang === 'ru' ? '+ В корзину' : '+ Add to Cart';
  document.getElementById('motdCartBtn').onclick = () => {
    const item = { id: m.cartId, name: m.name, desc: m.desc, price: m.price, qty: 1, img: m.img, tags: ['motd'], cat: 'motd' };
    const ex = cart.find(i => i.id === m.cartId);
    if (ex) ex.qty++; else cart.push(item);
    updateCartUI(); animateBadge();
    showToast(`✦ ${m.name[lang]} ${T[lang].toast_added}`);
  };
}

// ─── REVIEWS ──────────────────────────────────────────────────
const REVIEWS_PER_PAGE = 3;

function renderReviews() {
  const track = document.getElementById('reviewsTrack'), dots = document.getElementById('reviewsDots');
  track.innerHTML = '';
  REVIEWS.forEach(r => {
    const c = document.createElement('div'); c.className = 'review-card';
    c.innerHTML = `<div class="review-stars">${'★'.repeat(r.stars)}</div>
      <div class="review-text">${r.text[lang]}</div>
      <div class="review-footer">
        <img class="review-avatar" src="${r.avatar}" alt="${r.name[lang]}" width="40" height="40" loading="lazy" decoding="async">
        <div><div class="review-name">${r.name[lang]}</div>
        <div class="review-date">${r.location[lang]} · ${r.date[lang]}</div>
        <div class="review-source">${r.source}</div></div>
      </div>`;
    track.appendChild(c);
  });
  dots.innerHTML = '';
  const pages = REVIEWS.length - REVIEWS_PER_PAGE + 1;
  for (let i = 0; i < pages; i++) {
    const d = document.createElement('div'); d.className = 'rev-dot' + (i === 0 ? ' active' : '');
    d.onclick = () => goToReview(i); dots.appendChild(d);
  }
  goToReview(reviewOffset, false); startReviewAuto();
}

function goToReview(idx, animate = true) {
  const track = document.getElementById('reviewsTrack');
  if (!track.children.length) return;
  const cardW = track.children[0].offsetWidth + 24;
  const max = REVIEWS.length - REVIEWS_PER_PAGE;
  reviewOffset = Math.max(0, Math.min(idx, max));
  track.style.transition = animate ? 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none';
  track.style.transform = `translateX(-${reviewOffset * cardW}px)`;
  document.querySelectorAll('.rev-dot').forEach((d, i) => d.classList.toggle('active', i === reviewOffset));
}

function shiftReview(dir) { goToReview(reviewOffset + dir); resetReviewAuto(); }

function startReviewAuto() {
  clearInterval(reviewAutoTimer);
  reviewAutoTimer = setInterval(() => {
    const max = REVIEWS.length - REVIEWS_PER_PAGE;
    goToReview(reviewOffset >= max ? 0 : reviewOffset + 1);
  }, REVIEW_AUTO_INTERVAL_MS);
}

function resetReviewAuto() { clearInterval(reviewAutoTimer); startReviewAuto(); }

// ─── RESERVATION ─────────────────────────────────────────────
let resCurrentStep = 1;
let resOccasion = '';

function resGoToStep(step) {
  if (step === 2 && !validateStep1()) return;
  if (step === 3 && !selectedTable) return;

  resCurrentStep = step;

  // Show/hide step panels
  [1, 2, 3].forEach(s => {
    const el = document.getElementById(`resStep${s}`);
    if (el) { el.hidden = step !== s; el.classList.toggle('res-step-active', step === s); }
  });
  document.getElementById('resSuccess').hidden = true;

  // Update step indicators
  document.querySelectorAll('#resSteps .res-step').forEach(el => {
    const n = parseInt(el.dataset.step);
    el.classList.toggle('res-step--active', n === step);
    el.classList.toggle('res-step--done', n < step);
  });

  // Step-specific setup
  if (step === 2) {
    buildFloorPlan();
    updateDepositDisplay();
    renderStep2Summary();
    document.getElementById('resTableInfo').innerHTML =
      `<div class="res-info-title">← Select a table</div>
       <div class="res-info-sub">Click any available table on the floor plan to see details.</div>`;
    document.getElementById('resStep2Next').disabled = !selectedTable;
  }
  if (step === 3) {
    renderStep3Summary();
    validateStep3();
  }

  // Scroll modal body to top
  const body = document.getElementById('resBody');
  if (body) body.scrollTop = 0;
}

function validateStep1() {
  const date = document.getElementById('resDate').value;
  const time = document.getElementById('resTime').value;
  const guests = parseInt(document.getElementById('resGuests').value) || 0;
  const ok = date && time && guests > 0;
  document.getElementById('resStep1Next').disabled = !ok;
  return ok;
}

function validateStep3() {
  const name = document.getElementById('resName').value.trim();
  const phone = document.getElementById('resPhone').value.trim();
  document.getElementById('resSubmitBtn').disabled = !(name && phone);
}

function renderStep2Summary() {
  const date = document.getElementById('resDate').value;
  const time = document.getElementById('resTime').value;
  const guests = document.getElementById('resGuests').value;
  const d = date ? new Date(date + 'T12:00:00').toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-GB', {weekday:'short',day:'numeric',month:'short'}) : '';
  document.getElementById('resStep2Summary').innerHTML =
    `<div class="res-booking-pill">
       <span>📅 ${d}</span><span>🕐 ${time}</span><span>👥 ${guests} ${lang === 'ru' ? 'гостей' : 'guests'}</span>
       ${resOccasion ? `<span>✨ ${resOccasion}</span>` : ''}
     </div>`;
}

function renderStep3Summary() {
  const date = document.getElementById('resDate').value;
  const time = document.getElementById('resTime').value;
  const guests = document.getElementById('resGuests').value;
  const t = selectedTable ? TABLES.find(tb => tb.id === selectedTable) : null;
  const d = date ? new Date(date + 'T12:00:00').toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-GB', {weekday:'long',day:'numeric',month:'long',year:'numeric'}) : '';
  const deposit = t && t.isPrivate ? `RM ${DEPOSIT_PRIVATE}` : `RM ${DEPOSIT_STANDARD}`;
  document.getElementById('resStep3Summary').innerHTML =
    `<div class="res-booking-pill">
       <span>📅 ${d}</span><span>🕐 ${time}</span><span>👥 ${guests} ${lang === 'ru' ? 'гостей' : 'guests'}</span>
       ${t ? `<span>🪑 Table ${t.id} · ${t.zone}</span>` : ''}
     </div>`;
  document.getElementById('resBookingSummary').innerHTML =
    `<div class="res-confirm-summary">
       <div class="res-cs-row"><span class="res-cs-label" data-i18n="res_date">Date</span><span class="res-cs-val">${d}</span></div>
       <div class="res-cs-row"><span class="res-cs-label" data-i18n="res_time">Time</span><span class="res-cs-val">${time}</span></div>
       <div class="res-cs-row"><span class="res-cs-label" data-i18n="res_guests">Guests</span><span class="res-cs-val">${guests}</span></div>
       ${t ? `<div class="res-cs-row"><span class="res-cs-label">Table</span><span class="res-cs-val">${t.id} — ${t.zone}</span></div>` : ''}
       ${resOccasion ? `<div class="res-cs-row"><span class="res-cs-label">Occasion</span><span class="res-cs-val">${resOccasion}</span></div>` : ''}
       <div class="res-cs-row res-cs-row--total"><span class="res-cs-label" data-i18n="deposit_title">Deposit</span><span class="res-cs-val res-cs-deposit">${deposit}</span></div>
     </div>`;
}

function changeGuestsCount(delta) {
  const input = document.getElementById('resGuests');
  const num = document.getElementById('guestsNum');
  let val = parseInt(input.value) || 2;
  val = Math.max(1, Math.min(10, val + delta));
  input.value = val;
  num.textContent = val;
  document.getElementById('guestsMinus').disabled = val <= 1;
  document.getElementById('guestsPlus').disabled = val >= 10;
  validateStep1();
}

// Occasion chip selection
document.getElementById('resOccasionChips').addEventListener('click', e => {
  const chip = e.target.closest('.res-occasion-chip');
  if (!chip) return;
  document.querySelectorAll('.res-occasion-chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  resOccasion = chip.dataset.occasion || '';
});

['resDate', 'resTime'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('change', validateStep1);
});

['resName', 'resPhone'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', validateStep3);
});

function buildFloorPlan() {
  const svg = document.getElementById('floorSvg');
  document.querySelectorAll('.tbl').forEach(e => e.remove());
  const CHAIR_GAP = 11, CHAIR_R = 6;
  const guestCount = parseInt(document.getElementById('resGuests').value) || 0;
  TABLES.forEach(t => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const tooSmall = guestCount > 0 && guestCount > t.maxGuests;
    const effectiveStatus = t.status === 'taken' || tooSmall ? 'taken' : t.status;
    g.setAttribute('class', `tbl ${effectiveStatus}${t.id === selectedTable ? ' selected' : ''}`);
    g.setAttribute('id', `tbl_${t.id}`);
    if (effectiveStatus === 'free') g.addEventListener('click', () => selectTable(t.id));

    // Chairs
    const chairOffset = t.r + CHAIR_GAP;
    for (let i = 0; i < t.seats; i++) {
      const angle = (i / t.seats) * 2 * Math.PI - Math.PI / 2;
      const cx2 = t.cx + Math.cos(angle) * chairOffset;
      const cy2 = t.cy + Math.sin(angle) * chairOffset;
      const chair = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      chair.setAttribute('cx', cx2.toFixed(1)); chair.setAttribute('cy', cy2.toFixed(1));
      chair.setAttribute('r', CHAIR_R); chair.setAttribute('class', 'chair-shape');
      g.appendChild(chair);
    }

    const fill = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    fill.setAttribute('class', 'tbl-top');
    fill.setAttribute('cx', t.cx); fill.setAttribute('cy', t.cy); fill.setAttribute('r', t.r);

    const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    ring.setAttribute('class', 'tbl-ring');
    ring.setAttribute('cx', t.cx); ring.setAttribute('cy', t.cy); ring.setAttribute('r', t.r);

    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', t.cx); label.setAttribute('y', t.cy);
    label.setAttribute('text-anchor', 'middle'); label.setAttribute('dominant-baseline', 'middle');
    label.setAttribute('pointer-events', 'none');
    label.setAttribute('font-family', "'Jost',sans-serif");
    label.setAttribute('font-size', '9'); label.setAttribute('font-weight', '500');
    label.textContent = t.id;

    // Seat count label
    const seatLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    seatLabel.setAttribute('x', t.cx); seatLabel.setAttribute('y', t.cy + 10);
    seatLabel.setAttribute('text-anchor', 'middle');
    seatLabel.setAttribute('pointer-events', 'none');
    seatLabel.setAttribute('font-family', "'Jost',sans-serif");
    seatLabel.setAttribute('font-size', '7');
    seatLabel.setAttribute('fill', 'rgba(201,168,76,0.5)');
    seatLabel.textContent = `${t.seats}p`;

    g.appendChild(fill); g.appendChild(ring); g.appendChild(label); g.appendChild(seatLabel);
    svg.appendChild(g);
  });
}

function selectTable(id) {
  const t = TABLES.find(tb => tb.id === id);
  if (!t || t.status === 'taken') return;
  const guestCount = parseInt(document.getElementById('resGuests').value) || 0;
  if (guestCount > t.maxGuests) return;
  selectedTable = id;
  TABLES.forEach(tb => {
    const g = document.getElementById(`tbl_${tb.id}`);
    if (!g) return;
    const gCount = parseInt(document.getElementById('resGuests').value) || 0;
    const tooSmall = gCount > 0 && gCount > tb.maxGuests;
    if (tb.id === id) g.setAttribute('class', 'tbl selected');
    else if (tb.status === 'free' && !tooSmall) g.setAttribute('class', 'tbl free');
    else g.setAttribute('class', 'tbl taken');
  });

  const info = document.getElementById('resTableInfo');
  const privNote = t.isPrivate
    ? `<div class="res-table-private-note">🛋️ <strong>Sofa suite</strong> — intimate private room.<br>Seating arranged to your group. Up to ${t.maxGuests} guests. <span style="color:var(--gold)">RM ${DEPOSIT_PRIVATE} deposit.</span></div>`
    : `<div class="res-table-capacity">${t.seats} seats · up to ${t.maxGuests} guests</div>`;
  info.innerHTML =
    `<div class="res-table-selected-header">
       <div class="res-info-title">Table ${t.id}</div>
       <span class="res-table-available-tag">✓ Available</span>
     </div>
     <div class="res-info-sub">Zone: <strong style="color:var(--cream-bright)">${t.zone}</strong></div>
     ${privNote}`;

  document.getElementById('resStep2Next').disabled = false;
  updateDepositDisplay();
}

function updateDepositDisplay() {
  const t = selectedTable ? TABLES.find(tb => tb.id === selectedTable) : null;
  const isPrivate = t && t.isPrivate;
  const amt = isPrivate ? `RM ${DEPOSIT_PRIVATE}.00` : `RM ${DEPOSIT_STANDARD}.00`;
  const depositEl = document.querySelector('.deposit-amount');
  if (depositEl) depositEl.textContent = amt;
}

function submitReservation() {
  const ref = 'LI-' + Math.floor(10000 + Math.random() * 90000);
  const date = document.getElementById('resDate').value;
  const time = document.getElementById('resTime').value;
  const guests = document.getElementById('resGuests').value;
  const t = selectedTable ? TABLES.find(tb => tb.id === selectedTable) : null;
  const d = date ? new Date(date + 'T12:00:00').toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-GB', {weekday:'long',day:'numeric',month:'long',year:'numeric'}) : '';

  // Hide all steps, show success
  [1, 2, 3].forEach(s => { const el = document.getElementById(`resStep${s}`); if (el) el.hidden = true; });
  document.querySelectorAll('#resSteps .res-step').forEach(el => el.classList.add('res-step--done'));

  const successEl = document.getElementById('resSuccess');
  successEl.hidden = false;
  document.getElementById('resRef').textContent = 'Booking Ref: ' + ref;
  document.getElementById('resSuccessDetails').innerHTML =
    `<div class="res-success-info">
       <div>📅 ${d}</div>
       <div>🕐 ${time} &nbsp;·&nbsp; 👥 ${guests} ${lang === 'ru' ? 'гостей' : 'guests'}</div>
       ${t ? `<div>🪑 Table ${t.id} — ${t.zone}</div>` : ''}
     </div>`;

  const body = document.getElementById('resBody');
  if (body) body.scrollTop = 0;
  showToast('✦ Reservation confirmed! ' + ref);
}

function openReservationFromWidget() {
  const date = document.getElementById('qbDate').value;
  const time = document.getElementById('qbTime').value;
  const guests = document.getElementById('qbGuests').value;
  openReservation(null, { date, time, guests });
}

function openReservation(ctx, prefill) {
  selectedTable = null;
  resOccasion = '';
  resCurrentStep = 1;

  // Reset fields
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('resDate').min = today;
  document.getElementById('resDate').value = prefill?.date || '';
  document.getElementById('resTime').value = prefill?.time || '';
  const gVal = parseInt(prefill?.guests) || 2;
  document.getElementById('resGuests').value = gVal;
  document.getElementById('guestsNum').textContent = gVal;
  document.getElementById('guestsMinus').disabled = gVal <= 1;
  document.getElementById('guestsPlus').disabled = gVal >= 10;
  document.getElementById('resName').value = '';
  document.getElementById('resPhone').value = '';
  document.getElementById('resEmail') && (document.getElementById('resEmail').value = '');
  document.getElementById('resNote').value = '';

  // Occasion chips
  document.querySelectorAll('.res-occasion-chip').forEach(c => c.classList.remove('active'));
  document.querySelector('.res-occasion-chip[data-occasion=""]')?.classList.add('active');

  if (ctx === 'chefs_dinner') {
    document.getElementById('resNote').value = "Chef's Secret Dinner — wine pairing please";
    document.getElementById('resTime').value = '19:00';
  }
  if (ctx === 'birthday') {
    document.getElementById('resNote').value = 'Compleanno Package — birthday surprise please';
    document.querySelector('.res-occasion-chip[data-occasion="birthday"]')?.classList.add('active');
    document.querySelector('.res-occasion-chip[data-occasion=""]')?.classList.remove('active');
    resOccasion = 'birthday';
  }

  // Show step 1
  [1, 2, 3].forEach(s => { const el = document.getElementById(`resStep${s}`); if (el) el.hidden = s !== 1; });
  document.getElementById('resSuccess').hidden = true;
  document.querySelectorAll('#resSteps .res-step').forEach(el => {
    const n = parseInt(el.dataset.step);
    el.classList.toggle('res-step--active', n === 1);
    el.classList.remove('res-step--done');
  });

  validateStep1();
  openOverlay('resOverlay');
}

// ─── GIFT CARDS ───────────────────────────────────────────────
const GIFT_DENOMS = [
  {amount:50, label:'Casual Dinner', tag:''},
  {amount:100, label:'Special Night', tag:'Popular'},
  {amount:200, label:'Premium Experience', tag:''},
  {amount:500, label:'Ultimate Gift', tag:'Best Value'},
];

function buildGiftCards() {
  const grid = document.getElementById('giftDenomGrid'); grid.innerHTML = '';
  GIFT_DENOMS.forEach(d => {
    const c = document.createElement('div'); c.className = 'gift-denom';
    c.innerHTML = `<div class="gift-denom-amount">RM ${d.amount}</div>
      <div class="gift-denom-label">${d.label}</div>
      ${d.tag ? `<div class="gift-denom-tag">${d.tag}</div>` : ''}`;
    c.onclick = () => {
      document.querySelectorAll('.gift-denom').forEach(el => el.classList.remove('selected'));
      c.classList.add('selected');
      selectedGiftAmt = d.amount;
      document.getElementById('giftTotal').textContent = `RM ${d.amount}`;
    };
    grid.appendChild(c);
  });
}

function openGiftCards() { buildGiftCards(); openOverlay('giftOverlay'); }

function purchaseGift() {
  if (!selectedGiftAmt) { showToast('✦ Please select an amount'); return; }
  showToast(`✦ Gift card RM ${selectedGiftAmt} purchased! Check your email.`);
  closeOverlay('giftOverlay');
}

// ─── CATERING ─────────────────────────────────────────────────
const CATERING_PKGS = [
  {name:'Classico', price:'RM 85', per:'/person', features:['Pasta station (3 types)', 'Antipasti spread', 'Soft drinks & water', 'Service staff']},
  {name:'Toscano', price:'RM 145', per:'/person', features:['Everything in Classico', 'Wood-fired pizza station', 'Dessert table (Tiramisù, Panna Cotta)', 'Wine & Prosecco service']},
  {name:'Gran Lusso', price:'Custom', per:'quote', features:['Everything in Toscano', 'Chef Marco on-site', 'Private sommelier', 'Full bar setup', 'Menu customisation']},
];

function buildCateringPkgs() {
  const grid = document.getElementById('cateringPkgGrid'); grid.innerHTML = '';
  CATERING_PKGS.forEach(p => {
    const c = document.createElement('div'); c.className = 'cat-pkg';
    c.innerHTML = `<div class="cat-pkg-name">${p.name}</div>
      <div class="cat-pkg-price">${p.price}<small>${p.per}</small></div>
      <ul class="cat-pkg-features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>`;
    c.onclick = () => {
      document.querySelectorAll('.cat-pkg').forEach(el => el.classList.remove('selected'));
      c.classList.add('selected'); selectedCatPkg = p.name;
    };
    grid.appendChild(c);
  });
}

function openCatering() { buildCateringPkgs(); openOverlay('cateringOverlay'); }

function submitCatering() {
  showToast('✦ Catering enquiry sent! We\'ll contact you within 24 hours.');
  closeOverlay('cateringOverlay');
}

// ─── BUSINESS LUNCH MODAL ─────────────────────────────────────
const LUNCH_MAINS = MENU.filter(d => d.cat === 'pasta' || d.cat === 'pizza');
const LUNCH_DRINKS = MENU.filter(d => d.cat === 'drinks' && [21, 22, 24, 20].includes(d.id));
const LUNCH_DESSERTS = MENU.filter(d => d.cat === 'desserts');
let lunchSel = {main: null, drink: null, dessert: null};

function renderLunchGrid(containerId, items, type) {
  const grid = document.getElementById(containerId); grid.innerHTML = '';
  items.forEach(item => {
    const el = document.createElement('div');
    el.className = 'lunch-item' + (lunchSel[type] === item.id ? ' selected' : '');
    el.innerHTML = `
      <div class="lunch-item-img"><img src="${item.img}" alt="${item.name[lang]}" width="200" height="100" loading="lazy" decoding="async"></div>
      <div class="lunch-item-info">
        <div class="lunch-item-name">${item.name[lang]}</div>
        <div class="lunch-item-desc">${item.desc[lang].split('.')[0]}.</div>
      </div>`;
    el.onclick = () => {
      lunchSel[type] = item.id;
      renderLunchGrid(containerId, items, type);
      updateLunchSummary();
    };
    grid.appendChild(el);
  });
}

function updateLunchSummary() {
  const getN = (id, arr) => { const d = arr.find(m => m.id === id); return d ? d.name[lang] : null; };
  const mName = getN(lunchSel.main, LUNCH_MAINS);
  const drName = getN(lunchSel.drink, LUNCH_DRINKS);
  const dsName = getN(lunchSel.dessert, LUNCH_DESSERTS);
  const mv = document.getElementById('lunchMainVal');
  const dv = document.getElementById('lunchDrinkVal');
  const dev = document.getElementById('lunchDessertVal');
  mv.textContent = mName || 'Not selected'; mv.className = 'lunch-summary-val' + (mName ? '' : ' empty');
  dv.textContent = drName || 'Not selected'; dv.className = 'lunch-summary-val' + (drName ? '' : ' empty');
  dev.textContent = dsName || 'Not selected'; dev.className = 'lunch-summary-val' + (dsName ? '' : ' empty');
  document.getElementById('lunchConfirmBtn').disabled = !(lunchSel.main && lunchSel.drink && lunchSel.dessert);
}

function openLunchModal() {
  lunchSel = {main: null, drink: null, dessert: null};
  renderLunchGrid('lunchMainGrid', LUNCH_MAINS, 'main');
  renderLunchGrid('lunchDrinkGrid', LUNCH_DRINKS, 'drink');
  renderLunchGrid('lunchDessertGrid', LUNCH_DESSERTS, 'dessert');
  updateLunchSummary();
  const overlay = document.getElementById('lunchOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  setBottomBarVisible(false);
  trapFocus(overlay.querySelector('.lunch-modal'));
}

function closeLunchModal() {
  document.getElementById('lunchOverlay').classList.remove('open');
  document.body.style.overflow = '';
  setBottomBarVisible(true);
  releaseTrap();
}

function confirmLunch() {
  const main = MENU.find(d => d.id === lunchSel.main);
  const drink = MENU.find(d => d.id === lunchSel.drink);
  const dessert = MENU.find(d => d.id === lunchSel.dessert);
  const lunchItem = {
    id: 'lunch_set_' + Date.now(),
    name: {en: `Lunch Set (${main.name.en})`, ru: `Бизнес-ланч (${main.name.ru})`},
    desc: {en: `${main.name.en} + ${drink.name.en} + ${dessert.name.en}`, ru: ''},
    price: LUNCH_SET_PRICE, qty: 1,
    img: main.img,
    isSet: true
  };
  cart.push(lunchItem);
  updateCartUI(); animateBadge();
  showToast('✦ Lunch Set added to cart');
  closeLunchModal();
}

document.getElementById('lunchOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('lunchOverlay')) closeLunchModal();
});

function setBottomBarVisible(visible) {
  const bar = document.getElementById('mobileBottomBar');
  if (bar) bar.style.transform = visible ? '' : 'translateY(100%)';
}

function openOverlay(id) {
  const overlay = document.getElementById(id);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  setBottomBarVisible(false);
  trapFocus(overlay.querySelector('.page-modal'));
}

function closeOverlay(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
  setBottomBarVisible(true);
  releaseTrap();
}

document.querySelectorAll('.page-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeOverlay(overlay.id);
  });
});

// ─── CART ─────────────────────────────────────────────────────
function getTotal() {
  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
  return {sub, disc: +(sub * discount).toFixed(2), total: +(sub * (1 - discount)).toFixed(2)};
}

function addToCart(id) {
  const dish = MENU.find(d => d.id === id); if (!dish) return;
  const ex = cart.find(i => i.id === id);
  if (ex) ex.qty++; else cart.push({...dish, qty: 1});
  updateCartUI(); animateBadge();
  showToast(`✦ ${dish.name[lang]} ${T[lang].toast_added}`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function changeQty(id, d) {
  const item = cart.find(i => i.id === id); if (!item) return;
  item.qty += d; if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const t = T[lang];
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartBadge').textContent = total;
  const mbbBadge = document.getElementById('mbbBadge');
  if (mbbBadge) { mbbBadge.textContent = total; mbbBadge.style.display = total > 0 ? '' : 'none'; }
  const el = document.getElementById('cartItems');
  if (!cart.length) {
    el.innerHTML = `<div class="cart-empty"><span class="cart-empty-icon">🍕</span><p>${t.cart_empty}</p></div>`;
    document.getElementById('checkoutBtn').disabled = true;
  } else {
    el.innerHTML = cart.map(i => {
      const idAttr = typeof i.id === 'string' ? `'${i.id}'` : i.id;
      return `
      <div class="cart-item">
        <img class="cart-item-img" src="${i.img}" alt="${i.name[lang]}" width="60" height="60" decoding="async">
        <div class="cart-item-info">
          <div class="cart-item-name">${i.name[lang]}</div>
          <div class="cart-item-price">RM ${(i.price * i.qty).toFixed(2)}</div>
        </div>
        <div class="cart-qty">
          <button class="qty-btn" onclick="changeQty(${idAttr},-1)" aria-label="Decrease quantity">−</button>
          <span class="qty-num">${i.qty}</span>
          <button class="qty-btn" onclick="changeQty(${idAttr},1)" aria-label="Increase quantity">+</button>
        </div>
      </div>`;
    }).join('');
    document.getElementById('checkoutBtn').disabled = false;
  }
  const {sub, disc, total: tot} = getTotal();
  document.getElementById('cartTotals').innerHTML = `
    <div class="total-row"><span>${t.subtotal}</span><span>RM ${sub.toFixed(2)}</span></div>
    <div class="total-row"><span>${t.delivery}</span><span>${t.free}</span></div>
    ${disc > 0 ? `<div class="total-row discount"><span>${t.discount} (20%)</span><span>−RM ${disc.toFixed(2)}</span></div>` : ''}
    <div class="total-row main"><span>${t.total}</span><span>RM ${tot.toFixed(2)}</span></div>`;
  document.getElementById('modalTotal').textContent = `RM ${tot.toFixed(2)}`;
  const cartTitle = document.querySelector('.cart-title'); if (cartTitle) cartTitle.textContent = t.cart_title;
  const cBtn = document.getElementById('checkoutBtn'); if (cBtn && !cBtn.disabled) cBtn.textContent = t.checkout_btn;
}

function applyPromo() {
  const v = document.getElementById('promoInput').value.trim().toUpperCase();
  if (v === PROMO_CODE) { discount = PROMO_DISCOUNT; showToast(T[lang].toast_promo); updateCartUI(); }
  else showToast(T[lang].toast_invalid);
}

function toggleCart() {
  const isOpen = document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
  setBottomBarVisible(!isOpen);
}

function openCheckout() {
  if (!cart.length) return;
  toggleCart();
  setTimeout(() => {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.add('open');
    setBottomBarVisible(false);
    trapFocus(overlay.querySelector('.modal'));
  }, 350);
}

function closeCheckout() {
  document.getElementById('modalOverlay').classList.remove('open');
  setBottomBarVisible(true);
  releaseTrap();
  setTimeout(() => {
    document.getElementById('checkoutForm').style.display = '';
    document.getElementById('successScreen').classList.remove('show');
  }, 400);
}

function placeOrder() {
  document.getElementById('checkoutForm').style.display = 'none';
  document.getElementById('successScreen').classList.add('show');
  cart = []; discount = 0; updateCartUI();
}

function selectDelivery(el, type) {
  document.querySelectorAll('.delivery-opt').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  document.getElementById('addressSection').style.display = type === 'pickup' ? 'none' : '';
}

// ─── MENU RENDER ──────────────────────────────────────────────
function renderMenu(cat = 'all') {
  currentCat = cat; const t = T[lang];
  const grid = document.getElementById('menuGrid'); grid.innerHTML = '';
  const items = cat === 'all' ? MENU : MENU.filter(d => d.cat === cat);
  items.forEach((d, i) => {
    const el = document.createElement('div'); el.className = 'dish-card';
    el.style.cssText = `opacity:0;animation:fadeUp 0.45s ${i * 0.045}s ease forwards`;
    const isChef = d.tags.includes('chef'), isHit = d.tags.includes('hit');
    const lbl = isChef ? `<span class="dish-label gold-label">${t.chef_label}</span>` : isHit ? `<span class="dish-label">${t.hit_label}</span>` : '';
    const badges = d.tags.map(tag => `<span class="badge">${tag}</span>`).join('');
    el.innerHTML = `
      <div class="dish-img"><img src="${d.img}" alt="${d.name[lang]}" width="360" height="240" loading="lazy" decoding="async">${lbl}</div>
      <div class="dish-info">
        <div class="dish-name">${d.name[lang]}</div>
        <div class="dish-desc">${d.desc[lang]}</div>
        <div class="dish-badges">${badges}</div>
        <div class="dish-footer">
          <div class="dish-price">RM ${d.price}<span>.00</span></div>
          <button class="add-btn" onclick="addToCart(${d.id})">+ ${t.add_btn}</button>
        </div>
      </div>`;
    grid.appendChild(el);
  });
}

function selectFilter(cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`[data-cat="${cat}"]`); if (btn) btn.classList.add('active');
  renderMenu(cat);
  setTimeout(() => document.getElementById('menu').scrollIntoView({behavior: 'smooth'}), 100);
}

document.getElementById('filterBar').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn'); if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active'); renderMenu(btn.dataset.cat);
});

// ─── TOAST & BADGE ────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), TOAST_DURATION_MS);
}

function animateBadge() {
  const b = document.getElementById('cartBadge');
  b.classList.remove('bounce'); void b.offsetWidth; b.classList.add('bounce');
}

// ─── MOBILE NAV ───────────────────────────────────────────────
function toggleMobileNav() {
  const drawer = document.getElementById('mobileNavDrawer');
  const ham = document.getElementById('hamburger');
  drawer.classList.toggle('open');
  ham.classList.toggle('open');
  document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
}

function closeMobileNav() {
  document.getElementById('mobileNavDrawer').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── CONSOLIDATED SCROLL HANDLER ─────────────────────────────
const heroBg = document.querySelector('.hero-bg');
const heroBadge = document.querySelector('.hero-badge');
const heroScrollEl = document.querySelector('.hero-scroll');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  // Navbar scroll class
  document.getElementById('navbar').classList.toggle('scrolled', y > 60);
  // Parallax (only within hero height)
  const h = window.innerHeight;
  if (y < h) {
    if (heroBadge) heroBadge.style.transform = `translateY(${y * -0.12}px)`;
    if (heroScrollEl) heroScrollEl.style.opacity = Math.max(0, 1 - (y / (h * 0.28))).toString();
    if (heroBg) heroBg.style.backgroundPositionY = (y * 0.3) + 'px';
  }
}, {passive: true});

// ─── SCROLL REVEAL ────────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, {threshold: 0.08, rootMargin: '0px 0px -50px 0px'});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => observer.observe(el));

// ─── ACTIVE NAV SECTION HIGHLIGHTING ─────────────────────────
(function() {
  const ids = ['home', 'about', 'menu', 'pizza', 'drinks-feature', 'specials', 'reviews', 'footer'];
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  function activate(id) {
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) activate(e.target.id); });
  }, {threshold: 0.3, rootMargin: '-60px 0px -38% 0px'});
  ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
})();

// ─── STAT COUNTER ANIMATION ───────────────────────────────────
(function() {
  let fired = false;
  function countUp(el) {
    const raw = el.textContent.trim();
    const m = raw.match(/^([★]?)(\d+\.?\d*)(.*)$/);
    if (!m) return;
    const pre = m[1] || '', target = parseFloat(m[2]), suf = m[3] || '';
    if (isNaN(target)) return;
    const dur = 1600, t0 = performance.now();
    (function tick(now) {
      const p = Math.min((now - t0) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const v = target * ease;
      el.textContent = pre + (Number.isInteger(target) ? Math.round(v) : v.toFixed(1)) + suf;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }
  const cObs = new IntersectionObserver(entries => {
    if (fired) return;
    entries.forEach(e => {
      if (e.isIntersecting) {
        fired = true;
        setTimeout(() => { document.querySelectorAll('.stat-num').forEach(countUp); }, 420);
        cObs.disconnect();
      }
    });
  }, {threshold: 0.45});
  const ab = document.getElementById('about'); if (ab) cObs.observe(ab);
})();

// ─── RIPPLE EFFECT ON BUTTONS ─────────────────────────────────
(function() {
  function ripple(e) {
    const btn = e.currentTarget, r = btn.getBoundingClientRect();
    const sz = Math.max(r.width, r.height);
    const w = document.createElement('span');
    w.className = 'ripple-wave';
    w.style.cssText = 'width:' + sz + 'px;height:' + sz + 'px;left:' + (e.clientX - r.left - sz / 2) + 'px;top:' + (e.clientY - r.top - sz / 2) + 'px;';
    btn.appendChild(w);
    w.addEventListener('animationend', () => w.remove());
  }
  const sel = [
    '.btn-primary', '.btn-outline', '.add-btn', '.offer-cta', '.filter-btn',
    '.nav-cart-btn', '.checkout-btn', '.place-btn', '.res-submit-btn',
    '.gift-submit', '.catering-submit', '.lunch-confirm-btn',
    '.rev-arrow', '.qty-btn', '.promo-btn', '.lang-btn', '.drink-tab'
  ].join(',');
  document.querySelectorAll(sel).forEach(btn => {
    const cs = getComputedStyle(btn);
    if (cs.position === 'static') btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.addEventListener('click', ripple);
  });
})();

// ─── CARD 3D MICRO-TILT ───────────────────────────────────────
(function() {
  if (window.matchMedia('(max-width:768px)').matches) return;
  document.querySelectorAll('.dish-card,.offer-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 7;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 7;
      card.style.transform = `translateY(-6px) perspective(700px) rotateX(${-y}deg) rotateY(${x}deg)`;
      card.style.transition = 'transform 0.08s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94),box-shadow 0.35s,border-color 0.35s';
      card.style.transform = '';
    });
  });
})();

// ─── INIT ────────────────────────────────────────────────────
document.getElementById('copyrightYear').textContent = new Date().getFullYear();
buildMarquee();
renderMenu();
updateCartUI();
applyTranslations();
buildDrinkTabs();
updateDrinkShowcase(0);
renderReviews();
renderMOTD();
