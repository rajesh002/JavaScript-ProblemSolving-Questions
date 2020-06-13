// Missing Number

function missingNumber() {
  var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
  var upperBound = 9;
  var lowerBound = 1;
  var missingNumber = 0;
  arrayOfIntegers = arrayOfIntegers.sort();
  for (var i = 0; i < arrayOfIntegers.length - 1; i++) {
    if (arrayOfIntegers[i] + 1 != arrayOfIntegers[i + 1]) {
      missingNumber = arrayOfIntegers[i] + 1;
      break;
    }
  }
  console.log(missingNumber);
}

missingNumber();

//Unique Elements
function uniqueElements(array) {
  var uniqueArr = [];
  uniqueArr = array.filter((arrayElement, index, uniqueArr) => {
    return uniqueArr.indexOf(arrayElement) === index;
  });
  return uniqueArr;
}

var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
console.log(uniqueElements(array));

//Largest difference
function largest_difference(array) {
  diff = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] < array[j] && array[j] - array[i] > diff)
        diff = array[j] - array[i];
    }
  }
}

var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];
console.log(largest_difference(array));

//intersection unique elements

function intersection(firstArray, secondArray) {
  var intersect = [];
  intersect = firstArray.filter((arrayElement) => {
    return secondArray.includes(arrayElement);
  });
  return uniqueElements(intersect);
}

var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];
console.log(intersection(firstArray, secondArray));

//product of all the elements in the array other than itself
function product(array) {
  var output = [];
  var temp = 1;
  for (var i = 0; i < array.length; i++) {
    temp = 1;
    for (var j = 0; j < array.length; j++) {
      if (i != j) temp *= array[j];
    }
    output[i] = temp;
  }
}

var array = [2, 2, 4, 1];
console.log(product(array));

// reverse each word in the sentence
function reverseSentence(sentence) {
  var sentence = sentence.split(" ");
  function reverse(word) {
    return word.split("").reverse().join("");
  }
  sentence = sentence.map((word) => reverse(word));
  return sentence;
}

var sentence = "Welcome to this Javascript Guide!";
console.log(reverseSentence(sentence));

//Anagrams

function anagrams(firstWord, secondWord) {
  if (firstWord.length != secondWord.length) return false;
  else {
    word1 = firstWord.toLowerCase().split("").sort().join("");
    word2 = secondWord.toLowerCase().split("").sort().join("");
    if (word1 == word2) return true;
  }
  return false;
}

var firstWord = "Mary";
var secondWord = "Army";

console.log(anagrams(firstWord, secondWord));

//Is palidrome or not

function isPalindrome(word) {
  word = word.replace(/\s/g, "");
  newWord = word.toLowerCase();
  function reverse(newWord) {
    return newWord.split("").reverse().join("");
  }
  if (newWord == reverse(newWord)) return true;
  else return false;
}

console.log(isPalindrome("race Car"));

//isIsomorphic or not

function isIsomorphic(word1, word2) {
  var obj = {};
  for (var i = 0; i < word1.length; i++) {
    if (typeof obj[word1[i]] === "undefined") obj[word1[i]] = word2[i];
    else if (!(obj[word1[i]] == word2[i])) {
      return false;
    }
  }
  console.log(obj);
  return true;
}

console.log(isIsomorphic("egg", "add"));
