import Image from "next/image"
import Link from "next/link"

export default function Trending({titleName,image1,image2,image3,image4}:any) {
  return (
   <section className="trending-section">
    <div className="container">
        <h2 className="features-heading">{titleName}</h2>
        <div className="features-main">
            <div className="feature-single">
                <Link href="/product-listing">
                <div className="image">
                <Image src={image1} width="100" height="100" alt="products"></Image>
                </div>
                <h3 className="feature-title">The Dandy chair</h3>
                <p className="feature-description">£250</p>
                </Link>
            </div>
            <div className="feature-single">
                <Link href="/product-listing">
                <div className="image">
                <Image src={image2} width="100" height="100" alt="products"></Image>
                </div>
                <h3 className="feature-title">Rustic Vase Set</h3>
                <p className="feature-description">£155</p>
                </Link>
            </div>
            <div className="feature-single">
                <Link href="/product-listing">
                <div className="image">
                <Image src={image3} width="100" height="100" alt="products"></Image>
                </div>
                <h3 className="feature-title">The Silky Vase</h3>
                <p className="feature-description">£125</p>
                </Link>
            </div>
            <div className="feature-single">
                <Link href="/product-listing">
                <div className="image">
                <Image src={image4} width="100" height="100" alt="products"></Image>
                </div>
                <h3 className="feature-title">The Lucy Lamp</h3>
                <p className="feature-description">£399</p>
                </Link>
            </div>
        </div>
        <span className="button"><Link href="/products">View collection</Link></span>
    </div>
   </section>
  )
}
