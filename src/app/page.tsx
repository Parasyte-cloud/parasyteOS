import Image from "next/image";
import Link from "next/link";

const foundations = [
  {
    number: "01",
    title: "Organization-aware",
    description:
      "Structure, terminology, branding, modules and workflows adapt to each organization.",
  },
  {
    number: "02",
    title: "Secure by design",
    description:
      "Tenant isolation, scoped authorization and auditable privileged actions are foundational.",
  },
  {
    number: "03",
    title: "Modular at the core",
    description:
      "Organizations enable only the capabilities they need while the platform remains extensible.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="navigation" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="ParasyteOS home">
          <span className="brandMark">
            <Image
              src="/brand/parasyteos-mark-color.png"
              alt=""
              width={38}
              height={38}
              priority
            />
          </span>
          <span>ParasyteOS</span>
        </Link>

        <span className="buildStatus">
          <span aria-hidden="true" />
          Platform foundation
        </span>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">THE ORGANIZATIONAL CONTROL PLANE</p>
          <h1>
            One operating system.
            <span>Built around your organization.</span>
          </h1>
          <p className="heroText">
            ParasyteOS brings people, work, knowledge, applications and
            governance into one secure, configurable environment.
          </p>

          <div className="principles" aria-label="Platform principles">
            <span>Multi-tenant</span>
            <span>Permission-driven</span>
            <span>Auditable</span>
          </div>
        </div>

        <aside className="systemPanel" aria-label="Platform architecture">
          <div className="panelHeader">
            <span>Platform architecture</span>
            <span className="panelState">FOUNDATION</span>
          </div>

          <div className="architectureFlow">
            <div>
              <small>PLATFORM</small>
              <strong>ParasyteOS</strong>
            </div>
            <span aria-hidden="true">↓</span>
            <div>
              <small>TENANT</small>
              <strong>Organization</strong>
            </div>
            <span aria-hidden="true">↓</span>
            <div className="splitLayer">
              <span>People</span>
              <span>Work</span>
              <span>Knowledge</span>
            </div>
          </div>

          <p>
            Organization and user are the only mandatory hierarchy levels.
            Everything else remains configurable.
          </p>
        </aside>
      </section>

      <section className="foundationGrid" aria-labelledby="foundation-heading">
        <div className="sectionIntro">
          <p className="eyebrow">FOUNDATION PRINCIPLES</p>
          <h2 id="foundation-heading">Designed to adapt without losing control.</h2>
        </div>

        <div className="foundationCards">
          {foundations.map((foundation) => (
            <article key={foundation.number}>
              <span>{foundation.number}</span>
              <h3>{foundation.title}</h3>
              <p>{foundation.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
