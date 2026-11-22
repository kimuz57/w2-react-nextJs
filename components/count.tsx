// components/Counter.tsx
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4 p-8">
      <button
        onClick={() => setCount(count - 1)}
        className="rounded bg-red-500 px-4 py-2"
      >
        -
      </button>
      <p className="text-3xl font-bold">{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        +
      </button>
    </div>
  );
}
