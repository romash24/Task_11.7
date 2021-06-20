let minValue;
let maxValue;
let answerNumber;
let orderNumber;
let gameRun;
let phraseRandom;
let answerPhrase;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

startGame();

document.getElementById('btnRetry').addEventListener('click', function () {
    startGame();
});

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            phraseRandom = Math.round(Math.random() * 2);

            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 1:
                    answerPhrase = `Я сдаюсь..\n\u{1F61F}`;
                    break;
                case 2:
                    answerPhrase = `Зачем обманываешь, а?\n\u{1F615}`;
                    break;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerNumberText();
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue - 1) {
            phraseRandom = Math.round(Math.random() * 2);

            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 1:
                    answerPhrase = `Я сдаюсь..\n\u{1F61F}`;
                    break;
                case 2:
                    answerPhrase = `Зачем обманываешь, а?\n\u{1F615}`;
                    break;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerNumberText();
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        phraseRandom = Math.round(Math.random() * 2);

        switch (phraseRandom) {
            case 0:
                answerPhrase = `Я всегда угадываю\n\u{1F60E}`;
                break;
            case 1:
                answerPhrase = `Это было так легко! Ты загадал ${answerNumber}!\n\u{1F609}`;
                break;
            case 2:
                answerPhrase = `Ты загадал ${answerNumber}! Какой я молодец!\n\u{1F600}`;
                break;
        }

        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})


// Функция начала игры
function startGame() {
    orderNumber = 0;
    minValue = parseInt(prompt('Минимальное знание числа для игры', '0')) || 0;
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100')) || 100;

    minValue < -999 ? minValue = -999 : minValue;
    maxValue > 999 ? maxValue = 999 : maxValue;

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerNumberText();
}

// Функция отображения текстового числа
function answerNumberText() {
    let numText = '';
    let answerNumText = '';
    let integerNum = '';
    let decimalNum = '';

    if (answerNumber < 0) {
        numText = 'минус';
        answerNumText = -answerNumber;
    } else {
        answerNumText = answerNumber;
    }

    if (answerNumText < 20) {
        if (answerNumText === 0) {
            numText = 0;
        } else if (answerNumText === 1) {
            numText = `${numText} один`;
        } else if (answerNumText === 2) {
            numText = `${numText} два`;
        } else if (answerNumText === 3) {
            numText = `${numText} три`;
        } else if (answerNumText === 4) {
            numText = `${numText} четыре`;
        } else if (answerNumText === 5) {
            numText = `${numText} пять`;
        } else if (answerNumText === 6) {
            numText = `${numText} шесть`;
        } else if (answerNumText === 7) {
            numText = `${numText} семь`;
        } else if (answerNumText === 8) {
            numText = `${numText} восемь`;
        } else if (answerNumText === 9) {
            numText = `${numText} девять`;
        } else if (answerNumText === 10) {
            numText = `${numText} десять`;
        } else if (answerNumText === 11) {
            numText = `${numText} одиннадцать`;
        } else if (answerNumText === 12) {
            numText = `${numText} двенадцать`;
        } else if (answerNumText === 13) {
            numText = `${numText} тринадцать`;
        } else if (answerNumText === 14) {
            numText = `${numText} четырнадцать`;
        } else if (answerNumText === 15) {
            numText = `${numText} пятнадцать`;
        } else if (answerNumText === 16) {
            numText = `${numText} шестнадцать`;
        } else if (answerNumText === 17) {
            numText = `${numText} семнадцать`;
        } else if (answerNumText === 18) {
            numText = `${numText} восемнадцать`;
        } else if (answerNumText === 19) {
            numText = `${numText} девятнадцать`;
        }
    } else if (answerNumText < 100) {
        integerNum = parseInt(answerNumText / 10);
        decimalNum = answerNumText % 10;

        if (integerNum === 2) {
            numText = `${numText} двадцать`;
        } else if (integerNum === 3) {
            numText = `${numText} тридцать`;
        } else if (integerNum === 4) {
            numText = `${numText} сорок`;
        } else if (integerNum === 5) {
            numText = `${numText} пятьдесят`;
        } else if (integerNum === 6) {
            numText = `${numText} шестьдесят`;
        } else if (integerNum === 7) {
            numText = `${numText} семьдесят`;
        } else if (integerNum === 8) {
            numText = `${numText} восемьдесят`;
        } else if (integerNum === 9) {
            numText = `${numText} девяносто`;
        }

        if (decimalNum === 1) {
            numText = `${numText} один`;
        } else if (decimalNum === 2) {
            numText = `${numText} два`;
        } else if (decimalNum === 3) {
            numText = `${numText} три`;
        } else if (decimalNum === 4) {
            numText = `${numText} четыре`;
        } else if (decimalNum === 5) {
            numText = `${numText} пять`;
        } else if (decimalNum === 6) {
            numText = `${numText} шесть`;
        } else if (decimalNum === 7) {
            numText = `${numText} семь`;
        } else if (decimalNum === 8) {
            numText = `${numText} восемь`;
        } else if (decimalNum === 9) {
            numText = `${numText} девять`;
        }
    } else {
        integerNum = parseInt(answerNumText / 100);
        decimalNum = answerNumText % 100;

        if (integerNum === 1) {
            numText = `${numText} сто`;
        } else if (integerNum === 2) {
            numText = `${numText} двести`;
        } else if (integerNum === 3) {
            numText = `${numText} триста`;
        } else if (integerNum === 4) {
            numText = `${numText} четыреста`;
        } else if (integerNum === 5) {
            numText = `${numText} пятьсот`;
        } else if (integerNum === 6) {
            numText = `${numText} шестьсот`;
        } else if (integerNum === 7) {
            numText = `${numText} семьсот`;
        } else if (integerNum === 8) {
            numText = `${numText} восемьсот`;
        } else if (integerNum === 9) {
            numText = `${numText} девятьсот`;
        }

        if (decimalNum < 20) {
            if (decimalNum === 1) {
                numText = `${numText} один`;
            } else if (decimalNum === 2) {
                numText = `${numText} два`;
            } else if (decimalNum === 3) {
                numText = `${numText} три`;
            } else if (decimalNum === 4) {
                numText = `${numText} четыре`;
            } else if (decimalNum === 5) {
                numText = `${numText} пять`;
            } else if (decimalNum === 6) {
                numText = `${numText} шесть`;
            } else if (decimalNum === 7) {
                numText = `${numText} семь`;
            } else if (decimalNum === 8) {
                numText = `${numText} восемь`;
            } else if (decimalNum === 9) {
                numText = `${numText} девять`;
            } else if (decimalNum === 10) {
                numText = `${numText} десять`;
            } else if (decimalNum === 11) {
                numText = `${numText} одиннадцать`;
            } else if (decimalNum === 12) {
                numText = `${numText} двенадцать`;
            } else if (decimalNum === 13) {
                numText = `${numText} тринадцать`;
            } else if (decimalNum === 14) {
                numText = `${numText} четырнадцать`;
            } else if (decimalNum === 15) {
                numText = `${numText} пятнадцать`;
            } else if (decimalNum === 16) {
                numText = `${numText} шестнадцать`;
            } else if (decimalNum === 17) {
                numText = `${numText} семнадцать`;
            } else if (decimalNum === 18) {
                numText = `${numText} восемнадцать`;
            } else if (decimalNum === 19) {
                numText = `${numText} девятнадцать`;
            }
        }

        if (decimalNum < 100 && decimalNum > 19) {
            integerNum = parseInt(decimalNum / 10);
            decimalNum = decimalNum % 10;

            if (integerNum === 2) {
                numText = `${numText} двадцать`;
            } else if (integerNum === 3) {
                numText = `${numText} тридцать`;
            } else if (integerNum === 4) {
                numText = `${numText} сорок`;
            } else if (integerNum === 5) {
                numText = `${numText} пятьдесят`;
            } else if (integerNum === 6) {
                numText = `${numText} шестьдесят`;
            } else if (integerNum === 7) {
                numText = `${numText} семьдесят`;
            } else if (integerNum === 8) {
                numText = `${numText} восемьдесят`;
            } else if (integerNum === 9) {
                numText = `${numText} девяносто`;
            }

            if (decimalNum === 1) {
                numText = `${numText} один`;
            } else if (decimalNum === 2) {
                numText = `${numText} два`;
            } else if (decimalNum === 3) {
                numText = `${numText} три`;
            } else if (decimalNum === 4) {
                numText = `${numText} четыре`;
            } else if (decimalNum === 5) {
                numText = `${numText} пять`;
            } else if (decimalNum === 6) {
                numText = `${numText} шесть`;
            } else if (decimalNum === 7) {
                numText = `${numText} семь`;
            } else if (decimalNum === 8) {
                numText = `${numText} восемь`;
            } else if (decimalNum === 9) {
                numText = `${numText} девять`;
            }
        }

    }

    numText = numText.length < 20 ? numText : answerNumber;
    answerField.innerText = `Вы загадали число ${numText}?`;
}

