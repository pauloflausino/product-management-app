import { useState } from 'react'
import { useProductStore } from '../store/productStore'

export default function ProductForm() {
  const addProduct = useProductStore((state) => state.addProduct)
  const [form, setForm] = useState({ name: '', price: 0, description: '', image: '', category: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addProduct({ ...form, id: Date.now() })
    setForm({ name: '', price: 0, description: '', image: '', category: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input type="text" placeholder="Nome" className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <input type="text" placeholder="Categoria" className="input" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required />
      <input type="number" placeholder="Preço" className="input" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} required />
      <input type="text" placeholder="Descrição" className="input" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
      <input type="text" placeholder="URL da Imagem" className="input" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Cadastrar Produto</button>
    </form>
  )
}
