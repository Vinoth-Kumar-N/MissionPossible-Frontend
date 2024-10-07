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
    <div className="w-[100%] h-[20%] flex flex-col justify-center items-center ">
    <div className="flex flex-wrap flex-col justify-center border rounded-2xl p-5 shadow-md">
      <div className="text-xl">
        <label>Amount:</label>
        <input className="rounded-lg border border-blue-500"
          type="number"
          id="amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
      </div>

      <div className="text-xl">
        <label>From:</label>
        <select className="rounded-lg"
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
        <select className="rounded-lg"
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
      <button className="flex justify-center items-center border rounded-2xl bg-blue-500 text-white hover:bg-white hover:text-blue-500" onClick={() => calculateOutput()}>
        Calculate
      </button>
    </div>
    </div>
    </>
  )
}

export default Currency