import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav className="w-full mx-auto flex items-center justify-between px-3 h-[60px]">
      <Link href='/' >
      <h1 className="cursor-pointer">
        Basic App
          </h1>
        </Link>
    

      <div className="content flex items-center gap-3">
        <Link className="cursor-pointer" href="/about">About</Link>
        <Link className="cursor-pointer" href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Header;
