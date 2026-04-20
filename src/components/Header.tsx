"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

const navItems = [
  { href: "/cqc-regulations", label: "CQC Regulations" },
  { href: "/handover-templates", label: "Handover Templates" },
  { href: "/templates", label: "Care Templates" },
  { href: "/medication-guidance", label: "Medication Guidance" },
  { href: "/employee-responsibilities", label: "Employee Responsibilities" },
  { href: "/staff-resources", label: "Staff Resources" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change (clicking a link)
  // Close menus when clicking/tapping outside
  useEffect(() => {
    function handleOutside(e: Event) {
      const target = e.target as Node;
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setMobileMenuOpen(false);
      }
      if (
        searchOpen &&
        searchRef.current &&
        !searchRef.current.contains(target)
      ) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [mobileMenuOpen, searchOpen]);

  // Close menus on Escape key
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setSearchOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close search when mobile menu opens, and vice versa
  const toggleMenu = () => {
    setSearchOpen(false);
    setMobileMenuOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setMobileMenuOpen(false);
    setSearchOpen((prev) => !prev);
  };

  return (
    <header className="no-print sticky top-0 z-50 bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white no-underline hover:opacity-90 transition-opacity shrink-0"
            onClick={() => {
              setMobileMenuOpen(false);
              setSearchOpen(false);
            }}
          >
            <span className="text-2xl" role="img" aria-label="CareKit cross symbol">
              ⚕️
            </span>
            <span className="text-xl font-bold tracking-tight">CareKit</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-white/90 hover:text-white hover:bg-primary-dark transition-colors no-underline"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleSearch}
              className="ml-2 p-2 rounded-md text-white/90 hover:text-white hover:bg-primary-dark transition-colors"
              aria-label="Open search"
              aria-expanded={searchOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </nav>

          {/* Mobile buttons */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleSearch}
              className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-white/90 hover:text-white hover:bg-primary-dark transition-colors"
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              onClick={toggleMenu}
              className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-white/90 hover:text-white hover:bg-primary-dark transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Search bar (shown on both mobile and desktop when toggled) */}
        {searchOpen && (
          <div className="pb-3" ref={searchRef}>
            <SearchBar onClose={() => setSearchOpen(false)} />
          </div>
        )}
      </div>

      {/* Mobile menu — full height overlay with scroll */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-primary z-40 overflow-y-auto -webkit-overflow-scrolling-touch"
        >
          <nav className="px-4 py-3" aria-label="Mobile navigation">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-md text-base font-medium text-white/90 hover:text-white hover:bg-primary-dark transition-colors no-underline min-h-[44px] flex items-center"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}