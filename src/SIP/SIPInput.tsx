function SIPInput({ values, onChange }) {
  return (
    <div className="grid gap-4 max-w-md mx-auto p-4">
      <label>
        Currency:
        <select
          name="currency"
          value={values.currency}
          onChange={onChange}
          className="border p-2 w-full"
        >
          <option value="NPR">NPR (रु)</option>
          <option value="INR">INR (₹)</option>
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
          <option value="JPY">JPY (¥)</option>
        </select>
      </label>
      <label>
        Investment Amount:
        <input
          type="number"
          name="amount"
          value={values.amount}
          onChange={onChange}
          className="border p-2 w-full"
        />
      </label>

      <label>
        Interest Rate (% per annum):
        <input
          type="number"
          name="rate"
          value={values.rate}
          onChange={onChange}
          className="border p-2 w-full"
          max="100"
          min="0"
        />
      </label>

      <label>
        Time Period:
        <input
          type="number"
          name="time"
          value={values.time}
          onChange={onChange}
          className="border p-2 w-full"
        />
      </label>

      <label>
        Investment Frequency:
        <select
          name="frequency"
          value={values.frequency}
          onChange={onChange}
          className="border p-2 w-full"
        >
          <option value="monthly">Monthly</option>
          <option value="semiannually">Semi-Annually</option>
          <option value="annually">Annually</option>
        </select>
      </label>
    </div>
  );
}

export default SIPInput;
