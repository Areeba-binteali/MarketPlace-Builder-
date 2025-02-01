import Cta from "@/components/cta";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Newsletter from "@/components/newsletter";
import PopularProducts from "@/components/popularProducts";
import Trending from "@/components/trending";


export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Trending titleName="New ceramics" image1="/images/product1.svg" image2="/images/product2.svg" image3="/images/product3.svg"  image4="/images/product4.svg"  />
      <PopularProducts />
      <Newsletter />
      <Cta />
    </div>
  );
}
