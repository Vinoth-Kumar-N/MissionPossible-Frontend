import React, { useState, useEffect } from "react";

const Currency = () => {
  const [rates, setRates] = useState();
  const [ratesFetched, setRatesFetched] = useState(false);
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [output, setOutput] = useState();

  const getRates = async () => {
    // fetch the data from API
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/59d560835c4e8d4f996adc83/latest/USD"
    ).then((response) => response.json());

    // save the rates in the state
    if (response.result === "success") {
      setRates(response.conversion_rates);
      setRatesFetched(true);
    }
  };

  useEffect(() => {
    getRates();
  }, []);

  const calculateOutput = async () => {
    // fetch the selected from currency rates
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/59d560835c4e8d4f996adc83/latest/${fromCurrency}`
    ).then((response) => response.json());
    const fetchedRates = response.conversion_rates;
    const CurrencyRate = fetchedRates[toCurrency];
    const output = amount * CurrencyRate;
    setOutput(output);
  };
  return (
    <>
      <div className="w-[50%] h-full flex justify-start">
        <div className="w-[50%] h-[20%] flex flex-col">
          <div className="flex flex-wrap flex-col border rounded-2xl p-5 shadow-md gap-2">
            <div className="text-xl flex flex-col gap-2 justify-center">
              <p>want to convert currency?</p>
              <label>Amount:</label>
              <input
                className="rounded-lg border border-blue-500 w-[80%]"
                type="number"
                id="amount"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
            </div>

            <div className="text-xl">
              <label>From:</label>
              <select
                className="rounded-lg"
                id="from"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                {ratesFetched ? (
                  Object.keys(rates).map((currency, index) => (
                    <option key={index} value={currency}>
                      {currency}
                    </option>
                  ))
                ) : (
                  <option defaultValue>USD</option>
                )}
              </select>
            </div>

            <div className="text-xl">
              <label>To:</label>
              <select
                className="rounded-lg"
                id="to"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                {ratesFetched ? (
                  Object.keys(rates).map((currency, index) => (
                    <option key={index} value={currency}>
                      {currency}
                    </option>
                  ))
                ) : (
                  <option defaultValue>EUR</option>
                )}
              </select>
            </div>
            <div className="">
              <label>{output}</label>
            </div>
            <div className="w-full flex justify-center">
              <button
                className="w-[20%] h-10 flex justify-center items-center border rounded-md bg-blue-500 text-white hover:bg-blue-600"
                onClick={() => calculateOutput()}
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Currency;
