import ProductMethod from "./ProductMethod";

export default interface ProductOperation {
  httpMethod: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  productMethod: ProductMethod
  apiLink: string
}