import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="hero-section">
        <div className="container">
            <div className="hero-bg">
              <div className="content">
                <div className="top-content">
                    <h1>The furniture brand for the future, with timeless designs</h1>
                    <span className="button"><Link href="/products">View collection</Link></span>
                </div>
                <div className="bottom-content">
                    <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</p>
                    <span className="button mobile-btn"><Link href="/products">View collection</Link></span>
                </div>
              </div>
              <div className="image">
                <Image src="/images/hero-img.svg" width={100} height={100} alt="hero"></Image>
              </div>
            </div>
        </div>
    </section>
  )
}
