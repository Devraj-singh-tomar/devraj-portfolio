export default function SystemDesignContent() {
  return (
    <div className="mt-14">
      <div className="mx-auto max-w-3xl">
        <div className="space-y-20">
          <section id="requirements" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              Requirements
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Define the problem before designing the system
            </h2>

            <div className="mt-6 space-y-8">
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Functional requirements
                </h3>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-8 text-muted-foreground">
                  <li>Create a short URL from a long URL.</li>
                  <li>
                    Redirect users from the short URL to the original URL.
                  </li>
                  <li>Support high read volume.</li>
                  <li>Allow links to expire.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Non-functional requirements
                </h3>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-8 text-muted-foreground">
                  <li>Low redirect latency.</li>
                  <li>High availability.</li>
                  <li>Horizontal scalability.</li>
                  <li>Durable URL mappings.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="capacity" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              Capacity Estimation
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Estimate the system before choosing infrastructure
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Metric label="Daily active users" value="10M" />

              <Metric label="Read / write ratio" value="100 : 1" />

              <Metric label="Redirect requests / sec" value="~12K" />

              <Metric label="New URLs / sec" value="~120" />
            </div>

            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                These numbers drive the storage, caching, database, and load
                balancing decisions that follow.
              </p>
            </div>
          </section>

          <section id="api" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              API Design
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Keep the public API small
            </h2>

            <div className="mt-6 space-y-4">
              <ApiRow
                method="POST"
                path="/api/urls"
                description="Create a short URL"
              />

              <ApiRow
                method="GET"
                path="/:shortCode"
                description="Redirect to original URL"
              />

              <ApiRow
                method="DELETE"
                path="/api/urls/:id"
                description="Disable a URL"
              />
            </div>
          </section>

          <section id="architecture" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              Architecture
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              High-level system architecture
            </h2>

            <div className="mt-6 border border-border bg-muted/20 p-6">
              <pre className="overflow-x-auto font-mono text-sm leading-7 text-foreground">
                {`Client
   │
   ▼
Load Balancer
   │
   ▼
API Servers
   │
   ├───────────────┐
   ▼               ▼
 Redis         PostgreSQL
   │
   │ cache miss
   └──────────────► Database
`}
              </pre>
            </div>

            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                Redirect traffic is read-heavy, so Redis sits in front of the
                primary database for the hot path.
              </p>

              <p>
                API servers remain stateless so they can scale horizontally
                behind the load balancer.
              </p>
            </div>
          </section>

          <section id="database" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              Database Design
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              URL mapping and indexes
            </h2>

            <div className="mt-6 border border-border bg-muted/20 p-6">
              <pre className="overflow-x-auto font-mono text-sm leading-7 text-foreground">
                {`urls
──────────────────────────────
id
short_code        UNIQUE
original_url
created_at
expires_at
status
`}
              </pre>
            </div>

            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                The short code requires a unique index because it is the primary
                lookup key during redirects.
              </p>
            </div>
          </section>

          <section id="caching" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              Caching
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Keep redirects away from the database
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                The redirect path follows a cache-aside strategy. A cache hit
                can return the destination immediately; a miss falls back to
                PostgreSQL and populates Redis.
              </p>
            </div>

            <div className="mt-6 border-l border-border pl-5">
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                Trade-off
              </p>

              <p className="mt-2 text-base leading-7 text-muted-foreground">
                Higher cache usage reduces database load but introduces
                invalidation and stale-data concerns.
              </p>
            </div>
          </section>

          <section id="scaling" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              Scaling
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Scaling beyond one application server
            </h2>

            <div className="mt-6 space-y-8">
              <ScalingItem
                title="Horizontal application scaling"
                description="Run multiple stateless API instances behind a load balancer."
              />

              <ScalingItem
                title="Read replicas"
                description="Move non-critical read traffic away from the primary database."
              />

              <ScalingItem
                title="Cache expansion"
                description="Increase cache capacity and partition hot keys when traffic grows."
              />

              <ScalingItem
                title="Database partitioning"
                description="Partition data when a single database becomes the limiting factor."
              />
            </div>
          </section>

          <section id="implementation" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              Implementation
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Turning the design into code
            </h2>

            <div className="mt-6 space-y-8">
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Repository structure
                </h3>

                <pre className="mt-4 overflow-x-auto border border-border bg-muted/20 p-6 font-mono text-sm leading-7 text-foreground">
                  {`src/
├── routes/
├── services/
├── repositories/
├── cache/
├── db/
└── server.ts`}
                </pre>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Short code generation
                </h3>

                <p className="mt-3 text-base leading-8 text-muted-foreground">
                  The implementation needs a collision-resistant strategy that
                  remains compact while allowing the system to generate codes
                  efficiently under load.
                </p>

                <pre className="mt-4 overflow-x-auto border border-border bg-muted/20 p-6 font-mono text-sm leading-7 text-foreground">
                  {`const shortCode = generateShortCode();

await repository.create({
  shortCode,
  originalUrl,
});
`}
                </pre>
              </div>
            </div>
          </section>

          <section id="benchmark" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              Benchmark
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Measure the implementation
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Metric label="p50 latency" value="—" />

              <Metric label="p95 latency" value="—" />

              <Metric label="Requests / sec" value="—" />
            </div>

            <p className="mt-6 text-sm leading-6 text-zinc-500">
              Replace these placeholders with measurements from your actual
              implementation and benchmark environment.
            </p>
          </section>

          <section id="failures" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              Failure Modes
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              What can fail?
            </h2>

            <div className="mt-8 space-y-6">
              <FailureItem
                title="Redis unavailable"
                mitigation="Fall back to the database with bounded retries and timeouts."
              />

              <FailureItem
                title="Database unavailable"
                mitigation="Return a controlled failure and preserve system availability where possible."
              />

              <FailureItem
                title="Hot key"
                mitigation="Use TTL controls, request coalescing, and horizontal cache scaling."
              />
            </div>
          </section>

          <section id="trade-offs" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              Trade-offs
            </p>

            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Why this architecture?
            </h2>

            <div className="mt-8 space-y-8">
              <TradeOff
                decision="Redis in front of PostgreSQL"
                reason="The redirect workload is read-heavy and latency-sensitive."
                consequence="The system gains speed but now has cache invalidation complexity."
              />

              <TradeOff
                decision="Stateless API servers"
                reason="Stateless services scale horizontally with fewer coordination concerns."
                consequence="Session-specific state must live outside the process."
              />
            </div>
          </section>

          <section id="learnings" className="scroll-mt-24">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
              What I Learned
            </p>

            <div className="mt-5 space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                Capacity estimates change architecture choices earlier than
                implementation details do. Estimating the read/write ratio
                immediately exposed caching as a core part of the system.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

interface MetricProps {
  label: string;
  value: string;
}

function Metric({ label, value }: MetricProps) {
  return (
    <div className="border border-border p-5">
      <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
        {label}
      </p>

      <p className="mt-2 font-heading text-2xl font-semibold text-foreground">
        {value}
      </p>
    </div>
  );
}

interface ApiRowProps {
  method: string;
  path: string;
  description: string;
}

function ApiRow({ method, path, description }: ApiRowProps) {
  return (
    <div className="grid gap-2 border-b border-border pb-4 sm:grid-cols-[80px_minmax(0,1fr)_180px] sm:items-center">
      <span className="font-mono text-xs font-medium text-zinc-500">
        {method}
      </span>

      <code className="font-mono text-sm text-foreground">{path}</code>

      <span className="text-sm text-muted-foreground">{description}</span>
    </div>
  );
}

interface ScalingItemProps {
  title: string;
  description: string;
}

function ScalingItem({ title, description }: ScalingItemProps) {
  return (
    <div className="border-l border-border pl-5">
      <h3 className="font-heading text-lg font-semibold text-foreground">
        {title}
      </h3>

      <p className="mt-2 text-base leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

interface FailureItemProps {
  title: string;
  mitigation: string;
}

function FailureItem({ title, mitigation }: FailureItemProps) {
  return (
    <div>
      <h3 className="font-heading text-lg font-semibold text-foreground">
        {title}
      </h3>

      <p className="mt-2 text-base leading-7 text-muted-foreground">
        {mitigation}
      </p>
    </div>
  );
}

interface TradeOffProps {
  decision: string;
  reason: string;
  consequence: string;
}

function TradeOff({ decision, reason, consequence }: TradeOffProps) {
  return (
    <div className="border-l border-border pl-5">
      <h3 className="font-heading text-lg font-semibold text-foreground">
        {decision}
      </h3>

      <p className="mt-2 text-base leading-7 text-muted-foreground">
        <span className="text-foreground">Reason:</span> {reason}
      </p>

      <p className="mt-2 text-base leading-7 text-muted-foreground">
        <span className="text-foreground">Consequence:</span> {consequence}
      </p>
    </div>
  );
}
