const { concateneStrings,
        mudandoLetras,
        verificaSePalavraComeca,
        verifiqueSePolimetro,
        verifiqueVogais }= require("../exercicio_strings/index.js");

describe("Exercicio de stringa da pasta dedicada a resolução de strings", () => {
    test("1 - concatene duas strings", () => {
        expect(concateneStrings("Hello", "World")).toBe("Hello World");
    });

    test("2 - modifique uma letra na palavra ex. 'a' para 'o' em qualquer palavra", () => {
        expect(mudandoLetras('abacaxi')).toBe('obocoxi');
    })

    test("3 - verifique se a palavra começa com a letra 'P'", () => {
        expect(verificaSePalavraComeca("Pedro")).toBe(true);
        expect(verificaSePalavraComeca("Maria")).toBe(false);
    })

    test("4 - verifique se a palavra é um polimetro", () => {
        expect(verifiqueSePolimetro("arara")).toBe(true);
        expect(verifiqueSePolimetro("banana")).toBe(false);
        expect(verifiqueSePolimetro("")).toBe(false);
        expect(verifiqueSePolimetro(123)).toBe(false);
    })

    test("5 - verifique se a palavra contem vogais", () => {
        expect(verifiqueVogais("arara")).toBe(3);
        expect(verifiqueVogais("")).toBe(false);
        expect(verifiqueVogais(123)).toBe(false);
    })
})
