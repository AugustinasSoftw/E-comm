import { products } from "@/utils/products";
import ProductDetails from "./ProductDetails";
import Container from "@/app/components/Container";

interface PageProps {
  params: {
    productId: string;
  };
}

const Product = ({ params }: PageProps) => {
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

export default Product;
