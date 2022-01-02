const button = document.getElementById('button');
const inputText = document.getElementById('input0');
const blockRu = document.getElementById('blockRu');
const blockTrans = document.getElementById('blockTrans');


button.addEventListener('click', () => { //Словарь
    const letters = {
        'а': 'a',
        'б': 'b',
        'в': 'v',
        'г': 'g',
        'д': 'd',
        'е': 'e',
        'ё': 'yo',
        'ж': 'zh',
        'з': 'z',
        'и': 'i',
        'й': 'j',
        'к': 'k',
        'л': 'l',
        'м': 'm',
        'н': 'n',
        'о': 'o',
        'п': 'p',
        'р': 'r',
        'с': 's',
        'т': 't',
        'у': 'u',
        'ф': 'f',
        'х': 'h',
        'ц': 'c',
        'ч': 'ch',
        'ш': 'sh',
        'щ': 'sch',
        'ь': "'",
        'ы': 'y',
        'ъ': '"',
        'э': 'e',
        'ю': 'yu',
        'я': 'ya',
        '/': '/',
        '?': '?',
        '!': '!',
        ':': ':',
        '@': '@',
        '#': '#',
        '$': '$',
        '+': '+',
        '-': '-',
        '&': '&',
        '(': '(',
        ')': ')',
        '[': '[',
        ']': ']',
        '{': '{',
        '}': '}',
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',



        'А': 'A',
        'Б': 'B',
        'В': 'V',
        'Г': 'G',
        'Д': 'D',
        'Е': 'E',
        'Ё': 'YO',
        'Ж': 'ZH',
        'З': 'Z',
        'И': 'I',
        'Й': 'J',
        'К': 'K',
        'Л': 'L',
        'М': 'M',
        'Н': 'N',
        'О': 'O',
        'П': 'P',
        'Р': 'R',
        'С': 'S',
        'Т': 'T',
        'У': 'U',
        'Ф': 'F',
        'Х': 'H',
        'Ц': 'C',
        'Ч': 'CH',
        'Ш': 'SH',
        'Щ': 'SCH',
        'Ь': "'",
        'Ы': 'Y',
        'Ъ': '"',
        'Э': 'E',
        'Ю': 'YU',
        'Я': 'YA',
        ' ': ' ',
        '/': '/',
        '?': '?',
        '!': '!',
        ':': ':',
        '@': '@',
        '#': '#',
        '$': '$',
        '+': '+',
        '-': '-',
        '&': '&',
        '(': '(',
        ')': ')',
        '[': '[',
        ']': ']',
        '{': '{',
        '}': '}',
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',


    };

    let transWord = ''; // Для конкатенации строки из символов
    inputValue = inputText.value;

    for (let letersIndex = 0; letersIndex < inputValue.length; letersIndex++) {

        if (letters[inputValue[letersIndex]] === undefined) { //Проверка на соотв. языка
            return alert('Неверный символ');
        } else {
            transWord += letters[inputValue[letersIndex]]; //Сборка слова на транслите
        }

    };

    const textRu = inputText.value;
    const blockWordsRu = document.createElement('div');
    blockWordsRu.className = 'dictionary';
    blockWordsRu.setAttribute('title', inputText.value);
    blockRu.appendChild(blockWordsRu);
    blockWordsRu.innerText = textRu;

    const textEn = transWord;
    const blockWordsEn = document.createElement('div');
    blockWordsEn.className = 'dictionary';
    blockWordsEn.setAttribute('title', transWord);
    blockTrans.appendChild(blockWordsEn);
    blockWordsEn.innerText = textEn;
});