"use client";

import { useState } from "react";

const navItems = [
  { label: "about", href: "/#about" },
  { label: "experience", href: "/#experience" },
  { label: "skills", href: "/#skills" },
  { label: "projects", href: "/#projects" },
  { label: "resume", href: "/resume" },
  { label: "contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="font-mono text-sm font-bold text-highlight">
          ~/matt.raykowski
        </a>

        {/* Desktop nav */}
        <ul className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-sm text-text-muted transition-colors hover:text-highlight"
              >
                .{item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile nav */}
      {menuOpen && (
        <ul className="border-t border-border px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 font-mono text-sm text-text-muted transition-colors hover:text-highlight"
              >
                .{item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
