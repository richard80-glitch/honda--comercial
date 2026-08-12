import type { CartItem } from '../hooks/useCart'
import './Cart.css'

type CartProps = {
  isOpen: boolean
  cartItems: CartItem[]
  onClose: () => void
  onUpdateQuantity: (id: number, quantity: number) => void
  onRemove: (id: number) => void
  totalPrice: number
  totalItems: number
}

export const Cart = ({
  isOpen,
  cartItems,
  onClose,
  onUpdateQuantity,
  onRemove,
  totalPrice,
  totalItems,
}: CartProps) => {
  if (!isOpen) return null

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>🛒 Carrito</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-icon">{item.icon}</div>
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>{item.price} x {item.quantity}</p>
                  </div>
                  <div className="item-controls">
                    <button
                      className="qty-btn"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      −
                    </button>
                    <span className="qty">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="remove-btn"
                      onClick={() => onRemove(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-summary">
            <div className="summary-row">
              <span>Artículos:</span>
              <span>{totalItems}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>RD$ {totalPrice.toLocaleString('es-DO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          </div>
          <button className="checkout-btn">Proceder al Pago</button>
        </div>
      </div>
    </>
  )
}
