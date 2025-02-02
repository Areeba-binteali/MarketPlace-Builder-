"use client"
import { getAllProducts } from "@/sanity/sanity.query";
import { useEffect, useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [category, setCategory] = useState<string | null>(null);
  const [productType, setProductType] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const [brand, setBrand] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const fetchedProducts = await getAllProducts();
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);  // Initially, show all products
    }
    
    fetchData();
  }, []);

 
  const filterProducts = () => {
    let updatedProducts = [...products];

    if (category) {
      updatedProducts = updatedProducts.filter(product => product.category === category);
    }
    if (productType) {
      updatedProducts = updatedProducts.filter(product => product.type === productType);
    }
    if (priceRange) {
      updatedProducts = updatedProducts.filter(product => {
        const price = parseFloat(product.price);
        if (priceRange === 'low') {
          return price < 50;
        } else if (priceRange === 'medium') {
          return price >= 50 && price <= 150;
        } else if (priceRange === 'high') {
          return price > 150;
        }
        return true;
      });
    }
    if (brand) {
      updatedProducts = updatedProducts.filter(product => product.brand === brand);
    }

    setFilteredProducts(updatedProducts);
  };

  useEffect(() => {
    filterProducts();
  }, [category, productType, priceRange, brand]);

  return (
    <section className="products">
      <div className="products-bg-sec">
        <div className="container">
          <h3 className="products-title">All products</h3>
        </div>
      </div>
      <div className="categories-nav">
        <div className="container">
          <div className="left-side">
            <div className="names">
              <select className="naming" onChange={(e) => setCategory(e.target.value)} value={category || ''}>
                <option value="">Category</option>
                <option value="Tableware">Tableware</option>
                <option value="Chairs">Chairs</option>
                <option value="Plant Pots">Plant Pots</option>
                <option value="Ceramics">Ceramics</option>
                <option value="Tables">Tables</option>
                <option value="Cutlery">Cutlery</option>
                <option value="Chairs">Crockery</option>
              </select>
            </div>
            <div className="names">
              <select className="naming" onChange={(e) => setProductType(e.target.value)} value={productType || ''}>
                <option value="">Type</option>
                <option value="Type B">Type A</option>
                <option value="Type B">Type B</option>
              </select>
            </div>
            <div className="names">
              <select className="naming" onChange={(e) => setPriceRange(e.target.value)} value={priceRange || ''}>
                <option value="">Price</option>
                <option value="low">Below £50</option>
                <option value="medium">£50 - £150</option>
                <option value="high">Above £150</option>
              </select>
            </div>
            <div className="names">
              <select className="naming" onChange={(e) => setBrand(e.target.value)} value={brand || ''}>
                <option value="">Brand</option>
                <option value="brandA">Brand A</option>
                <option value="brandB">Brand B</option>
              </select>
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
          <section className="trending-section">
            <div className="container">
              <div className="features-main">
                {filteredProducts && filteredProducts.length > 0 ? (
                  filteredProducts.map((product: any) => (
                    <div key={product._id} className="feature-single">
                        <Link href={`/products/${product.slug}`}>
                        <div className="image">
                          <Image
                            src={product.image}
                            width="100"
                            height="100"
                            alt={product.name}
                          />
                        </div>
                        <h3 className="feature-title">{product.name}</h3>
                        <p className="feature-description">£{product.price}</p>
                      </Link>
                    </div>
                  ))
                ) : (
                  <p>No products available</p>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
