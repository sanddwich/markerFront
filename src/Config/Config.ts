import ProductOperation from "../Redux/interfaces/AdditionalInterfaces/ProductOperation";

interface ConfigInterface {
  backConnectData: {
    backendURL: string
  },
  productOperations: ProductOperation[]
  messageTimout: number
}

export const Config: ConfigInterface = {
  backConnectData: {
    backendURL: 'http://laravel:8000',
  },
  productOperations: [
    {httpMethod: 'POST', productMethod: 'CHANGE_PRODUCT', apiLink: '/api/admin/product/create-update'},
    // {httpMethod: 'POST', productMethod: 'ADD_PRODUCT', apiLink: '/api/admin/product/changePrice'},
  ],
  messageTimout: 5000,
}