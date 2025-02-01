import Trending from "@/components/trending";
import { GoTriangleDown } from "react-icons/go";


export default function Products() {
  return (
    <section className="products">
      <div className="products-bg-sec">
        <div className="container">
          <h3 className="products-title">All products</h3>
        </div>
      </div>
      <div className="categories-nav">
        <div className="container1">
          <div className="left-side">
            <div className="names">
              <span className="naming">Category <GoTriangleDown /></span>
            </div>
            <div className="names">
              <span className="naming">Product type <GoTriangleDown /></span>
            </div>
            <div className="names">
              <span className="naming">Price <GoTriangleDown /></span>
            </div>
            <div className="names">
              <span className="naming">Brand <GoTriangleDown /></span>
            </div>
          </div>
          <div className="right-side">
            <p>Sorting by:</p>
          <div className="names">
              <span className="naming">Date added <GoTriangleDown /></span>
            </div>
          </div>
        </div>
      </div>
      <div className="responsive-category">
      <div className="right-side">
      <div className="names">
              <span className="naming">Filters <GoTriangleDown /></span>
            </div>
      <div className="names">
              <span className="naming">Sorting <GoTriangleDown /></span>
            </div>
      </div>
      </div>
      <div className="main-products">
      <div className="products-one">
      <Trending image1="/images/product1.svg" image2="/images/product2.svg" image3="/images/product3.svg"  image4="/images/product4.svg"  />
      </div>
      <div className="products-two">
      <Trending image1="/images/product7.svg" image2="/images/product8.svg" image3="/images/product9.svg"  image4="/images/product10.svg"  />
      </div>
      <div className="products-three">
      <Trending image1="/images/product1.svg" image2="/images/product2.svg" image3="/images/product3.svg"  image4="/images/product4.svg"  />
      </div>
      </div>
    </section>
  )
}