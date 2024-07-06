const a = document.querySelector(".a");
const b = document.querySelector(".b");
const button = document.querySelector(".sum");
const p = document.querySelector(".result_sum");
let first_Number = 0;
let second_Number = 0;
const storedArgs = {};

const memoisedFunc = (first_Number, second_Number) => {
  let key = `${first_Number}_${second_Number}`;

  if (storedArgs[key] !== undefined) {
    return (p.textContent = `SUM: ${storedArgs[key]} & it is fetched from stored Value`);
  } else {
    const result = first_Number + second_Number;
    storedArgs[key] = result;
    return (p.textContent = `SUM: ${storedArgs[key]} & it is calculated`);
  }
};

a.addEventListener("change", function (e) {
  first_Number = Number(e.target.value);
});

b.addEventListener("change", function (e) {
  second_Number = Number(e.target.value);
});

button.addEventListener("click", function () {
  memoisedFunc(first_Number, second_Number);
});
