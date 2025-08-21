import React from "react";

export default function SnakeCard({ snake }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold">{snake.name}</h2>
      <p className="text-sm text-gray-500">{snake.venomous ? "Venomous" : "Non-Venomous"}</p>
      <p className="mt-2">{snake.description}</p>
    </div>
  );
}
