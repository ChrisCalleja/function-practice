const length = 5;
const width = 3;
const area = length * width;
console.log(area);

const length2 = 3;
const width2 = 4;
const area2 = length2 * width2;
console.log(area2);

// function declaration
function getAreaFD(length, width) {
  return length * width;
}

// function expression
const getAreaFE = function (length, width) {
  return length * width;
};

console.log(getAreaFE(5, 5));

//arrow function (preferred)

const getAreaAF = (length, width) => length * width;
console.log(getAreaAF(2, 2));
//practice number 1
function add(n1, n2) {
  return n1 + n2;
}

console.log(add(4, 4));
//practice number 2
const randomDamage = () => Math.floor(Math.random() * 10 + 1);

console.log(randomDamage());

//3
function characterCount(word) {
  return word.length;
}
console.log(characterCount("Chris"));

function characterCount(word) {
  return word.length;
}
console.log(characterCount("EmilyCalleja"));

//4
const canVote = function (age) {
  return age < 18 ? false : true;
};
console.log(canVote(19));

//5
const vowelCount = (word) => {
  let counter = 0;
  word = word.toLowerCase();
  for (i = 0; i < word.length; i++) {
    if (
      word[i] == "a" ||
      word[i] == "e" ||
      word[i] == "i" ||
      word[i] == "o" ||
      word[i] == "u"
    ) {
      counter++;
    }
  }
  return counter;
};
console.log(vowelCount("Animal"));

//6
const vowelCountV2 = (firstWord, secondWord) => {
  let vowels = /[aeiou]/gi;
  let result = firstWord.match(vowels).length;
  let result2 = secondWord.match(vowels).length;

  if (result > result2) {
    return firstWord;
  } else if (result2 > result) {
    return secondWord;
  } else {
    return "same";
  }
};
console.log(vowelCountV2("Chriiis", "Jill"));

//7
// const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
// console.log(toCelsius(-40));

const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * (5 / 9);
};
console.log(toCelsius(32));

//8
const toFahrenheit = (celsius) => celsius * (9 / 5) + 32;
console.log(toFahrenheit(2000));

//9
const tempConverter = (temp, unitToConvertTo) => {
  if (temp === "c") {
    return ((unitToConvertTo - 32) * 5) / 9;
  } else if (temp === "f") {
    return (unitToConvertTo * 9) / 5 + 32;
  } else {
    return "please provide either f or c as unit to convert to";
  }
};
console.log(tempConverter("f", 30));

//10
// const predictTheFuture = (question) => {
//   const array = ["Yes", "No", "Maybe", "Ask again later"];
//   let x = Math.floor(Math.random() * 4);
//   return `${question} ${array[x]}`;
// };
// console.log(predictTheFuture("Is my shirt green?"));

const predictTheFuture = (question) => {
  const responses = ["yes", "no", "maybe", "ask again later"];
  const randomNumber = Math.floor(Math.random() * 4);
  return `${question}: ${responses[randomNumber]}`;
};
console.log(predictTheFuture("Will Chris eat pizza tonight?"));
