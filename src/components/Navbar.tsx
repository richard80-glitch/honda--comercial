interface NavbarProps {
  logo?: string;
  links?: Array<{ label: string; href: string }>;
}

export function Navbar({
  logo = "🚛 HONDA COMERCIAL",
  links = [
    { label: "Productos", href: "#products" },
    { label: "Acerca de", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ],
}: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">{logo}</div>
        <div className="navbar-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
