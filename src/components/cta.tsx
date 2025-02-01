import Image from "next/image"
import Link from "next/link"

export default function Cta() {
  return (
    <section className="cta-section">
            <div className="hero-bg">
              <div className="content">
                <div className="top-content">
                    <h1>From a studio in London to a global brand with over 400 outlets</h1>
                    <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.<br></br><br></br>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                </div>
                <div className="bottom-content">
                    <span className="button"><Link href="/contact">Get in Touch</Link></span>
                </div>
              </div>
              <div className="image">
                <Image src="/images/hero2.svg" width={100} height={100} alt="hero"></Image>
              </div>
            </div>
    </section>
  )
}
