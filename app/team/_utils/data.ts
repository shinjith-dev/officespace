export type Member = {
  name: string;
  role: string;
  avatar: string;
  status: "In Office" | "On Leave" | "Work From Home";
  projects: string[];
};

export const team: Member[] = [
  {
    name: "Priya Patel",
    role: "Frontend Developer",
    avatar: "https://ui-avatars.com/api/?name=Priya+Patel",
    status: "On Leave",
    projects: ["Website Redesign", "Project X"],
  },
  {
    name: "John Smith",
    role: "Backend Developer",
    avatar: "https://ui-avatars.com/api/?name=John+Smith",
    status: "Work From Home",
    projects: ["Project X", "Mobile App Launch"],
  },
  {
    name: "Aisha Khan",
    role: "QA Engineer",
    avatar: "https://ui-avatars.com/api/?name=Aisha+Khan",
    status: "Work From Home",
    projects: ["Mobile App Launch"],
  },
  {
    name: "Sebastian Ansalam",
    role: "Project Manager",
    avatar: "https://github.com/shinjith-dev.png",
    status: "In Office",
    projects: ["Website Redesign", "Mobile App Launch"],
  },
  {
    name: "Luca D'Angelo",
    role: "DevOps Engineer",
    avatar: "https://ui-avatars.com/api/?name=Luca+D'Angelo",
    status: "In Office",
    projects: ["Project X"],
  },
  {
    name: "Maya K.",
    role: "UI/UX Designer",
    avatar: "https://ui-avatars.com/api/?name=Maya+K",
    status: "On Leave",
    projects: ["Website Redesign"],
  },
  {
    name: "Sofia M.",
    role: "Product Owner",
    avatar: "https://ui-avatars.com/api/?name=Sofia+M",
    status: "Work From Home",
    projects: ["Mobile App Launch", "Website Redesign"],
  },
  {
    name: "Rajesh Kumar",
    role: "Full Stack Developer",
    avatar: "https://ui-avatars.com/api/?name=Rajesh+Kumar",
    status: "In Office",
    projects: ["Project X", "Mobile App Launch"],
  },
];
