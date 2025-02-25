const math = require('../math');

    test('soma 2 + 3 igual a 5', () => {
    expect(math.add(2, 3)).toBe(5); 
    })
    
    const subtract = function (a, b) {
        test('subtração 2 - 3 igual a 1', () => {
            expect(math.subtract(2, 3)).toBe(1); 
        });

    };

    const multiply = (a, b) => a * b;
    test('multiplicação 2 x 3 igual a 6', () => {
        expect(math.multiply(2, 3)).toBe(6); 
    })

    const divide = (a, b) => a / b;
    test('divisão 6 / 2 igual a 6', () => {
        expect(math.divide(6, 2)).toBe(3); 
});

module.exports = {add, subtract, multiply, divide }