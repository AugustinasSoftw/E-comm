import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import { products } from "@/utils/products";

interface IParams {
  productId: string;
}

interface ProductPageProps {
  params: IParams;
}

// Notice the async keyword here:
export default async function ProductPage({ params }: ProductPageProps) {
  // You can optionally await async operations here in future (database calls, API fetches)
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
