const apiKey = '388c57a00f43e6320448f8d1'; // Replace with your actual API key
const fromSelect = document.getElementById('from-currency');
const toSelect = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const resultDiv = document.getElementById('result');
const switchBtn = document.getElementById('switch');

async function populateCurrencies() {
  try {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);
    const data = await res.json();
    const codes = data.supported_codes;

    codes.forEach(([code, name]) => {
      const option1 = new Option(`${name} (${code})`, code);
      const option2 = new Option(`${name} (${code})`, code);
      fromSelect.add(option1.cloneNode(true));
      toSelect.add(option2);
    });

    fromSelect.value = 'USD';
    toSelect.value = 'EUR';
  } catch (error) {
    resultDiv.textContent = "Error loading currencies.";
  }
}

async function convertCurrency(e) {
  e.preventDefault();
  const from = fromSelect.value;
  const to = toSelect.value;
  const amount = amountInput.value;

  try {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`);
    const data = await res.json();

    if (data.result === "success") {
      resultDiv.textContent = `${amount} ${from} = ${data.conversion_result} ${to}`;
    } else {
      resultDiv.textContent = "Conversion failed.";
    }
  } catch (err) {
    resultDiv.textContent = "Error during conversion.";
  }
}

document.getElementById('converter-form').addEventListener('submit', convertCurrency);

switchBtn.addEventListener('click', () => {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  convertCurrency(new Event('submit')); // trigger update
});

populateCurrencies();
