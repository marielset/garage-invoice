import { getTaxAmount, getTotal } from "@/app/services/listing";
import { useState } from "react";

const PriceTable = ({
  price,
  quantity,
}: {
  price: number;
  quantity: number;
}) => {
  const [taxRate, setTaxRate] = useState(0);
  return (
    <div className="flex flex-col items-end">
      <div className={`flex flex-col w-full items-end`}>
        <table className="w-1/3 mt-4">
          <tbody>
            <tr>
              <td>
                <strong>Subtotal:</strong>
              </td>
              <td>${(price * quantity).toLocaleString()}</td>
            </tr>
            <tr>
              <td>
                <strong>
                  Tax{" "}
                  <input
                    id="tax-rate"
                    type="number"
                    step="0.05"
                    min={0}
                    value={taxRate}
                    onChange={(e) => setTaxRate(parseFloat(e.target.value))}
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                  %:
                </strong>
              </td>
              <td>
                ${getTaxAmount(price * quantity, taxRate).toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="pt-8 px-4 text-base font-semibold text-xl">
        Total: ${getTotal(price * quantity, taxRate).toLocaleString()}
      </p>
    </div>
  );
};

export default PriceTable;
