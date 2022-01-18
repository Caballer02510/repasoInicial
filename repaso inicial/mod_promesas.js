const dividir = (num1, num2) => {
    return new Promise(
        (resolver, reject) => {
            if (num2 == 0) {
                reject('Error: División por cero');
            } else {
                resolver(num1 / num2);
            }
    }
    )
}

module.exports = dividir;
