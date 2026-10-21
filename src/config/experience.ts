export type ExperienceRole = {
  title: string;
  period: string;
};

export type Experience = {
  company: string;
  href: string;
  period: string;
  logo?: string;
  roles: ExperienceRole[];
};

export const experiences: Experience[] = [
  // {
  //   company: "Memo0",
  //   href: "https://mem0.ai",
  //   period: "Mar 2026 to Present",
  //   logo: "/experience/google.jpg",
  //   roles: [
  //     {
  //       title: "Software Engineer",
  //       period: "Jan 2025 to Present",
  //     },
  //   ],
  // },
  // {
  //   company: "Google",
  //   href: "https://Google.com",
  //   period: "Mar 2026 to Present",
  //   logo: "/experience/google.jpg",
  //   roles: [
  //     {
  //       title: "Software Engineering Intern",
  //       period: "Jun 2024 to Dec 2024",
  //     },
  //   ],
  // },
];
