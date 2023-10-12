"use client";
import React from "react";
import useStore from "../../lib/store"; // Import your Zustand store
import Link from "next/link";

const Page2: React.FC = () => {
  const { data } = useStore();

  return (
    <div>
      <h1>Data from Page 1:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Link href="/thd">Go to Page 3</Link>
    </div>
  );
};

export default Page2;
