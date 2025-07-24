export type Announcement = {
  name: string;
  description: string;
  date: string;
};

export const announcements: Announcement[] = [
  {
    name: "Quarterly Townhall",
    description:
      "Join us for the company-wide townhall on Friday at 4 PM. Updates, Q&A, and team recognitions. This is a great opportunity to connect with leadership, celebrate team achievements, and discuss future goals. Don’t miss out on the open Q&A session where you can share your thoughts and feedback.",
    date: "2025-08-01",
  },
  {
    name: "New Health Insurance Policy",
    description:
      "We've upgraded our health insurance coverage. Check your email for details and enrollment steps. The new policy offers enhanced benefits including dental and vision coverage, mental health support, and lower premiums for families. Please review the attached documents and reach out to HR for any questions.",
    date: "2025-07-15",
  },
  {
    name: "Office Renovation",
    description:
      "Renovation work will begin next week. Some workspaces will be temporarily relocated. The renovation will include new collaborative spaces, upgraded meeting rooms, and improved kitchen facilities. Please refer to the relocation map sent via email and coordinate with your team leads for seating arrangements.",
    date: "2025-07-20",
  },
  {
    name: "Diwali Celebration",
    description:
      "Celebrate Diwali with us on October 23rd! Potluck, games, and prizes for best dressed. Join us for an evening of festivities, delicious food, and cultural performances. Don’t forget to sign up for the potluck and bring your favorite dish. Prizes will be awarded for best traditional attire and most creative rangoli.",
    date: "2025-10-23",
  },
  {
    name: "Learning Week",
    description:
      "Sign up for workshops and webinars during Learning Week. Upskill and earn certificates. Sessions will cover topics like leadership, communication, technical skills, and wellness. All employees are encouraged to participate and take advantage of the opportunity to learn from industry experts.",
    date: "2025-09-15",
  },
  {
    name: "Annual Company Picnic",
    description:
      "Our annual company picnic is scheduled for September 5th at Riverside Park. Bring your family and enjoy a day of fun activities, games, and great food. There will be team competitions, a talent show, and a raffle with exciting prizes. RSVP by August 20th to reserve your spot.",
    date: "2025-09-05",
  },
  {
    name: "Remote Work Policy Update",
    description:
      "Starting October, employees may opt for remote work up to three days a week. This change is part of our commitment to work-life balance and flexibility. Please review the updated guidelines and submit your preferred remote days to your manager by September 15th.",
    date: "2025-10-01",
  },
  {
    name: "Holiday Schedule Announcement",
    description:
      "The holiday schedule for the upcoming year has been released. Please check the HR portal for a full list of company holidays and plan your leaves accordingly. Note that the office will be closed from December 24th to January 2nd for the winter break.",
    date: "2025-08-10",
  },
];
