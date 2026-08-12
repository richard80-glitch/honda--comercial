interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features?: Feature[];
}

export function FeaturesSection({
  features = [
    {
      icon: "⚙️",
      title: "Confiabilidad",
      description: "Motores probados con años de desempeño",
    },
    {
      icon: "💰",
      title: "Economía",
      description: "Bajo consumo de combustible",
    },
    {
      icon: "🔧",
      title: "Servicio",
      description: "Soporte técnico disponible",
    },
  ],
}: FeaturesSectionProps) {
  return (
    <section className="features">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}
