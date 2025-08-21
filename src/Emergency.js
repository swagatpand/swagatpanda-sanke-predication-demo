import React from "react";

export default function Emergency() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-red-600">Emergency Protocols</h1>
      <ul className="list-disc ml-6">
        <li>Call emergency services immediately.</li>
        <li>Keep the victim calm and immobile.</li>
        <li>Do not try to suck venom or cut the wound.</li>
        <li>Transport to the nearest hospital with antivenom.</li>
      </ul>
    </div>
  );
}
