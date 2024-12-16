'use strict';

// write code here
const getList = document.querySelectorAll('li');
const arr = Array.from(getList);

function sortList(list) {
  const sorted = list.sort((a, b) => {
    const salaryA = parseFloat(
      a.getAttribute('data-salary').replace(/[^0-9.-]+/g, ''),
    );
    const salaryB = parseFloat(
      b.getAttribute('data-salary').replace(/[^0-9.-]+/g, ''),
    );

    return salaryA - salaryB;
  });
  const removeUl = document.querySelector('ul');

  removeUl.innerHTML = '';
  sorted.forEach((item) => removeUl.prepend(item));

  return sorted;
}

sortList(arr);
