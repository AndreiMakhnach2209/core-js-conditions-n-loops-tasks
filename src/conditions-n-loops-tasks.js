/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) return a;
  if (b > c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;
  for (let i = 1; i < 8; i += 1)
    if (
      (queen.x + i === king.x && queen.y + i === king.y) ||
      (queen.x - i === king.x && queen.y - i === king.y) ||
      (queen.x - i === king.x && queen.y + i === king.y) ||
      (queen.x + i === king.x && queen.y - i === king.y)
    )
      return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return (a === b || b === c || a === c) && a + b > c && a + c > b && b + c > a;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNums = [
    'X',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
  ];
  let dozens = '';
  for (let i = 1; i <= Math.floor(num / 10); i += 1) dozens += romanNums[0];
  const units = num % 10;
  if (units) return dozens + romanNums[units];
  return dozens;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';
  let digit = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        digit = 'zero';
        break;
      case '1':
        digit = 'one';
        break;
      case '2':
        digit = 'two';
        break;
      case '3':
        digit = 'three';
        break;
      case '4':
        digit = 'four';
        break;
      case '5':
        digit = 'five';
        break;
      case '6':
        digit = 'six';
        break;
      case '7':
        digit = 'seven';
        break;
      case '8':
        digit = 'eight';
        break;
      case '9':
        digit = 'nine';
        break;
      case ',':
      case '.':
        digit = 'point';
        break;
      case '-':
        digit = 'minus';
        break;
      default:
        break;
    }
    if (res === '') res = digit;
    else res = `${res} ${digit}`;
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let rev = '';
  for (let i = 0; i < str.length; i += 1) {
    rev = str[i] + rev;
  }
  return rev === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (letter === str[i]) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let n = num;
  while (n > 0) {
    if (n % 10 === digit) return true;
    n = Math.trunc(n / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i += 1) {
    let sumLeft = 0;
    for (let j = 0; j < i; j += 1) sumLeft += arr[j];
    if (sumLeft === sum - arr[i] - sumLeft) return i;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const res = [];
  for (let i = 0; i < size; i += 1) {
    const resItem = [];
    for (let j = 0; j < size; j += 1) {
      resItem[j] = null;
    }
    res[i] = resItem;
  }
  let n = 1;
  let i = 0;
  let j = 0;
  while (n <= size ** 2) {
    while (j < size && res[i][j] === null) {
      res[i][j] = n;
      j += 1;
      n += 1;
    }
    j -= 1;
    i += 1;
    while (i < size && res[i][j] === null) {
      res[i][j] = n;
      i += 1;
      n += 1;
    }
    i -= 1;
    j -= 1;
    while (j >= 0 && res[i][j] === null) {
      res[i][j] = n;
      j -= 1;
      n += 1;
    }
    j += 1;
    i -= 1;
    while (i >= 0 && res[i][j] === null) {
      res[i][j] = n;
      i -= 1;
      n += 1;
    }
    i += 1;
    j += 1;
  }
  return res;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const n = matrix.length;
  const res = matrix;
  const tempMatrix = [];
  for (let i = 0; i < n; i += 1) {
    tempMatrix[i] = [];
    for (let j = 0; j < n; j += 1) {
      tempMatrix[i][j] = matrix[n - j - 1][i];
    }
  }
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      res[i][j] = tempMatrix[i][j];
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function mergeArrs(arr1, arr2) {
  let i = 0;
  let j = 0;
  const resArr = [];
  while (arr1.length > i && arr2.length > j) {
    if (arr1[i] > arr2[j]) {
      resArr[resArr.length] = arr2[j];
      j += 1;
    } else {
      resArr[resArr.length] = arr1[i];
      i += 1;
    }
  }
  if (i < arr1.length)
    for (let k = i; k < arr1.length; k += 1) resArr[resArr.length] = arr1[k];
  else for (let k = j; k < arr2.length; k += 1) resArr[resArr.length] = arr2[k];
  return resArr;
}

function sortArr(arr) {
  if (arr.length < 2) return arr;
  const halfLength = Math.trunc(arr.length / 2);
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i <= arr.length / 2 - 1; i += 1) {
    leftArr[i] = arr[i];
    rightArr[halfLength - 1 - i] = arr[arr.length - 1 - i];
  }
  if (arr.length % 2) leftArr[leftArr.length] = arr[halfLength];
  return mergeArrs(sortArr(leftArr), sortArr(rightArr));
}

function sortByAsc(arr) {
  const res = arr;
  const sortedArr = sortArr(arr);
  for (let i = 0; i < res.length; i += 1) res[i] = sortedArr[i];
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function oneShuffle(str) {
  let strLeft = '';
  let strRight = '';
  for (let i = 0; i < str.length; i += 1)
    if (i % 2) strRight += str[i];
    else strLeft += str[i];
  return strLeft + strRight;
}

function shuffleChar(str, iterations) {
  let res = str;
  let count = 0;
  do {
    res = oneShuffle(res);
    count += 1;
    if (count === iterations) return res;
  } while (res !== str);
  for (let i = 0; i < iterations % count; i += 1) res = oneShuffle(res);
  return res;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */

function replaceDigit(i, j, number) {
  const digit = Math.trunc(number / 10 ** j) % 10;
  const num =
    Math.trunc(number / 10 ** j) * 10 ** (j - 1) -
    digit * 10 ** (j - 1) +
    Math.round(number % 10 ** j);
  return (
    Math.trunc(num / 10 ** i) * 10 ** (i + 1) +
    digit * 10 ** i +
    Math.round(num % 10 ** i)
  );
}

function getBigger(number, controlValue) {
  const length = Math.floor(Math.log10(number)) + 1;
  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length; j += 1) {
      const res = replaceDigit(i, j, number);
      if ((res < number || controlValue === number) && res > controlValue)
        return getBigger(res, controlValue);
    }
  }
  return number;
}

function getNearestBigger(number) {
  return getBigger(number, number);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
