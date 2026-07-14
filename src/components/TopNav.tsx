const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Proof', href: '#proof' },
  { label: 'Contact', href: '#contact' },
];

export default function TopNav() {
  return (
    <nav class="top-nav" aria-label="Primary">
      <a class="top-nav__brand" href="#top" aria-label="Asterline OS home">
        <span class="top-nav__brand-mark">A</span>
        <span class="top-nav__brand-text">
          <strong>Asterline OS</strong>
          <small>Demo SaaS launchpad</small>
        </span>
      </a>

      <div class="top-nav__links">
        {navItems.map((item) => (
          <a href={item.href}>{item.label}</a>
        ))}
      </div>

      <a class="top-nav__cta" href="#contact">
        Book a walkthrough
      </a>
    </nav>
  );
}