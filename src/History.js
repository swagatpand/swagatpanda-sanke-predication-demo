import React from "react";
import history from "../entities/Classification.json";

export default function History() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Classification History</h1>
      <table className="table-auto border w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Species</th>
            <th className="border px-4 py-2">Confidence</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{entry.date}</td>
              <td className="border px-4 py-2">{entry.species}</td>
              <td className="border px-4 py-2">{entry.confidence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
