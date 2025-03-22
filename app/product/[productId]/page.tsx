import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import { products } from "@/utils/products";

// @ts-expect-error - Temporary fix for Next.js 15 type inference issue
export default async function ProductPage({ params }) {
  const product = products.find((item) => item.id === params.productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
}
