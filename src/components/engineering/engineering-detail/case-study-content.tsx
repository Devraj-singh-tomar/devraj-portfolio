export default function CaseStudyContent() {
  return (
    <div className="mt-14">
      <div className="mx-auto max-w-3xl">
        <div className="space-y-20">
          <section id="overview" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              Overview
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Building browser-to-browser file transfer
            </h2>

            <div className="mt-5 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                PeerDrop is a browser-to-browser file transfer application
                designed to transfer files directly between peers without
                storing the file on a backend service.
              </p>

              <p>
                The project uses WebRTC for peer-to-peer communication and a
                signaling server to coordinate the connection establishment
                process.
              </p>
            </div>
          </section>

          <section id="architecture" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              Architecture
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              How the system connects two browsers
            </h2>

            <div className="mt-6 border border-border bg-muted/20 p-6">
              <pre className="overflow-x-auto font-mono text-sm leading-7 text-foreground">
                {`┌──────────────┐
│    Host      │
│   Browser    │
└──────┬───────┘
       │
       │ Signaling
       ▼
┌──────────────┐
│  Signaling   │
│    Server    │
└──────┬───────┘
       │
       │ Offer / Answer / ICE
       ▼
┌──────────────┐
│    Guest     │
│   Browser    │
└──────────────┘

After negotiation:

Host Browser
     │
     │ WebRTC DataChannel
     │
     ▼
Guest Browser
`}
              </pre>
            </div>

            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                The signaling server does not carry the transferred file. Its
                responsibility is limited to coordinating the peers during
                connection establishment.
              </p>

              <p>
                Once the WebRTC connection is established, application data
                moves directly between the browsers through the DataChannel.
              </p>
            </div>
          </section>

          <section id="implementation" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              Implementation
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Building the transfer pipeline
            </h2>

            <div className="mt-5 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                The implementation is divided into connection establishment,
                signaling, peer negotiation, DataChannel communication, and file
                transfer.
              </p>
            </div>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Signaling
                </h3>

                <p className="mt-3 text-base leading-8 text-muted-foreground">
                  The server coordinates room creation, peer discovery, and the
                  exchange of WebRTC signaling messages.
                </p>

                <pre className="mt-5 overflow-x-auto border border-border bg-muted/20 p-6 font-mono text-sm leading-7 text-foreground">
                  {`socket.emit("create-room");

socket.on("room-created", (room) => {
  // wait for the second peer
});
`}
                </pre>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Peer connection
                </h3>

                <p className="mt-3 text-base leading-8 text-muted-foreground">
                  Each browser creates an RTCPeerConnection and exchanges
                  offers, answers, and ICE candidates through the signaling
                  server.
                </p>

                <pre className="mt-5 overflow-x-auto border border-border bg-muted/20 p-6 font-mono text-sm leading-7 text-foreground">
                  {`const peer = new RTCPeerConnection(config);

peer.onicecandidate = (event) => {
  if (event.candidate) {
    signal(event.candidate);
  }
};
`}
                </pre>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  File transfer
                </h3>

                <p className="mt-3 text-base leading-8 text-muted-foreground">
                  Large files are split into smaller chunks before being sent
                  through the DataChannel so memory usage and flow control can
                  be managed explicitly.
                </p>
              </div>
            </div>
          </section>

          <section id="challenges" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              Engineering Challenges
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Problems that shaped the implementation
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  NAT traversal
                </h3>

                <p className="mt-3 text-base leading-8 text-muted-foreground">
                  Not every browser can establish a direct connection
                  immediately, which makes STUN, TURN, and ICE candidate
                  handling an important part of the system.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Backpressure
                </h3>

                <p className="mt-3 text-base leading-8 text-muted-foreground">
                  Sending chunks faster than the receiver can process them can
                  increase memory usage and destabilize the transfer. The sender
                  therefore needs explicit flow control.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Connection failures
                </h3>

                <p className="mt-3 text-base leading-8 text-muted-foreground">
                  Browser connectivity can fail for reasons outside the
                  application, so the transfer pipeline needs clear state
                  transitions and recovery handling.
                </p>
              </div>
            </div>
          </section>

          <section id="performance" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              Performance
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Measuring the transfer pipeline
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="border border-border p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                  File Size
                </p>

                <p className="mt-2 font-heading text-2xl font-semibold text-foreground">
                  4 GB
                </p>
              </div>

              <div className="border border-border p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                  Transfer
                </p>

                <p className="mt-2 font-heading text-2xl font-semibold text-foreground">
                  P2P
                </p>
              </div>

              <div className="border border-border p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                  Storage
                </p>

                <p className="mt-2 font-heading text-2xl font-semibold text-foreground">
                  0 B
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-6 text-zinc-500">
              Replace these demo metrics with measurements from your actual
              implementation before publishing the case study.
            </p>
          </section>

          <section id="trade-offs" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              Trade-offs
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Decisions and compromises
            </h2>

            <div className="mt-8 space-y-6">
              <div className="border-l border-border pl-5">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  WebRTC instead of server-side upload
                </h3>

                <p className="mt-2 text-base leading-8 text-muted-foreground">
                  This removes server-side storage and bandwidth costs, but
                  introduces NAT traversal and connectivity complexity.
                </p>
              </div>

              <div className="border-l border-border pl-5">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Chunked transfer instead of sending entire files
                </h3>

                <p className="mt-2 text-base leading-8 text-muted-foreground">
                  Chunking gives us better control over memory and flow, but
                  requires additional ordering and transfer state.
                </p>
              </div>
            </div>
          </section>

          <section id="learnings" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              What I Learned
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              What changed my understanding
            </h2>

            <div className="mt-5 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                Building PeerDrop made the difference between signaling and
                actual peer-to-peer transport much more concrete. The signaling
                layer helps peers find and negotiate a connection, but it is not
                the data path itself.
              </p>

              <p>
                The project also made flow control and connection state
                management much more important than they initially appeared.
              </p>
            </div>
          </section>

          <section id="improvements" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              What I Would Improve
            </p>

            <div className="mt-5 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                The next iteration would improve observability, strengthen
                recovery behavior, and add more systematic transfer benchmarks
                across browsers and network conditions.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
