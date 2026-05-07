export const quizzes = [
  {
    id: 'html-basics',
    title: 'HTML Basics',
    category: 'Frontend',
    difficulty: 'Easy',
    rating: 4.7,
    plays: 1240,
    description: 'Проверь знания по основам HTML.',
    longDescription:
      'Базовый квиз по HTML: теги, атрибуты, структура документа и стандартные элементы.',
    timeLimit: 60,
    questions: [
      {
        question: 'Какой тег используется для самой крупной heading?',
        options: ['<h6>', '<head>', '<h1>', '<header>'],
        answer: '<h1>',
      },
      {
        question: 'Какой тег создаёт ссылку?',
        options: ['<link>', '<a>', '<p>', '<img>'],
        answer: '<a>',
      },
      {
        question: 'Как вставить изображение?',
        options: ['<image>', '<img>', '<src>', '<picture>'],
        answer: '<img>',
      },
      {
        question: 'Какой атрибут указывает адрес ссылки?',
        options: ['src', 'href', 'alt', 'target'],
        answer: 'href',
      },
      {
        question: 'Какой тег создаёт параграф?',
        options: ['<p>', '<text>', '<span>', '<para>'],
        answer: '<p>',
      },
      {
        question: 'Какой тег содержит метаданные страницы?',
        options: ['<body>', '<meta>', '<head>', '<title>'],
        answer: '<head>',
      },
      {
        question: 'Какой тег используется для переноса строки?',
        options: ['<lb>', '<break>', '<br>', '<hr>'],
        answer: '<br>',
      },
      {
        question: 'Какой тег создаёт нумерованный список?',
        options: ['<ul>', '<ol>', '<li>', '<list>'],
        answer: '<ol>',
      },
      {
        question: 'Какой тег нужен для элемента списка?',
        options: ['<item>', '<li>', '<list-item>', '<ul>'],
        answer: '<li>',
      },
      {
        question: 'Какой тег делает текст жирным семантически?',
        options: ['<b>', '<strong>', '<bold>', '<em>'],
        answer: '<strong>',
      },
      {
        question: 'Какой тег делает текст курсивным семантически?',
        options: ['<i>', '<italic>', '<em>', '<mark>'],
        answer: '<em>',
      },
      {
        question: 'Какой тег задаёт заголовок документа во вкладке браузера?',
        options: ['<meta>', '<head>', '<title>', '<caption>'],
        answer: '<title>',
      },
      {
        question: 'Какой тег используется для горизонтальной линии?',
        options: ['<line>', '<hr>', '<br>', '<border>'],
        answer: '<hr>',
      },
      {
        question: 'Какой тег является корневым элементом HTML-документа?',
        options: ['<body>', '<main>', '<html>', '<root>'],
        answer: '<html>',
      },
      {
        question: 'Какой атрибут у изображения задаёт альтернативный текст?',
        options: ['title', 'src', 'alt', 'href'],
        answer: 'alt',
      },
      {
        question: 'Какой тег используется для таблицы?',
        options: ['<tb>', '<table>', '<tr>', '<td>'],
        answer: '<table>',
      },
      {
        question: 'Какой тег создаёт строку таблицы?',
        options: ['<tr>', '<td>', '<th>', '<row>'],
        answer: '<tr>',
      },
      {
        question: 'Какой тег создаёт ячейку таблицы?',
        options: ['<cell>', '<td>', '<tr>', '<th>'],
        answer: '<td>',
      },
    ],
  },
  {
    id: 'html-forms',
    title: 'HTML Forms',
    category: 'Frontend',
    difficulty: 'Medium',
    rating: 4.5,
    plays: 910,
    description: 'Формы, input, label, submit и валидация.',
    longDescription:
      'Квиз по HTML-формам: элементы формы, атрибуты input, label, required, placeholder и отправка данных.',
    timeLimit: 80,
    questions: [
      {
        question: 'Какой тег используется для формы?',
        options: ['<input>', '<form>', '<fieldset>', '<label>'],
        answer: '<form>',
      },
      {
        question: 'Как связать label с input?',
        options: ['Через src', 'Через for и id', 'Через href', 'Через class'],
        answer: 'Через for и id',
      },
      {
        question: 'Какой type у поля для email?',
        options: ['mail', 'email', 'text-email', 'post'],
        answer: 'email',
      },
      {
        question: 'Как сделать поле обязательным?',
        options: ['validate', 'required', 'must', 'needed'],
        answer: 'required',
      },
      {
        question: 'Какой тег создаёт многострочное поле ввода?',
        options: ['<textarea>', '<text>', '<multiline>', '<input-area>'],
        answer: '<textarea>',
      },
      {
        question: 'Какой type используется для пароля?',
        options: ['secure', 'password', 'secret', 'hidden'],
        answer: 'password',
      },
      {
        question: 'Какой type нужен для числа?',
        options: ['digit', 'count', 'number', 'int'],
        answer: 'number',
      },
      {
        question: 'Какой атрибут показывает подсказку в поле?',
        options: ['hint', 'placeholder', 'label', 'title'],
        answer: 'placeholder',
      },
      {
        question: 'Какой элемент группирует поля формы?',
        options: ['<group>', '<fieldset>', '<section>', '<legend>'],
        answer: '<fieldset>',
      },
      {
        question: 'Какой тег задаёт заголовок внутри fieldset?',
        options: ['<title>', '<caption>', '<legend>', '<label>'],
        answer: '<legend>',
      },
      {
        question: 'Какой type у кнопки отправки формы?',
        options: ['send', 'submit', 'push', 'form'],
        answer: 'submit',
      },
      {
        question: 'Какой атрибут запрещает редактировать input?',
        options: ['readonly', 'disabled-edit', 'lock', 'blocked'],
        answer: 'readonly',
      },
      {
        question: 'Какой атрибут полностью отключает элемент формы?',
        options: ['readonly', 'off', 'disabled', 'inactive'],
        answer: 'disabled',
      },
      {
        question: 'Какой method формы отправляет данные в URL?',
        options: ['post', 'put', 'get', 'send'],
        answer: 'get',
      },
      {
        question: 'Какой method обычно отправляет данные в теле запроса?',
        options: ['get', 'send', 'post', 'fetch'],
        answer: 'post',
      },
      {
        question: 'Какой type у переключателя "галочка"?',
        options: ['radio', 'check', 'checkbox', 'toggle'],
        answer: 'checkbox',
      },
      {
        question: 'Какой type позволяет выбрать один вариант из нескольких?',
        options: ['checkbox', 'select', 'radio', 'option'],
        answer: 'radio',
      },
      {
        question: 'Какой тег создаёт выпадающий список?',
        options: ['<dropdown>', '<select>', '<option-list>', '<input-list>'],
        answer: '<select>',
      },
    ],
  },
  {
    id: 'css-master',
    title: 'CSS Master',
    category: 'Frontend',
    difficulty: 'Medium',
    rating: 4.8,
    plays: 1470,
    description: 'Проверь, насколько хорошо ты понимаешь CSS.',
    longDescription:
      'Квиз по CSS: селекторы, box-model, flexbox, visibility, цвета, отступы и layout.',
    timeLimit: 90,
    questions: [
      {
        question: 'Как изменить цвет текста?',
        options: ['font-color', 'color', 'text-color', 'foreground'],
        answer: 'color',
      },
      {
        question: 'Как сделать flex-контейнер?',
        options: [
          'display: flex',
          'position: flex',
          'flex: display',
          'layout: flex',
        ],
        answer: 'display: flex',
      },
      {
        question: 'Как выбрать элемент по классу?',
        options: ['#class', '.class', 'class', '*class'],
        answer: '.class',
      },
      {
        question: 'Как сделать внутренний отступ?',
        options: ['margin', 'padding', 'border', 'gap'],
        answer: 'padding',
      },
      {
        question: 'Как сделать элемент невидимым, но сохранить место?',
        options: [
          'display: none',
          'visibility: hidden',
          'opacity: 0',
          'hide: true',
        ],
        answer: 'visibility: hidden',
      },
      {
        question: 'Как выбрать элемент по id?',
        options: ['.id', '#id', 'id()', '*id'],
        answer: '#id',
      },
      {
        question: 'Как задать внешний отступ?',
        options: ['padding', 'spacing', 'margin', 'gap'],
        answer: 'margin',
      },
      {
        question: 'Какое свойство задаёт цвет фона?',
        options: ['background-color', 'color', 'bg', 'fill'],
        answer: 'background-color',
      },
      {
        question: 'Какой selector выбирает все элементы?',
        options: ['all', '#', '*', '.'],
        answer: '*',
      },
      {
        question: 'Как сделать текст по центру?',
        options: ['align: center', 'text-align: center', 'font-center: true', 'center-text'],
        answer: 'text-align: center',
      },
      {
        question: 'Какое свойство управляет размером шрифта?',
        options: ['text-size', 'font-size', 'size', 'letter-size'],
        answer: 'font-size',
      },
      {
        question: 'Что входит в box model?',
        options: ['margin, border, padding, content', 'text, image, width, color', 'display, flex, grid, gap', 'font, line, align, margin'],
        answer: 'margin, border, padding, content',
      },
      {
        question: 'Как сделать элемент блочным?',
        options: ['display: block', 'position: block', 'layout: block', 'block: true'],
        answer: 'display: block',
      },
      {
        question: 'Какое свойство задаёт скругление углов?',
        options: ['corner-radius', 'border-round', 'border-radius', 'radius'],
        answer: 'border-radius',
      },
      {
        question: 'Как изменить толщину шрифта?',
        options: ['font-weight', 'text-weight', 'weight', 'boldness'],
        answer: 'font-weight',
      },
      {
        question: 'Какое свойство задаёт тень элементу?',
        options: ['shadow', 'box-shadow', 'element-shadow', 'drop-shadow-box'],
        answer: 'box-shadow',
      },
      {
        question: 'Что делает position: relative?',
        options: ['Удаляет элемент из потока', 'Позволяет смещать элемент относительно его обычного положения', 'Фиксирует элемент на экране', 'Центрирует элемент'],
        answer: 'Позволяет смещать элемент относительно его обычного положения',
      },
      {
        question: 'Какой display делает элементы в строку с возможностью flex-настроек?',
        options: ['inline', 'grid', 'flex', 'block'],
        answer: 'flex',
      },
    ],
  },
  {
    id: 'css-grid',
    title: 'CSS Grid',
    category: 'Frontend',
    difficulty: 'Medium',
    rating: 4.6,
    plays: 830,
    description: 'Разберись в CSS Grid layout.',
    longDescription:
      'Квиз по CSS Grid: grid-template-columns, rows, gap, grid-area и позиционирование элементов.',
    timeLimit: 95,
    questions: [
      {
        question: 'Как включить Grid layout?',
        options: ['display: grid', 'layout: grid', 'grid: on', 'position: grid'],
        answer: 'display: grid',
      },
      {
        question: 'Как задать колонки в Grid?',
        options: ['grid-columns', 'grid-template-columns', 'columns-grid', 'template-columns'],
        answer: 'grid-template-columns',
      },
      {
        question: 'Как задать расстояние между ячейками?',
        options: ['space', 'margin', 'gap', 'padding'],
        answer: 'gap',
      },
      {
        question: 'Что задаёт высоту строк?',
        options: ['grid-template-rows', 'grid-rows-height', 'row-height', 'template-rows-size'],
        answer: 'grid-template-rows',
      },
      {
        question: 'Какой CSS-свойство позволяет элементу занять область?',
        options: ['grid-place', 'grid-area', 'area', 'place-grid'],
        answer: 'grid-area',
      },
      {
        question: 'Как сделать элемент grid-контейнером?',
        options: ['display: grid', 'grid: flex', 'layout: grid', 'position: grid'],
        answer: 'display: grid',
      },
      {
        question: 'Какое свойство задаёт автоматическую высоту строк?',
        options: ['grid-auto-rows', 'grid-template-rows', 'row-auto', 'auto-rows'],
        answer: 'grid-auto-rows',
      },
      {
        question: 'Как выровнять элементы по горизонтали внутри grid ячеек?',
        options: ['justify-items', 'align-content', 'justify-grid', 'text-align'],
        answer: 'justify-items',
      },
      {
        question: 'Как выровнять элементы по вертикали внутри grid ячеек?',
        options: ['align-items', 'justify-items', 'vertical-align', 'grid-align'],
        answer: 'align-items',
      },
      {
        question: 'Как разместить элемент от 1 до 3 колонки?',
        options: ['grid-column: 1 / 3', 'grid-column: 1 span 3', 'column: 1-3', 'grid-area: 1-3'],
        answer: 'grid-column: 1 / 3',
      },
      {
        question: 'Какое свойство задаёт шаблон областей?',
        options: ['grid-template-areas', 'grid-areas', 'template-areas', 'grid-map'],
        answer: 'grid-template-areas',
      },
      {
        question: 'Что делает repeat(3, 1fr)?',
        options: ['Создаёт 3 строки', 'Создаёт 3 равные колонки', 'Создаёт отступ 3fr', 'Повторяет grid-area'],
        answer: 'Создаёт 3 равные колонки',
      },
      {
        question: 'Что означает единица fr в grid?',
        options: ['Фиксированный размер', 'Часть доступного пространства', 'Размер шрифта', 'Проценты'],
        answer: 'Часть доступного пространства',
      },
      {
        question: 'Как задать расстояние между колонками отдельно?',
        options: ['column-gap', 'gap-x', 'grid-column-space', 'columns-gap'],
        answer: 'column-gap',
      },
      {
        question: 'Как задать расстояние между строками отдельно?',
        options: ['row-gap', 'gap-y', 'grid-row-space', 'rows-gap'],
        answer: 'row-gap',
      },
      {
        question: 'Как центрировать весь grid-контент по горизонтали?',
        options: ['justify-content', 'justify-items', 'align-content', 'place-items'],
        answer: 'justify-content',
      },
      {
        question: 'Какой shorthand объединяет align-items и justify-items?',
        options: ['place-items', 'grid-place', 'align-justify', 'items-place'],
        answer: 'place-items',
      },
      {
        question: 'Какой shorthand объединяет align-content и justify-content?',
        options: ['place-content', 'grid-content', 'content-place', 'justify-align-content'],
        answer: 'place-content',
      },
    ],
  },
  {
    id: 'js-pro',
    title: 'JavaScript Pro',
    category: 'Programming',
    difficulty: 'Hard',
    rating: 4.9,
    plays: 1690,
    description: 'Квиз по современному JavaScript.',
    longDescription:
      'Продвинутый JavaScript: typeof, closures, массивы, строгие сравнения, объявление переменных.',
    timeLimit: 120,
    questions: [
      {
        question: 'Что вернёт typeof null?',
        options: ['null', 'object', 'undefined', 'number'],
        answer: 'object',
      },
      {
        question: 'Что такое замыкание?',
        options: [
          'Цикл внутри функции',
          'Функция с доступом к внешней области видимости',
          'Метод массива',
          'Тип данных',
        ],
        answer: 'Функция с доступом к внешней области видимости',
      },
      {
        question: 'Какой метод создаёт новый массив?',
        options: ['forEach', 'map', 'push', 'splice'],
        answer: 'map',
      },
      {
        question: 'Что делает === ?',
        options: [
          'Сравнивает без приведения типов',
          'Присваивает значение',
          'Сравнивает строки',
          'Проверяет null',
        ],
        answer: 'Сравнивает без приведения типов',
      },
      {
        question: 'Как объявить константу?',
        options: ['let', 'var', 'constant', 'const'],
        answer: 'const',
      },
      {
        question: 'Какой метод массива сворачивает массив в одно значение?',
        options: ['map', 'filter', 'reduce', 'find'],
        answer: 'reduce',
      },
      {
        question: 'Что вернёт Boolean("")?',
        options: ['true', 'false', 'null', 'undefined'],
        answer: 'false',
      },
      {
        question: 'Что такое hoisting?',
        options: ['Удаление переменных', 'Поднятие объявлений', 'Тип цикла', 'Мутация массива'],
        answer: 'Поднятие объявлений',
      },
      {
        question: 'Какой оператор объединяет значения без строгой логики null/undefined?',
        options: ['??', '||', '&&', '=>'],
        answer: '||',
      },
      {
        question: 'Что делает оператор ?? ?',
        options: ['Сравнивает значения', 'Возвращает правое значение только если левое null или undefined', 'Преобразует тип', 'Вызывает функцию'],
        answer: 'Возвращает правое значение только если левое null или undefined',
      },
      {
        question: 'Как создать стрелочную функцию?',
        options: ['function => {}', '() => {}', '=> () {}', 'func() => {}'],
        answer: '() => {}',
      },
      {
        question: 'Какой метод ищет первый подходящий элемент массива?',
        options: ['filter', 'map', 'find', 'reduce'],
        answer: 'find',
      },
      {
        question: 'Что возвращает Array.isArray([])?',
        options: ['false', 'true', 'array', 'object'],
        answer: 'true',
      },
      {
        question: 'Как остановить выполнение цикла?',
        options: ['stop', 'return', 'break', 'exit'],
        answer: 'break',
      },
      {
        question: 'Что делает setTimeout?',
        options: ['Повторяет функцию бесконечно', 'Запускает функцию через задержку', 'Останавливает код', 'Создаёт промис'],
        answer: 'Запускает функцию через задержку',
      },
      {
        question: 'Что такое Promise?',
        options: ['Цикл', 'Объект для работы с асинхронной операцией', 'Массив', 'Класс стилей'],
        answer: 'Объект для работы с асинхронной операцией',
      },
      {
        question: 'Какой метод Promise выполняется при успешном результате?',
        options: ['catch', 'then', 'finally', 'done'],
        answer: 'then',
      },
      {
        question: 'Как получить длину массива arr?',
        options: ['arr.size', 'arr.count', 'arr.length', 'length(arr)'],
        answer: 'arr.length',
      },
    ],
  },
  {
    id: 'js-arrays',
    title: 'JavaScript Arrays',
    category: 'Programming',
    difficulty: 'Easy',
    rating: 4.4,
    plays: 720,
    description: 'Методы массивов в JavaScript.',
    longDescription:
      'Квиз по массивам: map, filter, reduce, push, pop, includes и итерации.',
    timeLimit: 90,
    questions: [
      {
        question: 'Как добавить элемент в конец массива?',
        options: ['append()', 'push()', 'add()', 'insert()'],
        answer: 'push()',
      },
      {
        question: 'Какой метод возвращает новый массив с подходящими элементами?',
        options: ['map()', 'filter()', 'reduce()', 'forEach()'],
        answer: 'filter()',
      },
      {
        question: 'Что делает pop()?',
        options: [
          'Удаляет первый элемент',
          'Удаляет последний элемент',
          'Добавляет элемент',
          'Сортирует массив',
        ],
        answer: 'Удаляет последний элемент',
      },
      {
        question: 'Какой метод преобразует каждый элемент массива?',
        options: ['reduce()', 'map()', 'find()', 'some()'],
        answer: 'map()',
      },
      {
        question: 'Как проверить наличие элемента?',
        options: ['contains()', 'has()', 'includes()', 'exists()'],
        answer: 'includes()',
      },
      {
        question: 'Как удалить первый элемент массива?',
        options: ['shift()', 'pop()', 'remove()', 'deleteFirst()'],
        answer: 'shift()',
      },
      {
        question: 'Как добавить элемент в начало массива?',
        options: ['prepend()', 'unshift()', 'pushStart()', 'insertFirst()'],
        answer: 'unshift()',
      },
      {
        question: 'Какой метод объединяет массивы?',
        options: ['merge()', 'join()', 'concat()', 'plus()'],
        answer: 'concat()',
      },
      {
        question: 'Что делает slice()?',
        options: ['Изменяет исходный массив', 'Возвращает копию части массива', 'Удаляет последний элемент', 'Сортирует массив'],
        answer: 'Возвращает копию части массива',
      },
      {
        question: 'Что делает splice()?',
        options: ['Не изменяет массив', 'Может удалять/добавлять элементы в массив', 'Только копирует массив', 'Только сортирует'],
        answer: 'Может удалять/добавлять элементы в массив',
      },
      {
        question: 'Какой метод превращает массив в строку с разделителем?',
        options: ['split()', 'join()', 'concat()', 'stringify()'],
        answer: 'join()',
      },
      {
        question: 'Какой метод проверяет, что хотя бы один элемент подходит?',
        options: ['every()', 'some()', 'filter()', 'map()'],
        answer: 'some()',
      },
      {
        question: 'Какой метод проверяет, что все элементы подходят?',
        options: ['all()', 'each()', 'every()', 'some()'],
        answer: 'every()',
      },
      {
        question: 'Как отсортировать массив?',
        options: ['sort()', 'order()', 'arrange()', 'filter()'],
        answer: 'sort()',
      },
      {
        question: 'Как перевернуть массив?',
        options: ['flip()', 'reverse()', 'invert()', 'turn()'],
        answer: 'reverse()',
      },
      {
        question: 'Как найти индекс элемента?',
        options: ['find()', 'indexOf()', 'includes()', 'position()'],
        answer: 'indexOf()',
      },
      {
        question: 'Что возвращает map()?',
        options: ['Булево значение', 'Новый массив', 'Один элемент', 'Число'],
        answer: 'Новый массив',
      },
      {
        question: 'Что возвращает forEach()?',
        options: ['Новый массив', 'undefined', 'Булево значение', 'Строку'],
        answer: 'undefined',
      },
    ],
  },
  {
    id: 'react-start',
    title: 'React Start',
    category: 'React',
    difficulty: 'Medium',
    rating: 4.8,
    plays: 1320,
    description: 'Квиз по основам React.',
    longDescription:
      'Основы React: JSX, props, useState, useEffect, key и структура компонентов.',
    timeLimit: 100,
    questions: [
      {
        question: 'Что такое JSX?',
        options: [
          'База данных',
          'Расширение синтаксиса JavaScript',
          'CSS-фреймворк',
          'Сервер React',
        ],
        answer: 'Расширение синтаксиса JavaScript',
      },
      {
        question: 'Какой хук используется для состояния?',
        options: ['useFetch', 'useState', 'useClass', 'useApp'],
        answer: 'useState',
      },
      {
        question: 'Как передаются данные в компонент?',
        options: ['props', 'state', 'setData', 'bind'],
        answer: 'props',
      },
      {
        question: 'Что делает useEffect?',
        options: [
          'Создаёт роуты',
          'Работает с побочными эффектами',
          'Стилизует компонент',
          'Создаёт state',
        ],
        answer: 'Работает с побочными эффектами',
      },
      {
        question: 'Что нужно для списка элементов в React?',
        options: ['id', 'class', 'key', 'name'],
        answer: 'key',
      },
      {
        question: 'Как называется корневой компонент приложения?',
        options: ['Main', 'App', 'RootPage', 'Start'],
        answer: 'App',
      },
      {
        question: 'Чем JSX в итоге преобразуется?',
        options: ['В CSS', 'В вызовы JavaScript', 'В HTML-файл напрямую', 'В JSON'],
        answer: 'В вызовы JavaScript',
      },
      {
        question: 'Как обновить state в useState?',
        options: ['Изменить переменную напрямую', 'Через setter-функцию', 'Через props', 'Через useEffect'],
        answer: 'Через setter-функцию',
      },
      {
        question: 'Что такое props?',
        options: ['Локальное состояние', 'Внешние данные компонента', 'Маршруты', 'Стили'],
        answer: 'Внешние данные компонента',
      },
      {
        question: 'Можно ли компоненту вернуть несколько элементов без обёртки?',
        options: ['Нет', 'Да, через Fragment', 'Только через div', 'Только через массив строк'],
        answer: 'Да, через Fragment',
      },
      {
        question: 'Какой атрибут в JSX вместо class?',
        options: ['className', 'cssClass', 'styleClass', 'classAttr'],
        answer: 'className',
      },
      {
        question: 'Какой атрибут для inline-стилей в React?',
        options: ['css', 'style', 'styles', 'inlineStyle'],
        answer: 'style',
      },
      {
        question: 'Что делает React при изменении state?',
        options: ['Перезагружает сайт', 'Перерендеривает компонент', 'Удаляет DOM', 'Перезапускает браузер'],
        answer: 'Перерендеривает компонент',
      },
      {
        question: 'Как передать обработчик клика?',
        options: ['onclick', 'onPress', 'onClick', 'click'],
        answer: 'onClick',
      },
      {
        question: 'Как условно отрендерить элемент?',
        options: ['Только через цикл', 'Через тернарный оператор или &&', 'Только через useEffect', 'Это невозможно'],
        answer: 'Через тернарный оператор или &&',
      },
      {
        question: 'Как называется односторонний поток данных в React?',
        options: ['Two-way binding', 'One-way data flow', 'Reactive chain', 'DOM streaming'],
        answer: 'One-way data flow',
      },
      {
        question: 'Где обычно хранят общий state нескольких компонентов?',
        options: ['В родительском компоненте', 'В CSS', 'В index.html', 'В props ребёнка'],
        answer: 'В родительском компоненте',
      },
      {
        question: 'Что такое компонент в React?',
        options: ['Таблица стилей', 'Функция или класс, возвращающая UI', 'База данных', 'Хук состояния'],
        answer: 'Функция или класс, возвращающая UI',
      },
    ],
  },
  {
    id: 'react-hooks',
    title: 'React Hooks',
    category: 'React',
    difficulty: 'Hard',
    rating: 4.9,
    plays: 980,
    description: 'Углублённый квиз по React Hooks.',
    longDescription:
      'Проверка знаний по useState, useEffect, useMemo, useCallback и правилам использования хуков.',
    timeLimit: 120,
    questions: [
      {
        question: 'Какой хук мемоизирует значение?',
        options: ['useRef', 'useEffect', 'useMemo', 'useStore'],
        answer: 'useMemo',
      },
      {
        question: 'Какой хук мемоизирует функцию?',
        options: ['useCallback', 'useMemo', 'useState', 'useEvent'],
        answer: 'useCallback',
      },
      {
        question: 'Можно ли вызывать хуки внутри if?',
        options: ['Да', 'Нет', 'Только useState', 'Только useEffect'],
        answer: 'Нет',
      },
      {
        question: 'Что обычно передают вторым аргументом в useEffect?',
        options: ['Строку', 'Массив зависимостей', 'Функцию очистки', 'Объект props'],
        answer: 'Массив зависимостей',
      },
      {
        question: 'Какой хук хранит изменяемое значение без ререндера?',
        options: ['useRef', 'useState', 'useMemo', 'useReducer'],
        answer: 'useRef',
      },
      {
        question: 'Что делает useEffect cleanup?',
        options: ['Создаёт state', 'Очищает побочный эффект', 'Мемоизирует данные', 'Рендерит компонент'],
        answer: 'Очищает побочный эффект',
      },
      {
        question: 'Когда выполняется useEffect без массива зависимостей?',
        options: ['Только один раз', 'После каждого рендера', 'Никогда', 'Только при клике'],
        answer: 'После каждого рендера',
      },
      {
        question: 'Когда выполняется useEffect с пустым массивом зависимостей?',
        options: ['После каждого рендера', 'Один раз после монтирования', 'Только при размонтировании', 'Каждую секунду'],
        answer: 'Один раз после монтирования',
      },
      {
        question: 'Для чего нужен useReducer?',
        options: ['Для маршрутов', 'Для более сложной логики состояния', 'Для CSS', 'Для запросов только'],
        answer: 'Для более сложной логики состояния',
      },
      {
        question: 'Что возвращает useState?',
        options: ['Объект', 'Массив из двух элементов', 'Только setter', 'Только state'],
        answer: 'Массив из двух элементов',
      },
      {
        question: 'Когда полезен useMemo?',
        options: ['Для дорогих вычислений', 'Для стилизации', 'Для роутинга', 'Для localStorage только'],
        answer: 'Для дорогих вычислений',
      },
      {
        question: 'Когда полезен useCallback?',
        options: ['Для сохранения ссылки на функцию между рендерами', 'Для сетевых запросов', 'Для анимаций', 'Для стилей'],
        answer: 'Для сохранения ссылки на функцию между рендерами',
      },
      {
        question: 'Изменение current в useRef вызывает ререндер?',
        options: ['Да', 'Нет', 'Только в StrictMode', 'Только если current число'],
        answer: 'Нет',
      },
      {
        question: 'Можно ли использовать хуки в class components?',
        options: ['Да', 'Нет', 'Только useEffect', 'Только useState'],
        answer: 'Нет',
      },
      {
        question: 'Что важно в hooks?',
        options: ['Вызывать их в одном и том же порядке', 'Вызывать только ночью', 'Использовать только один хук', 'Хранить их в массиве'],
        answer: 'Вызывать их в одном и том же порядке',
      },
      {
        question: 'Какой хук даёт доступ к контексту?',
        options: ['useContext', 'useProvider', 'useGlobal', 'useScope'],
        answer: 'useContext',
      },
      {
        question: 'Для чего useRef часто используют в DOM?',
        options: ['Для доступа к DOM-элементу', 'Для изменения маршрута', 'Для загрузки CSS', 'Для state списка'],
        answer: 'Для доступа к DOM-элементу',
      },
      {
        question: 'Какой хук может заменить несколько useState при сложной логике?',
        options: ['useMemo', 'useReducer', 'useRef', 'useId'],
        answer: 'useReducer',
      },
    ],
  },
  {
    id: 'git-basics',
    title: 'Git Basics',
    category: 'Tools',
    difficulty: 'Easy',
    rating: 4.3,
    plays: 560,
    description: 'Основы Git и работы с репозиториями.',
    longDescription:
      'Квиз по Git: commit, push, pull, branch, clone и базовые команды контроля версий.',
    timeLimit: 70,
    questions: [
      {
        question: 'Какая команда создаёт локальный репозиторий?',
        options: ['git start', 'git init', 'git create', 'git new'],
        answer: 'git init',
      },
      {
        question: 'Как отправить изменения на удалённый репозиторий?',
        options: ['git push', 'git send', 'git upload', 'git commit'],
        answer: 'git push',
      },
      {
        question: 'Какая команда создаёт коммит?',
        options: ['git snapshot', 'git commit', 'git save', 'git note'],
        answer: 'git commit',
      },
      {
        question: 'Как скачать существующий репозиторий?',
        options: ['git pull', 'git clone', 'git fork', 'git fetch'],
        answer: 'git clone',
      },
      {
        question: 'Что делает git pull?',
        options: [
          'Удаляет ветку',
          'Подтягивает изменения',
          'Создаёт коммит',
          'Откатывает файлы',
        ],
        answer: 'Подтягивает изменения',
      },
      {
        question: 'Какая команда показывает статус файлов?',
        options: ['git state', 'git status', 'git files', 'git check'],
        answer: 'git status',
      },
      {
        question: 'Какая команда показывает историю коммитов?',
        options: ['git history', 'git log', 'git commits', 'git list'],
        answer: 'git log',
      },
      {
        question: 'Как создать новую ветку?',
        options: ['git branch new-name', 'git new branch', 'git checkout branch', 'git make-branch'],
        answer: 'git branch new-name',
      },
      {
        question: 'Как переключиться на ветку?',
        options: ['git branch name', 'git switch name', 'git status name', 'git merge name'],
        answer: 'git switch name',
      },
      {
        question: 'Что делает git add ?',
        options: ['Удаляет файл', 'Добавляет изменения в staging area', 'Создаёт ветку', 'Публикует проект'],
        answer: 'Добавляет изменения в staging area',
      },
      {
        question: 'Что делает git merge ?',
        options: ['Удаляет коммиты', 'Объединяет ветки', 'Создаёт репозиторий', 'Отменяет pull'],
        answer: 'Объединяет ветки',
      },
      {
        question: 'Как временно сохранить незакоммиченные изменения?',
        options: ['git temp', 'git save', 'git stash', 'git hide'],
        answer: 'git stash',
      },
      {
        question: 'Какая команда скачивает изменения без merge?',
        options: ['git clone', 'git pull', 'git fetch', 'git sync'],
        answer: 'git fetch',
      },
      {
        question: 'Что делает git remote -v?',
        options: ['Показывает удалённые репозитории', 'Удаляет remote', 'Создаёт ветку', 'Показывает версии Git'],
        answer: 'Показывает удалённые репозитории',
      },
      {
        question: 'Как называется основная ветка чаще всего?',
        options: ['start', 'main', 'root', 'base'],
        answer: 'main',
      },
      {
        question: 'Что такое commit?',
        options: ['Удалённый сервер', 'Снимок изменений', 'Ветка проекта', 'Ошибка в коде'],
        answer: 'Снимок изменений',
      },
      {
        question: 'Как связать локальный проект с удалённым репозиторием?',
        options: ['git remote add origin URL', 'git connect URL', 'git push URL', 'git clone origin'],
        answer: 'git remote add origin URL',
      },
      {
        question: 'Что делает git checkout в старом синтаксисе?',
        options: ['Может переключать ветки и восстанавливать файлы', 'Только удаляет ветки', 'Только отправляет commit', 'Только показывает лог'],
        answer: 'Может переключать ветки и восстанавливать файлы',
      },
    ],
  },
  {
    id: 'web-accessibility',
    title: 'Web Accessibility',
    category: 'Web',
    difficulty: 'Medium',
    rating: 4.6,
    plays: 410,
    description: 'Доступность сайтов и UX.',
    longDescription:
      'Квиз по веб-доступности: alt, semantic HTML, aria-label, контрастность и доступность с клавиатуры.',
    timeLimit: 85,
    questions: [
      {
        question: 'Зачем нужен alt у изображения?',
        options: [
          'Для SEO только',
          'Для доступности и описания изображения',
          'Для цвета картинки',
          'Для загрузки изображения',
        ],
        answer: 'Для доступности и описания изображения',
      },
      {
        question: 'Что улучшает доступность?',
        options: [
          'Случайные div вместо semantic tags',
          'Контрастный текст',
          'Текст без заголовков',
          'Отключение фокуса',
        ],
        answer: 'Контрастный текст',
      },
      {
        question: 'Для чего нужен aria-label?',
        options: [
          'Для изменения CSS',
          'Для дополнительного текстового описания',
          'Для маршрутизации',
          'Для размеров элемента',
        ],
        answer: 'Для дополнительного текстового описания',
      },
      {
        question: 'Какой тег является семантическим?',
        options: ['<div>', '<span>', '<main>', '<b>'],
        answer: '<main>',
      },
      {
        question: 'Что важно для навигации с клавиатуры?',
        options: [
          'Убирать outline всегда',
          'Поддерживать фокус элементов',
          'Использовать только mouseover',
          'Запрещать tab',
        ],
        answer: 'Поддерживать фокус элементов',
      },
      {
        question: 'Что помогает screen reader лучше понимать страницу?',
        options: ['Семантическая разметка', 'Только яркие цвета', 'Только анимации', 'Большие картинки'],
        answer: 'Семантическая разметка',
      },
      {
        question: 'Что важно для кнопок?',
        options: ['Делать их только div', 'Понятный текст кнопки', 'Убирать фокус', 'Использовать только иконки без описания'],
        answer: 'Понятный текст кнопки',
      },
      {
        question: 'Почему плох низкий контраст текста?',
        options: ['Текст сложнее читать', 'Ускоряет загрузку', 'Улучшает SEO', 'Не влияет ни на что'],
        answer: 'Текст сложнее читать',
      },
      {
        question: 'Какое свойство не стоит отключать без замены?',
        options: ['border', 'outline', 'padding', 'margin'],
        answer: 'outline',
      },
      {
        question: 'Зачем нужны заголовки h1-h6?',
        options: ['Только для красоты', 'Для структуры контента', 'Только для SEO', 'Для цвета текста'],
        answer: 'Для структуры контента',
      },
      {
        question: 'Когда aria-label особенно полезен?',
        options: ['Для иконок без текста', 'Только для картинок', 'Только для таблиц', 'Только для CSS Grid'],
        answer: 'Для иконок без текста',
      },
      {
        question: 'Какой элемент лучше использовать для кнопки действия?',
        options: ['<div>', '<span>', '<button>', '<section>'],
        answer: '<button>',
      },
      {
        question: 'Что важно для форм с точки зрения доступности?',
        options: ['У каждого поля должен быть label', 'Использовать только placeholder', 'Убирать текст ошибок', 'Отключать tab'],
        answer: 'У каждого поля должен быть label',
      },
      {
        question: 'Что лучше для ссылки перехода?',
        options: ['Кликни сюда', 'Подробнее о React hooks', 'link', 'go'],
        answer: 'Подробнее о React hooks',
      },
      {
        question: 'Что означает keyboard accessibility?',
        options: ['Доступность сайта с клавиатуры', 'Наличие экранной клавиатуры', 'Поддержка только Enter', 'Музыкальные хоткеи'],
        answer: 'Доступность сайта с клавиатуры',
      },
      {
        question: 'Нужно ли делать фокус видимым?',
        options: ['Нет', 'Да', 'Только на главной странице', 'Только в Firefox'],
        answer: 'Да',
      },
      {
        question: 'Что улучшает понимание ошибок в форме?',
        options: ['Понятные текстовые сообщения', 'Только красный цвет без текста', 'Скрытые ошибки', 'Перезагрузка страницы'],
        answer: 'Понятные текстовые сообщения',
      },
      {
        question: 'Что полезно для пропуска навигации?',
        options: ['Skip link', 'Только footer', 'Hover-меню', 'Скрытый main'],
        answer: 'Skip link',
      },
    ],
  },
]
