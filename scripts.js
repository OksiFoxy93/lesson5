// 1
let calculator = {
    read() {
        this.x = +prompt('Введите X');
        this.y = +prompt('Введите Y');
    },
    sum() {
        return this.x + this.y;
    },
    multi() {
        return this.x * this.y;
    },
    diff() {
        return this.x - this.y;
    },
    div() {
        return this.x / this.y;
    },
}

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );
alert( calculator.diff() );
alert( calculator.div() );

// 2
let coffeeMachine = {
    message: 'Your coffee is ready!',
    start() {
        setTimeout(function x() {
            alert(coffeeMachine.message);
        }, 3000);
    }

};

coffeeMachine.start() ;

// 3
let x = 0;
let counter = {
    inc() {
        ++x;
        return this;
    },
    dec() {
        --x;
        return this;
    },
    getValue(){
        return x;
    }
};

var current = counter.inc().inc().dec().inc().dec().getValue();
alert(current);

// 4
let calculator = {
    sum(x, y) {
        return x + y;
    },
    multi(x, y) {
        return x * y;
    },
    diff(x, y) {
        return x - y;
    },
    div(x, y) {
        return x / y;
    }
};

let me = {
    getSum(x, y) {
        return(`${x} + ${y} = ${calculator.sum.call(me, x, y)}`)
    },
    getDiff(x, y){
        return(`${x} - ${y} = ${calculator.diff.call(me, x, y)}`)
    },
    getMulti(x, y){
        return(`${x} * ${y} = ${calculator.multi.call(me, x, y)}`)
    },
    getDiv(x, y){
        return(`${x} / ${y} = ${calculator.div.call(me, x, y)}`)
    },
};

alert(me.getSum(1, 1));
alert(me.getDiv(2, 4));
alert(me.getMulti(1, 3));
alert(me.getDiff(1, 3));


// 5
var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

format.call(country, '', '');
format.apply(country, ['[', ']']); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply(country.language, ['', '']); // undefined


// 6
let user = {
    name: "John",
}

function format(start, end) {
    console.log(start + this.name + end);
}

let userFormat = format.bind(user);
userFormat('<<<', '>>>');


// 7
function concat(str1, str2, symbol) {
    return (str1 + symbol + str2);
}

function hello(who) {
    return window.concat.bind(window, "Hello", who, ' ')();
}
hello('World'); // Hello World


// РЕКУРСИЯ
// 1
// С помощью цикла:
function  cube (value) {
    let cub = value;
    for(let i = 1; i < 3; i++) {
        cub *= value;
    }
    return cub;
}
console.log( cube(2) );

// С помощью рекурсии:
function  cube (value) {
    if (value === 1) {
        return value;
    } else {
        let cub = value * value;
        return cub;
    }
}
console.log( cube(1) );


// 2
let sumNum = 0;
function sum(...number) {
    sumNum += number[0];
    number.shift();
    if (number.length) {
        sum(...number);
    }
    return sumNum;
}
console.log( sum(1, 2, 3, 4, 5) );


// Задача с практики
// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

function num(number) {
    let sumNum = 0;
    let arr = number.toString().split("");
    for(let key of arr){
        sumNum += +key
    }
    if(sumNum < 10) {
        return(console.log(sumNum))
    } else {
        num(sumNum)
    }
}

num("12356");


