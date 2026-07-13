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
    title: "Gandhi's 7 sin",
    category: "cohort 2",
    duration: "0:37",
    studentName: "Anil Kumar",
  },
  {
    id: "2",
    youtubeId: "fdGZ1rPV_Gw",
    title: "Balaghat from Dipsikha's eyes ",
    category: "cohort 2",
    duration: "1:29",
    studentName: "Dipsikha Das ",
  },
  {
    id: "3",
    youtubeId: "XSTSsT63RJQ",
    title: "Mango Melt Ice Cream - Ad ",
    category: "cohort 2",
    duration: "0:09",
    studentName: "Tejashree",
  },
  {
    id: "4",
    youtubeId: "vZ7IvXz0fDw",
    title: "Vridhi Financial Advisory",
    category: "cohort 2",
    duration: "0:10",
    studentName: "Saurabh",
  },
  {
    id: "5",
    youtubeId: "9u7vUutZtyE",
    title: "Jharkhand's Special Mushroom ",
    category: "cohort 2",
    duration: "1:08",
    studentName: "Kavya Ekka",
    views: "22K",
  },
  {
    id: "6",
    youtubeId: "81TehOmDke0",
    title: "Vizag city story ",
    category: "cohort 2",
    duration: "0:14",
    studentName: "Suhasini Lanka",
  },
  {
    id: "7",
    youtubeId: "qib2KUTl7Ig",
    title: "Story of Brigadier Md. Usman ",
    category: "cohort 2",
    duration: "0:22",
    studentName: "Rahul",
  },
  {
    id: "8",
    youtubeId: "srLBir-wIFg",
    title: "Football - dream story ",
    category: "cohort 2",
    duration: "1:47",
    studentName: "Suyash Singh",
  },
  {
    id: "9",
    youtubeId: "NPvGj5ET7vw",
    title: "Maggi - childhood nostalgia ",
    category: "cohort 2",
    duration: "0:10",
    studentName: "Diya Lalwani ",
  },
];
