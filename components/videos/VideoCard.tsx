"use client";

import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";
import { StudentVideo } from "@/data/student-videos";

interface VideoCardProps {
  video: StudentVideo;
  onClick: (video: StudentVideo) => void;
  index?: number;
}

export function VideoCard({ video, onClick, index = 0 }: VideoCardProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative cursor-pointer rounded-[2rem] bg-surface p-4 shadow-sm border border-border transition-all hover:shadow-xl hover:border-brand/50 hover:-translate-y-1"
      onClick={() => onClick(video)}
      whileHover={{ y: -5, scale: 1.01 }}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-[1.5rem] bg-muted">
        <img
          src={thumbnailUrl}
          alt={video.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/90 text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="h-8 w-8 ml-1" />
          </motion.div>
        </div>

        <div className="absolute top-4 left-4 flex items-center gap-3">
          {/* Category Badge */}
          <div className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md border border-white/10 transition-colors group-hover:bg-brand/90 group-hover:border-brand">
            {video.category}
          </div>
        </div>

        {/* Duration */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-md border border-white/10">
          <Clock className="h-3 w-3" />
          {video.duration}
        </div>
      </div>

      <div className="mt-6 px-2 pb-2">
        <h3 className="line-clamp-2 font-display text-2xl text-ink group-hover:text-brand transition-colors">
          {video.title}
        </h3>
        <p className="mt-2 text-sm text-ink-soft font-medium">{video.studentName}</p>
      </div>
    </motion.div>
  );
}
