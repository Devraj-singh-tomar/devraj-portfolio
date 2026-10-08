export type Writing = {
  title: string;
  description: string;
  source: {
    name: string;
    href: string;
  };
};

export const writings: Writing[] = [
  {
    title: "Your first article title",
    description: "A short description explaining what the article is about.",
    source: {
      name: "Medium",
      href: "https://medium.com/your-article",
    },
  },
  {
    title: "Another article title",
    description:
      "A short explanation of the idea, system, or lesson covered in the article.",
    source: {
      name: "daily.dev",
      href: "https://app.daily.dev/posts/your-post",
    },
  },
];
