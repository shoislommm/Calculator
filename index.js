let a = '' // first number
let b = '' // second number
let sign = '' // sign - знак
let finish = false

const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'x', '÷', "%"]
const reverse = ['+/-']

// экран 
const out = document.querySelector('.result p')

function clearAll() {
    a = ''; //
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0
}

document.querySelector('.AC').addEventListener("click", clearAll);

document.querySelector('.buttons').addEventListener("click", (event) => {

    // если нажата кнопка AC clearAll
    if (event.target.classList.contains('AC')) return;

    out.textContent = '0';

    // получение нажатой кнопки
    const key = event.target.textContent;

    // если нажата клавиша 0-9 или .
    if (number.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return
    }

    // если нажата клавиша + - x ÷
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return
    }

    // если нажата клавиша +/-
    if (reverse.includes(key) && (a !== '' || b !== '')) {
        if(sign === '') {
            a = `-${a}`;
            out.textContent = a;
        } else {
            b = `-${b}`;
            out.textContent = b;
        }

        return;
    }

    // если нажато =
    if (key === '=') {
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break
            case '-':
                a = a - b;
                break
            case 'x':
                a = a * b;
                break
            case '÷':
                if (b === '0') {
                    out.textContent = 'Ты дурак?';
                    a = '';
                    b = '';
                    sign = '';
                    return
                }
                a = a / b;
                break
            case "%": {
                if (b === '0') {
                    out.textContent = 'Ты дурак?';
                    a = '';
                    b = '';
                    sign = '';
                    return
                }
                a = a % b;
                break;
            }
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign)
    }
})

