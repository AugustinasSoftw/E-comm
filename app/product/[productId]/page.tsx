import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import { product } from "@/utils/product";
import { products } from "@/utils/products";

interface IPrams {
  productId: string;
}

interface PageProps {
  params: IPrams;
}

const Product = async ({ params }: PageProps) => {
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
