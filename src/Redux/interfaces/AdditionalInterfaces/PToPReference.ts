import Product from "./Product";

export default interface PToPReference {
  count: number
  created_at: string
  id: number
  product: Product
  product_id: number
  product_item: Product
  self_id: number
  updated_at: string
}