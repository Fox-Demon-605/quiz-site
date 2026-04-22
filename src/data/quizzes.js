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
    ],
  },
]

