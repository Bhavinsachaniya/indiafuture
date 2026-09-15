"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { STUDENT_VIDEOS, StudentVideo } from "@/data/student-videos";
import { VideoCard } from "@/components/videos/VideoCard";
import { VideoModal } from "@/components/videos/VideoModal";
import { HighlightText } from "../ui/HighlightText";
import { fadeUpVariant, staggerContainerVariant, defaultViewport, springSoft } from "@/lib/motion";

export function ProjectShowcaseSection() {
  const [selectedVideo, setSelectedVideo] = useState<StudentVideo | null>(null);
  const featuredVideos = STUDENT_VIDEOS.slice(0, 3);

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-background">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-soft/40 blur-3xl"
        animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="mb-16 flex flex-col items-center text-center md:mb-24"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.h2
            variants={fadeUpVariant}
            className="font-display font-medium text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.12] tracking-[-0.02em] text-ink"
          >
            Learn to create <HighlightText>Stunning Visuals</HighlightText> like these and more!
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="mx-auto mt-6 max-w-3xl text-lg text-ink-soft leading-[1.7] tracking-[-0.01em] px-4"
          >
            Learn to work with efficiency, save time and make money through our Fellowship &
            Masterclasses. Experience some of our Fellows’ creations!
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {featuredVideos.map((video, index) => (
            <motion.div key={video.id} variants={fadeUpVariant}>
              <VideoCard video={video} index={index} onClick={setSelectedVideo} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={springSoft}
          >
            <Link
              href="/student-creations"
              className="group flex h-14 items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-8 text-base font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              View All Student Videos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <VideoModal
        video={selectedVideo}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
}
