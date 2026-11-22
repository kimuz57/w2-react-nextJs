// components/Greeting.tsx
"use client";
import { useState } from "react";
type CardProps = {
  name: string;
};
export default function Greeting({ name }: CardProps) {
  return (
    <div className="p-8">
      <p className="mt-4 text-xl">สวัสดี {name}</p>
    </div>
  );
}
