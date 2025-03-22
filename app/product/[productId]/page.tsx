import { Metadata } from "next";
import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import { products } from "@/utils/products";

// Correct dynamic route typing from Next.js App Router
interface Props {
  params: {
    productId: string;
  };
}

const ProductPage = ({ params }: Props) => {
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
