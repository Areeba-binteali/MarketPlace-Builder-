import { sanityClient } from "./sanity.client";
import { groq } from "next-sanity";

export async function getAllProducts() {
  return sanityClient.fetch(
    groq`*[_type == "product"]{
      _id,
      category,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      price,
      quantity,
      tags,
      description,
      features,
      dimensions
    }`
  );
}

export async function getProductBySlug(slug: string) {
  return sanityClient.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      category,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      price,
      quantity,
      tags,
      description,
      features,
      dimensions
    }`,
    { slug }
  );
}

export async function getProductsByCategory(category: string) {
  return sanityClient.fetch(
    groq`*[_type == "product" && category == $category]{
      _id,
      category,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      price,
      quantity,
      tags,
      description,
      features,
      dimensions
    }`,
    { category }
  );
}


export async function getProductById(slug: string) {
  console.log("Fetching product with slug:", slug); // 👈 Ye log add karo
  const query = `*[_type == "product" && slug.current == $slug][0]{
     "image": image.asset->url,
     name,
     price,
     description,
     features,
     dimensions
  }`;
  const params = { slug };

  try {
    const product = await sanityClient.fetch(query, params);
    console.log("Fetched product:", product); // 👈 Ye bhi log add karo
    return product;
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null;
  }
}
