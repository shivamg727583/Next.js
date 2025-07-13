'use client'; // ⬅️ This is important to make the component a Client Component

import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ use this in app directory
import React from "react";

function Header() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.querySelector("input");
    const inputValue = input?.value.trim();
    if (inputValue) {
      router.push(`/${inputValue}/profile`);
    }
  };

  return (
    <nav className="w-full mx-auto flex items-center justify-between px-3 h-[60px]">
      <Link href='/'>
        <h1 className="cursor-pointer">Basic App</h1>
      </Link>

      <div className="content flex items-center gap-3">
        <Link className="cursor-pointer" href="/about">About</Link>

        <form onSubmit={handleSubmit} className="flex items-center">
          <label htmlFor="username" className="sr-only">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter User Name.."
            className="border border-gray-300 rounded px-2 py-1"
            aria-label="Enter username"
          />
          <button
            type="submit"
            className="ml-2 px-3 py-1 bg-blue-500 hover:bg-blue-400 cursor-pointer text-white rounded"
          >
            Search Profile
          </button>
        </form>

        <Link className="cursor-pointer" href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Header;
