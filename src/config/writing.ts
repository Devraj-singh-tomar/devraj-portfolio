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
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt cupiditate excepturi, odio officia ad minima illum nobis obcaecati fugit.",
    source: {
      name: "Medium",
      href: "https://medium.com/your-article",
    },
  },
  {
    title: "Another article title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt cupiditate excepturi, odio officia ad minima illum nobis.",
    source: {
      name: "daily.dev",
      href: "https://app.daily.dev/posts/your-post",
    },
  },
];
