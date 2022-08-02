exports.celsiusFahrenheit = (valor) => {
    return Math.ceil(((valor * 9) / 5) + 32)
};

exports.fahrenheitCelsius = (valor) => {
    return Math.ceil(((valor - 32) * 5) / 9);
};