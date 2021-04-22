import Property from "./Property";

export default interface PropertyReference {
  created_at: string
  id: number
  product_id: number
  property: Property
  property_id: number
  property_value: number
  updated_at: string
}