"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed right-0 top-0 z-30 flex h-16 items-center justify-end gap-4 border-b border-[#F0F2F5] bg-white px-6">
      <Link
        href="/login"
        className="rounded-lg px-4 py-2 text-sm text-[#333333] transition-colors hover:bg-[#F0F2F5]"
      >
        Entrar
      </Link>
      <Link
        href="/registro"
        className="rounded-lg bg-[#00C853] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#00A843]"
      >
        Registrar
      </Link>
    </header>
  );
}
