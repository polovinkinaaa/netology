import type { DataType } from "../utils/types.ts";

function SortTable({ list }: { list: DataType[] }) {
  console.log("SortTable", list);

  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item: DataType, index) => (
            <tr key={`${item.date}-${index}`}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SortTable;
