const randomNumb = () => Math.floor(Math.random() * 100);
const firstFunc = (string) => string.toUpperCase();
const secondFunc = (string) => string[0];
const thirdFunc = (str1 , str2) => str1.concat(str2);

module.exports = { randomNumb, firstFunc, secondFunc, thirdFunc }