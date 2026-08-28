import type { DataType } from "../utils/types.ts";

function YearTable({ list }: { list: DataType[] }) {
  console.log("YearTable", list);

  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item: DataType) => (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default YearTable;
