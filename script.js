// solução 1
function veficiaPalindromo(string) {
    if(!string) return;

    return string.split("").reverse().join("") === string;
}
console.log (veficiaPalindromo("gato"))
