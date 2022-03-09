function checkNumb(numb1, numb2) {
  if (typeof numb1 !== 'number' || typeof numb2 !== 'number') {
    throw new Error('Não vou somar string.');
  }
}

function sum(numb1, numb2) {
  checkNumb(numb1, numb2);
  return numb1 + numb2;
}

const showSum = (numb1, numb2) => {
  try {
    return sum(numb1, numb2)
  } catch (error) {
    return error.mensage;
  }
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function fizzBuzz(numb) {
  let result;
  if (numb % 3 === 0 && numb % 5 === 0) {
    result = 'fizzbuzz';
  } else if (numb % 3 === 0 && numb % 5 !== 1) {
    result = 'fizz';
  } else if (numb % 5 === 0 && numb % 3 !== 0) {
    result = 'buzz';
  } else if (isNaN(parseInt(numb))) {
    result = false;
  }else {
    result = numb;
  }
  return result;
}

function encode(string) {
  let encoded;
  let splitString = string.split('');

  for (let i in splitString) {
    if (splitString[i] === 'a') {
      splitString[i] = 1;
    }
    else if (splitString[i] === 'e') {
      splitString[i] = 2;
    }
    else if (splitString[i] === 'i') {
      splitString[i] = 3;
    }
    else if (splitString[i] === 'o') {
      splitString[i] = 4;
    }
    else if (splitString[i] === 'u') {
      splitString[i] = 5;
    }
  }
  encoded = splitString.join('');
  return encoded;
}

function decode(string) {
  let decoded;
  let splitString = string.split('');

  for (let i in splitString) {
    if (splitString[i] == '1') {
      splitString[i] = 'a';
    }
    else if (splitString[i] == '2') {
      splitString[i] = 'e';
    }
    else if (splitString[i] == '3') {
      splitString[i] = 'i';
    }
    else if (splitString[i] == '4') {
      splitString[i] = 'o';
    }
    else if (splitString[i] == '5') {
      splitString[i] = 'u';
    }
  }
  decoded = splitString.join('');
  return decoded;
}


module.exports = { sum, myRemove, fizzBuzz, encode, decode};