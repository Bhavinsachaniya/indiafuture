import { motion } from "framer-motion";

interface VideoFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function VideoFilters({ categories, activeCategory, onCategoryChange }: VideoFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 py-6">
      <button
        onClick={() => onCategoryChange("All")}
        className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
          activeCategory === "All"
            ? "text-white"
            : "bg-surface text-ink-soft hover:bg-surface/80 hover:text-ink"
        }`}
      >
        {activeCategory === "All" && (
          <motion.div
            layoutId="activeFilter"
            className="absolute inset-0 rounded-full bg-brand"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">All Videos</span>
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? "text-white"
              : "bg-surface text-ink-soft hover:bg-surface/80 hover:text-ink"
          }`}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 rounded-full bg-brand"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
}
