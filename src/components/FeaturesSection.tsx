import { useState } from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
  details: string;
  benefits: string[];
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
      details:
        "La confiabilidad es uno de los aspectos fundamentales de los vehículos Honda. Su ingeniería está orientada a ofrecer un funcionamiento estable y duradero.",
      benefits: [
        "Motores de funcionamiento duradero",
        "Ingeniería y tecnología probada",
        "Buen desempeño",
        "Componentes de calidad",
      ],
    },
    {
      icon: "💰",
      title: "Economía",
      description: "Bajo consumo de combustible",
      details:
        "La eficiencia en el consumo permite aprovechar mejor el combustible y reducir los gastos relacionados con el uso diario del vehículo.",
      benefits: [
        "Bajo consumo de combustible",
        "Ahorro en gastos de operación",
        "Mayor eficiencia",
        "Buen rendimiento por combustible",
      ],
    },
    {
      icon: "🔧",
      title: "Servicio",
      description: "Soporte técnico disponible",
      details:
        "El mantenimiento adecuado ayuda a conservar el rendimiento del vehículo y prolongar la vida útil de sus componentes.",
      benefits: [
        "Mantenimiento preventivo",
        "Revisiones periódicas",
        "Soporte técnico",
        "Cuidado adecuado del vehículo",
      ],
    },
  ],
}: FeaturesSectionProps) {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  return (
    <>
      <section className="features">
        {features.map((feature, index) => (
          <button
            key={index}
            type="button"
            className="feature-card"
            onClick={() => setSelectedFeature(feature)}
          >
            <div className="feature-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

            <span className="feature-more">
              Haz clic para ver más →
            </span>
          </button>
        ))}
      </section>

      {selectedFeature && (
        <div
          className="feature-modal-overlay"
          onClick={() => setSelectedFeature(null)}
        >
          <div
            className="feature-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="feature-modal-close"
              onClick={() => setSelectedFeature(null)}
            >
              ×
            </button>

            <div className="feature-modal-icon">
              {selectedFeature.icon}
            </div>

            <h2>{selectedFeature.title}</h2>

            <p className="feature-modal-text">
              {selectedFeature.details}
            </p>

            <h3>Características principales</h3>

            <ul>
              {selectedFeature.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            <button
              type="button"
              className="feature-modal-button"
              onClick={() => setSelectedFeature(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
