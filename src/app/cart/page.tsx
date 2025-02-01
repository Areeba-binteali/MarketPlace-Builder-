import Image from "next/image"

export default function Cart() {
  return (
    <section className="cart-section">
      <div className="container">
      <div className="trendingProducts">
      <h2 className="features-heading">Your Shopping Cart</h2>
      </div>
        <div className="main-table">
          <div className="sub-table">
            <div className="column-one">
              <h4 className="table-head">Product</h4>
            </div>
            <div className="column-two">
              <h4 className="table-head">Quantity</h4>
            </div>
            <div className="column-three">
              <h4 className="table-head">Total</h4>
            </div>
          </div>
          <div className="sub-table middle">
            <div className="column-one">
              <div className="cart-product">
                <div className="cart-image">
                  <Image src="/images/cart1.svg" width="100" height="100" alt="cart-img" />
                </div>
                <div className="cart-content">
                  <h3 className="cart-title">Graystone vase</h3>
                  <p className="cart-description">A timeless ceramic vase with a tri color grey glaze.</p>
                  <span className="price">£85</span>
                </div>
              </div>
            </div>
            <div className="column-two">
              <span className="quantity">1</span>
            </div>
            <div className="column-three">
              <span className="price">£85</span>
            </div>
          </div>
          <div className="sub-table">
            <div className="column-one">
              <div className="cart-product">
                <div className="cart-image">
                  <Image src="/images/cart2.svg" width="100" height="100" alt="cart-img" />
                </div>
                <div className="cart-content">
                  <h3 className="cart-title">Basic white vase</h3>
                  <p className="cart-description">Beautiful and simple this is
                  one for the classics</p>
                  <span className="price">£125</span>
                </div>
              </div>
            </div>
            <div className="column-two">
              <span className="quantity">1</span>
            </div>
            <div className="column-three">
              <span className="price">£125</span>
            </div>
          </div>
        </div>
        <div className="checkout">
          <h3 className="subtotal">Subtotal &nbsp;<span> &nbsp;£210</span></h3>
          <p>Taxes and shipping are calculated at checkout</p>
          <span className="button">Go to Checkout</span>
        </div>
      </div>
    </section>
  )
}
