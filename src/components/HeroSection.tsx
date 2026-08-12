interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function HeroSection({
  title = "Soluciones Comerciales de Calidad",
  subtitle = "Tecnología confiable para tu negocio",
  primaryButtonText = "Explorar Productos",
  secondaryButtonText = "Contáctanos",
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="button-group">
          <button className="btn btn-primary" onClick={onPrimaryClick}>
            {primaryButtonText}
          </button>
          <button className="btn btn-secondary" onClick={onSecondaryClick}>
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  );
}
