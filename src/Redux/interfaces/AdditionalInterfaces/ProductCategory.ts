import Image from './Image'

export default interface ProductCategory {
  created_at: string
  description: string
  hidden: boolean
  id: number
  image: Image
  image_id: number
  name: string
  parent_id: number
  updated_at: string
}