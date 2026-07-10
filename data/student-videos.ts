export interface StudentVideo {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  duration: string;
  studentName: string;
  views?: string;
}

export const STUDENT_VIDEOS: StudentVideo[] = [
  {
    id: "1",
    youtubeId: "RLUo_yswUg8",
    title: "AI Advertisement Demo",
    category: "Advertisement",
    duration: "0:45",
    studentName: "Alex Mercer",
    views: "12K",
  },
  {
    id: "2",
    youtubeId: "fdGZ1rPV_Gw",
    title: "The Future of AI Film",
    category: "AI Film",
    duration: "1:20",
    studentName: "Sarah Chen",
    views: "8.5K",
  },
  {
    id: "3",
    youtubeId: "XSTSsT63RJQ",
    title: "Product Launch Teaser",
    category: "Product Video",
    duration: "0:30",
    studentName: "Michael Rodriguez",
    views: "15K",
  },
  {
    id: "4",
    youtubeId: "vZ7IvXz0fDw",
    title: "Animated Storytelling",
    category: "Storytelling",
    duration: "2:15",
    studentName: "Emma Watson",
    views: "5K",
  },
  {
    id: "5",
    youtubeId: "9u7vUutZtyE",
    title: "Social Media Promo",
    category: "Social Media",
    duration: "0:15",
    studentName: "David Kim",
    views: "22K",
  },
  {
    id: "6",
    youtubeId: "81TehOmDke0",
    title: "Marketing Campaign",
    category: "Marketing",
    duration: "1:00",
    studentName: "Lisa Johnson",
    views: "9K",
  },
  {
    id: "7",
    youtubeId: "qib2KUTl7Ig",
    title: "AI Tutorial Intro",
    category: "Tutorial",
    duration: "0:55",
    studentName: "James Wilson",
    views: "11K",
  },
  {
    id: "8",
    youtubeId: "srLBir-wIFg",
    title: "Music Video Visualization",
    category: "Music",
    duration: "3:10",
    studentName: "Sophie Martin",
    views: "30K",
  },
  {
    id: "9",
    youtubeId: "NPvGj5ET7vw",
    title: "Educational Short",
    category: "Education",
    duration: "1:45",
    studentName: "Daniel Lee",
    views: "7.2K",
  },
];
