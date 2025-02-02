import { getProductById } from "@/sanity/sanity.query";
import Image from "next/image";
import Trending from "@/components/trending";
import Newsletter from "@/components/newsletter";
import Features from "@/components/features";
import { useState } from "react";
import Quantity from "@/components/quantity";

export default async function ProductPage({ params }: { params: { slug: string } }) {
  console.log("Slug received:", params.slug);
  if (!params.slug) {
    return <div>Invalid product URL</div>;
  }

  const product = await getProductById(params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="cta-section listing-section">
      <div className="hero-bg">
        <div className="image">
          <Image src={product.image} alt={product.name} width={500} height={500} />
        </div>
        <div className="content">
          <div className="inn">
            <div className="price-title">
              <h1>{product.name}</h1>
              <span className="price">£{product.price}</span>
            </div>

            <div className="description-detail">
              <h4 className="description not-mobile">Description</h4>
              <h4 className="description mobile">Product Description</h4>
              <p>{product.description}</p>

              {product.features && product.features.length > 0 && (
                <ul>
                  {product.features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>

            {product.dimensions && (
              <div className="dimension">
                <h4 className="description">Dimensions</h4>
                <div className="dimension-details">
                  <div className="dimension-single">
                    <span className="name">Height</span>
                    <span className="value">{product.dimensions.height}</span>
                  </div>
                  <div className="dimension-single">
                    <span className="name">Width</span>
                    <span className="value">{product.dimensions.width}</span>
                  </div>
                  <div className="dimension-single">
                    <span className="name">Depth</span>
                    <span className="value">{product.dimensions.depth}</span>
                  </div>
                </div>
              </div>
            )}
          <div className="amount">
                          <div className="quantity-div">
                          <h4 className="description not-mobile">Amount:</h4>
                          <h4 className="description mobile">Quantity:</h4>
                          <Quantity />
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
  );
}
