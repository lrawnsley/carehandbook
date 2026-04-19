"use client";

import { useState, useEffect, useRef } from "react";
import { searchablePages } from "@/data/site";
import Link from "next/link";

interface SearchBarProps {
  onClose?: () => void;
}

export default function SearchBar({ onClose }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof searchablePages>([]);
  const inputRef = useRef<HTMLInputElement>(null);

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

  return (
    <div className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search CQC, templates, medication..."
          className="w-full px-4 py-2 pl-10 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm"
          aria-label="Search CareKit"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 max-h-96 overflow-y-auto">
          {results.map((result) => (
            <Link
              key={result.href}
              href={result.href}
              onClick={() => {
                setQuery("");
                setResults([]);
                onClose?.();
              }}
              className="block px-4 py-3 hover:bg-primary-light transition-colors no-underline"
            >
              <span className="text-xs font-medium text-primary uppercase tracking-wide">
                {result.section}
              </span>
              <p className="text-sm text-foreground font-medium mt-0.5">
                {result.title}
              </p>
            </Link>
          ))}
        </div>
      )}

      {query.trim().length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50">
          <p className="text-sm text-muted">No results found for &ldquo;{query}&rdquo;</p>
        </div>
      )}
    </div>
  );
}