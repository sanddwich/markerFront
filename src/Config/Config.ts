interface ConfigInterface {
  backConnectData: {
    backendURL: string
  }
}

export const Config: ConfigInterface = {
  backConnectData: {
    backendURL: 'http://laravel:8000',
  }
}