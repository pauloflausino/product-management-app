import ProductForm from '../components/ProductForm'
import ProductCard from '../components/ProductCard'
import { useProductStore } from '../store/productStore'

export default function Home() {
  const products = useProductStore((state) => state.products)

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gerenciamento de Produtos</h1>
      <ProductForm />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
