export type Project = {
  title: string;
  description: string;
  github: string;
  live: string;
};

export const projects: Project[] = [
  {
    title: "PeerDrop",
    description:
      "A peer-to-peer file transfer system that sends files directly between browsers using WebRTC, with WebSockets and Redis powering the surrounding infrastructure.",
    github: "https://github.com/Devraj-singh-tomar/peerdrop",
    live: "",
  },

  {
    title: "Project Two",
    description:
      "A short description explaining what the project does and why it exists.",
    github: "https://github.com/Devraj-singh-tomar/project-two",
    live: "https://project-two.example.com",
  },
];
