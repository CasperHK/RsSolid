const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Proof', href: '#proof' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer class="footer" aria-labelledby="footer-heading">
      <div class="footer__top">
        <div class="footer__brand">
          <a class="footer__brand-link" href="#top" aria-label="Asterline OS home">
            <span class="brand-mark">A</span>
            <span class="footer__brand-text">
              <strong id="footer-heading">Asterline OS</strong>
              <small>Demo SaaS launchpad</small>
            </span>
          </a>

          <p>
            A polished demo site for launches, campaigns, and product storytelling.
          </p>
        </div>

        <div class="footer__links">
          {footerSections.map((section) => (
            <nav class="footer__group" aria-label={section.title}>
              <p class="footer__label">{section.title}</p>
              <ul>
                {section.links.map((link) => (
                  <li>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav class="footer__group" aria-label="Legal">
            <p class="footer__label">Legal</p>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </nav>
        </div>

        <a class="footer__top-link" href="#top">
          Back to top
        </a>
      </div>

      <div class="footer__bottom">
        <p>© 2026 Asterline OS. Built with Solid.js and Rsbuild.</p>
      </div>
    </footer>
  );
}