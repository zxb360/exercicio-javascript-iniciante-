import concateneStrings from "../exercicio_strings/concateneStrings.js";

const testConcateneStrings = () => {
    const resultado = concateneStrings("palavra1", "palavra2");
    const expected = "palavra1palavra2";

    if(resultado !== expected) return "Test failed";
    return "Test passed";
}

console.log(testConcateneStrings());
