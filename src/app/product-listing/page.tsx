import Features from "@/components/features"
import Newsletter from "@/components/newsletter"
import Trending from "@/components/trending"
import Image from "next/image"

export default function Listings() {
  return (
    <section className="cta-section listing-section">
            <div className="hero-bg">
              <div className="image">
                <Image src="/images/listing.svg" width={100} height={100} alt="hero"></Image>
              </div>
              <div className="content">
                <div className="inn">
                <div className="price-title">
                <h1>The Dandy Chair</h1>
                <span className="price">£250</span>
                </div>
                <div className="description-detail">
                      <h4 className="description not-mobile">Description</h4>
                      <h4 className="description mobile">Product Description</h4>
                    <p>A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                    <ul>
                      <li>Premium material</li>
                      <li>Handmade upholstery</li>
                      <li>Quality timeless classic</li>
                    </ul>
                </div>
                <div className="dimension">
                <h4 className="description">Dimensions</h4>
                <div className="dimension-details">
                  <div className="dimension-single">
                    <span className="name">Height</span>
                    <span className="value">110cm</span>
                  </div>
                  <div className="dimension-single">
                    <span className="name">Width</span>
                    <span className="value">75cm</span>
                  </div>
                  <div className="dimension-single">
                    <span className="name">Depth</span>
                    <span className="value">50cm</span>
                  </div>
                </div>
                </div>
                <div className="amount">
                <div className="quantity-div">
                <h4 className="description not-mobile">Amount:</h4>
                <h4 className="description mobile">Quantity:</h4>
                <p className="quantity">- <span> 1 </span> +</p>
                </div>
                <div className="addToCart">
                  <span className="button">Add To Cart</span>
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className="trendingProducts">
            <Trending titleName="You might also like" image1="/images/product1.svg" image2="/images/product2.svg" image3="/images/product3.svg"  image4="/images/product4.svg"  />
            </div>
            <div className="featuresPoints">
              <Features />
            </div>
            <div className="newsLetter-inn">
              <Newsletter />
            </div>
    </section>
  )
}
