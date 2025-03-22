import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import { products } from "@/utils/products";

// ✅ Correct typing for Next.js App Router dynamic route
interface PageProps {
  params: {
    productId: string;
  };
}

const ProductPage = ({ params }: PageProps) => {
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
};

export default ProductPage;
