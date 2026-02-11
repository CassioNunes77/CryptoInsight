"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Dashboard", icon: "📊" },
  { href: "/ativos", label: "Ativos", icon: "🪙" },
  { href: "/alertas", label: "Alertas", icon: "🔔" },
  { href: "/assinatura", label: "Premium", icon: "⭐" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-56 bg-[#1A2C5B] text-white">
      <div className="flex h-full flex-col p-4">
        <Link href="/" className="mb-8 text-xl font-bold">
          CryptoInsight
        </Link>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                  isActive 
                    ? "bg-[#2196F3] text-white" 
                    : "hover:bg-white/10"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
