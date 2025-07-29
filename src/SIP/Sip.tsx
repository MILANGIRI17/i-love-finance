import { useState, useEffect } from "react";
import SIPInput from "./SIPInput";
import SIPResult from "./SIPResult";

function Sip() {
  const [formValues, setFormValues] = useState({
    amount: 1000,
    rate: 12,
    time: 10,
    frequency: "monthly",
    currency: "NPR",
  });

  const [futureValue, setFutureValue] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Enforce interest rate limit
    if (name === "rate") {
      const numericValue = parseFloat(value);
      if (!isNaN(numericValue)) {
        newValue = Math.min(numericValue, 100);
      }
    }

    setFormValues((prev) => ({
      ...prev,
      [name]: name === "frequency" || name === "currency" ? value : newValue,
    }));
  };

  const calculateSIP = ({ amount, rate, time, frequency }) => {
    if (!amount || !rate || !time) return 0;

    const numericAmount = parseFloat(amount);
    const numericRate = parseFloat(rate);
    const numericTime = parseFloat(time);

    if (isNaN(numericAmount) || isNaN(numericRate) || isNaN(numericTime))
      return 0;

    let n, r;

    switch (frequency) {
      case "monthly":
        n = time * 12;
        r = rate / (12 * 100);
        break;
      case "semiannually":
        n = time * 2;
        r = rate / (2 * 100);
        break;
      case "annually":
        n = time;
        r = rate / 100;
        break;
      default:
        return 0;
    }

    const fv = amount * (((Math.pow(1 + r, n) - 1) * (1 + r)) / r);
    return fv;
  };

  useEffect(() => {
    const fv = calculateSIP(formValues);
    setFutureValue(fv);
  }, [formValues]);

  return (
    <>
      <div className="max-h-full bg-gray-50 p-6">
        <h1 className="text-3xl text-center font-bold mb-6">SIP Calculator</h1>
        <SIPInput values={formValues} onChange={handleChange} />
        <SIPResult futureValue={futureValue} currency={formValues.currency} />
      </div>
    </>
  );
}

export default Sip;
