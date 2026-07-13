import { Search, X } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative flex items-center">
        <Search className="absolute left-4 h-5 w-5 text-ink-soft" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by title, student, or category..."
          className="w-full rounded-full border border-border bg-surface py-3 pl-12 pr-10 text-sm outline-none transition-all focus:border-brand focus:ring-1 focus:ring-brand/50"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-4 text-ink-soft hover:text-ink transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
