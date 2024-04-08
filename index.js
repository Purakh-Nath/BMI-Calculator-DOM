const form = document.querySelector("form");

form.addEventListener("submit", function (eve) {
  eve.preventDefault();
  const height = parseFloat(document.querySelector("#height").value);

  const weight = parseFloat(document.querySelector("#weight").value);

  const result = document.querySelector("#results");

  result.style.color = "pink";
  result.style.fontFamily = "Mulish";

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please Give a valid Height ${height}`;
  }
   else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please Give a valid Weight ${weight}`;
  }
   else {
    //const bmi = `BMI = ${(weight/((height*height)/10000)).toFixed(2)}`
   const bmi = (weight/((height*height)/10000)).toFixed(2)

    //const bmi = weight / (height * height);
    //const bmi = weight/(height*height)*703
    //    console.log(bmi);
    result.style.margin = "25px";
    result.innerHTML = `<span>${bmi}</span>`;
    //`<span>${bmi}</span>`

    if (bmi < 18.6) {
      result.innerHTML = `BMI =  ${bmi} , Under Weight`;
    }
    if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = `BMI =  ${bmi} , Normal Weight`;
    }

    if (bmi > 24.9) {
      result.innerHTML = `BMI =  ${bmi} , Overweight`;
    }
  }
});
