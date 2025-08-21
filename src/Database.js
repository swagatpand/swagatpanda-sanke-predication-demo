import React from "react";
import SnakeCard from "../components/database/SnakeCard";
import snakes from "../entities/Snake.json";

export default function Database() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Snake Database</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {snakes.map((snake) => (
          <SnakeCard key={snake.id} snake={snake} />
        ))}
      </div>
    </div>
  );
}
