interface Service {
  n: string;
  name: string;
  hook: string;
  body: string;
}

export default function ServicesList({
  services,
}: {
  services: readonly Service[];
}) {
  return (
    <div>
      {services.map((s, i) => {
        const isEven = (i + 1) % 2 === 0;
        return (
          <div
            key={s.n}
            className={`svc-row${isEven ? " svc-row--even" : ""}`}
          >
            <span className="svc-row-num" aria-hidden="true">
              {s.n}
            </span>
            <div className="svc-row-head">
              <h2 className="svc-row-name">{s.name}</h2>
              <p className="svc-row-hook">{s.hook}</p>
            </div>
            <p className="svc-row-body">{s.body}</p>
            <span className="svc-row-arrow" aria-hidden="true">
              &rarr;
            </span>
          </div>
        );
      })}
    </div>
  );
}
