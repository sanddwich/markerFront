import Image from './Image'
import ProductCategory from './ProductCategory';
import PropertyReference from './PropertyReference';
import PToPAdditionalReference from './PToPAdditionalReference';
import PToPReference from './PToPReference';

export default interface Product {
  category_id: number
  created_at: string
  description: string
  hidden: boolean
  id: number
  images: Image[]
  name: string
  price: number
  p_to_p_referense: PToPReference[]
  p_to_p_additional_reference: PToPAdditionalReference[]
  product_category: ProductCategory
  property_reference: PropertyReference[]
}