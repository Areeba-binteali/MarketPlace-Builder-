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
      <Trending titleName="New ceramics" />
      <PopularProducts />
      <Newsletter />
      <Cta />
    </div>
  );
}
