"use strict"


var heroes = (function () {

    var heroesPath = {
        princess: [{
            beast: new myFunctions.Hero(["fairytales/beast/beast (1).jpg", "fairytales/beast/beast (2).jpg", "fairytales/beast/beast (3).jpg", "fairytales/beast/beast (4).jpg", "fairytales/beast/beast (5).jpg", "fairytales/beast/beast (6).jpg",
                    "fairytales/beast/beast (7).jpg", "fairytales/beast/beast (8).jpg", "fairytales/beast/beast (9).jpg", "fairytales/beast/beast (10).jpg", "fairytales/beast/beast (11).jpg", "fairytales/beast/beast (12).jpg", "fairytales/beast/beast png (1).png", "fairytales/beast/beast png (2).png"],
                '<iframe width="390" height="233" src="https://www.youtube.com/embed/A5ZB8sFZDT8" frameborder="0" allowfullscreen></iframe>',
                'Красавица и Чудовище',
                "https://s3.amazonaws.com/fairytales.mp3-bucket/beast.mp3",
                ["Как звали главную героиню?", "Кто превратил принца в Чудовище?", "Что попросила Бэлль у отца привезти из поездки?",
                    "Где отец взял цветок для Бэлль?", "Кого полюбила Бэлль?"],
                [["Хэлен", "Бэлль", "Наташа", "Маша"],
                    ["Волшебница", "Волшебник", "Фокусник", "Сам превратился"],
                    ["Кольцо", "Телефон", "Сумочку", "Цветок"],
                    ["Купил на рынке", "Сам вырастил", "Украл у Чудовища", "Нашел"],
                    ["Короля", "Слугу", "Прохожего", "Чудовище"]],
                ["Бэлль", "Волшебница", "Цветок", "Украл у Чудовища", "Чудовище"])
        },
            {
                beauty: new myFunctions.Hero(["fairytales/beauty/beauty (2).jpg", "fairytales/beauty/beauty (1).jpg",
                        "fairytales/beauty/beauty (3).jpg", "fairytales/beauty/beauty (4).jpg", "fairytales/beauty/beauty (5).jpg", "fairytales/beauty/beauty (6).jpg", "fairytales/beauty/beauty (7).jpg",
                        "fairytales/beauty/beauty (8).jpg", "fairytales/beauty/beauty (9).jpg", "fairytales/beauty/beauty png (1).png", "fairytales/beauty/beauty png (2).png", "fairytales/beauty/beauty png (3).png"],
                    '<iframe width="390" height="233" src="https://www.youtube.com/embed/jIm9APFZE4M" frameborder="0" allowfullscreen></iframe>',
                    'Спящая красавица',
                    "https://s3.amazonaws.com/fairytales.mp3-bucket/beauty.mp3",
                    ["Как звали главную героиню?", "От чего заснула Аврора?", "Кто виноват в несчастьи Авроры?", "Кто спас Аврору?", "Как принц разбудил Аврору?"],
                    [["Рапунцель", "Аврора", "Ариэль", "Белоснежка"],
                        ["Съела отравленное яблоко", "Уколола палец об веретено", "Упала с башни", "Укусила змея"],
                        ["Подруга", "Никто не виноват", "Злая фея Карабос", "Баба Яга"],
                        ["Принц", "Дорогая бабушка", "Родители", "Сама проснулась"],
                        ["Включил будильник", "Напоил кофе", "Поцеловал", "Уколол в палец"]],
                    ["Аврора", "Уколола палец об веретено", "Злая фея Карабос", "Принц", "Поцеловал"]
                )
            },
            {
                cinderella: new myFunctions.Hero(["fairytales/cinderella/cinderella (1).jpg", "fairytales/cinderella/cinderella (2).jpg", "fairytales/cinderella/cinderella (3).jpg",
                        "fairytales/cinderella/cinderella (4).jpg", "fairytales/cinderella/cinderella (5).jpg", "fairytales/cinderella/cinderella (6).jpg", "fairytales/cinderella/cinderella (7).jpg",
                        "fairytales/cinderella/cinderella (8).jpg", "fairytales/cinderella/cinderella (9).jpg", "fairytales/cinderella/cinderella (10).jpg", "fairytales/cinderella/cinderella (11).jpg", "fairytales/cinderella/cinderella (12).jpg"],
                    '<iframe width="390" height="233" src="https://www.youtube.com/embed/5ecNMP6rkUc" frameborder="0" allowfullscreen></iframe>',
                    'Золушка',
                    "https://s3.amazonaws.com/fairytales.mp3-bucket/cinderella.mp3",
                    ["Кто главный герой сказки?", "Что потеряла Золушка на балу?", "Какой овощь превратили в карету?", "Когда Золушке нужно было уйти с бала?", "Кто помог Золушке отправиться на бал?"],
                    [["Фея крёстная", "Мачеха", "Золушка", "Принц"],
                        ["Платок", "Телефон", "Сумочку", "Туфельку"],
                        ["Помидор", "Тыкву", "Лук", "Капусту"],
                        ["Ровно в полночь", "Утром", "В 9 вечера", "В обед"],
                        ["Фея крёстная", "Отец", "Мачеха", "Сёстры"]],
                    ["Золушка", "Туфельку", "Тыкву", "Ровно в полночь", "Фея крёстная"]
                )
            },
            {
                d: new myFunctions.Hero(["fairytales/d/d (1).jpg", "fairytales/d/d (2).jpg", "fairytales/d/d (3).jpg",
                        "fairytales/d/d (4).jpg", "fairytales/d/d (5).jpg", "fairytales/d/d (6).jpg", "fairytales/d/d (7).jpg",
                        "fairytales/d/d (8).jpg", "fairytales/d/d (9).jpg", "fairytales/d/d (10).jpg", "fairytales/d/d (1).png", "fairytales/d/d (2).png", "fairytales/d/d (3).png", "fairytales/d/d (4).png", "fairytales/d/d (5).png"],
                    '<iframe width="390" height="233" src="https://www.youtube.com/embed/151DjgUEhhI" frameborder="0" allowfullscreen></iframe>',
                    'Дюймовочка',
                    "https://s3.amazonaws.com/fairytales.mp3-bucket/d.mp3",
                    ["Почему главную героиню звали Дюймовочка?", "Откуда появилась такая маленькая девочка?", "Кто похитил девочку?", "Где жила дюймовочка зимой?", "За кого хотела выдать замуж Дюймовочку старая мышь?"],
                    [["Она была маленькая - в дюйм ростом", "Её назвал так папа", "Потому что она была высокая", "В честь ее бабушки"],
                        ["Нашли в капусте", "Появилась в цветочке", "Принесла ласточка", "Мама родила"],
                        ["Кот в сапогах", "Птичка", "Лиса", "Жаба"],
                        ["В лесу", "На дереве у жука", "В норе у старой мыши", "У мамы дома"],
                        ["За крысу", "За паука", "За крота", "За принца"]],
                    ["Она была маленькая - в дюйм ростом", "Появилась в цветочке", "Жаба", "В норе у старой мыши", "За крота"]
                )
            },
            {
                frog: new myFunctions.Hero(["fairytales/frog/frog (4).jpg", "fairytales/frog/frog (5).jpg", "fairytales/frog/frog (6).jpg", "fairytales/frog/frog (7).jpg",
                        "fairytales/frog/frog (8).jpg", "fairytales/frog/frog (9).jpg", "fairytales/frog/frog (10).jpg", "fairytales/frog/frog (11).jpg", "fairytales/frog/frog (12).jpg", "fairytales/frog/frog (13).jpg",
                        "fairytales/frog/frog (14).jpg", "fairytales/frog/frog (15).jpg", "fairytales/frog/frog (16).jpg"],
                    '<iframe width="390" height="233" src="https://www.youtube.com/embed/fYR9N0Ami2Y" frameborder="0" allowfullscreen></iframe>',
                    'Принцесса и лягушка',
                    "https://s3.amazonaws.com/fairytales.mp3-bucket/frog.mp3",
                    ["Как звали главную героиню?", "О чем мечтает Тиана?",
                        "Что случилось с Тианой?", "Из-за кого начались невероятные приключения Тианы?", "Как звали принца?"],
                    [["Тиана", "Таня", "София", "Аврора"],
                        ["О принце", "О путешествии", "Открыть свой ресторан", "О детях"],
                        ["Заснула глубоким сном", "Превратилась в лягушку", "Вышла замуж за клоуна", "Отправилась в кругосветное путешествие"],
                        ["Из-за мамы", "Из-за подружки", "Из-за принца", "Из-за слона"],
                        ["Навин", "Алладин", "Пётр", "Марк"]],
                    ["Тиана", "Открыть свой ресторан", "Превратилась в лягушку", "Из-за принца", "Навин"])
            },
            {
                mermaid: new myFunctions.Hero(["fairytales/mermaid/mermaid (1).jpg", "fairytales/mermaid/mermaid (2).jpg", "fairytales/mermaid/mermaid (3).jpg",
                        "fairytales/mermaid/mermaid (4).jpg", "fairytales/mermaid/mermaid (5).jpg", "fairytales/mermaid/mermaid (6).jpg", "fairytales/mermaid/mermaid (7).jpg",
                        "fairytales/mermaid/mermaid (8).jpg", "fairytales/mermaid/mermaid (9).jpg", "fairytales/mermaid/mermaid (10).jpg", "fairytales/mermaid/mermaid (11).jpg", "fairytales/mermaid/mermaid (12).jpg"],
                    '<iframe width="390" height="233" src="https://www.youtube.com/embed/ClneW8K-Or0" frameborder="0" allowfullscreen></iframe>',
                    'Русалочка',
                    "https://s3.amazonaws.com/fairytales.mp3-bucket/mermaid.mp3",
                    ["Как звали главную героиню?", "Кто превратил принца в Чудовище?", "Что попросила Бэлль у отца привезти из поездки?",
                        "Где отец взял цветок для Бэлль?", "Кого полюбила Бэлль?"],
                    [["Хэлен", "Бэлль", "Наташа", "Маша"],
                        ["Волшебница", "Волшебник", "Фокусник", "Сам превратился"],
                        ["Кольцо", "Телефон", "Сумочку", "Цветок"],
                        ["Купил на рынке", "Сам вырастил", "Украл у Чудовища", "Нашел"],
                        ["Короля", "Слугу", "Прохожего", "Чудовище"]],
                    ["Бэлль", "Волшебница", "Цветок", "Украл у Чудовища", "Чудовище"])
            },
            {
                peas: new myFunctions.Hero(["fairytales/peas/peas (1).jpg", "fairytales/peas/peas (2).jpg", "fairytales/peas/peas (3).jpg",
                        "fairytales/peas/peas (4).jpg", "fairytales/peas/peas (5).jpg", "fairytales/peas/peas (6).jpg", "fairytales/peas/peas (7).jpg", "fairytales/peas/peas (8).jpg",
                        "fairytales/peas/peas (9).jpg", "fairytales/peas/peas (10).jpg", "fairytales/peas/peas png (1).png", "fairytales/peas/peas png (2).png", "fairytales/peas/peas png (3).png"],
                    '<iframe width="390" height="233" src="https://www.youtube.com/embed/44ZNkqQJCOY"  frameborder="0" allowfullscreen></iframe>',
                    'Принцесса на горошине',
                    "https://s3.amazonaws.com/fairytales.mp3-bucket/peas.mp3",
                    ["На ком хотел жениться принц?", "Как решили проверить девочку - настоящая ли она принцесса?",
                        "Сколько матрацев положили на горошину?", "Как спалось девочке?", "Как закончилась сказка?"],
                    [["На красавице", "На чудовище", "На принцессе", "На служанке"],
                        ["Положили горошину под матрацы", "Задавали разные вопросы", "Взяли кровь на анализы", "Проверили сывороткой правды"],
                        ["Пять", "Один", "Двенадцать", "Два"],
                        ["Хорошо", "Ужасно, она всю ночь не сомкнула глаз", "Она не ложилась спать", "Спала и ничего не почувствовала"],
                        ["Девушка уснула глубоким сном", "Принц взял ее в жены", "Девушка стала служанкой", "Девушку заколдовала колдунья"]],
                    ["На принцессе", "Положили горошину под матрацы", "Двенадцать", "Ужасно, она всю ночь не сомкнула глаз", "Принц взял ее в жены"])
            },
            {
                rapuncel: new myFunctions.Hero(["fairytales/rapuncel/rapuncel (15).jpg",
                        "fairytales/rapuncel/rapuncel (4).jpg", "fairytales/rapuncel/rapuncel (5).jpg", "fairytales/rapuncel/rapuncel (6).jpg", "fairytales/rapuncel/rapuncel (3).jpg",
                        "fairytales/rapuncel/rapuncel (8).jpg", "fairytales/rapuncel/rapuncel (9).jpg", "fairytales/rapuncel/rapuncel (10).jpg", "fairytales/rapuncel/rapuncel (11).jpg", "fairytales/rapuncel/rapuncel (12).jpg", "fairytales/rapuncel/rapuncel (13).jpg",
                        "fairytales/rapuncel/rapuncel (14).jpg", "fairytales/rapuncel/rapuncel (7).jpg", "fairytales/rapuncel/rapuncel (16).jpg", "fairytales/rapuncel/rapuncel (17).jpg", "fairytales/rapuncel/rapuncel png (1).png", "fairytales/rapuncel/rapuncel png (2).png"],
                    '<iframe width="390" height="233" src="https://www.youtube.com/embed/VHcf4XqCxCk" frameborder="0" allowfullscreen></iframe>',
                    'Рапунцель',
                    "https://s3.amazonaws.com/fairytales.mp3-bucket/rapuncel.mp3",
                    ["Как звали главного героя?",
                        "Где жила Рапунцель?",
                        "В чём было волшебство Рапунцель?",
                        "Какая мечта была у рапунцель?",
                        "Кто были настоящими родителями Рапунцель?"],
                    [["Маша", "Света", "Рапунцель", "Ариэль"],
                        ["В башне в лесу", "В замке", "В избушке", "На корабле"],
                        ["У нее была волшебная палочка", "Она умела превращаться в лягушку", "У нее были волшебные волосы", "Она становилась невидимой"],
                        ["Испечь тортик", "Связать кофточку", "Выйти замуж", "Сбежать с башни и увидеть мир"],
                        ["Король с королевой", "Старик со старухой", "Кощей Бессмертный и Баба Яга", "Саша и Маша"]],
                    ["Рапунцель", "В башне в лесу", "У нее были волшебные волосы", "Сбежать с башни и увидеть мир", "Король с королевой"])
            },
            {
                sw: new myFunctions.Hero(["fairytales/sw/sw (1).jpg", "fairytales/sw/sw (2).jpg", "fairytales/sw/sw (3).jpg",
                        "fairytales/sw/sw (4).jpg", "fairytales/sw/sw (5).jpg", "fairytales/sw/sw (6).jpg", "fairytales/sw/sw (7).jpg",
                        "fairytales/sw/sw (8).jpg", "fairytales/sw/sw (9).jpg", "fairytales/sw/sw (10).jpg", "fairytales/sw/sw (11).jpg", "fairytales/sw/sw (12).jpg", "fairytales/sw/sw (13).jpg",
                        "fairytales/sw/sw (14).jpg", "fairytales/sw/sw (15).jpg", "fairytales/sw/sw (16).jpg", "fairytales/sw/sw (17).jpg", "fairytales/sw/sw png (1).png", "fairytales/sw/sw png (2).png"],
                    '<iframe width="390" height="233" src="https://www.youtube.com/embed/HICAZD8fLj8"  frameborder="0" allowfullscreen></iframe>',
                    'Белоснежка',
                    "https://s3.amazonaws.com/fairytales.mp3-bucket/sw.mp3",
                    ["Почему Белоснежку так звали?", "С кем жила Белоснежка в лесу?", "Сколько гномов было в сказке?", "Как белоснежка заснула смертельным сном?", "Кто и как разбудил Белоснежку?"],
                    [["У нее всегда было белое платье", "Она ходила в белой шапочке", "У нее была белоснежная кожа", "Она любила снег"],
                        ["Одна", "С гномами", "С Бабой-Ягой", "С лесными зверюшками"],
                        ["4", "7", "5", "12"],
                        ["Заболела", "Уколола палец", "Съела отравленное яблоко", "Укусил волк"],
                        ["Гномы дали лекарство", "Колдунья расколдовала", "Принц поцеловал", "Сама проснулась"]],
                    ["У нее была белоснежная кожа", "С гномами", "7", "Съела отравленное яблоко", "Принц поцеловал"]
                )
            }
        ],
        magicHeroes: [
            {
                peter: new myFunctions.Hero(["fairytales/peter/peter (1).jpg", "fairytales/peter/peter (2).jpg", "fairytales/peter/peter (3).jpg",
                        "fairytales/peter/peter (5).jpg", "fairytales/peter/peter (6).jpg", "fairytales/peter/peter (7).jpg",
                        "fairytales/peter/peter (8).jpg", "fairytales/peter/peter (9).jpg", "fairytales/peter/peter (10).jpg", "fairytales/peter/peter (11).jpg", "fairytales/peter/peter (12).jpg", "fairytales/peter/peter (13).jpg",
                        "fairytales/peter/peter (14).jpg", "fairytales/peter/peter (15).jpg", "fairytales/peter/peter (16).jpg", "fairytales/peter/peter (18).jpg", "fairytales/peter/peter (20).jpg"],
                    '<iframe width="390" height="233" src="https://www.youtube.com/embed/VGpEEsF0_ns" frameborder="0" allowfullscreen></iframe>',
                    'Питер Пэн',
                    "https://s3.amazonaws.com/fairytales.mp3-bucket/peter.mp3",
                    ["Кто такой Питер Пэн?", "Где живет Питер Пэн?", "Злейший враг Питер Пэна",
                        "Как зовут фею Питера Пэна?", "Кого больше всего боялся капитан Крюк?"],
                    [["Потерявшийся мальчишка", "Школьник", "Кот", "Пират"],
                        ["В Лондоне", "В Минске", "В Нетландии", "В Нью-Йорке"],
                        ["Капитан Крюк", "Мистер Гиббс", "Змея", "Девочка Винди"],
                        ["Люси", "Динь-Дилинь", "Симка", "Соня"],
                        ["Питера Пэна", "Девочек", "Индейцев", "Крокодила"]],
                    ["Потерявшийся мальчишка", "В Нетландии", "Капитан Крюк", "Динь-Дилинь", "Крокодила"])
            },
            {
                pinoccio: new myFunctions.Hero(["fairytales/pinoccio/pinoccio (1).jpg", "fairytales/pinoccio/pinoccio (2).jpg", "fairytales/pinoccio/pinoccio (3).jpg",
                        "fairytales/pinoccio/pinoccio (4).jpg", "fairytales/pinoccio/pinoccio (5).jpg", "fairytales/pinoccio/pinoccio (6).jpg", "fairytales/pinoccio/pinoccio (7).jpg",
                        "fairytales/pinoccio/pinoccio (8).jpg", "fairytales/pinoccio/pinoccio (9).jpg", "fairytales/pinoccio/pinoccio (10).jpg", "fairytales/pinoccio/pinoccio (11).jpg", "fairytales/pinoccio/pinoccio (12).jpg", "fairytales/pinoccio/pinoccio png.png"],
                    '<iframe width="390" height="233" src="https://www.youtube.com/embed/nuNZGwl73b0" frameborder="0" allowfullscreen></iframe>',
                    'Пинокио',
                    "https://s3.amazonaws.com/fairytales.mp3-bucket/pinoccio.mp3",
                    ["Как звали главную героиню?", "Кто превратил принца в Чудовище?", "Что попросила Бэлль у отца привезти из поездки?",
                        "Где отец взял цветок для Бэлль?", "Кого полюбила Бэлль?"],
                    [["Хэлен", "Бэлль", "Наташа", "Маша"],
                        ["Волшебница", "Волшебник", "Фокусник", "Сам превратился"],
                        ["Кольцо", "Телефон", "Сумочку", "Цветок"],
                        ["Купил на рынке", "Сам вырастил", "Украл у Чудовища", "Нашел"],
                        ["Короля", "Слугу", "Прохожего", "Чудовище"]],
                    ["Бэлль", "Волшебница", "Цветок", "Украл у Чудовища", "Чудовище"])
            },
            {
                shrek: new myFunctions.Hero(["fairytales/shrek/shrek (1).jpg", "fairytales/shrek/shrek (2).jpg", "fairytales/shrek/shrek (3).jpg", "fairytales/shrek/shrek (4).jpg", "fairytales/shrek/shrek (5).jpg", "fairytales/shrek/shrek (6).jpg", "fairytales/shrek/shrek (7).jpg",
                        "fairytales/shrek/shrek (8).jpg", "fairytales/shrek/shrek (9).jpg", "fairytales/shrek/shrek (10).jpg", "fairytales/shrek/shrek (11).jpg", "fairytales/shrek/shrek (12).jpg", "fairytales/shrek/shrek (13).jpg",
                        "fairytales/shrek/shrek (14).jpg", "fairytales/shrek/shrek (15).jpg", "fairytales/shrek/shrek (16).jpg", "fairytales/shrek/shrek (17).jpg", "fairytales/shrek/shrek png (1).png", "fairytales/shrek/shrek png (2).png"],
                    '<iframe width="390" height="233" src="https://www.youtube.com/embed/SUOrb-9Vmgo" frameborder="0" allowfullscreen></iframe>',
                    'Шрек',
                    "https://s3.amazonaws.com/fairytales.mp3-bucket/shrek.mp3",
                    ["Кто такой Шрэк?", "Лучший друг Шрэка?", "Кого отправился спасать Шрэк?",
                        "Как звали принцессу?", "За кого вышла замуж Фиона?"],
                    [["Человек", "Людоед", "Кот", "Осёл"],
                        ["Осёл", "Король", "Дракон", "Лягушка"],
                        ["Друга", "Мир", "Принцессу", "Короля"],
                        ["Ариэль", "Симона", "Моана", "Фиона"],
                        ["За короля", "За слугу", "За Шрэка", "За принца"]],
                    ["Людоед", "Осёл", "Принцессу", "Фиона", "За Шрэка"])
            }],
        animal: [
            {
                bamby: new myFunctions.Hero(["fairytales/bamby/bamby (1).jpg", "fairytales/bamby/bamby (2).jpg", "fairytales/bamby/bamby (3).jpg",
                        "fairytales/bamby/bamby (5).jpg", "fairytales/bamby/bamby (6).jpg", "fairytales/bamby/bamby (7).jpg",
                        "fairytales/bamby/bamby (8).jpg", "fairytales/bamby/bamby (9).jpg", "fairytales/bamby/bamby (10).jpg", "fairytales/bamby/bamby (11).jpg", "fairytales/bamby/bamby (12).jpg",
                        "fairytales/bamby/bamby (1).png"],
                    '<iframe width="390" height="233" src="https://www.youtube.com/embed/9AxIlhElQus" frameborder="0" allowfullscreen></iframe>',
                    'Бэмби',
                    "https://s3.amazonaws.com/fairytales.mp3-bucket/bamby.mp3",
                    ["Как звали главную героиню?", "Кто превратил принца в Чудовище?", "Что попросила Бэлль у отца привезти из поездки?",
                        "Где отец взял цветок для Бэлль?", "Кого полюбила Бэлль?"],
                    [["Хэлен", "Бэлль", "Наташа", "Маша"],
                        ["Волшебница", "Волшебник", "Фокусник", "Сам превратился"],
                        ["Кольцо", "Телефон", "Сумочку", "Цветок"],
                        ["Купил на рынке", "Сам вырастил", "Украл у Чудовища", "Нашел"],
                        ["Короля", "Слугу", "Прохожего", "Чудовище"]],
                    ["Бэлль", "Волшебница", "Цветок", "Украл у Чудовища", "Чудовище"])
            },
            {
                madagascar: new myFunctions.Hero(["fairytales/madagascar/madagascar (1).jpg", "fairytales/madagascar/madagascar (2).jpg", "fairytales/madagascar/madagascar (3).jpg", "fairytales/madagascar/madagascar (4).jpg", "fairytales/madagascar/madagascar (5).jpg", "fairytales/madagascar/madagascar (6).jpg", "fairytales/madagascar/madagascar (7).jpg",
                        "fairytales/madagascar/madagascar (8).jpg", "fairytales/madagascar/madagascar (9).jpg", "fairytales/madagascar/madagascar (10).jpg", "fairytales/madagascar/madagascar (11).jpg", "fairytales/madagascar/madagascar (12).jpg", "fairytales/madagascar/madagascar (13).jpg",
                        "fairytales/madagascar/madagascar (14).jpg", "fairytales/madagascar/madagascar (15).jpg"],
                    '<iframe width="390" height="233" src="https://www.youtube.com/embed/MoGxudd1pXA" frameborder="0" allowfullscreen></iframe>',
                    'Мадагаскар',
                    "https://s3.amazonaws.com/fairytales.mp3-bucket/madagascar.mp3",
                    ["Как зовут льва?", "Где в начале истории жили животные?", "Куда отправились друзья, сбежав из зоопарка?",
                        "Кто такой Мэлман?", "Как зовут зебру?"],
                    [["Симба", "Муфаса", "Алекс", "Зара"],
                        ["В зоопарке", "В Африке", "В деревне", "На Мадагаскаре"],
                        ["В Австралию", "В Африку", "В деревню", "На Мадагаскар"],
                        ["Жираф", "Слон", "Гиппопотам", "Зебра"],
                        ["Полосик", "Марти", "Симба", "Крол"]],
                    ["Алекс", "В зоопарке", "На Мадагаскар", "Жираф", "Марти"])
            },
            {
                lion: new myFunctions.Hero(["fairytales/lion/lion (1).jpg", "fairytales/lion/lion (2).jpg", "fairytales/lion/lion (3).jpg", "fairytales/lion/lion (4).jpg", "fairytales/lion/lion (5).jpg", "fairytales/lion/lion (6).jpg", "fairytales/lion/lion (7).jpg",
                        "fairytales/lion/lion (8).jpg", "fairytales/lion/lion (9).jpg", "fairytales/lion/lion (10).jpg", "fairytales/lion/lion (11).jpg", "fairytales/lion/lion (12).jpg", "fairytales/lion/lion (13).jpg",
                        "fairytales/lion/lion (14).jpg", "fairytales/lion/lion (15).jpg"],
                    '<iframe width="390" height="233" src="https://www.youtube.com/embed/GQJ0v0MCY2U" frameborder="0" allowfullscreen></iframe>',
                    'Король лев',
                    "https://s3.amazonaws.com/fairytales.mp3-bucket/lion.mp3",
                    ["Как звали отца Симбы?", "Как звали главного героя?", "Как звали злейшего льва, который хотел стать королем?",
                        "Как погиб Муфаса", "Как зовут друзей Симбы?"],
                    [["Зазу", "Муфаса", "Алекс", "Зара"],
                        ["Шрам", "Тимон", "Пумба", "Симба"],
                        ["Шрам", "Зазу", "Тоха", "Завр"],
                        ["Утонул", "Отравился", "Убил Шрам", "От старости"],
                        ["Лёлик и Болик", "Тимон и Пумба", "Саша и Наташа", "Нолик и Симка"]],
                    ["Муфаса", "Симба", "Шрам", "Убил Шрам", "Тимон и Пумба"])
            }],
        russian: [
            {
                prostokvashino: new myFunctions.Hero(["fairytales/prostokvashino/prostokvashino (1).jpg", "fairytales/prostokvashino/prostokvashino (2).jpg", "fairytales/prostokvashino/prostokvashino (3).jpg",
                        "fairytales/prostokvashino/prostokvashino (5).jpg", "fairytales/prostokvashino/prostokvashino (6).jpg", "fairytales/prostokvashino/prostokvashino (7).jpg",
                        "fairytales/prostokvashino/prostokvashino (8).jpg", "fairytales/prostokvashino/prostokvashino (9).jpg", "fairytales/prostokvashino/prostokvashino (10).jpg", "fairytales/prostokvashino/prostokvashino (11).jpg", "fairytales/prostokvashino/prostokvashino (12).jpg",
                        "fairytales/prostokvashino/prostokvashino (1).png"],
                    '<iframe width="390" height="233" src="https://www.youtube.com/embed/cK8af0m4HpA"  frameborder="0" allowfullscreen></iframe>',
                    'Трое из Простоквашино',
                    "https://s3.amazonaws.com/fairytales.mp3-bucket/prostokvashino.mp3",
                    ["Как зовут мальчика?", "С кем убежал Дядя Фёдор из дома?", "Как зовут кота?",
                        "Куда отправились мальчик с котом", "Какая фамилия у почтальона?"],
                    [["Миша", "Саша", "Дядя Фёдор", "Кирилл"],
                        ["С собакой", "С котом", "С другом", "Совсем один"],
                        ["Матроскин", "Муркин", "Котонатор", "Мяу-Мяу"],
                        ["В деревню Простоквашино", "В Минск", "В Москву", "В Африку"],
                        ["Володин", "Печкин", "Кротов", "Попотимиопулус"]],
                    ["Дядя Фёдор", "С котом", "Матроскин", "В деревню Простоквашино", "Печкин"])
            },
            {
                pooh: new myFunctions.Hero(["fairytales/pooh/pooh (1).jpg", "fairytales/pooh/pooh (2).jpg", "fairytales/pooh/pooh (3).jpg",
                        "fairytales/pooh/pooh (4).jpg", "fairytales/pooh/pooh (5).jpg", "fairytales/pooh/pooh (6).jpg", "fairytales/pooh/pooh (7).jpg",
                        "fairytales/pooh/pooh (8).jpg", "fairytales/pooh/pooh (9).jpg", "fairytales/pooh/pooh (10).jpg", "fairytales/pooh/pooh (11).jpg", "fairytales/pooh/pooh (12).jpg", "fairytales/pooh/pooh (1).png"],
                    '<iframe width="390" height="233"  src="https://www.youtube.com/embed/7G_fYgW5Tys" frameborder="0" allowfullscreen></iframe>',
                    'Винни-Пух',
                    "https://s3.amazonaws.com/fairytales.mp3-bucket/pooh.mp3",
                    ["Кто такой Винни-Пух?", "Лучший друг Винни-Пуха?", "Что больше всего любил Винни-Пух?",
                        "Что Винни-Пух Подари на день рождение ослику Иа?", "Как Винни-Пух придумал достать мед из улья?"],
                    [["Заяц", "Кролик", "Медведь", "Тигр"],
                        ["Пятачок", "Ослик", "Кролик", "Сова"],
                        ["Мёд", "Котлеты", "Капусту", "Суп"],
                        ["Цветы", "Машинку", "Пустой горшочек", "Торт"],
                        ["Полез по дереву", "Полетел на шарике", "Спилил дерево", "Подставил лестницу"]],
                    ["Медведь", "Пятачок", "Мёд", "Пустой горшочек", "Полетел на шарике"])
            }
        ],
        main: [new myFunctions.MainInfo("groups/sofi.png", "<h5>Про принцесс</h5>", "princess"),
            new myFunctions.MainInfo("groups/lis.png", "<h5>Сказки про зверей</h5><br>", "animal"),
            new myFunctions.MainInfo("groups/masha.png", "<h5>Русские cказки</h5>", "russian"),
            new myFunctions.MainInfo("groups/shrek.png", "<h5>Сказки про волшебных героев</h5>", "magic")
        ]
    }
    return heroesPath;
})()


