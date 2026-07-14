import TopNav from './components/TopNav';
import Footer from './components/Footer';

const features = [
  {
    title: 'One command launch',
    description:
      'Ship polished product pages, onboarding flows, and support surfaces from a single composable stack.',
  },
  {
    title: 'Realtime control room',
    description:
      'Track conversions, activation, and retention with dashboards designed for fast decision-making.',
  },
  {
    title: 'Designed for velocity',
    description:
      'Opinionated blocks, refined spacing, and reusable sections keep every new campaign on brand.',
  },
];

const metrics = [
  { value: '99.97%', label: 'weekly uptime' },
  { value: '4.8x', label: 'faster launches' },
  { value: '120+', label: 'teams onboarded' },
];

const proof = [
  'Used by early-stage startups and focused product teams',
  'Built for launches, waitlists, and internal tool demos',
  'Responsive by default with accessible contrast and rhythm',
];

export default function App() {
  return (
    <main class="page-shell" id="top">
      <TopNav />

      <section class="hero">
        <div class="hero__copy">
          <p class="eyebrow">Asterline OS</p>
          <h1>Launch a sharper product story in one afternoon.</h1>
          <p class="lede">
            Asterline OS is a demo SaaS landing page built to show how a clean
            Solid.js front end can feel premium, structured, and conversion
            ready from the first load.
          </p>

          <div class="hero__actions">
            <a class="button button--primary" href="#features">
              Explore features
            </a>
            <a class="button button--secondary" href="#contact">
              View the CTA
            </a>
          </div>

          <ul class="proof-list">
            {proof.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>

        <div class="hero__panel" aria-label="Product preview card">
          <div class="panel-card panel-card--top">
            <span>Launch status</span>
            <strong>Ready</strong>
          </div>
          <div class="panel-card panel-card--stat">
            <span>New signups</span>
            <strong>1,284</strong>
            <small>+18.2% vs last week</small>
          </div>
          <div class="panel-card panel-card--chart">
            <div class="chart-bar chart-bar--one" />
            <div class="chart-bar chart-bar--two" />
            <div class="chart-bar chart-bar--three" />
            <div class="chart-bar chart-bar--four" />
          </div>
        </div>
      </section>

      <section class="metrics" aria-label="Core metrics">
        {metrics.map((metric) => (
          <article class="metric-card">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>

      <section class="features" id="features">
        <div class="section-heading">
          <p class="eyebrow">Why teams use it</p>
          <h2>Everything the demo needs, nothing it does not.</h2>
        </div>

        <div class="feature-grid">
          {features.map((feature) => (
            <article class="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section class="quote-band" id="proof">
        <p>
          “The layout feels like a real product launch rather than a generic
          template. It is crisp, focused, and easy to adapt.”
        </p>
        <span>Built for demos, launches, and polished prototypes</span>
      </section>

      <section class="contact-card" id="contact">
        <div>
          <p class="eyebrow">Next step</p>
          <h2>Turn the demo into your own story.</h2>
          <p>
            Replace the invented copy, connect a real CTA, or extend the page
            into a full marketing site when you are ready.
          </p>
        </div>
        <a class="button button--primary" href="mailto:hello@asterline.dev">
          Start the conversation
        </a>
      </section>

      <Footer />
    </main>
  );
}