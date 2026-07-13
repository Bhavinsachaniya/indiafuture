import { StudentVideo } from "@/data/student-videos";
import { VideoCard } from "./VideoCard";

interface VideoGridProps {
  videos: StudentVideo[];
  onVideoClick: (video: StudentVideo) => void;
}

export function VideoGrid({ videos, onVideoClick }: VideoGridProps) {
  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="rounded-full bg-secondary/50 p-6 mb-4">
          <svg
            className="h-10 w-10 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
            />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-ink">No videos found</h3>
        <p className="mt-2 text-ink-soft max-w-sm">
          We couldn't find any student videos matching your current filters. Try adjusting your
          search or category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {videos.map((video, index) => (
        <VideoCard key={video.id} video={video} index={index} onClick={onVideoClick} />
      ))}
    </div>
  );
}
