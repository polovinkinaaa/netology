import type { DataType } from "../utils/types.ts";

function MonthTable({ list }: { list: DataType[] }) {
  console.log("MonthTable", list);

  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item: DataType) => (
            <tr key={item.month}>
              <td>{item.month}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MonthTable;
