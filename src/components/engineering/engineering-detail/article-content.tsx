export default function ArticleContent() {
  return (
    <div className="mt-12">
      <div className="mx-auto max-w-3xl">
        <div className="space-y-14">
          <section id="problem" className="scroll-mt-24">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              The Problem
            </h2>

            <div className="mt-5 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                WebRTC makes direct browser-to-browser communication possible,
                but the connection process is more involved than simply creating
                an RTCPeerConnection.
              </p>

              <p>
                Before two peers can exchange application data, they need to
                discover possible network paths and determine which path can
                actually establish connectivity.
              </p>
            </div>
          </section>

          <section id="ice" className="scroll-mt-24">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              How ICE Works
            </h2>

            <div className="mt-5 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                ICE, or Interactive Connectivity Establishment, is the mechanism
                used to discover and evaluate possible network paths between
                peers.
              </p>

              <p>
                Those paths can involve local addresses, server-reflexive
                addresses discovered through STUN, or relay candidates provided
                by TURN.
              </p>
            </div>
          </section>

          <section id="architecture" className="scroll-mt-24">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Connectivity Flow
            </h2>

            <div className="mt-6 border border-border bg-muted/20 p-6 font-mono text-sm leading-7 text-foreground">
              <pre className="overflow-x-auto">
                {`Browser A
   │
   │ signaling
   ▼
Signaling Server
   │
   │ ICE candidates
   ▼
Browser B
   │
   ├── STUN
   │
   ├── TURN
   │
   └── Connectivity Checks
`}
              </pre>
            </div>
          </section>

          <section id="takeaways" className="scroll-mt-24">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Takeaways
            </h2>

            <div className="mt-5 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                ICE is not the transport itself. It is the process used to
                discover and evaluate possible routes before the peers establish
                the final connection.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
