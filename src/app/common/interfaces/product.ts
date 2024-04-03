export interface Product {
  id: number
  name: string
  category: string
  price: number
  discount: number
  image: string
  totalStock: number
  favorite: boolean
  sizes: Size[]
}

export interface Size {
  sizeName: string
  sizeStock: number
}
