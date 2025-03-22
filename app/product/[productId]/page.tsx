import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import { products } from "@/utils/products";

interface IParams {
  productId: string;
}

interface ProductPageProps {
  params: IParams;
}

interface PageProps {
  params: IParams;
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Match Next.js required PageProps interface exactly:
export default async function ProductPage({ params }: PageProps) {
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
