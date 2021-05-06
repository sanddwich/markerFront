import ProductOperation from "../Redux/interfaces/AdditionalInterfaces/ProductOperation";
import UploadFiles from "../Redux/interfaces/AdditionalInterfaces/UploadFiles";

interface ConfigInterface {
  backConnectData: {
    backendURL: string
  }
  upload: UploadFiles
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
  upload: {
    images: {
      accept: '.jpg, .jpeg, .png',
      maxSize: 1024000,
    },
    pdf: {
      accept: '.pdf',
      maxSize: 1024000,
    },
    archives: {
      accept: '.rar, .7zip',
      maxSize: 1024000,
    },
  }
}