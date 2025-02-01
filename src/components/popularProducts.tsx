import Image from "next/image"
import Link from "next/link"

export default function PopularProducts() {
  return (
    <section className="popular-section">
        <div className="container">
        <h2 className="features-heading">Our popular products</h2>
        <div className="features-main">
            <div className="feature-single big-feature">
                <Link href="/product-listing">
                <div className="image">
                <Image src="/images/product5.svg" width="100" height="100" alt="products"></Image>
                </div>
                <h3 className="feature-title">The Poplar suede sofa</h3>
                <p className="feature-description">£980</p>
                </Link>
            </div>
            <div className="feature-single">
                <Link href="/product-listing">
                <div className="image">
                <Image src="/images/product1.svg" width="100" height="100" alt="products"></Image>
                </div>
                <h3 className="feature-title">The Dandy chair</h3>
                <p className="feature-description">£250</p>
                </Link>
            </div>
            <div className="feature-single">
                <Link href="/product-listing">
                <div className="image">
                <Image src="/images/product6.svg" width="100" height="100" alt="products"></Image>
                </div>
                <h3 className="feature-title">The Dandy chair</h3>
                <p className="feature-description">£250</p>
                </Link>
            </div>
        </div>
        <span className="button"><Link href="/products">View collection</Link></span>
        </div>
    </section>
  )
}
