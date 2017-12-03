﻿(window.Dictionaries = (window.Dictionaries || {}))['ru'] = {
    'performance':{
        'metainformation':'Метаинформация',
        'constants':'Константы',
        'changed-params':'Изменяемые параметры',
        'measured-params':'Измеряемые параметры',
        'tooltip-schema':'{0}<br/>Проход: {1}<br/> {2}: {3}<br/>{4}: {5}',
        
        'json-parse-error':'Ошибка при разборе файла в JSON: {0}',
        
        "information":"Информация",
        "name":"Название",
        "value":"Значение",
        "graphic":"График",
        "settings":"Настройки",
        "graphics-by-src":"Показать графики по исходным данным",
        "graphics-by-avg":"Показать график по средним значениям",
        "graphics-by-median":"Показать график по медиане",
        "log-y":"Логарифмическая шкала по Y",
        "data-for-graphics":"Данные для отображения",
        "download-csv":"Скачать CSV",
        "data-table":"Таблица с данными"
    },
    "header": {
        "test": "Проверка целостности",
        "page-title": "Measurelook",
        "performance": "2D графики",
        "open-database":"Загрузить базу из файла",
        "save-database":"Сохранить базу на диск",
        "about":"О программе",
//        "logViewer":"Логи",
//        "l10n":"Русский",
//        "dictionary-icon":"ru",
    },
    "common": {
        "to":"в",
        "ok":"ОК",
        "cancel":"Отмена",
        "add":"Добавить",
        "create":"Создать",
        "rename":"Переименовать",
        "remove":"Удалить",
        "replace":"Заменить",
        "on": "на",
        "set-item-before" : "Перед '{0}'",
        "set-item-as-last" : "В конец",
    },
    "constant": {
        "yes":"Да",
        "no": "Нет",
        // social network subsets
        "allObjects" : "Все объекты",
        "selectedCharacters": "Избранные персонажи",
        "selectedStories": "Избранные истории",
        // social network types
        //"simpleNetwork"            : "Простая сеть",
        "socialRelations"          : "Социальные связи",
        "characterPresenceInStory" : "Персонаж-участие-история",
        "characterActivityInStory" : "Персонаж-активность-история",
        // no group
        "noGroup": "Без групп" ,
        "fromGroup": "Входит в группу" ,
        // activities
        "active"    : "Актив" ,
        "follower"  : "Спутник" ,
        "defensive" : "Защита" ,
        "passive"   : "Пассив" ,
        "active-s"    : "А" ,
        "follower-s"  : "С" ,
        "defensive-s" : "З" ,
        "passive-s"   : "П" ,
        // number filter
        "ignore" : "Не важно",
        "greater" : "Больше",
        "equal" : "Равно",
        "lesser" : "Меньше",
        // multi enum filter
        "every" : "Включает все",
        "some" : "Включает любой",
        // adaptations labels
        "finishedText" : "Описание завершено",
        "finishedSuffix" : "(завершено)",
        "emptySuffix" : "(пусто)",
        // profile item types
        "text":"Текст",
        "string":"Строка",
        "enum":"Единственный выбор", // single choice
        "number":"Число",
        "checkbox":"Галочка",
        "multiEnum":"Множественный выбор",
        // player access types
        "write" : "Изменение",
        "readonly" : "Только чтение",
        "hidden" : "Скрыто",
        // symbol count
        'masterStories' : 'Мастерские истории',
        'eventOrigins' : 'Оригиналы событий',
        'eventAdaptations' : 'Адаптации событий',
        'groups' : 'Группы',
        'relations' : 'Отношения',
        // binding count
        'freeCharacters': 'Свободные персонажи',
        'freePlayers': 'Свободные игроки',
        'bindingNum': 'Связанные персонажи/игроки',
        // misc
        'notAvailable': 'Н/Д',
        // background options
        'charsheet-image':'Изображение',
        'charsheet-none':'Нет фона',
        'charsheet-color':'Цвет',
    },
    "overview": {
        'consistency-problem-detected': "Проверка данных выявила нарушение целостности базы, пожалуйста свяжитесь с разработчиками для устранения проблемы.",
        'consistency-is-ok': 'Повреждений базы не выявлено.',
    },
    "utils":{
        "close-page-warning": "Убедитесь, что сохранили данные. После закрытия страницы все несохраненные изменения будут потеряны.",
        "new-base-warning": "Вы уверены, что хотите создать новую базу? Все несохраненные изменения будут потеряны.",
        "base-file-loading-error": "Ошибка при загрузке файла"
    }, 
//    "log-viewer" : {
//        "page" : "Страница",
//        "date" : "Дата",
//        "user" : "Пользователь",
//        "action" : "Действие",
//        "params" : "Параметры",
//    },
    'about' : {
        "about-authors" : "Программа \"Measurelook\" разработана Речкаловым Тимофеем по личной инициативе.",
        "program-purpose" : "Программа \"Measurelook\" предназначена для визуализации результатов вычислительных " +
            "экспериментов для файлов фиксированного формата. Для получения большей информации см. репозиторий проекта.",
        "site-mention" : "На сайте ",
        "site-description" : " вы можете ознакомиться с другими программами автора.",
        "program-is-free-in-rep" : "Исходный код доступен под лицензией Apache 2",
        "builds-published-in-rep" : "Билды публикуются",
        "by-link" : "в репозитории",
        "icons-authors" : "Авторы используемых иконок с сайта www.flaticon.com: Anton Saputro, Pavel Kozlov, Budi Tanrim, Catalin Fertu, Picol и Freepik. Автор иконки сортировки FatCow.",
        "versions" : "История версий",
        "var030" : "Версия 0.3.0 (26 Nov 2017) - перенос проекта в НИМС, очистка, логарифмическая шкала по Y, табличное представление текущих данных. " +
            "Передаю привет Хактоберфесту в Екатеринбурге!",
        "var021" : "Версия 0.2.1 (7 May 2017) - мелкие улучшения.",
        "var020" : "Версия 0.2.0 (2 Apr 2017) - улучшение формата хранения эксперимента и графики по медоидам.",
        "var010" : "Версия 0.1.0 (20 Feb 2017) - первый закрытый релиз.",
    },
//    'entrance': {
//        'register-success'              :'Регистрация завершена. Воспользуйтесь формой входа.' ,
//        'enter-user-name-and-password'  :'Введите имя пользователя и пароль'                   ,
//        'login'                         :'Логин'                                               ,
//        'password'                      :'Пароль'                                              ,
//        'enter'                         :'Войти'                                               ,
//        'user-name'                     :'Имя пользователя'                                    ,
//        'confirmation'                  :'Подтверждение'                                       ,
//        'confirm-password'              :'Подтвердите пароль'                                  ,
//        'register'                      :'Зарегистрироваться'                                  ,
//        
//        'disclaimer'                    :'В случае проблем или сложностей в использовании, пожалуйста, обращайтесь к разработчикам.' ,  
//        'developer-site'                :'Сайт разработчикa.'                                                                        ,
//        
//    },
    'errors': {
        'unexpected-user-type': 'Неверный тип пользователя "{0}"',
        'password-is-incorrect' : 'Пароль неверен',
        'user-is-not-found' : 'Пользователь не найден',
        'password-is-not-specified' : "Пароль не указан",
        'passwords-not-match' : 'Пароли не совпадают',
        'register-operation-is-forbidden':'Регистрация запрещена',
        'unexpected-switch-argument': 'Ошибка: не обрабатываемый аргумент - {0}. Пожалуйста свяжитесь с разработчиком.',
        
        'unsupported-types-in-list' : 'Не поддерживаемые типы: "{0}"',
        'unsupported-type-in-list' : 'Не поддерживаемый тип: "{0}"',
        'entity-is-not-exist' : 'Сущности "{0}" не существует',
        'entities-are-not-exist' : 'Сущностей "{0}" не существует',
        'argument-is-not-a-string' : 'Аргумент "{0}" не является строкой',
        
        'argument-is-not-a-number' : 'Аргумент "{0}" не является числом',
        'argument-is-not-an-array' : 'Аргумент "{0}" не является массивом',
        'argument-is-not-an-object' : 'Аргумент "{0}" не является объектом',
        'argument-is-not-a-boolean' : 'Аргумент "{0}" не является булевой переменной',
        'argument-is-not-nil' : 'Аргумент "{0}" не пуст',
        'entity-is-used': 'Сущность "{0}" уже существует',
        
        'name-is-empty-string' : 'Название не может быть пустой строкой',
        'argument-must-not-be-equal' : 'Аргумент не должен быть равен "{0}"',
        'argument-is-not-in-range' : 'Аргумент "{0}" вне диапазона ({1}, {2})',
        'argument-is-empty-string' : 'Аргумент не может быть пустой строкой',
        'argument-is-not-empty-string' : 'Аргумент не является пустой строкой',
        'argument-is-negative' : 'Аргумент "{0}" не является неотрицательным числом',
        'arguments-must-be-equal' : 'Аргументы "{0}" и "{1}" должны быть равны',
        'argument-doesnt-match-pattern' : 'Аргумент "{0}" не соответствует шаблону "{1}"',
//        'argument-is-negative-or-zero' : 'Аргумент "{0}" не является положительным числом',
        
        'forbidden':'Вызов команды запрещён',
        'unknown-command':'Неизвестная команда "{0}"',
        'user-is-not-logged':'Пользователь не залогинен',
        'forbidden-for-role':'Команда "{0}" запрещена для роли "{1}"',
        'forbidden-for-non-admin':'Команда "{0}" доступна только администратору',
        'forbidden-for-non-editor':'Команда "{0}" доступна только редактору',
        'other-user-is-editor':'Пользователь "{0}" является редактором. База закрыта от изменений другими авторами.',
        'master-is-not-an-owner': 'Вы не являетесь владельцем сущности "{0}"',
        'forbidden-to-create-char':'Игрокам нельзя создавать персонажей',
        'player-cant-write-to-other-player':'Игрок не может изменять другого игрока',
        'character-is-not-binded-to-player':'Персонаж не привязан к игроку',
        'player-cant-write-profile-item':'Игрок не может изменять элемент досье',
        
        'player-is-not-a-shop-owner': 'Игрок "{0}" не является владельцем магазина "{1}"',
        
        'unsupported-operation':'Неподдерживаемая операция.',
        'unexpected-buy-implant-error': 'По техническим причинам ваш имплант не может быть сейчас доставлен. Вы добавлены в очередь на достаку. Приносим извинения. Информация для служебного пользования: {0}'
    }
};

