const fs = require("fs");

exports.calculadora = (num1, num2, operador) => {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let result = 0;
    switch (operador) {
        case '+':
            result = num1 + num2;
            this.writeFile(`${num1} + ${num2} = ${result}\r`);
            return result;
        case '-':
            result = num1 - num2;
            this.writeFile(`${num1} - ${num2} = ${result}\r`);
            return result;
        case '*':
            result = num1 * num2;
            this.writeFile(`${num1} * ${num2} = ${result}\r`);
            return result;
        case '/':
            if(num2 === 0){
                this.writeFile(`${num1} / ${num2} = Nao e possivel dividir por 0\r`);
                return 0;
            }
            result = num1 / num2;
            this.writeFile(`${num1} / ${num2} = ${result}\r`);
            return result;
        default:
            return null;
    }
}

exports.writeFile = (message) => {
    fs.appendFile('log.txt', message, function (err) {
        if (err) throw err;
    });
}