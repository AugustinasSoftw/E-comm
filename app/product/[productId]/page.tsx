import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import { product } from "@/utils/product";

interface IPrams {
  productId: string;
}

interface PageProps {
  params: IPrams;
}

const Product = ({ params }: PageProps) => {
  console.log("params:", params);

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
