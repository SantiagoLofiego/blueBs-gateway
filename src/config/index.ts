import dotenv from 'dotenv'
dotenv.config()

const config = {
  server: {
    port: process.env.SERVER_PORT
  },
  data:{
    user:{
      Mysql:{
        host: process.env.USER_DB_HOST,
        username: process.env.USER_DB_USERNAME,
        password: process.env.USER_DB_PASSWORD,
        database: process.env.USER_DB_DATABASE
      }
    },
    microService:{
      file:{
        filePath:"./registry.json"
      }
    }
  },
  jwt:{
    JWT_SECRET:'secure-long-secret-code',
    JWT_EXPIRES_IN:'1d'

  }
}

export default config;
