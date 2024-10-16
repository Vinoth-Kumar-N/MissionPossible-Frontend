import React, { useState, useEffect } from "react";

const Currency = () => {
  const [rates, setRates] = useState();
  const [ratesFetched, setRatesFetched] = useState(false);
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [output, setOutput] = useState();

  const getRates = async () => {
    const url = import.meta.env.CURRENCY_API;
    const response = await fetch(url).then((response) => response.json());
    // Save the rates in the state
    if (response.result === "success") {
      setRates(response.conversion_rates);
      setRatesFetched(true);
    }
  };

  useEffect(() => {
    getRates();
  }, []);

  const calculateOutput = async () => {
    // Fetch the selected from currency rates
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/59d560835c4e8d4f996adc83/latest/${fromCurrency}`
    ).then((response) => response.json());
    const fetchedRates = response.conversion_rates;
    const CurrencyRate = fetchedRates[toCurrency];
    const output = amount * CurrencyRate;
    setOutput(output.toFixed(2)); // Set output with 2 decimal places
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-center mb-6">
          Currency Converter
        </h1>

        <div className="space-y-6">
          {/* Amount Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="amount" className="text-lg font-semibold">
              Amount:
            </label>
            <input
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              type="number"
              id="amount"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              placeholder="Enter amount"
            />
          </div>

          {/* From Currency Selector */}
          <div className="flex flex-col gap-2">
            <label htmlFor="from" className="text-lg font-semibold">
              From:
            </label>
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
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

          {/* To Currency Selector */}
          <div className="flex flex-col gap-2">
            <label htmlFor="to" className="text-lg font-semibold">
              To:
            </label>
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
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

          {/* Conversion Result */}
          <div className="bg-blue-100 rounded-lg p-4 text-center text-lg">
            {output
              ? `Converted Amount: ${output} ${toCurrency}`
              : "Converted amount will appear here."}
          </div>

          {/* Calculate Button */}
          <div className="flex justify-center">
            <button
              className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
              onClick={() => calculateOutput()}
            >
              Convert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;
