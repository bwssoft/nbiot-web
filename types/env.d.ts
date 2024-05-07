declare namespace NodeJS {
  interface ProcessEnv {
    MONGODB_URI: string
    AUTH_SECRET: string
    NEXT_PUBLIC_MAPBOX_API_KEY: string
  }
}
