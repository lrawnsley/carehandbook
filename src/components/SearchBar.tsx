"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { searchablePages } from "@/data/site";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  onClose?: () => void;
}

export default function SearchBar({ onClose }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof searchablePages>([]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const filtered = searchablePages.filter(
      (page) =>
        page.title.toLowerCase().includes(q) ||
        page.section.toLowerCase().includes(q) ||
        page.keywords.toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query]);

  // Close dropdown on outside click/tap
  useEffect(() => {
    function handleOutside(e: Event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, []);

  const handleSelect = useCallback(
    (href: string) => {
      setQuery("");
      setResults([]);
      setIsFocused(false);
      onClose?.();
      router.push(href);
    },
    [onClose, router]
  );

  const showDropdown = isFocused && query.trim().length >= 2;

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Search CQC, templates, medication..."
          className="w-full px-4 py-3 pl-10 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-base min-h-[44px]"
          aria-label="Search CareKit"
          aria-autocomplete="list"
          aria-expanded={showDropdown}
          role="combobox"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-white/50"
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
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setResults([]);
              inputRef.current?.focus();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center text-white/50 hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>

      {showDropdown && (
        <div
          className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-[60] max-h-[70vh] overflow-y-auto -webkit-overflow-scrolling-touch"
          role="listbox"
        >
          {results.length > 0 ? (
            results.map((result) => (
              <Link
                key={result.href}
                href={result.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect(result.href);
                }}
                className="block px-4 py-3 hover:bg-primary-light transition-colors no-underline min-h-[44px] flex items-center"
                role="option"
                aria-selected={false}
              >
                <span className="text-xs font-medium text-primary uppercase tracking-wide">
                  {result.section}
                </span>
                <span className="block text-sm text-foreground font-medium mt-0.5">
                  {result.title}
                </span>
              </Link>
            ))
          ) : (
            <div className="px-4 py-3">
              <p className="text-sm text-muted">
                No results found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-muted/70 mt-1">
                Try searching for CQC, handover, medication, template...
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}