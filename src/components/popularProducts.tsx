"use client"
import { getProductsByCategory } from "@/sanity/sanity.query";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

export default function PopularProducts() {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            const fetchedProducts = await getProductsByCategory("Plant Pots");
            setProducts(fetchedProducts.slice(0, 3));
        }

        fetchData();
    }, []);

    return (
        <section className="popular-section">
            <div className="container">
                <h2 className="features-heading">Our popular products</h2>
                <div className="features-main">
                    {products && products.length > 0 ? (
                        products.map((product: any) => (
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
                <span className="button"><Link href="/products">View collection</Link></span>
            </div>
        </section>
    )
}
