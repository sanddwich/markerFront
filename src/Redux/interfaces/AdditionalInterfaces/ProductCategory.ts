import Image from './Image'

export default interface ProductCategory {
  created_at: string
  description: string
  hidden: boolean
  id: number
  images: Image[]
  name: string
  parent_id: number
  updated_at: string
}