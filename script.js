function veficiaPalindromo(string) {
    if(!string) return;

    string.split("").reverse().join("") === string;
}