export const options = {
  options: {
    openapi: '3.0.1',
    swagger: '2.0',
    info: {
      version: '1.0.0',
      title: 'Apteka Online API',
      description: 'API for Apteka Online',
      termsOfService: '',
      servers: ["http://localhost:3000"]
    },
    apis: ['index.js']
  }
}
