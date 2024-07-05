let name = "";
let height = "";
let weight = "";
let bmi = "";

const nameHandler = () => {
  name = document.getElementById("Name").value;
  console.log(name);
};

const heightHandler = () => {
  height = document.getElementById("Height").value;
  console.log(height);
};

const weightHandler = () => {
  weight = document.getElementById("Weight").value;
  console.log(weight);
};

const calculateBMI = () => {
  const name = document.getElementById("Name").value;
  const height = parseFloat(document.getElementById("Height").value);
  const weight = parseFloat(document.getElementById("Weight").value);

  if (name && height > 0 && weight > 0) {
    const bmi = weight / (height * height);
    const result = document.getElementById("bmi__msg");
    result.innerHTML = `${name}, your BMI is ${bmi.toFixed(2)}`;

    if (bmi.toFixed(2) < 18.5) {
      const result = document.getElementById("result");
      result.innerHTML = "Under Weight";
      result.classList.remove("red");
      result.classList.remove("normal");

      result.classList.add("yellow");
    } else if (bmi.toFixed(2) > 25) {
      const result = document.getElementById("result");
      result.innerHTML = "Over Weight";
      result.classList.remove("yellow");
      result.classList.remove("normal");

      result.classList.add("red");
    } else {
      const result = document.getElementById("result");
      result.innerHTML = "you're Healty";
      result.classList.remove("red");
      result.classList.remove("yellow");

      result.classList.add("normal");
    }
  } else {
    alert("Please enter valid details!");
  }
};

document.getElementById("Name").addEventListener("chnage", nameHandler);
document.getElementById("Height").addEventListener("chnage", heightHandler);
document.getElementById("Weight").addEventListener("chnage", weightHandler);
