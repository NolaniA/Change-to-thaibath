async function logJSONData() {
  const response = await fetch("https://floatrates.com/daily/thb.json");
  const jsonData = await response.json();
  var dropdownData = Object.keys(jsonData);
  var dropdownData2 = Object.values(jsonData);

  console.log(dropdownData);
  console.log(dropdownData2);
  var showDrop = "";

  for (let index in dropdownData) {
    showDrop +=
      '<option value="' +
      dropdownData2[index].inverseRate +
      '">' +
      dropdownData[index] +
      "</option>";
  }
  document.getElementById("currency").innerHTML = showDrop;
}
logJSONData();

const exchangeCoin = () => {
  let currency = document.getElementById("currency").value;
  let amount = document.getElementById("amount").value;

  let sum = amount * currency;
  console.log(sum, amount, currency);
  document.getElementById("pen").innerHTML = sum;
};
