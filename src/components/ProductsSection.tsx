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
    price: "RD$ 2,760",
    description: "Filtro de aire de alta eficiencia para motores Honda",
    icon: "🌬️",
  },
  {
    id: 2,
    name: "Pastillas de Freno",
    category: "Sistema de Frenado",
    price: "RD$ 3,230",
    description: "Pastillas de freno originales Honda con máxima durabilidad",
    icon: "🛑",
  },
  {
    id: 3,
    name: "Bujías",
    category: "Encendido",
    price: "RD$ 480",
    description: "Bujías de platino para mejor rendimiento del motor",
    icon: "⚡",
  },
  {
    id: 4,
    name: "Correa de Distribución",
    category: "Motor",
    price: "RD$ 400",
    description: "Correa de distribución resistente y confiable",
    icon: "🔄",
  },
  {
    id: 5,
    name: "Aceite Sintético",
    category: "Lubricación",
    price: "RD$ 1,145",
    description: "Aceite sintético 5W-30 para motores Honda",
    icon: "🛢️",
  },
  {
    id: 6,
    name: "Batería",
    category: "Eléctrico",
    price: "RD$ 5,300",
    description: "Batería de larga duración con garantía de 3 años",
    icon: "🔋",
  },
  {
    id: 7,
    name: "Amortiguadores",
    category: "Suspensión",
    price: "RD$ 8,500",
    description: "Amortiguadores de gas para mejor confort de conducción",
    icon: "🚗",
  },
  {
    id: 8,
    name: "Radiador",
    category: "Enfriamiento",
    price: "RD$ 10,370",
    description: "Radiador de aluminio de alto rendimiento",
    icon: "❄️",
  },
  {
    id: 9,
    name: "Turbo",
    category: "Motor",
    price: "RD$ 20,000",
    description: "Turbocompresor original Honda para mejor potencia",
    icon: "💨",
  },
];
