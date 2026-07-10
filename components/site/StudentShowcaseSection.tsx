"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { STUDENT_VIDEOS, StudentVideo } from "@/data/student-videos";
import { VideoCard } from "@/components/videos/VideoCard";
import { VideoModal } from "@/components/videos/VideoModal";
import { HighlightText } from "../ui/HighlightText";

export function StudentShowcaseSection() {
  const [selectedVideo, setSelectedVideo] = useState<StudentVideo | null>(null);

  // Only take the first 3 featured videos
  const featuredVideos = STUDENT_VIDEOS.slice(0, 3);

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 flex flex-col items-center text-center md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink">
              Learn to create <HighlightText>Stunning Visuals</HighlightText> like these and more!
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft md:text-xl">
              Learn to work with efficiency, save time and make money through our Fellowship &
              Masterclasses. Experience some of our Fellows’ creations!
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {featuredVideos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} onClick={setSelectedVideo} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link
            href="/student-creations"
            className="group flex h-14 items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-8 text-base font-semibold text-brand transition-all hover:bg-brand hover:text-white hover:-translate-y-0.5"
          >
            View All Student Videos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
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
