import Image from "./Image";

export default interface Property {
  created_at: string
  description: string
  id: number
  image: Image
  image_id: number
  name: string
  product_part: boolean
  unit: string
  updated_at: string
}