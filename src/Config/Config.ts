interface ConfigInterface {
  backConnectData: {
    backendURL: string
  },
  messageTimout: number
}

export const Config: ConfigInterface = {
  backConnectData: {
    backendURL: 'http://laravel:8000',
  },
  messageTimout: 3000,
}