// import phonebook from './phonebook.json';

const phonebook = require('./phonebook.json');

// console.log(phonebook);

// sort the phonebook in alphabetical order
const sortAlphabetical = (arr) => {
  let sortedPhonebook = arr.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  // console.log(sortedPhonebook);
  return sortedPhonebook;
}

// console.log(sortAlphabetical(phonebook));
const sorted = sortAlphabetical(phonebook);
// console.log(sorted);

const binarySearch = (arr, target) => {
  let lowerCase = target.toLowerCase();
  let start = 0;
  let stop = arr.length - 1;
  let middle = Math.floor((start + stop) / 2);

  while (arr[middle].name.toLowerCase() !== lowerCase && start < stop) {
    if (lowerCase < arr[middle].name.toLowerCase()) {
      stop = middle - 1;
    }
    else {
      start = middle + 1;
    }

    middle = Math.floor((start + stop) / 2);
  }
  return arr[middle].name.toLowerCase() !== lowerCase ? -1 : arr[middle].id
}

console.log(binarySearch(sorted, 'Lotti'));