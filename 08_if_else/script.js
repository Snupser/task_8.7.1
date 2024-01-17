
let minValue = parseInt(prompt('Минимальное число для игры', '0')) || 0;
minValue = Math.max(-999, Math.min(minValue, 999));

let maxValue = parseInt(prompt('Максимальное число для игры', '100')) || 100;
maxValue = Math.max(-999, Math.min(maxValue, 999));

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;


const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;




document.getElementById('btnRetry').addEventListener('click', function () {

let minValue = parseInt(prompt('Минимальное число для игры', '0')) || 0;
minValue = Math.max(-999, Math.min(minValue, 999));

let maxValue = parseInt(prompt('Максимальное число для игры', '100')) || 100;
maxValue = Math.max(-999, Math.min(maxValue, 999));

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;


    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
})




document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phrases = ['Я всегда угадываю\n\u{1F60E}', 'Я просто в ударе!\n\u{1F60E}', 'Мой успех неоспорим!\n\u{1F60E}', 'Мама с детства говорила, что я победитель!\n\u{1F60E}'];
        const randomPhrase = phrases[Math.round(Math.random() * 3)];
        answerField.innerText = randomPhrase;
        
            gameRun = false;
    }
})


