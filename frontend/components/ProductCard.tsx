import { Product } from '../store/productStore'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-2" />
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p className="text-sm">{product.description}</p>
      <p className="text-sm text-gray-600">Categoria: {product.category}</p>
      <p className="text-blue-600 font-semibold">R$ {product.price.toFixed(2)}</p>
    </div>
  )
}
