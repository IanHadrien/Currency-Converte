const fieldValue = document.querySelector('.ValorConverter');

const optionTo = document.querySelector('#De');
const optionFrom = document.querySelector('#Para');

const buttonCalculete = document.querySelector('.calcular');
const result = document.querySelector('.result');
const result2 = document.querySelector('.result2');
const result3 = document.querySelector('.result3');

function calculate() {
    const To = optionTo.value;
    const From = optionFrom.value;

    fetch(`https://v6.exchangerate-api.com/v6/f80935cac5acc345dbf4593b/latest/${To}`)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      const rate = data.conversion_rates[From];

      result2.innerText = `1 ${To} = ${(rate).toFixed(3)} ${From}`;
      let resultConvert = (fieldValue.value * rate).toFixed(2);
      result.innerText = `${fieldValue.value} ${To} = ${resultConvert} ${From}`;
    });

    fetch(`https://v6.exchangerate-api.com/v6/f80935cac5acc345dbf4593b/latest/${From}`)
    .then((res) => res.json())
    .then((data) => {
      const rate2 = (data.conversion_rates[To]).toFixed(3);

      result3.innerText = `1 ${From} = ${rate2} ${To}`;
    });
}

buttonCalculete.addEventListener('click', calculate);