export type Task = {
  id: string;
  title: string;
  status: "To Do" | "In Progress" | "Review" | "Done";
  assignee: { name: string; avatar: string; fallback: string };
  project: string;
  due: string;
};

export const tasks: Task[] = [
  {
    id: "T-101",
    title: "Design login page",
    status: "In Progress",
    assignee: {
      name: "Priya Patel",
      avatar: "https://ui-avatars.com/api/?name=Priya+Patel",
      fallback: "PP",
    },
    project: "Website Redesign",
    due: "2025-07-28",
  },
  {
    id: "T-102",
    title: "API integration for dashboard",
    status: "To Do",
    assignee: {
      name: "John Smith",
      avatar: "https://ui-avatars.com/api/?name=John+Smith",
      fallback: "JS",
    },
    project: "Project X",
    due: "2025-07-30",
  },
  {
    id: "T-103",
    title: "Write onboarding docs",
    status: "Review",
    assignee: {
      name: "Aisha Khan",
      avatar: "https://ui-avatars.com/api/?name=Aisha+Khan",
      fallback: "AK",
    },
    project: "Mobile App Launch",
    due: "2025-07-29",
  },
  {
    id: "T-104",
    title: "Fix mobile nav bug",
    status: "Done",
    assignee: {
      name: "Sebastian Ansalam",
      avatar: "https://github.com/shinjith-dev.png",
      fallback: "SA",
    },
    project: "Website Redesign",
    due: "2025-07-25",
  },
  {
    id: "T-105",
    title: "Update user profile API",
    status: "To Do",
    assignee: {
      name: "Priya Patel",
      avatar: "https://ui-avatars.com/api/?name=Priya+Patel",
      fallback: "PP",
    },
    project: "Project X",
    due: "2025-08-01",
  },
  {
    id: "T-106",
    title: "QA testing for mobile app",
    status: "In Progress",
    assignee: {
      name: "Aisha Khan",
      avatar: "https://ui-avatars.com/api/?name=Aisha+Khan",
      fallback: "AK",
    },
    project: "Mobile App Launch",
    due: "2025-08-02",
  },
  {
    id: "T-107",
    title: "Prepare Diwali campaign",
    status: "Review",
    assignee: {
      name: "John Smith",
      avatar: "https://ui-avatars.com/api/?name=John+Smith",
      fallback: "JS",
    },
    project: "Website Redesign",
    due: "2025-08-05",
  },
  {
    id: "T-108",
    title: "Client feedback implementation",
    status: "Done",
    assignee: {
      name: "Sebastian Ansalam",
      avatar: "https://github.com/shinjith-dev.png",
      fallback: "SA",
    },
    project: "Project X",
    due: "2025-07-27",
  },
  {
    id: "T-109",
    title: "Set up push notifications",
    status: "To Do",
    assignee: {
      name: "Aisha Khan",
      avatar: "https://ui-avatars.com/api/?name=Aisha+Khan",
      fallback: "AK",
    },
    project: "Mobile App Launch",
    due: "2025-08-03",
  },
  {
    id: "T-110",
    title: "Refactor CSS for homepage",
    status: "In Progress",
    assignee: {
      name: "Priya Patel",
      avatar: "https://ui-avatars.com/api/?name=Priya+Patel",
      fallback: "PP",
    },
    project: "Website Redesign",
    due: "2025-08-04",
  },
  {
    id: "T-111",
    title: "Create onboarding checklist",
    status: "To Do",
    assignee: {
      name: "Aisha Khan",
      avatar: "https://ui-avatars.com/api/?name=Aisha+Khan",
      fallback: "AK",
    },
    project: "Mobile App Launch",
    due: "2025-08-10",
  },
  {
    id: "T-112",
    title: "Implement dark mode",
    status: "To Do",
    assignee: {
      name: "John Smith",
      avatar: "https://ui-avatars.com/api/?name=John+Smith",
      fallback: "JS",
    },
    project: "Website Redesign",
    due: "2025-08-12",
  },
  {
    id: "T-113",
    title: "Review API documentation",
    status: "Review",
    assignee: {
      name: "Priya Patel",
      avatar: "https://ui-avatars.com/api/?name=Priya+Patel",
      fallback: "PP",
    },
    project: "Project X",
    due: "2025-08-09",
  },
  {
    id: "T-114",
    title: "Deploy new release",
    status: "Done",
    assignee: {
      name: "Sebastian Ansalam",
      avatar: "https://github.com/shinjith-dev.png",
      fallback: "SA",
    },
    project: "Mobile App Launch",
    due: "2025-08-15",
  },
];
