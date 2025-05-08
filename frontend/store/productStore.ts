import { create } from 'zustand'

export interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
  category: string
}

type State = {
  products: Product[]
  addProduct: (product: Product) => void
  setProducts: (products: Product[]) => void
}

export const useProductStore = create<State>((set) => ({
  products: [],
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  setProducts: (products) => set({ products }),
}))
