interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  icon: string;
}

interface ProductsProps {
  products?: Product[];
  onAddToCart?: (product: Omit<Product, 'category' | 'description'>) => void;
}

export function ProductsSection({
  products = defaultProducts,
  onAddToCart,
}: ProductsProps) {
  return (
    <section className="products" id="products">
      <div className="products-header">
        <h2>Nuestras Piezas Honda</h2>
        <p>Componentes originales de calidad para tu vehículo comercial</p>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-icon">{product.icon}</div>
            <h3>{product.name}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-description">{product.description}</p>
            <div className="product-price">{product.price}</div>
            <button
              className="btn-add-cart"
              onClick={() =>
                onAddToCart?.({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  icon: product.icon,
                })
              }
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

const defaultProducts: Product[] = [
  {
    id: 1,
    name: "Filtro de Aire",
    category: "Filtración",
    price: "$45.99",
    description: "Filtro de aire de alta eficiencia para motores Honda",
    icon: "🌬️",
  },
  {
    id: 2,
    name: "Pastillas de Freno",
    category: "Sistema de Frenado",
    price: "$65.50",
    description: "Pastillas de freno originales Honda con máxima durabilidad",
    icon: "🛑",
  },
  {
    id: 3,
    name: "Bujías",
    category: "Encendido",
    price: "$12.99",
    description: "Bujías de platino para mejor rendimiento del motor",
    icon: "⚡",
  },
  {
    id: 4,
    name: "Correa de Distribución",
    category: "Motor",
    price: "$120.00",
    description: "Correa de distribución resistente y confiable",
    icon: "🔄",
  },
  {
    id: 5,
    name: "Aceite Sintético",
    category: "Lubricación",
    price: "$35.75",
    description: "Aceite sintético 5W-30 para motores Honda",
    icon: "🛢️",
  },
  {
    id: 6,
    name: "Batería",
    category: "Eléctrico",
    price: "$155.00",
    description: "Batería de larga duración con garantía de 3 años",
    icon: "🔋",
  },
  {
    id: 7,
    name: "Amortiguadores",
    category: "Suspensión",
    price: "$199.99",
    description: "Amortiguadores de gas para mejor confort de conducción",
    icon: "🚗",
  },
  {
    id: 8,
    name: "Radiador",
    category: "Enfriamiento",
    price: "$189.50",
    description: "Radiador de aluminio de alto rendimiento",
    icon: "❄️",
  },
  {
    id: 9,
    name: "Turbo",
    category: "Motor",
    price: "$450.00",
    description: "Turbocompresor original Honda para mejor potencia",
    icon: "💨",
  },
];
