function SIPResult({ futureValue, currency }) {
  const displayCurrency = currency === "NPR" ? "INR" : currency;
  
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: displayCurrency,
    maximumFractionDigits: 2,
  });
  let result = formatter.format(futureValue);
  if (currency === "NPR") result = result.replace("₹", "रु");
  return (
    <div className="text-center p-4">
      <h2 className="text-xl font-semibold">Estimated Future Value:</h2>
      <p className="text-2xl text-green-600 font-bold mt-2">
        {result}
      </p>
    </div>
  );
}

export default SIPResult;
