"use client";

import React, { useState } from "react";

interface CodeBlockProps {
  language: string;
  value: string;
}

export function CodeBlock({ language, value }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available in some environments
    }
  };

  return (
    <div className="mt-5 rounded-xl overflow-hidden border border-white/10">
      {/* Barre titre */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.04] border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-2 text-xs text-neutral-500 font-mono">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className={`text-xs font-medium px-3 py-1 rounded-full border transition-all duration-200 ${
            copied
              ? "border-green-400/50 text-green-300 bg-green-400/10"
              : "border-white/20 text-neutral-400 hover:text-white hover:border-white/40"
          }`}
          aria-label="Copy code"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>
      {/* Code */}
      <div className="bg-[#0d0d0d] overflow-x-auto">
        <pre className="p-5 text-sm leading-relaxed font-mono text-neutral-300 whitespace-pre">
          <code>{value}</code>
        </pre>
      </div>
    </div>
  );
}
