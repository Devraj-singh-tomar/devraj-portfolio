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
    title: "How WebRTC Establishes a Peer-to-Peer Connection",
    description:
      "A practical breakdown of signaling, ICE candidates, STUN servers, and the steps browsers take to establish a direct connection.",
    source: {
      name: "Medium",
      href: "",
    },
  },

  {
    title:
      "Building PeerDrop: Designing a Browser-to-Browser File Transfer System",
    description:
      "Exploring the architecture behind PeerDrop, from room creation and WebSocket signaling to WebRTC data channels and file transfer.",
    source: {
      name: "Medium",
      href: "",
    },
  },

  {
    title: "Redis Pub/Sub for Scaling Real-Time Applications",
    description:
      "Understanding how Redis Pub/Sub can distribute events between server instances and where its delivery guarantees matter in real-time systems.",
    source: {
      name: "Medium",
      href: "",
    },
  },
];
