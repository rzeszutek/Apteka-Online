const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://admin:mongodb@meanproject.be50c.mongodb.net/meanproject?retryWrites=true&w=majority',
  JwtSecret: process.env.JWT_SECRET || 'secret'
}
export default config;
