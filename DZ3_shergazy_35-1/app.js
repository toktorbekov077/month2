const tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
const tagCounts = {};
tags.forEach(tag => {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
});
console.log(tagCounts);

const array1 = [1,2,3,45,32,56,61,23,12,2,34,5,6,3,76,67,87,76];
const array2 = [1,45,32,3,4,2,56,76,67,87,89,8,56,54];
const commonElements = array1.filter(item => array2.includes(item));
console.log(commonElements);