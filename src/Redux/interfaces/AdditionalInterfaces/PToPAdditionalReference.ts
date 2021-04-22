import Product from "./Product";

export default interface PToPAdditionalReference {
  count: number
  created_at: string
  id: number
  max_count_free: number
  product: Product
  product_id: number
  product_item: Product
  self_id: number
  updated_at: string
}