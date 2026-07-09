import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { STUDENT_VIDEOS, StudentVideo } from "@/data/student-videos";
import { SearchBar } from "@/components/videos/SearchBar";
import { VideoFilters } from "@/components/videos/VideoFilters";
import { VideoGrid } from "@/components/videos/VideoGrid";
import { VideoModal } from "@/components/videos/VideoModal";
import { GalleryCTA } from "@/components/videos/GalleryCTA";

export const Route = createFileRoute("/student-creations")({
  component: StudentCreationsPage,
});

function StudentCreationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<StudentVideo | null>(null);

  // Extract unique categories from data
  const categories = useMemo(() => {
    const cats = new Set(STUDENT_VIDEOS.map((v) => v.category));
    return Array.from(cats).sort();
  }, []);

  // Filter videos based on search and category
  const filteredVideos = useMemo(() => {
    return STUDENT_VIDEOS.filter((video) => {
      const matchesSearch = 
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === "All" || video.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Nav />
      
      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
            <div className="h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-[100px]" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 font-display text-5xl md:text-6xl lg:text-7xl text-ink"
            >
              Explore Student <br className="hidden md:block" />
              <span className="text-brand">AI Video Creations</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mb-12 max-w-2xl text-lg text-ink-soft md:text-xl"
            >
              Discover inspiring AI-generated videos created by our students after completing the program.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <VideoFilters 
              categories={categories} 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
          </motion.div>
          
          <VideoGrid 
            videos={filteredVideos} 
            onVideoClick={setSelectedVideo} 
          />
        </section>
        
        <GalleryCTA />
      </main>
      
      <Footer />

      <VideoModal 
        video={selectedVideo} 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
      />
    </div>
  );
}
