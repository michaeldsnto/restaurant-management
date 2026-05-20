export type MenuCategory = {
  id: string
  name: string
}

export type MenuProduct = {
  id: string
  name: string
  category: string
  price: number
  prepTime: string
  badge?: string
}
